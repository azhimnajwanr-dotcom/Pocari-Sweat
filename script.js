function toggleMenu(){

    const menu = document.getElementById("mobileMenu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
    const links = document.querySelectorAll('.mobile-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').style.display = 'none';
    });
});

}
