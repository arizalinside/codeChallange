const express = require ('express')
const mongoose = require ('mongoose')
const app = express();
const port = 3000;
const router = require('./routes.js') 

app.use(express.json())
app.use('/', router)

mongoose.connect('mongodb://localhost/crud', {
  useNewUrlParser:true,
  useUnifiedTopology:true
}, function(err){
  if (err){
    return console.log(err)
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})