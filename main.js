const menuBar = document.getElementById("menu-page");
const menuIcone = document.getElementsByClassName('menu')[0];
var pageSlide = 1;
var currentSlide = 1;
var menuCurrentTime = false;
function menuOpen(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    currentPage.style = "display: none";
    menuBar.style = "display: flex";
    menuIcone.style.display = "none";
    menuCurrentTime = true;
}
function menuClose(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    currentPage.style = "display: flex";
    menuBar.style = "display: none";
    let menuIcone = document.getElementsByClassName('menu')[0];
    menuIcone.style.display = "block";
    menuCurrentTime = false;
}
function homePage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let homePage = document.getElementById('page-1');
    currentPage.style = "display: none";
    homePage.style = "display: flex";
    currentSlide = 1;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function mySelf(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-2');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 2;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function quickLink(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-3');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 3;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function academicPage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-4');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 4;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function rewardsPage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-5');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 5;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function projectPage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-6');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 6;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function thisPage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-7');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 7;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}
function resumePage(){
    let currentPage = document.getElementById(`page-${currentSlide}`);
    let mySelfPage = document.getElementById('page-8');
    currentPage.style = "display: none;";
    mySelfPage.style = "display: flex;";
    currentSlide = 8;
    if (menuCurrentTime == true){
        menuBar.style = "display: none;";
        menuIcone.style = "display: block;";
        menuCurrentTime = false;
    }
}