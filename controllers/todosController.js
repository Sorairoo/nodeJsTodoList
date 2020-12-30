const data=require('../data');
const Todo = require('../models').Todo;

async function getTodos(){
    return await Todo.findAll({});
}

async function getTodoById(id){
    return await Todo.findByPk(id);
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

async function deleteTodo(id){
    return await Todo.destroy({
        where: {
        id: id
        }
    });
}

async function updateTodo(id,newTodo){
    return await Todo.update({ 
        name: newTodo.name,
        completed:  newTodo.completed,
        listId:  newTodo.listId

    }, {
        where: {
          id: id
        }
      });
}

module.exports={
    getTodoById,
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    getTodosByListId
}