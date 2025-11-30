
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
        
        const orderButtons = document.querySelectorAll('.order-btn');
        orderButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemName = e.target.closest('.menu-card-content').querySelector('h3').textContent;
                alert(`Added ${itemName} to your cart!`);
            });
        });
        
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
   