const listsContainer = document.querySelector('[data-lists]');
let lists = [{
    id:1,
    name:'blow job',
    {
        id:2,
        name:
    }
}]

function render(){
    clearElement(listsContainer)
    lists.forEach(list =>{
        const listElement = document.createElement('li')
        listElement.classList.add('list-name')
        listElement.innerText = list
        listsContainer.appendChild(listElement)
    })
}
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()