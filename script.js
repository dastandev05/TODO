const input = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const btn1 = document.querySelector(".btn-read");
const btn2 = document.querySelector(".btn-create");
const info = document.querySelector(".info");
const btnDel = document.querySelectorAll (".btn-del");
const dastan = document.querySelectorAll(".dastan")
const h3 = document.querySelector("h3")

btn2.addEventListener("click", () => {
    // info.style.display = "block";
    info.innerHTML += `<div class="dastan">
        <button class="btn-del">Delete</button>
        <div class="terrex">
            <h1>${input.value}</h1>
            <h2>${input2.value}</h2>
        </div>
        <img src="${input3.value}">
    </div>`;
});
info.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-del")) {
        e.target.parentNode.remove()
    }   
})

btn1.addEventListener("click", () => {
    info.style.display = "block"
})

h3.addEventListener("click", () => {
        info.style.display = "none"
        
})

