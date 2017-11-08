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
var todo_list_service_1 = require("../todo-list.service");
var ListManagerComponent = /** @class */ (function () {
    function ListManagerComponent(todoListService) {
        this.todoListService = todoListService;
        this.todoList = [];
    }
    ListManagerComponent.prototype.addItem = function (title) {
        this.todoList = this.todoListService.addItem({ title: title });
    };
    ListManagerComponent.prototype.ngOnInit = function () {
        this.todoList = this.todoListService.getTodoList();
    };
    ListManagerComponent.prototype.removeItem = function (item) {
        this.todoList = this.todoListService.removeItem(item);
    };
    ListManagerComponent = __decorate([
        core_1.Component({
            selector: 'todo-list-manager',
            template: "\n\t<h1>\n\t{{title}}\n\t</h1>\n\n\t<todo-input (submit)=\"addItem($event)\"></todo-input>\n\t<ul>\n\t\t<li *ngFor=\"let item of todoList\">\n\t\t\t<todo-item [todoItem]=\"item\" (remove)=\"removeItem($event)\"></todo-item>\n\t\t</li>\n\t</ul>\n\t",
            styleUrls: ['./list-manager.component.css']
        }),
        __metadata("design:paramtypes", [todo_list_service_1.TodoListService])
    ], ListManagerComponent);
    return ListManagerComponent;
}());
exports.ListManagerComponent = ListManagerComponent;
//# sourceMappingURL=list-manager.component.js.map