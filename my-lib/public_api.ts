export * from './tabs/index';
export * from './menu/index';
export * from './flex/index';
export * from './list/index';
export * from './nav-bar/index';
export * from './notice-bar/index';
export * from './icon/index';
export * from './grid/index';
export * from './list-view/index';
export * from './platform/index';
export * from './core/index';
export * from './radio/index';

export * from './input-item/index';


export * from './typings';

import { GridModule } from './grid';
import { AntdPlatformModule } from './platform';
import { AntdCoreModule } from './core';
import { InputItemModule } from './input-item';
import { RadioModule } from './radio';


import { ListViewModule } from './list-view';

const AntdModules = [
    GridModule,
    ListViewModule,
    AntdPlatformModule,
    AntdCoreModule,
    InputItemModule,
    RadioModule
];
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        ...AntdModules
    ],
    exports: [
        ...AntdModules
    ]
})
export class AntdModule{}

