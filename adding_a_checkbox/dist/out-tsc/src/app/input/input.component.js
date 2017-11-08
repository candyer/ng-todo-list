"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.submit = new core_1.EventEmitter();
        this.title = '';
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.changeTitle = function (newTitle) {
        this.submit.emit(newTitle);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputComponent.prototype, "submit", void 0);
    InputComponent = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "                           \n\t<input [value]=\"title\"              \n\t\t\t(keyup.enter)=\"changeTitle(inputElement.value)\"\n\t\t\t#inputElement>\n\t\t<button class=\"btn\"  (click)=\"changeTitle(inputElement.value)\">\n\t\t\tSave\n\t\t</button>\n\t",
            styleUrls: ['./input.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map