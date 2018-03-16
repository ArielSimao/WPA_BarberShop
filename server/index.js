import express from 'express';

let app = express();

app.get('/*',(req, res) =>{
    res.send('Hellow World');
});

app.listen(3000,() => console.log('Running On Localhost:3000'));
