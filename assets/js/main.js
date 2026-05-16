/* =========================
               EXPLOSION EFFECT
            ========================= */

const explosion = document.getElementById("explosion");

for (let i = 0; i < 120; i++) {
    const particle = document.createElement("span");

    const angle = Math.random() * 360;
    const distance = 200 + Math.random() * 500;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    particle.style.animationDelay = Math.random() * 0.3 + "s";

    explosion.appendChild(particle);
}

/* =========================
               CURSOR TRAILS
            ========================= */

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");

    trail.className = "trail";

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
});

/* =========================
               PARALLAX LOGO
            ========================= */

const logo = document.querySelector(".logo");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    logo.style.transform = `
                    translate(-50%, -50%)
                    rotateY(${-x}deg)
                    rotateX(${y}deg)
                    `;
});
