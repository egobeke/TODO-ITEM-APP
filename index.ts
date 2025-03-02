interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = { id: this.nextId++, task, completed: false, dueDate };
        this.todos.push(newTodo);
        console.log(`Task Added: "${task}" (ID: ${newTodo.id}, Due: ${newTodo.dueDate.toDateString()})`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Task Completed: "${todo.task}" (ID: ${todo.id})`);
            this.logCompletedTasks();
        } else {
            console.log(` Task with ID ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            console.log(`Task Removed: "${todo.task}" (ID: ${todo.id})`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    listTodos(): TodoItem[] {
        console.log(" All Tasks:");
        this.todos.forEach(todo => {
            console.log(
                `ID: ${todo.id}, Task: "${todo.task}", Completed: ${todo.completed}, Due: ${todo.dueDate.toDateString()}`
            );
        });
        return [...this.todos];
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            console.log(`Task Updated: "${todo.task}" → "${newTask}" (ID: ${todo.id})`);
            todo.task = newTask;
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared all completed tasks.");
    }

    logCompletedTasks(): void {
        const completedTasks = this.filterTodos(true);
        console.log("Completed Tasks:");
        if (completedTasks.length === 0) {
            console.log("No completed tasks yet.");
        } else {
            completedTasks.forEach(todo =>
                console.log(`ID: ${todo.id}, Task: "${todo.task}", Due: ${todo.dueDate.toDateString()}`)
            );
        }
    }
}

// Example usage:
const myTodos = new TodoList();

myTodos.addTodo("Get groceries at the supermarket", new Date("2025-04-15"));
myTodos.addTodo("Apply for the new job", new Date("2025-05-20"));
myTodos.addTodo("Traveling to Abuja", new Date("2025-06-18"));

myTodos.listTodos();

myTodos.completeTodo(1);

myTodos.listTodos(); // See updated list after completing task 1

console.log("\nCompleted Tasks:", myTodos.filterTodos(true));
