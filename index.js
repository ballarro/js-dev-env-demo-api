var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Accenture.SecOps')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Kellyn","lastName":"Beck","email":"kellyn.beck@accenture.com"},
    {"id": 2,"firstName":"Carl","lastName":"Dukatz","email":"carl.dukatz@accenture.com"},
    {"id": 3,"firstName":"Stephen","lastName":"Harper","email":"stephen.harper@accenture.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});