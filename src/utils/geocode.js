const request=require('request')


const geocode=(address , callback)=>{
    const url=  'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWJkdWxsYWhkYXIxOTAyMjAwMCIsImEiOiJja2Fia3gzbGsxNDVkMnpsNXZ4Zndhb3Z0In0.ilSNJ1n8WxoGbAnddKpk_Q'
  
  request({url , json:true} , (error , {body})=>{
      if(error){
          callback('Unable to connect to location services' , undefined)
      }
  else if(body.features.length===0){
      callback('Unable to find location' , undefined)
  }
  
  else{
     callback(undefined , data={ 
         longitude:body.features[0].center[0],
         latitude :body.features[0].center[1],
         location:body.features[0].place_name
     }) 
  }
  })
  }

  module.exports=geocode