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

// alphaLogo.addEventListener('click',()=>{
//     if(!alphaLogo.classList.contains('color-change'))
//         alphaLogo.classList.add('color-change')
//     else
//         alphaLogo.classList.remove('color-change')

// })

// window.addEventListener('mousemove', (e)=>{
//     mouseCursor.style.left = `${e.pageX}px`
//     mouseCursor.style.top = `${e.pageY}px`

// })

window.addEventListener('scroll', (e) => {
    let value = window.scrollY
    container.style.top = value * -0.25 + 'px'
    design.style.top = value * -0.20 + 'px'

    if (value > 200) {
        aboutSection.classList.add('animate-upwards')
    }
    else {
        aboutSection.classList.remove('animate-upwards')
    }
   
})

