// Rotate logo on scroll
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    logo.style.transform = `rotate(${scrollPosition / 5}deg)`;
});

// Toggle navigation menu on logo click
logo.addEventListener("click", function() {
    logo.classList.toggle("rotate");
    document.querySelector(".menu-content").classList.toggle("show-menu");
});

// Testimonial Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

setInterval(() => {
    slides.forEach(slide => slide.style.transform = `translateX(-${100 * currentSlide}%)`);
    currentSlide = (currentSlide + 1) % totalSlides;
}, 5000);

// Wild Fractals Effect
const canvas = document.getElementById("fractals-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function mkColor(start, stop) {
    let r = rand(start, stop);
    let g = rand(start, stop);
    let b = rand(start, stop);

    return `rgb(${r},${g},${b})`;
}

function drawTree(x, y, size, angle, iteration) {
    if (iteration === 0) {
        return;
    }
    const nextSize = (size * Math.sqrt(2)) / 2;
    const x1 = x + size * Math.cos(angle);
    const y1 = y - size * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x, y);

    ctx.strokeStyle = mkColor(100, 215);

    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = mkColor(100, 215);
    ctx.fill();
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.shadowColor = mkColor(100, 215);
    const angle1 = angle - Math.PI / 4;
    const angle2 = angle + Math.PI / 4;
    const angle3 = -1 * angle1;
    const angle4 = -1 * angle2;

    const angles = [angle1, angle2, angle3, angle4];

    angles.forEach((a, idx) => {
        setTimeout(() => {
            drawTree(x1, y1, nextSize, a, iteration - 1);
        }, 150 * idx);
    });
}

function FractalishTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const initialSize = 300;
    const startX = canvas.width / 2;
    const startY = canvas.height / 2 + initialSize;
    const initialAngle = Math.PI / 2;

    drawTree(startX, startY, initialSize, initialAngle, 7);
}

FractalishTree();
