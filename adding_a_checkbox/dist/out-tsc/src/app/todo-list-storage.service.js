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
var storageName = 'aah_todo_list';
var defaultList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
];
var TodoListStorageService = /** @class */ (function () {
    function TodoListStorageService() {
        this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
    }
    // get items, returns {any[]}
    TodoListStorageService.prototype.get = function () {
        return this.todoList.slice();
    };
    // add a new item, returns {any[]}
    TodoListStorageService.prototype.post = function (item) {
        this.todoList.push(item);
        return this.update();
    };
    // * Syncronize the local storage with the current list
    // * @returns {any[]}
    TodoListStorageService.prototype.update = function () {
        localStorage.setItem(storageName, JSON.stringify(this.todoList));
        return this.get();
    };
    // * find the index of an item in the aray
    // * @param item
    // * @returns {number}
    TodoListStorageService.prototype.findItemIndex = function (item) {
        return this.todoList.indexOf(item);
    };
    // * Update an existing item
    // * @param item
    // * @param changes
    // * @returns {any[]}
    TodoListStorageService.prototype.put = function (item, changes) {
        Object.assign(this.todoList[this.findItemIndex(item)], changes);
        return this.update();
    };
    // * Remove an item from the list
    // * @param item
    // * @returns {any[]}
    TodoListStorageService.prototype.destroy = function (item) {
        this.todoList.splice(this.findItemIndex(item), 1);
        return this.update();
    };
    TodoListStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoListStorageService);
    return TodoListStorageService;
}());
exports.TodoListStorageService = TodoListStorageService;
//# sourceMappingURL=todo-list-storage.service.js.map