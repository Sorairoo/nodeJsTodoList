const List= require('../models').List;
const Todo = require('../models').Todo;
const  attributes = {
    include:[
        [List.sequelize.fn('COUNT',
            List.sequelize.col('Todos.id')),'total']
    ],

};
async function getLists() {
    
    return  List.findAll({
        attributes,
        subQuery: false,
        limit: 20,
        include:[
            {model: Todo, attributes:[]}
        ],
        group: ['List.id']
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
