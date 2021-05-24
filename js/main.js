// ==== Menu Show ==== 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ==== Active and Remove Menu ==== 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px', 
    duration: 2000,
    reset: true
})


//SCROLL HOME

sr.reveal('.home-title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 400})
sr.reveal('.home_social-icon',{interval: 200})


//SCROLL About
sr.reveal('.about_img', {})
sr.reveal('.about_subtittle', {delay: 200})
sr.reveal('.about_text', {delay: 400})


//SCROLL Skills
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_text', {delay: 200})
sr.reveal('.skills_data', {interval: 200})
sr.reveal('.skills_img', {delay: 400})

//Scroll Work
sr.reveal('.work_img', {interval: 200})

//SCROLL contact
sr.reveal('.contact_input', {interval: 200})