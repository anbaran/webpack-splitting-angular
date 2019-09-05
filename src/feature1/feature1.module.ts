import { NgModule } from '@angular/core';

import { CommonUiModule } from '../common-ui/common-ui.module';
import { Feature1Component } from './feature1.component';

@NgModule({
    declarations: [
        Feature1Component
    ],

    imports: [
        CommonUiModule
    ],

    providers: [],
})
export class Feature1Module {
}
