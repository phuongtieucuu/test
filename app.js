const open__modal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const close1 = document.querySelector('.fa-times')
const close2 = document.querySelector('.close')
const inner = document.querySelector('.modal__inner')


open__modal.addEventListener('click',removeNone)
function removeNone() {
    modal.classList.remove('none')
}
function addNone() {
    modal.classList.add('none')
}
close1.addEventListener('click',addNone)
close2.addEventListener('click',addNone)
modal.addEventListener('click',addNone)
inner.addEventListener('click',(e)=> e.stopPropagation())

