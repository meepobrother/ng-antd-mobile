import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioComponent } from './radio';
import { ListModule } from '../list';

@NgModule({
    imports: [
        CommonModule,
        ListModule
    ],
    exports: [
        RadioComponent
    ],
    declarations: [
        RadioComponent
    ],
    providers: [],
})
export class RadioModule { }
