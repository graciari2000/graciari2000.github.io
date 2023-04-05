// Add smooth scrolling to navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Handle contact form submission
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const xhr = new XMLHttpRequest();

            xhr.open('POST', '/submit-form.php');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    alert('Thanks for your message! I will be in touch soon.');
                } else {
                    alert('There was a problem submitting your message. Please try again later.');
                }
            };
            xhr.send(formData);
        });
