"use strict";
var ToDo = (function () {
    function ToDo(title, completed) {
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.completed = completed;
    }
    return ToDo;
}());
exports.ToDo = ToDo;
//# sourceMappingURL=todo.js.map