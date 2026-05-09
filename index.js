document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', event => event.preventDefault());

const toggleSwitch = document.getElementById('dark-mode-toggle');
const footer = document.querySelector('footer');
const currentTheme = localStorage.getItem('theme');
const currentLang = localStorage.getItem('lang')

function updateTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark-mode');
    footer.classList.toggle('dark-mode-footer', theme === 'dark-mode');
    localStorage.setItem('theme', theme);
}

if(currentTheme){
    updateTheme(currentTheme);
    if(currentTheme === 'dark-mode'){
        toggleSwitch.checked = true;
    }
}

if(!currentTheme){
    updateTheme('dark-mode');
    toggleSwitch.checked = true;
}

if(currentLang){
    changeto(currentLang);
    if(currentLang === 'en'){
        setActiveLanguage('lang-en');
    }
    else if(currentLang === 'it'){
        setActiveLanguage('lang-it');
    }
}

if(!currentLang){
    changeto('en');
    setActiveLanguage('lang-en');
}


toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        updateTheme('dark-mode');
    } else {
        updateTheme('light-mode');
    }
});
document.getElementById('lang-en').addEventListener('click', function() {
    setActiveLanguage('lang-en');
    changeto('en');
});
document.getElementById('lang-it').addEventListener('click', function() {
    setActiveLanguage('lang-it');
    changeto('it');
});

function setActiveLanguage(activeLangId) {
    document.querySelectorAll('.language-switch button').forEach(button => {
        button.classList.remove('active-lang');
    });
    document.getElementById(activeLangId).classList.add('active-lang');
}

function changeto(newlang){
    localStorage.setItem('lang', newlang);
    if(newlang === 'it'){
        document.getElementById("page-ttl").textContent = "Sito di justLucky";
        document.getElementById("header-ttl").textContent = "Sito di justLucky";
        document.getElementById("lang-en").textContent = "Inglese";
        document.getElementById("lang-it").textContent = "Italiano";
        document.getElementById("fst-sec-ttl").textContent = "Benvenuto/a";
        document.getElementById("fst-sec-txt").textContent = "Benvenuto/a sul mio Sito! Sono conosciuto online come 'justLucky'. Esplora il mio Sito per scoprire di più su di me e sulla mia vita.";
        document.getElementById("snd-sec-ttl").textContent = "Su di Me:";
        document.getElementById("snd-sec-txt").textContent = "Ciao! Il mio nickname è 'justLucky', ma il mio vero nome è Riccardo, sono Cattolico e amo Gesù; il mio passo preferito nella Bibbia è Matteo 6:25-34! Studio attivamente la programmazione in Python dall'Agosto 2022, conosco le basi di C/C++, Java e Javascript. Adoro anche le reti e la cybersicurezza. Per commissioni su pagamento che richiedono la Programmazione in Python 3.10 o superiore, sentitevi liberi di contattarmi su Telegram o su Instagram, potete anche contattarmi sulla mia Email, ma non la controllo spesso. Adoro giocare a scacchi, anche se non sono molto bravo, le mie aperture preferite sono il Sistema Londinese e la Difesa Caro-Kann.";
        document.getElementById("trd-sec-ttl").textContent = "Come contattarmi:";
        document.getElementById("trd-sec-txt").textContent = "Se desiderate contattarmi, ecco come:";
        document.getElementById("footer-txt").innerHTML = "Sito di justLucky"
    }
    else if(newlang === 'en'){
        document.getElementById("page-ttl").textContent = "justLucky's Website";
        document.getElementById("header-ttl").textContent = "justLucky's Website";
        document.getElementById("lang-en").textContent = "English";
        document.getElementById("lang-it").textContent = "Italian";
        document.getElementById("fst-sec-ttl").textContent = "Welcome";
        document.getElementById("fst-sec-txt").textContent = "Welcome to my Website! I'm known online as 'justLucky'. Explore my site to learn more about me and my life.";
        document.getElementById("snd-sec-ttl").textContent = "About Me";
        document.getElementById("snd-sec-txt").textContent = "Hi! My nickname is justLucky, but my real name is Riccardo, I'm a Roman Catholic and I love Jesus; my favorite passage in the Bible is Matthew 6:25-34! I have been actively learning and programming in Python since August 2022, I know the basics of C/C++, Java and Javascript. I also love networking and cybersecurity. For paid commissions that require programming in Python 3.10 or higher, feel free to contact me on Telegram or Instagram, you can also contact me on my Email, but I don't check it often. I love playing chess, although I'm not that good, my favorite openings are the London System and the Caro-Kann Defense.";
        document.getElementById("trd-sec-ttl").textContent = "Contact Me";
        document.getElementById("trd-sec-txt").textContent = "If you want to get in touch with me, here are my contact details:";
        document.getElementById("footer-txt").innerHTML = "justLucky's Website"
    }
}
