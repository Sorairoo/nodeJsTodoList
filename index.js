const express = require('express');
const app = express();
const port = process.env.PORT || 8000; 
const todosRoutes=require('./routes/todos');
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  console.log('header')
  next();
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('home');
});
app.use('/todos',todosRoutes);
app.listen(port,()=>{
 
});