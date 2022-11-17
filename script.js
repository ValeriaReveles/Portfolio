//Functions to get "Hello, World!" in different languages:

const helloTitle = document.querySelector('h1');

const languages = {
    spanish: 'hola mundo!',
    french: 'salut tout le monde!',
    italian: 'ciao mondo!',
    german: 'hallo welt!',
    portuguese: 'ola mundo!',
    turkish: 'selam dünya!',
    russian: 'privetstvuyu, mir!',
    afrikaans: 'hello wêreld!',
    croatian: 'pozdrav svijete!',
    welsh: 'helo Byd!',
    uzbek: 'salom dunyo!',
    estonian: 'tere maailm!',
    swedish: 'hej världen!',
    finnish: 'hei maailma!',
    romanian: 'salut Lume!',
    indonesian: 'halo Dunia!',
    lithuanian: 'labas pasauli!',
};

const entries = Object.entries(languages);
let countLanguage = entries.length -1;
const changeCountry = () => {
    if (countLanguage === entries.length) {
        countLanguage = 0;
    } else {
        helloTitle.textContent = entries[countLanguage][1];
        // code.textContent = entries[count][1];
        countLanguage += 1;
    }
};
setInterval(changeCountry, 1500);


//Scroll into view effect functionality:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




