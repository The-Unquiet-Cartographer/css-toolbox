const body = document.getElementsByTagName("body")[0];
const page = document.getElementById("page-wrapper");

const button = document.getElementById("btn-menu");
const sidebar = document.getElementById("side-menu");
const blocker = document.getElementById("page-blocker");

let offsetPage = true;

//Optional: Offset the page when the menu slides out
if (offsetPage) {
    page.classList.add('page-default');
}

//Button makes sidebar/blocker appear
button.addEventListener('click', (e)=> {
    sidebar.classList.add('menu-open');
    blocker.classList.add('blocker-shown');
    if (offsetPage) {
        page.classList.add('page-offset');
    }
    body.style.position = "fixed";
});
//Clicking on blocker makes sidebar/blocker disappear
blocker.addEventListener('click', (e)=> {
    sidebar.classList.remove('menu-open');
    blocker.classList.remove('blocker-shown');
    if (offsetPage) {
        page.classList.remove('page-offset');
    }
    body.style.position = "relative";
});