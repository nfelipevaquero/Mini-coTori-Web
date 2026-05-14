const cursor = document.getElementById('lariat-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    const rot = (Math.random() - 0.5) * 6;
    cursor.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
});

const text = "Sóc en Lariat. He analitzat el teu sistema... massa color. Massa ordre. Descarrega el fitxer i entra al meu caos.";
let i = 0;
const target = document.getElementById("typed-text");

function typeEffect() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && target.innerHTML === "") {
        typeEffect();
    }
}, { threshold: 0.5 });
observer.observe(document.querySelector('.action'));