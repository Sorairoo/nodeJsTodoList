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
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


const todosRoutes  = require('./routes/api/todos');
const listsRoutes  = require('./routes/api/lists');
app.use('/api/todos', todosRoutes);
app.use('/api/lists',listsRoutes );
app.use('/lists', require('./routes/lists'));
app.get('/',(req,res) =>{
    res.render('index');
});

app.listen(port, ()=> console.log(`listening on port ${port}`));