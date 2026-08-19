// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================


// =========================================
// 1. SCROLL ANIMATION
// =========================================

const hiddenElements = document.querySelectorAll(".hidden");

const scrollObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach((element) => {

    scrollObserver.observe(element);

});



// =========================================
// 2. PROGRAMMING LANGUAGE PROGRESS BARS
// =========================================

const languagesSection = document.querySelector("#languages");

const languageObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting) {

            document.querySelector(".c").style.width = "70%";

            document.querySelector(".html").style.width = "50%";

            document.querySelector(".css").style.width = "30%";

            document.querySelector(".cpp").style.width = "60%";

            document.querySelector(".js").style.width = "20%";

            document.querySelector(".python").style.width = "75%";

            languageObserver.unobserve(languagesSection);
        }

    },
    {
        threshold: 0.3
    }
);

if (languagesSection) {

    languageObserver.observe(languagesSection);

}


// =========================================
// 3. DARK / LIGHT MODE
// =========================================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeButton.textContent = "🌙";

    } else {

        themeButton.textContent = "☀️";

    }

});


// =========================================
// 4. PROFILE PICTURE POPUP
// =========================================

const profilePic = document.getElementById("profilePic");

const profileModal = document.getElementById("profileModal");

const closeProfile = document.querySelector(".close-profile");


profilePic.addEventListener("click", () => {

    profileModal.style.display = "flex";

});


closeProfile.addEventListener("click", () => {

    profileModal.style.display = "none";

});


profileModal.addEventListener("click", (event) => {

    if (event.target === profileModal) {

        profileModal.style.display = "none";

    }

});


// =========================================
// 5. CLOSE PROFILE WITH ESC KEY
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        profileModal.style.display = "none";

    }

});


// =========================================
// 6. SCROLL TO TOP BUTTON
// =========================================

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// 7. TYPING EFFECT
// =========================================

const terminalText = document.querySelector(".terminal-cursor");

let typingText = " Welcome to my portfolio_";

let typingIndex = 0;

function typeTerminalText() {

    if (terminalText) {

        terminalText.innerHTML =
            '<span class="terminal-green">></span> ';

        typingIndex = 0;

        typeNextCharacter();

    }

}


function typeNextCharacter() {

    if (typingIndex < typingText.length) {

        terminalText.innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeNextCharacter, 70);

    }

}


setTimeout(typeTerminalText, 1200);


// =========================================
// 8. PROJECT CARD ANIMATION
// =========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});


// =========================================
// 9. CERTIFICATE CARD ANIMATION
// =========================================

const certificateCards =
    document.querySelectorAll(".certificate-card");

certificateCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});


// =========================================
// 10. SAVE THEME
// =========================================

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeButton.textContent = "🌙";

} else {

    themeButton.textContent = "☀️";

}


// Save theme when clicked

themeButton.addEventListener("click", () => {

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});
// ===== HOME TYPING ANIMATION =====

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const typingWords = [
        "Second Year Student",
        "Web Developer",
        "Python Learner",
        "AI & ML Enthusiast"
    ];

    let currentWord = 0;
    let currentLetter = 0;
    let isDeleting = false;

    function typeHomeText() {

        const word = typingWords[currentWord];

        if (!isDeleting) {

            typingElement.textContent =
                word.substring(0, currentLetter + 1);

            currentLetter++;

            if (currentLetter === word.length) {

                isDeleting = true;

                setTimeout(typeHomeText, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                word.substring(0, currentLetter - 1);

            currentLetter--;

            if (currentLetter === 0) {

                isDeleting = false;

                currentWord++;

                if (currentWord === typingWords.length) {
                    currentWord = 0;
                }
            }
        }

        setTimeout(
            typeHomeText,
            isDeleting ? 50 : 100
        );
    }

    typeHomeText();
}
// ===== FUTURISTIC TECH PARTICLE NETWORK =====

const network = document.getElementById("tech-network");

const symbols = [
    "</>",
    "{}",
    "01",
    "10",
    "AI",
    "ML",
    "Python",
    "C++",
    "SQL",
    "HTML",
    "CSS",
    "JS",
    "//",
    "&&",
    "||",
    "λ",
    "π",
    "⚡"
];

const particles = [];

const particleCount = 45;

// Create particles
for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("div");

    particle.classList.add("tech-particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    network.appendChild(particle);

    particles.push(particle);
}

// Create floating coding symbols
function createSymbol() {

    const symbol = document.createElement("div");

    symbol.classList.add("tech-symbol");

    symbol.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    symbol.style.left =
        Math.random() * 100 + "%";

    symbol.style.animationDuration =
        Math.random() * 8 + 10 + "s";

    network.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 20000);
}

