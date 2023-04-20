const express = require('express');
const tourRouter = require('../controllers/tourController');

// Importing 3rd party modules
const router = express.Router();

router
  .route('/')
  .get(tourRouter.getAllTours)
  .post(tourRouter.createTour);
router
  .route('/:id')
  .get(tourRouter.getTour)
  .patch(tourRouter.updateTour)
  .delete(tourRouter.deleteTour);

module.exports = router;
