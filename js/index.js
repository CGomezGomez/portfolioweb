'use strict';

(()=>{

    const header       = document.querySelector('.header')
    const headerMenu   = document.querySelector('.header__menu')
    const menu         = document.querySelector('.menu')
    const menuA        = document.querySelectorAll('.menu__a') 
    const worksImg     = document.querySelectorAll('.works__img')
    const worksP       = document.querySelectorAll('.works__p')

    
    
    const headerMenuHandler = () => {
        menu.classList.toggle('active')
    }
    
    headerMenu.addEventListener('click', headerMenuHandler)
    
    
    worksImg.forEach((eachWork, i)=>{
        worksImg[i].addEventListener('mouseover',()=>{
            worksImg.forEach((eachWork, j)=>{
                worksImg[i].classList.add('jello-vertical')
            })
        })
    })
    
    worksImg.forEach((eachWork, i)=>{
        worksImg[i].addEventListener('mouseout',()=>{
            worksImg.forEach((eachWork, j)=>{
                worksImg[i].classList.remove('jello-vertical') 
             })
        })
    })
    
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
             })
        })
    })  

    menuA.forEach((eachA, i)=>{
        menuA[i].addEventListener('mouseout',()=>{
            menuA.forEach((eachA, j)=>{
                menuA[i].classList.remove('color') 
             })
        })
    })  
})();
