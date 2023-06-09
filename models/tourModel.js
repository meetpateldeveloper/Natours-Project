const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour Name is required'],
    unique: true,
    trim:true
  },
  duration:{
    type:Number,
    required:[true,'A tour must have a duration']
  },
  maxGroupSize:{
    type:Number,
    required:[true,'A tour must have a group size']
  },
  difficulty:{
    type:String,
    required:[true,'A tour must have difficulty level']
  },
  ratingsAverage:{
    type:Number,
    default:4.5
  },
  ratingsQuantity:{
    type:Number,
    default:0
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a price'],
  },
  priceDiscount:Number,
  summary:{
    type:String,
    trim:true
  },
  description:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
    required:[true,'A tour must have a cover image']
  },
  Images:[],
  CreatedAt:{
    type:Date,
    default: Date.now()
  },
  StartDates:[Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
