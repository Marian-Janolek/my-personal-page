require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connectDB = require('./db.js');
const morgan = require('morgan');
const pageRouter = require('./routes/pageRoute');

const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       'img-src': ["'self'", 'https: data:'],
//     },
//   })
// );
app.use(xss());
app.use(mongoSanitize());

app.get('/', (req, res) => {
  res.send('API is running ....');
});

app.use('/api/v1/pages', pageRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log('Successfull connect to DB'))
      .catch((err) => console.log(err));
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
