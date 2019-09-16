const express = require('express');
const https= require('https');
const fs= require('fs');
const path = require ('path');
const bodyParser= require('body-parser');
const Speech = require ('ssml-builder');
conts httpsOptions = {
	cert: fs.readFilesSync(path.join('BrayanQuirino','prueba','ssl','apache.crt')),
	key:fs.readFilesSync(path.join('BrayanQuirino','prueba','ssl''apache.key'))
}
const app = express();
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.listen(443);
/*
app.post('/alexa' , (req, res) => {
	console.log(re, body);
	var speech = new Speech();
	speech.say('Hola Brayan, lo lograste')
	.pause('1s')
	.say('Maestro Alfonso. Estoy viva')
	.pause('1s')
	var outputSpeedch = speech.ssml(true);
	res.json({
		"version": "1.0",
		"sessionAttributes":{
		
		
		},
		"response":{
		"outputSpeech":{
		"lype":"SSML",
		"ssml": `<speak>${outputSpeech}</speak>`
		},
		"shouldEndSession":false
		}
	})
})*/
