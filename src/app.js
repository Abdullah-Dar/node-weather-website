const request=require('request') 
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const path = require('path')
const express = require('express')
// ...
const app = express()
const port=process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
      
         })

         app.get('/products' , (req,res)=>{
            if(!req.query.search){return res.send({error:"Must provide some query"})}
         

         console.log(req.query.search)
         res.send({products:[]})
         })


// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'This is some helpful text.'
//     })
// })

app.get('/weather', (req, res) => {
   if(!req.query.address){return res.send({error:"provide address for forcast"})}
   
geocode(req.query.address , (error , {latitude , longitude , location}={})=>{

    if(error)
{
    return res.send({error})
}
forecast(latitude ,longitude ,(error ,forecastData)=>{

    if(error){
        return res.send({error})
    }
    res.send({
forecast:forecastData , location ,
address:req.query.address

    })
})
})



})

app.listen(port, () => {
    console.log('Server is up on port ' + port )
})













