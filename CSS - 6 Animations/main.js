var menubtn = document.querySelector('#menu-btn');

/* toggle */
menubtn.addEventListener('click', ()=>{
    alert("clicked");
    /* console.log(menubtn.children);
    var c =menubtn.children; */
    var lines = document.querySelector('#line');
    if (lines.className == 'closebtn') {
        lines.classList.remove ('closebtn');
    } else {
        lines.classList.add ('closebtn');
    }

});