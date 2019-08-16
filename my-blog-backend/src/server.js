//import express from 'express';
const express = require('express');

const app = express();

app.get('/hello',(req,res)=>res.send('Hello Dude!'));

app.listen('8000',()=>console.log('I am listening port 8000'));