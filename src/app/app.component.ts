import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReactComponent } from 'ng-react-component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ReactComponent<any, any> implements OnInit {
  form: FormGroup;
  constructor(
    differs: KeyValueDiffers,
    fb: FormBuilder
  ) {
    super(differs);
  }

  ngOnInit() {
    this.setProps({
      text: {
        type: 'text',
        placeholder: '请输入字符串',
        title: '字符串',
        editable: true,
        disabled: false
      },
      number: {
        type: 'number',
        placeholder: '请输入数字',
        title: '数字',
        editable: true,
        disabled: false
      },
      date: {
        type: 'date',
        placeholder: 'date',
        title: 'date',
        editable: true,
        disabled: false
      },
      month: {
        type: 'month',
        placeholder: 'month',
        title: 'month',
        editable: true,
        disabled: false
      },
      time: {
        type: 'time',
        placeholder: 'time',
        title: 'time',
        editable: true,
        disabled: false
      },
      week: {
        type: 'week',
        placeholder: 'week',
        title: 'week',
        editable: true,
        disabled: false
      },
      datetime: {
        type: 'datetime',
        placeholder: 'datetime',
        title: 'datetime',
        editable: true,
        disabled: false
      },
      'datetime-local': {
        type: 'datetime-local',
        placeholder: 'datetime-local',
        title: 'datetime-local',
        editable: true,
        disabled: false
      },
      password: {
        type: 'password',
        placeholder: '请输入密码',
        title: '密码',
        editable: true,
        disabled: false
      },
      search: {
        type: 'search',
        placeholder: '请输入关键字',
        title: '搜索',
        editable: true,
        disabled: false
      },
      range: {
        type: 'range',
        placeholder: '请输入范围',
        title: '范围',
        editable: true,
        disabled: false
      },
      checkbox: {
        type: 'checkbox',
        placeholder: '多选',
        title: '多选',
        editable: true,
        disabled: false
      },
      radio: {
        type: 'radio',
        placeholder: '单选',
        title: '单选',
        editable: true,
        disabled: false
      },
      image: {
        type: 'image',
        placeholder: '图片',
        title: '图片',
        editable: true,
        disabled: false
      },
      images: {
        type: 'images',
        placeholder: '多个图片',
        title: '多个图片',
        editable: true,
        disabled: false
      },
      color: {
        type: 'color',
        placeholder: '颜色',
        title: '颜色',
        editable: true,
        disabled: false
      },
      email: {
        type: 'email',
        placeholder: '邮箱',
        title: '邮箱',
        editable: true,
        disabled: false
      },
      tel: {
        type: 'tel',
        placeholder: '电话',
        title: '电话',
        editable: true,
        disabled: false
      },
      url: {
        type: 'url',
        placeholder: '网址',
        title: '网址',
        editable: true,
        disabled: false
      },
      file: {
        type: 'file',
        placeholder: '文件',
        title: '文件',
        editable: true,
        disabled: false
      },
      button: {
        type: 'button',
        placeholder: 'button',
        title: 'button',
        editable: true,
        disabled: false
      },
      reset: {
        type: 'reset',
        placeholder: 'reset',
        title: 'reset',
        editable: true,
        disabled: false
      },
      submit: {
        type: 'submit',
        placeholder: 'submit',
        title: 'submit',
        editable: true,
        disabled: false
      }
    });

  }

  getDefaultProps() { }

  getInitialState() { }

  onPropsChange() {
    return {

    }
  }

  onStateChange() { }

}
