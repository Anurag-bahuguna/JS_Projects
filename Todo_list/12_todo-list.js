const todoList =[{
    name: 'bath',
    dueDate:'2024-12-13'
},{
    name:'cake',
    dueDate: '2024-12-13'
}];   


renderTodoList();
function renderTodoList(){
let todoListHTML ='';      

for(let i=0;i< todoList.length; i++){      
    const todoObject = todoList[i];              
    
   
     const {name,dueDate} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>                 
        <button onclick = "
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-todo-btn">Delete</button>
        `;    
    todoListHTML += html;
}


document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
}

// using addEventListener
document.querySelector('js-add-todo-btn')
    .addEventListener('click',()=>{
        addTodo();
    })

function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const name= inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

todoList.push({  
    name,
    dueDate
});

inputElement.value =''; 

renderTodoList(); 
}