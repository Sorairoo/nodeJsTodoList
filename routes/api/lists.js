const express = require('express');
const router = express.Router();
const { updateList, addList,deleteList, getListById, getLists} = require('../../controllers/listsController');


router.get('/', async (req, res)=>{
    result=await getLists();
    res.json(result);
});
router.get('/:id([0-9]+)', async (req, res)=>{
    const result = await getListById(req.params.id);
    res.status(result? 200: 404).json(result? result: null);
});

router.delete('/:id([0-9]+)', async (req, res)=>{
    const result = await deleteList(req.params.id)
    res.json(result);
});

router.post('/', async (req, res)=>{
    const result = await addList(req.body.name);
    res.json(result);
});
router.patch('/:id([0-9]+)', async (req, res)=>{
    const result = await updateList(req.params.id, req.body.name);
    res.status(result ? 200: 404).json(result ? result : ' Record not found');
});
module.exports = router;
