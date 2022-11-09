//Function to get "Hello, World!" in different languages:

const title = document.querySelector('h1');
// const code = document.querySelector('code');

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
    // english: 'hello world!',
};

const entries = Object.entries(languages);
let count = entries.length -1;
const changeCountry = () => {
    if (count === entries.length) {
        count = 0;
    } else {
        title.textContent = entries[count][1];
        // code.textContent = entries[count][1];
        count += 1;
    }
};
setInterval(changeCountry, 1500);




//Scroll effect functionality:
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




