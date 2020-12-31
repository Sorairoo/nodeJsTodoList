const express = require('express');
const app = express();
const port = process.env.PORT || 8000; 
const ehb = require('express-handlebars');
const methodOverride = require('method-override');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('.hbs', ehb({extname:'.hbs'}));
app.set('view engine','.hbs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  console.log('header')
  next();
});
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
  }
}));

const todosRoutes  = require('./routes/api/todos');
const listsRoutes  = require('./routes/api/lists');
app.use('/api/todos', todosRoutes);
app.use('/api/lists',listsRoutes );
app.use(['/lists','/'], require('./routes/lists'));


app.listen(port, ()=> console.log(`listening on port ${port}`));