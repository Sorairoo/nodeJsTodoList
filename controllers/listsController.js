const data = require('../data');
const List= require('../models').List;
async function getLists() {
    
    return await List.findAll({
    });
}
async function getListById(id) {
    //find by primary key
    return await List.findByPk(id);
}
async function deleteList( id) {
    return await List.destroy({
        where: {
        id: id
        }
    });
}
async function addList(name){
    
    return await List.create({
        name:name,
        userId: 1
    });
}
async function updateList(id, name){
    return await List.update({ 
        name: name 
    }, {
        where: {
          id: id
        }
      });

}
module.exports = {
    getLists,
    getListById,
    deleteList,
    addList,
    updateList
}
