console.log('Modal is connected')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        // button.dataset allows access all data attributes as if theyre javascript objects
        //and it will camelCase them too
        //get data attribute from html grabbing #modal from html
        const modal = document.querySelector(button.dataset.modalTarget)
        //call function openModal and passs modal into that function
        openModal(modal)
    })
})
//anytime click on overlay close modal
overlay.addEventListener('click', () =>{
    //.modal.active only gives the open modals
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        //close modal function and call modal and pass in modal
        closeModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () =>{
        //access parent modal of this button since button inside modal
        //closest takes a selector .modal all class got
        //get closes parent element with class modal
        //will check buttons in html if it has a class 
        // of modal if it doesnt it checks the next parent
        const modal = button.closest('.modal')
        //call closeModal function instead of open
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
//similar to openModal but instead of adding will remove active class
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}