class Todo {
    id: string;
    text: string;
    // completed: boolean;
    //, completed: boolean
    constructor(todoText:string){
        this.id = new Date().toISOString();
        this.text = todoText;
        // this.completed = completed;
    }
}

export default Todo