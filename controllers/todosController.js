const data=require('../data');

function getTodos(){
    return data.todos;
}

function getTodoById(id){
    return data.todos.find((todo)=>todo.id==id);
}
function addTodo(request){
    const newToDo={
        "todo":request.todo,
        "completed": request.completed,
        "list": request.list
    };
    data.todos.unshift(newToDo);
    return newToDo;
}

function deleteTodo(id){
    const IndexToDelete=data.todos.findIndex((todo)=>todo.id==id);
    if(IndexToDelete>-1){
        const element=data.todos.splice(IndexToDelete,1);
        return element;
    }
    return 0;
}

function updateTodo(){

}

module.exports={
    getTodoById,
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}