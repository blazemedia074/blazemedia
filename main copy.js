let btnOpen = document.getElementById('open')
let btnClose = document.getElementById('close')
let be = document.getElementById('be')
let ee = document.getElementById('ee')
let container = document.querySelector('.container')

btnClose.onclick = ()=>{
    container.classList.add('hide')
    btnClose.classList.add('hide')
    btnOpen.classList.remove('hide')
}
btnOpen.onclick = ()=>{
    container.classList.remove('hide')
    btnClose.classList.remove('hide')
    btnOpen.classList.add('hide')
}

onload = ()=>{
    ee.focus();
    be.click();
}