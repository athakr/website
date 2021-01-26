//some global variables
var about = document.getElementById("about-me");
var contact = document.getElementById("contact-me");
var resumeArea = document.getElementById("resume-area");
var fin = document.getElementById("about-me-body-fin");
var cs = document.getElementById("about-me-body-cs");

function aboutme(){
    about.style.display = "inline-block";
    contact.style.display ="none";
    document.getElementById("contact-checkbox").checked = false;
    resumeArea.style.display = "none";
    fin.style.display = "none";
    document.getElementById("about-me").style.height = "35vh";
    cs.style.display = "none";
}

function contactme(){
    about.style.display = "none";
    contact.style.display ="flex";
    document.getElementById("contact-checkbox").checked = false;
    resumeArea.style.display = "none";
    fin.style.display = "none";
    document.getElementById("about-me").style.height = "35vh";
    cs.style.display = "none";
}

function showresume(){
    about.style.display = "none";
    contact.style.display ="none";
    document.getElementById("contact-checkbox").checked = false;
    resumeArea.style.display = "flex";
    fin.style.display = "none";
    document.getElementById("about-me").style.height = "35vh";
    cs.style.display = "none";
}

function showfin(){
    fin.style.display = "flex";
    document.getElementById("about-me").style.height = "65vh";
    cs.style.display = "none";
}

function showcs(){
    cs.style.display = "flex";
    document.getElementById("about-me").style.height = "75vh";
    fin.style.display = "none";
}

function ischecked(){
    var x = document.getElementById("contact-checkbox").checked === true;
    if(x){
        window.open("https://forms.gle/MXieH12qHdgJHtnKA", '_blank');
    }
}
document.getElementById("title").onclick = aboutme;
document.getElementById("contact-me-button").onclick = contactme;
document.getElementById("resume-button").onclick = showresume;
document.getElementById("finance-but").onclick = showfin;
document.getElementById("compsci-but").onclick = showcs;
document.getElementById("contact-submit").onclick = ischecked;