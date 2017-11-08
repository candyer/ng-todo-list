"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var todo_list_service_1 = require("./todo-list.service");
describe('TodoListService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [todo_list_service_1.TodoListService]
        });
    });
    it('should be created', testing_1.inject([todo_list_service_1.TodoListService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=todo-list.service.spec.js.map