// Importing the Core Modules
const path = require('path');
const fs = require('fs');

// Reading the Data from Text File
const toursArray = JSON.parse(fs.readFileSync(path.join(__dirname,'..','dev-data','data','tours-simple.json')));

exports.checkInput = (req,res,next)=>{
    if(!req.body.name || !req.body.price){
        res.status(400).json({status:'failure',data:'Either Name or Price does not exist!'})}
    else{
    next();
    }
}

// Tour Route Handler Methods
exports.getAllTours = (req,res)=>{
    res.status(200).json({status:"success",
    results: toursArray.length,
    data:{"tours": toursArray}});
};

exports.createTour = (req,res)=>{
    const newid = toursArray[toursArray.length-1].id+1;
    const newtoursArray = [...toursArray,{id:newid,...req.body}]; 
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,JSON.stringify(newtoursArray),()=>{res.send(`${JSON.stringify(req.body)} has been added.`)});
};

exports.getTour = (req,res)=>{
    if(req.params.id>=toursArray.length){
        res.status(404).json({status:'fail',data:'Not Found'})
    } else{
    res.status(200).json({status:'Success',data:{tour:toursArray[req.params.id]}});}
};
exports.updateTour = (req,res)=>{
    if(req.params.id>=toursArray.length){
        res.status(404).json({status:'fail',data:'Not Found'})
    } else{
    res.status(200).json({status:'Success',data:"Tour Updated"});}
};
exports.deleteTour = (req,res)=>{
    if(req.params.id>=toursArray.length){
        res.status(404).json({status:'fail',data:'Not Found'})
    } else{
    res.status(202).json({status:'Success',data:"Tour Deleted"});}
};
