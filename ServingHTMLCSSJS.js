const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./Routes/admin');
const shopRouter = require('./Routes/shop');
const contactusRouter = require('./Routes/contactus');
const successRouter = require('./Routes/success');
const errRouter = require('./Routes/404');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// filtering => /admin.
app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(contactusRouter);
app.use(successRouter);
app.use(errRouter);

app.listen(3000);