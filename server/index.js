require('dotenv').config();
const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller.js');

const app=express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(db=>{
        app.set('db',db)
        console.log('db connected')
    })
    .catch(err=>console.log(err))


app.get('/api/houses',ctrl.getHouses);


const port = process.env.PORT;
app.listen(port,()=>{console.log(`Hard to port ${port} Captain!`)})