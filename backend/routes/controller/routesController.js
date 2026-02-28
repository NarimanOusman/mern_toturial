const createGoal = (req,res)=>{
    if(!req.body.text){
        res.status(400).json({message:'Title is required'});
    }else{
        res.status(200).json({message:'Create a new goal'});
    }
}

const readGoal = (req,res)=>{
    res.status(200).json({message:'Read a specific goal'});
}

const updateGoal = (req,res)=>{
    res.status(200).json({message:`update goal with id ${req.params.id}`});
}

const deleteGoal = (req,res)=>{
    res.status(200).json({message:`delete goal with id ${req.params.id}`});
}

 module.exports = {
    createGoal,
    readGoal,
    updateGoal,
    deleteGoal
}