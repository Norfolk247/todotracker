const taskContent = document.getElementById('taskContent')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

let tasks = []

class task {
    constructor(content) {
        this.content = content
        this.completed = false
        this.fav = false
        this.link = ''
    }

    edit(){

    }

    favourite(){

    }
    delete(){

    }
    open(){

    }
    share(){

    }
}
class tasklisthtml {
    purge(){
        taskList.innerHTML = ''
    }
    fill(){
        if (tasks.length > 0) {
            for (x of tasks) {
                taskList.innerHTML += 
            }
        }
    }
}

addButton.addEventListener('click',() => {
    tasks.push(new task(taskContent.value))
})