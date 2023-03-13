'use strict';

(()=>{

    const header       = document.querySelector('.header')
    const headerMenu   = header.querySelector('.header__menu')
    const menu         = document.querySelector('.menu')
    const menuA        = menu.querySelectorAll('.menu__a') 

    const headerMenuHandler = () => {
        menu.classList.toggle('active')
    }

    headerMenu.addEventListener('click', headerMenuHandler)

    menuA.forEach((eachA, i)=>{
        menuA[i].addEventListener('click',()=>{
            menuA.forEach((eachA, j)=>{
                menu.classList.remove('active') 
             })
        })
    })    

    menuA.forEach((eachA, i)=>{
        menuA[i].addEventListener('mouseover',()=>{
            menuA.forEach((eachA, j)=>{
                menuA[i].classList.add('color') 
                menuA[i].classList.add('desplazamiento') 
             })
        })
    })  

    menuA.forEach((eachA, i)=>{
        menuA[i].addEventListener('mouseout',()=>{
            menuA.forEach((eachA, j)=>{
                menuA[i].classList.remove('color') 
                menuA[i].classList.remove('desplazamiento') 
             })
        })
    })  

})();
