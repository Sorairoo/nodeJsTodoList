const express = require('express');
const router=express.Router();
const todosController=require('../controllers/todosController');
//middleware for all routes

const middleware=(req,res,next)=>{
    console.log('im the all roites middleware');
    next();
};

router.get('/',(req,res)=>{
    res.json(todosController.getTodos());
});

router.post('/',[middleware],(req,res)=>{
    res.json(todosController.addTodo(req.body));
});

router.get('/:id([0-9]+)',[middleware],(req,res)=>{
    res.json(todosController.getTodoById(req.params.id));
});

router.delete('/:id([0-9]+)',[middleware],(req,res)=>{
    const ele=todosController.deleteTodo(req.params.id);
    res.status(ele ? 200 : 404 ).json(ele ? ele : null);
});
 


module.exports=router;