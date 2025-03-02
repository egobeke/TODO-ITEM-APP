var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = { id: this.nextId++, task: task, completed: false, dueDate: dueDate };
        this.todos.push(newTodo);
        console.log("Task Added: \"".concat(task, "\" (ID: ").concat(newTodo.id, ", Due: ").concat(newTodo.dueDate.toDateString(), ")"));
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
            console.log("\u2705 Task Completed: \"".concat(todo.task, "\" (ID: ").concat(todo.id, ")"));
            this.logCompletedTasks();
        }
        else {
            console.log("\u274C Task with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
            console.log("\uD83D\uDDD1\uFE0F Task Removed: \"".concat(todo.task, "\" (ID: ").concat(todo.id, ")"));
        }
        else {
            console.log("\u274C Task with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.listTodos = function () {
        console.log("\n📋 All Tasks:");
        this.todos.forEach(function (todo) {
            console.log("ID: ".concat(todo.id, ", Task: \"").concat(todo.task, "\", Completed: ").concat(todo.completed, ", Due: ").concat(todo.dueDate.toDateString()));
        });
        return __spreadArray([], this.todos, true);
    };
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            console.log("\u270F\uFE0F Task Updated: \"".concat(todo.task, "\" \u2192 \"").concat(newTask, "\" (ID: ").concat(todo.id, ")"));
            todo.task = newTask;
        }
        else {
            console.log("\u274C Task with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        console.log("🧹 Cleared all completed tasks.");
    };
    TodoList.prototype.logCompletedTasks = function () {
        var completedTasks = this.filterTodos(true);
        console.log("\n✅ Completed Tasks:");
        if (completedTasks.length === 0) {
            console.log("No completed tasks yet.");
        }
        else {
            completedTasks.forEach(function (todo) {
                return console.log("ID: ".concat(todo.id, ", Task: \"").concat(todo.task, "\", Due: ").concat(todo.dueDate.toDateString()));
            });
        }
    };
    return TodoList;
}());
// Example usage:
var myTodos = new TodoList();
myTodos.addTodo("Get groceries at the supermarket", new Date("2025-04-15"));
myTodos.addTodo("Apply for the new job", new Date("2025-05-20"));
myTodos.addTodo("Traveling to Abuja", new Date("2025-06-18"));
myTodos.listTodos();
myTodos.completeTodo(1);
myTodos.listTodos(); // See updated list after completing task 1
console.log("\nCompleted Tasks:", myTodos.filterTodos(true));
