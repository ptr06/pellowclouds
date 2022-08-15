const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const nav = document.getElementsByTagName('nav')[0];

window.onload = adjustLogo();

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}

function adjustLogo(){
    if (screen.availWidth <= 800) {
        const logo = nav.insertBefore(document.createElement('div'), nav.children[0]);
        const h1 = logo.appendChild(document.createElement('h1'));
        h1.textContent = 'pellowclouds';
        logo.setAttribute('class','logo');
    } else {
        const logo = mainMenu.insertBefore(document.createElement('div'), mainMenu.children[2]);
        const h1 = logo.appendChild(document.createElement('h1'));
        h1.textContent = 'pellowclouds';
        logo.setAttribute('class','logo');
    }

}