// Event used to toggle between light and dark mode when the corresponding button is pressed

// The theme chosen by the user is stored in their browser, so it will stay consistent even if the page is closed / reloaded
let dark = localStorage.getItem('theme') === 'true';

let colorMode = ['light', 'dark'];
let page = document.URL.match(/([^\/]+)\.html/)[1];

let favicon = document.getElementById('favicon');
let navicon = document.getElementById('navicon');

// Array of functions used to switch certain graphical elements between light and dark mode
let setImages = [
    function() {
        favicon.setAttribute('href', `https://gabriellessade.github.io/favicon_${page}_${colorMode[+dark]}.ico`);
    },
    function() {
        navicon.setAttribute('src', `https://gabriellessade.github.io/navbar_logo_${colorMode[+dark]}.svg`);
    }
];

// Additional functions will be appended to the array depending on the page
let currentPage = favicon.href.match(/_.+_/)[0].replace(/_/g, '');
switch(currentPage)
{
    case '':
        console.log("teste");
        break;
        
    case 'rgb':
        setImages.push(function() {
            let arrows = document.getElementsByClassName('arrow-icon');
            for (let i = 0; i < arrows.length; i++)
            {
                arrows[i].setAttribute('src', `https://gabriellessade.github.io/arrow_${colorMode[+dark]}.svg`);
            }
        }, function() {
            let spacebar = document.getElementById('space-icon');
            spacebar.setAttribute('src', `https://gabriellessade.github.io/space_${colorMode[+dark]}.svg`);
        });
        break;

    case 'index':
        setImages.push(function(){
            let slides = document.getElementsByClassName('d-block');
            for (let i = 0; i < slides.length; i++)
                {
                    slides[i].setAttribute('src', `https://gabriellessade.github.io/cs50_slide_${i+1}_${colorMode[+dark]}.gif`);
                }
        });
        break;

    case 'final':
        setImages.push(function(){
            document.documentElement.style.backgroundImage = `url('https://gabriellessade.github.io/bg_${colorMode[+dark]}.bmp')`;
        }, function(){
            let blingee = document.getElementById('blingee');
            blingee.setAttribute('src', `https://gabriellessade.github.io/blingee_${colorMode[+dark]}.gif`);
        });
        break;

    case 'contact':
        let copyButtons = document.getElementsByClassName('btn-outline-secondary');

        setImages.push(function(){
            for(let i = 0; i < copyButtons.length; i++)
            {
                copyButtons[i].getElementsByClassName('copy-icon')[0].setAttribute('src', `https://gabriellessade.github.io/copy_${colorMode[+dark]}.svg`);
            }
        }, function(){
            let icons = document.querySelectorAll('image');
            for(let i = 0; i < icons.length; i++)
            {
                icons[i].setAttribute('href', icons[i].getAttribute('href').replace(colorMode[+dark], colorMode[+(!dark)]));
            }
        });

        for(let i = 0; i < copyButtons.length; i++)
        {
            copyButtons[i].addEventListener('mouseover', function(){
                copyButtons[i].getElementsByClassName('copy-icon')[0].setAttribute('src', `https://gabriellessade.github.io/copy_${colorMode[+(!dark)]}.svg`);
            });

            copyButtons[i].addEventListener('mouseout', function(){
                copyButtons[i].getElementsByClassName('copy-icon')[0].setAttribute('src', `https://gabriellessade.github.io/copy_${colorMode[+dark]}.svg`);
            });
        }
    break;
}

let darkLightToggle = document.getElementsByClassName('dark-light-button')[0];
darkLightToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    dark = !dark;
    for (let i = 0; i < setImages.length; i++)
    {
        setImages[i]();
    }
    localStorage.setItem('theme', dark);
});

if(dark)
{
    document.body.classList.toggle('dark-mode');
}
for (let i = 0; i < setImages.length; i++)
{
    setImages[i]();
}


