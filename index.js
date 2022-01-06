const express = require("express");
const app = express();
const sql = require('./shared/connect')
var studentRouter = require('./routes/studentRoute');
var mentorRouter = require('./routes/mentorRoute');




sql.connect();

app.use('/student', studentRouter);
app.use('/mentor', mentorRouter);

app.listen(3000);