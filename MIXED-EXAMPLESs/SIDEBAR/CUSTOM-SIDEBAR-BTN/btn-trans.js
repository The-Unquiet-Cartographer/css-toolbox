const t_button = document.getElementById("btn-menu");
const t_blocker = document.getElementById("page-blocker");

button.addEventListener('click', ()=> {
    button.classList.add("btn-state-trans");
});

blocker.addEventListener('click', ()=> {
    button.classList.remove("btn-state-trans");
});