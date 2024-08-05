const btnTheme = document.querySelector('.btn-theme');
const iconBtnTheme = document.querySelector('.btn-theme img');

const icons = {
    dark: './assets/images/codigo.jpeg',
    light: './assets/images/codigo.jpeg',
}

let currentTheme = 'dark';

function toggleTheme() {
    if (currentTheme == 'light') {
        iconBtnTheme.src = icons.dark
        currentTheme = 'dark'
        document.body.classList.add('dark')
    } else {
        iconBtnTheme.src = icons.light
        currentTheme = 'light';
        document.body.classList.remove('dark')
    }
   
}




btnTheme.addEventListener('click', toggleTheme)