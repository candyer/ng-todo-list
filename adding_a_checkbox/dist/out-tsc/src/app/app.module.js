"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var input_component_1 = require("./input/input.component");
var item_component_1 = require("./item/item.component");
var list_manager_component_1 = require("./list-manager/list-manager.component");
var todo_list_service_1 = require("./todo-list.service");
var todo_list_storage_service_1 = require("./todo-list-storage.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                input_component_1.InputComponent,
                item_component_1.ItemComponent,
                list_manager_component_1.ListManagerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [todo_list_service_1.TodoListService, todo_list_storage_service_1.TodoListStorageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map