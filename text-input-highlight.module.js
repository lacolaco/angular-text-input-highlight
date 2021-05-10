import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputHighlightComponent } from './text-input-highlight.component';
import { TextInputHighlightContainerDirective } from './text-input-highlight-container.directive';
import { TextInputElementDirective } from './text-input-element.directive';
var TextInputHighlightModule = /** @class */ (function () {
    function TextInputHighlightModule() {
    }
    TextInputHighlightModule = __decorate([
        NgModule({
            declarations: [
                TextInputHighlightComponent,
                TextInputHighlightContainerDirective,
                TextInputElementDirective
            ],
            imports: [CommonModule],
            exports: [
                TextInputHighlightComponent,
                TextInputHighlightContainerDirective,
                TextInputElementDirective
            ]
        })
    ], TextInputHighlightModule);
    return TextInputHighlightModule;
}());
export { TextInputHighlightModule };
//# sourceMappingURL=text-input-highlight.module.js.map