const colorBtns = document.querySelectorAll(".color-box");
const body = document.querySelector("body");
colorBtns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        // console.log(getComputedStyle(e.target).backgroundColor)
        body.style.backgroundColor = `${getComputedStyle(e.target).backgroundColor}`
    })
})
