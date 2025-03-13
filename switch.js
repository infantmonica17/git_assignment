const navLinks = document.querySelectorAll('nav li');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));

    
        link.classList.add('active');

    
        const pageId = link.dataset.page;
        document.getElementById(pageId).classList.add('active');
    });
});


document.querySelector('nav li[data-page="home"]').classList.add('active');
document.getElementById('home').classList.add('active');


document.querySelector('.login-btn').addEventListener('click', () => {
    
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById('login').classList.add('active');
});


document.querySelector('.create-account-btn').addEventListener('click', () => {
     
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById('create-account').classList.add('active');
});