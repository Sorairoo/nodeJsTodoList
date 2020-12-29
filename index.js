const express = require('express');
const app = express();
const port = process.env.PORT || 8000; 
const ehb = require('express-handlebars');
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  console.log('header')
  next();
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('.hbs', ehb({extname:'.hbs'}));
app.set('view engine','.hbs');
app.get('/',(req,res)=>{
  res.render('index');
});
const todosRoutes  = require('./routes/todos');
const listsRoutes  = require('./routes/lists');
app.use('/todos', todosRoutes);
app.use('/lists',listsRoutes );

app.listen(port, ()=> console.log(`listening on port ${port}`));