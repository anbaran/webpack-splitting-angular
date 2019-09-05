import { NgModule } from '@angular/core';

import { Common1Component } from './common1.component';
import { Common2Component } from './common2.component';

@NgModule({
    declarations: [
        Common1Component,
        Common2Component
    ],

    exports: [
        Common1Component,
        Common2Component
    ],

    providers: [],
})
export class CommonUiModule {
}