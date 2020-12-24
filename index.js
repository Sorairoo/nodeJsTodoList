const express = require('express');
const app = express();
const port = 8080;
const todosRoutes=require('./routes/todos');

app.use('/todos',todosRoutes);
app.listen(port,()=>{
  console.log('acapocchij');  
})