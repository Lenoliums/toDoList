
if(typeof(Storage)!==undefined){
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key))
          continue; 
        taskAppend(key, localStorage.getItem(key));
    }
}

function taskDelete(){
    label=findLable(this.id)
    div=document.getElementsByName(this.id)[0]
    if(this.checked){
        localStorage.removeItem(this.id);
        label.style.textDecoration="line-through";
        div.style.background="rgb(240, 240, 240)";
        div.style.borderRadius="40px";
    }
    else{
        localStorage.setItem(this.id, label.innerHTML);
        label.style.textDecoration="none";
        div.style.background="white";
        div.style.borderRadius="0";
    }
    
}


function recording(){
    input=document.getElementById("ToDo");
    let newTask=input.value
    if(newTask){
        let taskNum=crypto.randomUUID();
        localStorage.setItem(taskNum, newTask);
        taskAppend(taskNum, newTask);
        input.value=''
    }
}

function taskAppend(id, task){
    let input = document.createElement('input');
    input.type="checkbox";
    input.id=id;
    input.name="task";
    
    let label = document.createElement('label');
    label.for=id;
    label.innerHTML=task;
    input.onchange=taskDelete;
    document.forms[0].prepend(document.createElement('br'));
    div=document.createElement('div');
    div.classList.add("task_cont");
    div.setAttribute('name', id)
    div.appendChild(input);
    div.appendChild(label);
    
    document.forms[0].prepend(div);
    
}
function findLable(elId) {
    let labels = document.getElementsByTagName('label');
    let labelsNum=labels.length
    for(let i = 0; i < labelsNum; i++ ) {
        if (labels[i].for == elId)
            return labels[i];}
}


