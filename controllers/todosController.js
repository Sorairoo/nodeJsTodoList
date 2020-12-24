const data=require('../data');

function getTodos(){
    return data.todos;
}

function getTodoById(id){
    return data.todos.find((todo)=>todo.id==id);
}
function addTodos(){

}

function deleteTodos(id){

}

module.exports={
    getTodoById,
    getTodos,
    addTodos,
    deleteTodos
}