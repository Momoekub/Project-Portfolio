// เพิ่ม smooth scrolling effect
document.addEventListener('DOMContentLoaded', function () {
    // เพิ่มการทำงานเมื่อโหลดหน้าเสร็จ
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').replace('.html', '');
            if (targetPage !== window.location.pathname.replace('.html', '')) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});

// เพิ่ม animation เมื่อ hover ที่ project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card, .team-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});