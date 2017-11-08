"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var todo_list_storage_service_1 = require("./todo-list-storage.service");
describe('TodoListStorageService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [todo_list_storage_service_1.TodoListStorageService]
        });
    });
    it('should be created', testing_1.inject([todo_list_storage_service_1.TodoListStorageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=todo-list-storage.service.spec.js.map