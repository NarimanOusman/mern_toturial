const express = require('express');
const route = express.Router();
const {createGoal,readGoal, updateGoal, deleteGoal} = require('./controller/routesController');

//-----------------------ROUTES V1-------------------
// // read goals we use GET request
// route.get('/',(req,res)=>{
//     res.status(200).json({message:'Welcome to the Goals API'});

// });

// //create goal we use POST request
// route.post('/',(req,res)=>{
//     res.status(200).json({message:'Create a new goal'});
// });

// //update goal we use PUT request
// route.put('/:id',(req,res)=>{
//     res.status(200).json({message:`Update goal with id ${req.params.id}`});
// });

// //delete goal we use DELETE request
// route.delete('/:id',(req,res)=>{
//     res.status(200).json({message:`deteted goal with id ${req.params.id}`});
//     });

// '/:id' means that we are expecting an id parameter in the URL, which we can access using req.params.id.
// Because when updating or deleting, we must know:
//Which specific document should we change?
//In MongoDB every document has a unique _id.
//So we can use that _id to identify which document we want to update or delete.
//In the above code, we are using req.params.id to access the id parameter from the URL and then we can use that id to
//  perform the update or delete operation on the specific document in the database.

//-----------------------ROUTES V2 BY IMPORTING THE FUNCTION FROM ROUTECONTROLER.JS FILE-------------------
// route.get('/',readGoal);
// route.post('/',createGoals);
// route.put('/:id',updateGoal);
// route.delete('/:id',deleteGoal);
// module.exports = route;

//-----------------------ROUTES V3 BY USING ROUTER.METHOD()-------------------
route.route('/').get(readGoal).post(createGoal);
route.route('/:id').put(updateGoal).delete(deleteGoal);
module.exports = route;
