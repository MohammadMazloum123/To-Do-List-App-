const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')






let lists = [{
    id: 1,
    name:'blow job'
    },
    {
        id: 2,
        name:'name'
    },
]





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