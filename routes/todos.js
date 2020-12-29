const express = require('express');
const router=express.Router();
const todosController=require('../controllers/todosController');
//middleware for all routes

const middleware=(req,res,next)=>{
    console.log('im the all roites middleware');
    next();
};

router.get('/',async (req,res)=>{
    const result=await todosController.getTodos();
    res.json(result);
});

router.post('/',[middleware],async (req,res)=>{
    const result=await todosController.addTodo(req.body);
    res.status(result ? 200 : 404).json(result ? result : null);
});

router.get('/:id([0-9]+)',[middleware],async (req,res)=>{
    res.json(todosController.getTodoById(req.params.id));
});

router.get('/list/:id([0-9]+)',[middleware], async (req,res)=>{
    const result= await todosController.getTodosByListId(req.params.id);
    res.json(result);
});

router.delete('/:id([0-9]+)',[middleware], async(req,res)=>{
    const ele=todosController.deleteTodo(req.params.id);
    res.status(ele ? 200 : 404 ).json(ele ? ele : null);
});

router.patch('/:id([0-9]+)',[middleware], async (req,res)=>{
    res.json(todosController.updateTodo(req.params.id,req.body));

});
 

 
module.exports=router;