console.log("home js is working");
const list = document.getElementById('list');

const addTask= document.getElementById('addButton');

addTask.addEventListener('click',async ()=>{
  const taskInput = document.getElementById('inputTask');
  const categorySelector = document.getElementById('categorySelector');
  const dateSelector = document.getElementById('date')

  const task={
    description: taskInput.value,
    category:categorySelector.value,
    date:dateSelector.value
  }

  $.post('/tasks',task,
  function(data,status){
    // console.log("status:",status + "data:",data.description);
    if(status){
      console.log("task added successfully");
      taskInput.value='';
      categorySelector.value='default';
      dateSelector.value='';
      let str=`<li class="listItems">
      <input class="radioButton" id="${data._id}" type="radio">
      <div class="taskDetails">
          <h2>
              ${data.description}
          </h2>
          <p>
             ${data.date}
          </p>
      </div>
      <div class="categoryButton ${data.category}">
          <h2>
          ${data.category}
          </h2>
      </div>
  </li>`;
    
  list.insertAdjacentHTML('beforeend', str);
    }
  })
  
})


const radioButtons = document.querySelectorAll('input[type="radio"]');
let checkedId = null;
const deleteButton=document.getElementById('deleteButton');

deleteButton.addEventListener('click',()=>{

radioButtons.forEach((radioButton) => {
  console.log("hiii i am nitin")
  if (radioButton.checked) {
    checkedId = radioButton.id;
    let id={
      id:checkedId
    }
   deleteTasks(id);
  }
 
})
});

 function deleteTasks(id){
  $.post('/delete',
  id,
  function(data,status) {
  if(status){
    const element = document.querySelector(`[data-id="${data}"]`);
    if (element) {
      element.remove();
    }
  }
  })
}





// try{
//   const response=await fetch('/delete',{
//     method:'Post',
//     headers:{
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(id)

//   });
//   if(response.ok){
//     console.log("delete is successfull");
//   }else{
//     console.log("Failed to delete the tasks");
//   }
//   }catch(err){
//     console.log("error in deleting task: ",err)
//   }