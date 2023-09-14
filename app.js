const express = require('express');
const app = express();
const lesson1Controllers = require('./controllers/lesson1')

app.get('/', lesson1Controllers.world);
app.get('/earth', lesson1Controllers.earth);


app.listen(process.env.PORT || 3000, () => {
    console.log('web server is listening at port ' + (process.env.PORT || 3000));
});