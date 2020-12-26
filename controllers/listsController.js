const data = require('../data');

function getLists() {
    return data.lists;
}
function getListById( id) {
    return data.lists.find(List => List.id == id);
}
function deleteList( id) {
    const idx = data.lists.findIndex(List => List.id == id);
    if(idx > -1){
        const ele =  data.lists.splice(idx,1);
        return ele;
    }
    return 0;
}
function addList(name){
    const list = {name, id:data.lists.length + 1}
    data.lists.unshift(list);
    return list;
}
function updateList(id, name){
    const idx = data.lists.findIndex(List => List.id == id);
    if(idx > -1){
        data.lists[idx] = {...data.lists[idx],name};
        return data.lists[idx];
    }
    return false;

}
module.exports = {
    getLists,
    getListById,
    deleteList,
    addList,
    updateList
}
