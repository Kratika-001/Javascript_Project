
window.onload = function(){ 

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task")
    }

    //add a new task

    else{

        document.querySelector('#tasks').innerHTML += `
        <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class = "delete">
                <i class="fa fa-trash-o" style="font-size:36px"></i>
                </button>
            </div>
        `;


    //deleting a task
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();            
        }
    }

    //crossing off completed task
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    //clearing input field after each entry
    document.querySelector("#newtask input").value = "";

    }
}

}