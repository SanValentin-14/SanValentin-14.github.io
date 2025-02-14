document.body.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    heart.textContent = '💙';
    heart.style.position = 'absolute';
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    heart.style.userSelect = 'none';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUp 3s ease-out';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
});

const style = document.createElement('style');
style.textContent = `
.floating-heart {
    position: absolute;
    animation: floatUp 3s ease-out;
    color: #00BFFF;
    opacity: 0.8;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-150px) scale(1.5);
        opacity: 0;
    }
}`;

document.head.appendChild(style);
