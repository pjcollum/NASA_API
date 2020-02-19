const hbs = require('express-handlebars');          //import handlebars and path
const path = require('path');
const express = require('express');

const app = express();

const getNasa = require('./lib/getNasa')      //import get weather function


//use path to join these two paths, tells path is static=all static files to be sent to client
app.use(express.static(path.join(__dirname, 'public')));    

app.engine('.hbs', hbs({        //handlebars view engine
    defaultLayout: 'layout',        //set layout file as layout.hbs
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async(req,res) =>{     //async function
    let data = await getNasa();  //wait for function to run and store in variable
    

    let date = data.date   //prints date
    let explain = data.explanation   //prints date
    // let city = data.name                     //prints London
    // let humidity = data.main.humidity          //prints humidity
   
    

    res.render('index', {date, explain});        //render the index.hbs page
});

app.listen(3009, () =>{
    console.log('server listening on port 3009');
});


    