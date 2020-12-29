const data=require('../data');
const Todo = require('../models').Todo;

async function getTodos(){
    return await Todo.findAll({});
}

function getTodoById(id){
    return data.todos.find((todo)=>todo.id==id);
}

async function getTodosByListId(id){
    return  Todo.findAll({
        attributes: ['id','name','listId','createdAt'],
        limit: 20,
        where:{listId: id}
    });
}

async function addTodo(request){

    if(!request.todo || !request.completed || !request.list)
        return 0;
    
    return await Todo.create({
        name: request.todo,
        completed: request.completed,
        listId: request.list
    });
}

function deleteTodo(id){
    const IndexToDelete=data.todos.findIndex((todo)=>todo.id==id);
    if(IndexToDelete>-1){
        const element=data.todos.splice(IndexToDelete,1);
        return element;
    }
    return 0;
}

function updateTodo(id,newTodo){
    const idx = data.todos.findIndex(todo => todo.id == id);

    if(idx !== -1){

        data.todos[idx] ={...data.todos[idx], ...newTodo};
        return  data.todos[idx];
    }
    return false;
}

module.exports={
    getTodoById,
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    getTodosByListId
}