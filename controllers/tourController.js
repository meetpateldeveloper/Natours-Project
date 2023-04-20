// Importing the Core Modules
const path = require('path');

const Tour = require(path.join(__dirname, './../models/tourModel'));

// Tour Route Handler Methods
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours: tours },
    });
  } catch (err) {
    res.status(200).json({
      status: 'failure',
      results: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const tourdata = await Tour.create(req.body);
    res.status(200).json({
      status: 'success',
      data: { tour: tourdata },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      data: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const data = await Tour.findById("64407c4cf583b42498e6ce45");
    res.status(200).json({
      status: 'Success',
      data: {
        tour: data,
      },
    });
  } catch (err) {
    res.json({
      status: 'Failure',
      data: err,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const data = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'Success',
      data: {
        tour: data,
      },
    });
  } catch (err) {
    res.json({
      status: 'Failure',
      data: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'Success',
      data: null
    });
  } catch (err) {
    res.json({
      status: 'Failure',
      data: err,
    });
  }
};
