/* =========================================
   OPEN GREETING CARD
========================================= */

function openGift() {

    const giftScreen =
        document.getElementById("gift-screen");

    const mainWebsite =
        document.getElementById("main-website");


    /* Card starts disappearing */

    giftScreen.style.opacity = "0";

    giftScreen.style.transform =
        "scale(1.2)";


    /* Reveal website */

    setTimeout(function () {

        giftScreen.style.display =
            "none";

        mainWebsite.style.display =
            "block";

        window.scrollTo(0, 0);

        /* Start birthday hearts */

        startHearts();

    }, 1000);

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================
   QUOTES
========================================= */

const quotes = [

    "A mother's love is the purest form of love in the world. ❤️",

    "Life doesn't come with a manual, it comes with a mother. 🌷",

    "A mother's hug lasts long after she lets go. 🤗",

    "There is no place safer than a mother's arms. ❤️",

    "A mother's love is the greatest blessing anyone can receive. 🌸",

    "Behind every happy child is a mother who loved them endlessly. 💕",

    "Mummy, your love is my greatest strength. ❤️",

    "A mother is the heart of every home. 🌷"

];


let quoteIndex = 0;


/* =========================================
   SHOW QUOTE
========================================= */

function showQuote() {

    const quoteElement =
        document.getElementById("quote");


    if (!quoteElement) {
        return;
    }


    quoteElement.style.opacity = "0";


    setTimeout(function () {

        quoteElement.textContent =
            quotes[quoteIndex];

        quoteElement.style.opacity =
            "1";

    }, 200);

}


/* =========================================
   NEXT QUOTE
========================================= */

function nextQuote() {

    quoteIndex++;


    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }


    showQuote();

}


/* =========================================
   PREVIOUS QUOTE
========================================= */

function previousQuote() {

    quoteIndex--;


    if (quoteIndex < 0) {

        quoteIndex =
            quotes.length - 1;

    }


    showQuote();

}


/* =========================================
   AUTOMATICALLY CHANGE QUOTES
========================================= */

setInterval(function () {

    const mainWebsite =
        document.getElementById("main-website");


    if (
        mainWebsite &&
        mainWebsite.style.display === "block"
    ) {

        nextQuote();

    }

}, 5000);


/* =========================================
   FINAL SURPRISE
========================================= */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");


    if (!surprise) {
        return;
    }


    surprise.style.display =
        "block";


    createHeartExplosion();


    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================
   CREATE FLOATING HEART
========================================= */

function createHeart() {

    const heartsContainer =
        document.getElementById("hearts-container");


    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    const heartSymbols = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "🌸",
        "🌷",
        "💐"

    ];


    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 8000);

}


/* =========================================
   START FLOATING HEARTS
========================================= */

let heartInterval = null;


function startHearts() {

    if (heartInterval !== null) {

        return;

    }


    heartInterval =
        setInterval(
            createHeart,
            800
        );

}


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }

}


/* =========================================
   INITIAL QUOTE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const quoteElement =
            document.getElementById("quote");


        if (quoteElement) {

            quoteElement.textContent =
                quotes[0];

        }

    }
);