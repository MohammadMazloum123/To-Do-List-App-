const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')



let lists = []


newListForm.addEventListener('submit', e =>{
    e.preventDefault()
    const listName = newListInput.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(listName)
    render()
})
function createList(){
    return {id: Date.now().toString(), name: name, tasks:[]}
}




function render(){
    clearElement(listsContainer)
    lists.forEach(list =>{
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name')
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()