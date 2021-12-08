let date = new Date()

const container = document.getElementById('container')
const design = document.getElementById('design')

const mouseCursor = document.getElementById('mouseCursor')
const alphaLogo = document.getElementById('alphaLogo')
const year = document.getElementById('year')
const linkedinBtn = document.getElementById('linkedinBtn')
const linkedText = document.getElementById('linkedText')
const githubText = document.getElementById('githubText')
const githubBbtn = document.getElementById('githubBbtn')
const aboutSection = document.getElementById('aboutSection')
const mailText = document.getElementById('mailText')
const footerSection = document.getElementById('footerSection')
const sign = document.getElementById('sign')

year.innerText = date.getFullYear()

linkedinBtn.addEventListener('click', () => {
    //window.location.href = "https://www.linkedin.com/in/anupamsharmae/"
})

githubBbtn.addEventListener('click', () => {
    //window.location.href = "https://github.com/anupamsharmae"
})

alphaLogo.addEventListener('click',()=>{
  document.body.classList.toggle('light-theme')
})

// window.addEventListener('mousemove', (e)=>{
//     mouseCursor.style.left = `${e.pageX}px`
//     mouseCursor.style.top = `${e.pageY}px`

// })

window.addEventListener('scroll', (e) => {
    let value = window.scrollY
    container.style.transform = `translateY(${value * -0.75}px)`;
    container.style.transition = `0.2s`;
    design.style.transform = `translateY(${value * -0.95}px)`;
    design.style.transition = `0.2s`;
    if (value > 150) {
        aboutSection.classList.add('animate-upwards')
    }
    else {
        aboutSection.classList.remove('animate-upwards')
    }
})




function screenWidth() {
    if (window.matchMedia("(max-width:570px)").matches) {
        linkedText.classList.remove('text')
        githubText.classList.remove('text')
        mailText.classList.remove('text')
    }
    else {
        linkedText.classList.add('text')
        githubText.classList.add('text')
        mailText.classList.add('text')
    }

}

// screenWidth()
window.addEventListener('resize', screenWidth)
window.addEventListener('load', screenWidth)
