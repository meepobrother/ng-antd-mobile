
import {
    ViewEncapsulation, Component,
    Input, HostBinding, OnInit,
    InjectionToken, Inject, ChangeDetectionStrategy,
    ElementRef, Renderer2, ViewChild,
    Output, EventEmitter, TemplateRef
} from '@angular/core';
import { ListItemComponent } from '../list/list-item/list-item';
import { fromEvent, merge } from 'meepo-utils';
@Component({
    selector: 'input-item',
    templateUrl: './input-item.html',
    styleUrls: ['./input-item.less', './patch.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputItemComponent extends ListItemComponent implements OnInit {
    @ViewChild('input') input: ElementRef;

    @Input() type: string;
    @Input() value: string;
    @Input() defaultValue: string;
    @Input() placeholder: string;
    @Input() editable: boolean = true;

    _disabled: boolean = false;
    @Input()
    set disabled(val: any) {
        const _disabled = this.isMeepoTrue(val);
        if (_disabled) {
            this.render.setAttribute(this.input.nativeElement, 'disabled', '');
            this.addToClass('am-input-disabled', true, false);
        } else {
            this.render.removeAttribute(this.input.nativeElement, 'disabled');
            this.addToClass('am-input-disabled', false, false);
        }
    }

    _readonly: boolean = false;
    @Input()
    set readonly(val: any) {
        this._readonly = this.isMeepoTrue(val);
        if (this._readonly) {
            this.render.setAttribute(this.input.nativeElement, 'readonly', '');
        } else {
            this.render.removeAttribute(this.input.nativeElement, 'readonly');
        }
    }

    @Input() clear: boolean = false;
    @Input() maxLength: number;
    @Input()
    set error(val: any) {
        const error = this.isMeepoTrue(val);
        if (error) {
            this.addToClass('am-input-error', true, false);
        } else {
            this.addToClass('am-input-error', false, false);
        }
    }
    @Input() extra: string | TemplateRef<any>;
    @Input() labelNumber: number = 5;
    @Input() updatePlaceholder: boolean = false;
    @Input() name: string;
    @Input() moneyKeyboardAlign: 'left' | 'right';

    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onErrorClick: EventEmitter<any> = new EventEmitter();
    @Output() onExtraClick: EventEmitter<any> = new EventEmitter();

    constructor(
        ele: ElementRef, render: Renderer2
    ) {
        super(ele, render);
        this.addToClass('am-input-item', true, false);
        this.addToClass('am-input-arrow', true, false);
    }
    initRipple() { }

    _onError(e: any) {
        this.onErrorClick.emit(e);
    }

    _onExtra(e: any) {
        this.onExtraClick.emit(e);
    }

    _onClear(e: Event) {
        e.stopPropagation();
        e.preventDefault();
        this.input.nativeElement.value = '';
    }

    setItemActive(isActive?: boolean) {
        setTimeout(() => {
            this.input.nativeElement.focus();
        });
    }

    ngOnInit() {
        this.arrow = 'empty';
        const change = merge(
            // fromEvent(this.input.nativeElement, 'change'),
            // fromEvent(this.input.nativeElement, 'keyup'),
            // fromEvent(this.input.nativeElement, 'keydown'),
            fromEvent(this.input.nativeElement, 'input'),
            fromEvent(this.input.nativeElement, 'propertychange')
        );
        const blur = fromEvent(this.input.nativeElement, 'blur');
        const focus = fromEvent(this.input.nativeElement, 'focus');
        change
            .distinctUntilChanged()
            .debounceTime(300)
            .subscribe(res => {
                this.onChange.emit(res);
            });
        blur.subscribe(res => {
            setTimeout(() => {
                if (!this._readonly) {
                    this.addToClass('am-input-focus', false, false);
                    this.onBlur.emit(res);
                }
            });
        });
        focus.subscribe(res => {
            setTimeout(() => {
                if (!this._readonly) {
                    this.addToClass('am-input-focus', true, false)
                    this.onFocus.emit(res);
                }
            });
        });
    }
}