setInterval(createSymbol, 1000);


// Create connecting lines using canvas
const canvas = document.createElement("canvas");

canvas.style.position = "absolute";
canvas.style.inset = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";

network.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// Animate network lines
function drawConnections() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const positions = particles.map(p => {

        const rect = p.getBoundingClientRect();

        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };

    });

    for (let i = 0; i < positions.length; i++) {

        for (let j = i + 1; j < positions.length; j++) {

            const dx =
                positions[i].x - positions[j].x;

            const dy =
                positions[i].y - positions[j].y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {

                ctx.beginPath();

                ctx.moveTo(
                    positions[i].x,
                    positions[i].y
                );

                ctx.lineTo(
                    positions[j].x,
                    positions[j].y
                );

                ctx.globalAlpha =
                    1 - distance / 150;

                ctx.lineWidth = 0.6;

                ctx.stroke();

                ctx.globalAlpha = 1;
            }
        }
    }

    requestAnimationFrame(drawConnections);
}

drawConnections();
const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(bar => {

    const target = parseInt(bar.dataset.progress);
    const percentage = bar.closest(".skill").querySelector(".percentage");

    let current = 0;

    const counter = setInterval(() => {

        current++;

        percentage.textContent = current + "%";

        if (current >= target) {
            clearInterval(counter);
        }

    }, 25);
});

let count = 0;

function increaseCount() {

    count++;
    document.getElementById("count").textContent = count;

}

function decreaseCount() {

    count--;
    document.getElementById("count").textContent = count;

}
/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});
/* =========================
   ABOUT ME SCROLL ANIMATION
========================= */

const aboutSection = document.querySelector("#about");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    aboutSection.classList.remove("hidden");
                    aboutSection.classList.add("show");

                    aboutObserver.unobserve(aboutSection);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    aboutObserver.observe(aboutSection);
}
// =========================================
// EXTRA FUTURISTIC BACKGROUND ANIMATIONS
// =========================================

const extraBackground =
    document.getElementById("extra-tech-background");


// -----------------------------------------
// FALLING CODE
// -----------------------------------------

const codeSymbols = [
    "01",
    "10",
    "</>",
    "{}",
    "[]",
    "AI",
    "ML",
    "C++",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JS",
    "//",
    "&&",
    "||",
    "λ",
    "π",
    "0101"
];

function createFallingCode() {

    const code = document.createElement("div");

    code.className = "falling-code";

    code.textContent =
        codeSymbols[
            Math.floor(Math.random() * codeSymbols.length)
        ];

    code.style.left =
        Math.random() * 100 + "%";

    code.style.animationDuration =
        Math.random() * 8 + 8 + "s";

    code.style.fontSize =
        Math.random() * 7 + 10 + "px";

    extraBackground.appendChild(code);

    setTimeout(() => {
        code.remove();
    }, 18000);
}

setInterval(createFallingCode, 500);


// -----------------------------------------
// SHOOTING PARTICLES
// -----------------------------------------

function createShootingParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "shooting-particle";

    particle.style.left =
        Math.random() * 80 + "%";

    particle.style.top =
        Math.random() * 80 + "%";

    extraBackground.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 4500);
}

setInterval(createShootingParticle, 3500);


// -----------------------------------------
// GEOMETRIC SHAPES
// -----------------------------------------

for (let i = 0; i < 8; i++) {

    const shape =
        document.createElement("div");

    shape.className =
        "tech-shape " +
        (i % 2 === 0
            ? "circle-shape"
            : "square-shape");

    shape.style.left =
        Math.random() * 100 + "%";

    shape.style.top =
        Math.random() * 100 + "%";

    shape.style.animationDelay =
        Math.random() * 8 + "s";

    extraBackground.appendChild(shape);
}


// -----------------------------------------
// TWINKLING STARS
// -----------------------------------------

for (let i = 0; i < 60; i++) {

    const star =
        document.createElement("div");

    star.className =
        "tech-star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    extraBackground.appendChild(star);
}


// -----------------------------------------
// DIGITAL CIRCUIT LINES
// -----------------------------------------

function createCircuit() {

    const line =
        document.createElement("div");

    line.className =
        "circuit-line";

    line.style.left =
        Math.random() * 100 + "%";

    line.style.top =
        Math.random() * 100 + "%";

    extraBackground.appendChild(line);

    setTimeout(() => {
        line.remove();
    }, 9000);
}

setInterval(createCircuit, 1800);