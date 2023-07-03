// menu show krenge 
// call vaeiables
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-menu');//we oriiginally didnt add this class in html but we have css for this class
    })
}


if(navClose){
    navClose.addEventListener("click", ()=>{
    navMenu.classList.remove("show-menu");
})
}

// remove menu mobile

const navLink = document.querySelectorAll('.nav_link');

function linkRemove(){
    // const navMenu = document.getElementById("nav-menu")
    navMenu.classList.add('show-menu');
    //q=when we click on each navlink we remove the show=menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkRemove))


//skills section 


const skillsContent = document.getElementsByClassName('skills_content'),
 skillsHeader = document.querySelectorAll('.skills_header')


function toggleSkills(){
    let itemClass = this.parentNode.className

    for( i=0 ; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach( (el) =>{
    el.addEventListener('click', toggleSkills);
})


// qualification tabs section

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click' , () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('education_active')
        })
        target.classList.add('education_active')

        tabs.forEach(tab =>{
            tab.classList.remove('education_active')
        })
        tab.classList.add('education_active')
    })
})

// projects swiper 

let swiper = new Swiper(".projects_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //change background header

  function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
  }
 window.addEventListener('scroll' , scrollHeader);


 //scroll up

 function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }
 window.addEventListener('scroll' , scrollUp);

//  dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


