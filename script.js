function mouseHover(){
    document.querySelector("#site-icon").setAttribute("fill", "red");
}
function mouseHoverOut(){
    document.querySelector("#site-icon").setAttribute("fill", "black");
}
function toggleMenu(e){
    var menu = document.querySelector(".menus").children[1];
    menu.classList.toggle("menu-expand-js");
    // menu.style.left = "10%";
    e.firstElementChild.classList.toggle("xmark");
}
function btnClickimgChange(e){
    console.log(e);
}