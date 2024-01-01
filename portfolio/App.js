const topnav = document.querySelectorAll('.top-nav li')
// Topbar
topnav.forEach(function(item){
    
    item.addEventListener('click', function(e){

        const {tagName, dataset} = e.target

        if(tagName == 'A' && dataset.id == 1){
            window.scrollTo({
                top: document.querySelector('#about-me').offsetTop,
                behavior: 'smooth' 
            })
        }else if(tagName == 'A' && dataset.id == 2){
            window.scrollTo({
                top: document.querySelector('#experience-section').offsetTop,
                behavior: 'smooth'
            })
        }else if(tagName == 'A' && dataset.id == 3){
            window.scrollTo({
                top: document.querySelector('#projects-section').offsetTop,
                behavior: 'smooth'
            })
        }else if(tagName == 'A' && dataset.id == 4){
            window.scrollTo({
                top: document.querySelector('#contact-section').offsetTop,
                behavior: 'smooth'
            })
        }
    })
})

// Download CV
const cv = document.querySelector('.btn-containers .btn-cv')
cv.addEventListener('click',() => {
    window.open('./portfolio/sources/CV1.pdf')
})
const btnInfo = document.querySelector('.btn-containers .btn-info')
btnInfo.addEventListener('click', () => {
    window.open('./portfolio/sources/CV2.pdf')
})


// project section
const ckbtn = document.querySelector('.check-it')
ckbtn.addEventListener('click',() => {
    location.href = './Calculator/index.html'
})

// footer
document.querySelector('.footer-section a').addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})