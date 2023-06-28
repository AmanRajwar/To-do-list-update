const tasksModel =require('../models/to_do');
async function getTasks() {
    return await tasksModel.find({});
}
module.exports.home=function(req,res){
    getTasks().then(task=>{
        console.log('nitin');
        return res.render('home',{
            tasks:task,
        })
    })
}