interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date; 
}  

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

        addTodo (task: string, dueDate: Date): void {
            const newTodo: TodoItem = { id: this.nextId++, task, completed: false, dueDate};
            this.todos.push(newTodo);  }
        
        completeTodo(id: number): void {
            const todo = this.todos.find(todo => todo.id ===id);
            if (todo) { 
                todo.completed = true;
                console.log(`Task "${todo.task}" (ID: ${todo.id}) is now completed!`);
                this.logCompletedTasks()
            }
            }

        removeTodo(id:number): void {
            this.todos = this.todos.filter(todo => todo.id !==id);
        }   
        
        listTodos (): TodoItem[] {
            return [...this.todos];
        }

        filterTodos(completed: boolean) : TodoItem[] {
            return this.todos.filter( todo => todo.completed === completed);
        }

        updateTodo(id: number, newTask: string): void {
            const todo = this.todos.find( todo => todo.id === id);
            if (todo) { todo.task = newTask;}
        }

        clearCompleted(): void {
            this.todos = this.todos.filter( todo => !todo.completed);
        }

        logCompletedTasks(): void {
            const completedTasks = this.filterTodos(true);
            console.log("Completed Tasks:", completedTasks);
        }
        }   

// Example
const myTodos = new TodoList();
myTodos.addTodo("Get groceries at the supermarket", new Date("2025-04-15"));
myTodos.addTodo("Apply for the new job", new Date("2025-05-20"));
myTodos.addTodo("Travelling to Abuja", new Date("2025-06-18"));


myTodos.completeTodo(1);

console.log(myTodos.listTodos());
console.log("Completed Tasks:", myTodos.filterTodos(true));


              

