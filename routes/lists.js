const express = require('express');
const router = express.Router();
const list = require('../controllers/listsController');
const {getTodosByListId} = require('../controllers/todosController');
const  getValues = models => models.map(rec => rec.toJSON());
router.get('/', async (req, res)=>{
    try{
        const result =  getValues(await list.getLists());
        res.render('lists', {lists : result});
    } catch (e) {
        res.status(500).send(e.toString());
    }

});
router.get('/:list_id([0-9]+)/todos', async (req, res)=>{
    try{
        const listId = req.params.list_id;
        const listObj =  await list.getListById(listId);
        console.log(list)
        const result =  getValues(await getTodosByListId(listId));
        res.render('todos', {todos : result, list_name: listObj.name});
    } catch (e) {
        res.status(500).send(e.toString());
    }

});
router.delete('/:list_id([0-9]+)', async (req,resp) =>{
    try{
     const deleted = await list.deleteList(req.params.list_id);
     resp.redirect('/');
       // resp.status(deleted ? 200 : 404).json(deleted ? deleted : null);
    } catch (e) {
       // resp.status(500).send(e.toString());
    }
});
module.exports = router;