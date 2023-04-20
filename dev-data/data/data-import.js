const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const Tour = require(path.join(__dirname,'..','..','models','tourModel'));

dotenv.config({ path: '../../config.env' });

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

const addAllData = async () =>{
    const fileRead = fs.readFileSync('./tours-simple.json','utf8');
    Tour.create(JSON.parse(fileRead));
    console.log('Created!')
    process.exit();
};
addAllData();

const deleteAllData = async() => {
    await Tour.deleteMany();
    process.exit();
}
// deleteAllData();
