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
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.remove = new core_1.EventEmitter();
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.removeItem = function () {
        this.remove.emit(this.todoItem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "todoItem", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ItemComponent.prototype, "remove", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'todo-item',
            template: "\n\t<input type=\"checkbox\" />\n\t{{ todoItem.title }}\n\t<button (click)=\"removeItem()\">\n\t\tremove\n\t</button>\n\t",
            styleUrls: ['./item.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map