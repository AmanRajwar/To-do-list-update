const tasksModel=require('../models/to_do');
module.exports.delete=function(req,res){
async function deleteTasks(){
    try{
       const deleted=await tasksModel.findByIdAndDelete(req.body.id)
       if(deleted){
        console.log('deleteController ==> contact deleted: ',deleted)
        return res.status(200).json(req.body.id);
       }else{
        console.log('deleteController ==> failed in deleting the contacts: ')
       }

    }catch(e){
console.log('deleteController ==> error in deleting contacts:',e)
    }
   
}
deleteTasks();
}