let scrollBtn=document.getElementById("scrolltop")

scrollBtn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0
    })
})

window.addEventListener('scroll',function(){
    if(this.window.scrollY>=700){
        scrollBtn.style.opacity=1
    }
    else{
        scrollBtn.style.opacity=0
    }
})

let icon=document.getElementById('icon')
icon.onclick=function(){
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon.src="images/sun.png"
    }
    else{
        icon.src="images/moon.png"
    }
}