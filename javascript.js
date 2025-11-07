document.addEventListener('DOMContentLoaded', function() {
            const sideNav = document.getElementById('side-nav');
            const menuBtn = document.getElementById('menu-btn');
            const closeBtn = document.getElementById('close-btn');
            const navLinks = sideNav.querySelectorAll('.nav-link');

            // Function to open the side navigation
            function openNav() {
                sideNav.classList.add('open');
            }

            // Function to close the side navigation
            function closeNav() {
                sideNav.classList.remove('open');
            }

            // Open the navigation when the hamburger button is clicked
            menuBtn.addEventListener('click', openNav);

            // Close the navigation when the 'X' button is clicked
            closeBtn.addEventListener('click', closeNav);

            // Close the navigation when a link is clicked (to jump to a section)
            navLinks.forEach(link => {
                link.addEventListener('click', closeNav);
            });
            
            // Close the navigation when clicking outside of it
            document.addEventListener('click', function(event) {
                if (sideNav.classList.contains('open') && !sideNav.contains(event.target) && event.target !== menuBtn) {
                    closeNav();
                }
            });
        });