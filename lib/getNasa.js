const request = require('request');                // npm i  request
const { promisify } = require('util');


require('dotenv').config()     //https://www.npmjs.com/package/dotenv
const promisifiedRequest = promisify(request); //given a variable name

const getNasa = async () => {        //async function
    let data = await promisifiedRequest({
        //uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,  //app id linked to api key
        uri: `https://api.nasa.gov/planetary/apod?api_key=${process.env.APPID}`,  //app id linked to api key
        json: true                 //json format if true, raw format if false
    })


    
    return data.body
  
    
}
module.exports = getNasa;

