let date = new Date()

const mouseCursor = document.getElementById('mouseCursor')
const alphaLogo = document.getElementById('alphaLogo')
const year = document.getElementById('year')
const linkedinBtn = document.getElementById('linkedinBtn')
const linkedText = document.getElementById('linkedText')
const githubText = document.getElementById('githubText')
const githubBbtn = document.getElementById('githubBbtn')

const mailText = document.getElementById('mailText')

year.innerText= date.getFullYear()

linkedinBtn.addEventListener('click', ()=>{
    window.location.href = "https://www.linkedin.com/in/anupamsharmae/"
})

githubBbtn.addEventListener('click', ()=>{
    window.location.href = "https://github.com/anupamsharmae"
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

if(window.screen.width <= 570){
    linkedText.classList.remove('text')
    githubText.classList.remove('text')
    mailText.classList.remove('text')
}
else{
    linkedText.classList.add('text')
    githubText.classList.add('text')
    mailText.classList.add('text')

}

