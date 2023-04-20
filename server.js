const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    UseFindAndModify: false,
  })
  .then(console.log('Connected'));

// Creating a Server
app.listen(process.env.PORT, () =>
  console.log('Server has been started on PORT:3000')
);
