// script for shlogans sliding

const shlogan = document.getElementsByClassName("shlogan");
var i = 0;

// add shlogans with , separated inside double quotation mark 
shlogans = [
    "ಸ್ವಾತಂತ್ರ‍್ಯ ಎಂದರೆ ಬಿಳಿಯ ದೊರೆಗಳು ಖಾಲಿ ಮಾಡುವ ಕುರ್ಚಿಗಳಲ್ಲಿ ಕಂದು ದೊರೆಗಳು ಕೂರುವುದಲ್ಲ, ದೇಶಕ್ಕಾಗಿ ದುಡಿಯುತ್ತಿರುವ ರೈತ-ಕಾರ್ಮಿಕರ ವಿಮೋಚನೆಯೇ ನಿಜವಾದ ಸ್ವಾತಂತ್ರ‍್ಯ ಅದಕ್ಕಾಗಿಯೇ ನಾನು ಹೋರಾಡುತ್ತೇನೆ...\r\n-ಭಗತ್ ಸಿಂಗ್",
    "ಶಿಕ್ಷಣದ ಉದ್ದೇಶವು ಜನರನ್ನು ನೈತಿಕಗೊಳಿಸುವುದು ಮತ್ತು ಸಾಮಾಜಿಕಗೊಳಿಸುವುದು\r\n-ಡಾ. ಬಿ. ಆರ್. ಅಂಬೇಡ್ಕರ್",
    "ಸಮತೆ ಮಮತೆ ಕರುಣೆ ನಮ್ಮ ಉಸಿರಾಗಲಿ\r\n-ಬುದ್ಧ",
    "ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆಯನ್ನು ಯಾವ ಕಾರಣಕ್ಕೂ ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳಿಗೆ ವಹಿಸಬಾರದು. ಶಿಕ್ಷಣದ ಆಡಳಿತ ಮತ್ತು ನಿರ್ವಹಣೆ ಸರ್ಕಾರದ ಕೈಯಲ್ಲಿಯೇ ಇರಬೇಕು. ಎಲ್ಲಾ ದೇಶವಾಸಿಗಳಿಗೂ ಜ್ಞಾನವನ್ನು ಸಮಾನವಾಗಿ ಹಂಚುವ ಶಿಕ್ಷಣ ಪದ್ಧತಿ ಬೇಕು.\r\n-ಮಹಾತ್ಮ ಜ್ಯೋತಿಬಾ ಫುಲೆ",
    "ನಮ್ಮೆಲ್ಲರ ಶತ್ರು ಒಂದೇ ಅದನ್ನು ನಾವೆಲ್ಲ ಹೊಡೆದು ಓಡಿಸೋಣ ಅದೆಂದರೆ ಅಜ್ಞಾನ ಕತ್ತಲು..\r\n-ಸಾವಿತ್ರಿ ಬಾಯಿ ಫುಲೆ",
    "ದಯವಿಲ್ಲದ ಧರ್ಮವಾವುದಯ್ಯಾ? ದಯವೇ ಬೇಕು ಸಕಲ ಪ್ರಾಣಿಗಳಲ್ಲಿಯೂ ದಯವೇ ಧರ್ಮದ ಮೂಲವಯ್ಯಾ ಕೂಡಲಸಂಗಯ್ಯನಂತಲ್ಲದೊಲ್ಲನಯ್ಯಾ...\r\n-ಬಸವಣ್ಣ",
    "ಮಧ್ಯರಾತ್ರಿ ಒಂಟಿ ಮಹಿಳೆ ನಿರ್ಭಯವಾಗಿ ಓಡಾಡುವ ಪರಿಸ್ಥಿತಿ ಬಂದಾಗ ದೇಶ ಸ್ವತಂತ್ರಗೊಂಡಿದೆ ಎಂದು ಅರ್ಥ!!\r\n-ಮಹಾತ್ಮ ಗಾಂಧೀ",
    "ಬಂಡವಾಳವೆಂದರೆ ನಿರ್ಜೀವ ಶ್ರಮ. ರಕ್ತಪಿಶಾಚಿಯ ಹಾಗೆ ಅದು ಜೀವಂತ ಶ್ರಮವನ್ನು ಹೀರಿ ಬದುಕುತ್ತದೆ. ಅದು ಹೆಚ್ಚು ಕಾಲ ಬದುಕಿದಷ್ಟೂ ಹೆಚ್ಚೆಚ್ಚು ಶ್ರಮವನ್ನು ಹೀರುತ್ತದೆ.\r\n- ಕಾರ್ಲ್ ಮಾರ್ಕ್ಸ್",
    "ರಾಜಕೀಯ ಸ್ವಾತಂತ್ರ್ಯ ಎಷ್ಟೇ ಇದ್ದರೂ, ಅದು ಜನತೆಯ ಹಸಿವನ್ನು ನೀಗಿಸುವುದಿಲ್ಲ\r\n-ವ್ಲಾದಿಮೀರ್ ಲೆನಿನ್"
]

shlogan[0].textContent = shlogans[0];
setInterval(() => {
    shlogan[0].textContent = shlogans[i]
    if (i < (shlogans.length) - 1) {
        i++
    } else {
        i = 0;
    }
}, 5000);

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();



const ps = document.querySelectorAll('p');
const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
    }
});

ps.forEach(p => {
    observer.observe(p);
});

toggleButton = document.getElementById("expanded");

function readmore() {
    if (toggleButton.checked) {
        toggleButton.checked = false;
    } else {
        toggleButton.checked = true;
    }
}

// scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
