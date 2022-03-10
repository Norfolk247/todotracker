const taskContent = document.getElementById('taskContent')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

let tasks = []

class task {
    constructor(content) {
        this.content = content
        this.completed = false
        this.fav = false
    }
    edit(){

    }

    favourite(){

    }
    delete(){

    }
}
class tasklisthtml {
    purge(){
        taskList.innerHTML = ''
    }
    createtask(object){
        return `
        <div class="listItem">
            <div class="itemContent">${object.content}</div>
            <div class="buttons">
                <input type="checkbox">
                <input type="image" class="delete">
                <input type="image" class="favourite" ${object.fav ? 'true' : ''}>
            </div>
        </div>`
    }
    fill(){
        if (tasks.length > 0) {
            for (object of tasks) {
                taskList.innerHTML += tasklisthtml.createtask(object)
            }
        }
    }
}

addButton.addEventListener('click',() => {
    tasks.push(new task(taskContent.value))
})