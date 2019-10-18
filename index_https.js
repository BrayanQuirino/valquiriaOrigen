/*Programa relizado por Brayan Quirino
 Servidor https que conecta con una skill de alexa 
 16 de septiembre de 2109 */

const express = require('express');
const fs=require('fs');
const path=require('path');
const https=require('https');
const bodyParser= require('body-parser');
const Speech = require ('ssml-builder');
//@param app es lo que va a ejecutar la app
const app=express();
const directoryToServe='client'
//Puerto 443 especificado super importante
const port=9999;
const httpsOptions ={
	cert:fs.readFileSync("/etc/letsencrypt/live/cndiserv.cultura.gob.mx/fullchain.pem"),
	key:fs.readFileSync("/etc/letsencrypt/live/cndiserv.cultura.gob.mx/privkey.pem")
}
//Que hace en la raiz
app.get('/',function(req,res){
	res.send('hello Wordl!');
});
//aplicaciones para convertir a json y ssml
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
//app escucha en otro puerto
app.listen(8180);
//crea otra direccion que el cliente solicita, en este caso, /alexa
app.post('9999/valquiria' , (req, res,next) => {
	console.log(req.body);
	var speech = new Speech();
	speech.say('Hola Brayan, lo lograste.')
	.pause('1s')
	.say('Maestro Alfonso. Estoy viva')
	.pause('1s')
	var outputSpeech = speech.ssml(true);
	res.json({
		"version": "1.0",
		"sessionAttributes":{
		
		
		},
		"response":{
		"outputSpeech":{
		"type":"SSML",
		"ssml": `<speak>${outputSpeech}</speak>`
		},
		"shouldEndSession": false
		}
	})
	//le damos un siguiente para que no se quede pasmada la maquina
	next();
});
//finalmente creamos el servidor httpS que usa a app
https.createServer(httpsOptions,app).listen(port,function(){
	console.log(`Serving the ${directoryToServe} directory at https:cndi:${port}`);	
})
 
