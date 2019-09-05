const express = require('express');
const bodyParser= require('body-parser');
const Speech = require ('ssml-builder');
const app = express();
app.listen(3000);
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
})
