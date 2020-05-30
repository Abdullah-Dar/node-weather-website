const request=require('request')

const forecast=(latitude , longitude , callback)=>{ 
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=fb555a12cea21b346fadaf3b03193584&units=metric'
    request({url:url , json:true  }, (error , {body})=>{
        if(error){callback('Unble to connect to weather service.!' , undefined)}
        
        else if(body.message){callback("Unable to find forecast for location" , undefined )}
        
        else
        callback(undefined , /*response.body.weather[0].description +*/' It is currently '+body.main.temp +'.C'+' and speed of wind is '+body.wind.speed+' m/s.    ' + '\n' +"Status : "+body.weather[0].main+".   ~~ Description : "+body.weather[0].description+".  Pressure : "+body.main.pressure+' mbar'+".  Humidity : "+body.main.humidity+' %') 
            
    })
    }

module.exports=forecast