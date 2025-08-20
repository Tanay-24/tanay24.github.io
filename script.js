document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('animated'); // Add the initial class
        observer.observe(section); // Start observing the section
    });

    // Modal functionality for projects
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll('.project').forEach(project => {
        project.querySelector('.btn').addEventListener('click', function (e) {
            e.preventDefault();
            const projectName = project.querySelector('h3').innerText;

            let content = '';
            // Define project content
            if (projectName === "OurNews") {
                content = `
                    <h2>Our News / Asa No Nettowaku</h2>
                    <p><strong>Duration:</strong> Aug 2022 - Nov 2022</p>
                    <p><strong>Associated with:</strong> University of Mumbai</p>
                    <p>This advanced mobile application, developed in Java and XML with Firebase for data storage, helps users stay informed about news, articles, and interesting events around the world. Users can customize the app's theme and switch between multiple languages, including Marathi, English, Japanese, Hindi, Gujarati, and Malayalam.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome Page.jpeg" alt="Welcome Page">
                        <img src="./images/Registration.jpeg" alt="Registration">
                        <img src="./images/News Interface.jpeg" alt="News Interface">
                        <img src="./images/Marathi Language Interface.jpeg" alt="Marathi Language Interface">
                        <img src="./images/Light Theme Interface.jpeg" alt="Light Theme Interface">
                    </div>
                `;
            } else if (projectName === "FleetFusion") {
                content = `
                    <h2>FleetFusion</h2>
                    <p><strong>Duration:</strong> Jan 2024 - May 2024</p>
                    <p><strong>Associated with:</strong> Savitribai Phule Pune University</p>
                    <p>This web application, built using HTML, CSS, and JavaScript with MySQL for data storage, aims to improve operational efficiency, reduce costs, and enhance customer satisfaction for businesses and logistics providers. By automating vehicle management, order processing, and notifications, it addresses the inefficiencies of manual documentation and record-keeping.</p>
                    <div id="modalImages">
                        <img src="./images/1 imp.jpeg">
                        <img src="./images/2.jpeg">
                        <img src="./images/Provider Login imp.jpeg">
                        <img src="./images/4.jpeg">
                        <img src="./images/4A.jpeg">
                        <img src="./images/6B imp.jpeg">
                        <img src="./images/User Login imp.jpeg">
                        <img src="./images/8.jpeg">
                        <img src="./images/8A.jpeg">
                        <img src="./images/8B.jpeg">
                        <img src="./images/8C.jpeg">
                        <img src="./images/8D.jpeg">
                    </div>
                `;
            } else if (projectName === "Smart City Hub - Nashik") {
                content = `
                    <h2>Smart City Hub - Nashik</h2>
                    <p><strong>Duration:</strong> July 2024 - Oct 2024</p>
                    <p>This research-based mobile app is developed using Java and XML with Firebase for data storage. It aims to enhance urban living by providing real-time information, optimizing city services, and promoting citizen engagement through a user-friendly interface accessible on smartphones and tablets.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome page 3.jpg">
                        <img src="./images/Main City Selection page.jpg">
                        <img src="./images/Places.jpg">
                        <img src="./images/Place Information.jpg">
                        <img src="./images/Sort places.jpg">
                        <img src="./images/Mapping.jpg">
                    </div>
                `;
            } else if (projectName === "One Platform Transport Services") {
                content = `
                    <h2>One Platform Transport Services</h2>
                    <p><strong>Duration:</strong> Jan 2023 - Apr 2023</p>
                    <p>Developed as a Windows application, this efficient ticket booking system allows users to view train, bus, and flight timetables and book tickets easily. It features a user-friendly interface that simplifies the booking process, while travel and transport company admins can register their companies with ease.</p>
                    <div id="modalImages">
                        <img src="./images/Welcome page (2).jpeg">
                        <img src="./images/Choose Login.jpeg">
                        <img src="./images/Admin Register.jpeg">
                        <img src="./images/Company Register and Login2.jpeg">
                        <img src="./images/User Book Ticket Booking.jpeg">
                        <img src="./images/User Book Ticket Booking2.jpeg">
                        <img src="./images/Admin Login.jpeg">
                        <img src="./images/Add Buses, Edit and Show Buses.jpeg">
                    </div>
                `;
            } else if (projectName === "Weather Website") {
                content = `
                    <h2>Weather Website</h2>
                    <p><strong>Duration:</strong> Oct 2022 - Oct 2022</p>
                    <p>I have completed a comprehensive weather project that includes features such as displaying humidity, wind speed, and forecasts for different locations. The project also integrates a location search functionality, allowing users to easily retrieve weather information for specific areas.</p>
                    <div id="modalImages">
                        <img src="./images/Wether Current Location (1).jpeg">
                        <img src="./images/Wether Current Location (2).jpeg">
                        <img src="./images/Wether Current Location (3).jpeg">
                    </div>
                `;
            } else if (projectName === "OutfitXpert") {
                content = `
                    <h2>OutfitXpert</h2>
                    <p><strong>Duration:</strong> Jan 2025 - Jun 2095</p>
                    <p>The AI-Powered Fashion Styling System addresses these challenges by providing a webbased platform where users can visually generate outfit combinations by selecting from a
predefined set of clothing images. The system bridges the gap between fashion technology and user-friendly styling tools by
offering an image-based, culturally aware, and interactive solution.</p>
                    <div id="modalImages">
                        <img src="./images/Home Page-Outfit.png">
                        <img src="./images/Home Page Footer-Outfit.png">
                        <img src="./images/Sigup or Signin-Outfit.png">
                        <img src="./images/Home Page Cloth Suggestion-Outfit.png">
                        <img src="./images/Home Page Cloth-Outfit.png">
                        <img src="./images/Feedback-Outfit.png">
                    </div>
                `;
            } else if (projectName === "Manual Testing – Parabank Website") {
                content = `
                    <h2>OutfitXpert</h2>
                    <p><strong>Duration:</strong> Jun 2025 - Jun 2095</p>
                    <p>The AI-Powered Fashion Styling System addresses these challenges by providing a webbased platform where users can visually generate outfit combinations by selecting from a
predefined set of clothing images. The system bridges the gap between fashion technology and user-friendly styling tools by
offering an image-based, culturally aware, and interactive solution.</p>
                    <div id="modalImages">
                        <img src="./images/Home Page-Outfit.png">
                        <img src="./images/Home Page Footer-Outfit.png">
                        <img src="./images/Sigup or Signin-Outfit.png">
                        <img src="./images/Home Page Cloth Suggestion-Outfit.png">
                        <img src="./images/Home Page Cloth-Outfit.png">
                        <img src="./images/Feedback-Outfit.png">
                    </div>
                `;
            }

            modalContent.innerHTML = content;
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });

    // Smooth scroll and focus effect
    const leadershipSection = document.getElementById("leadership");
    const contactSection = document.getElementById("contact");

    const scrollOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("focused");
                window.scrollTo({
                    top: entry.target.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                entry.target.classList.remove("focused");
            }
        });
    }, scrollOptions);

    // Observe the sections for smooth scroll
    scrollObserver.observe(leadershipSection);
    scrollObserver.observe(contactSection);

    // Modal functionality for certificates
    const certModal = document.createElement('div');
    certModal.classList.add('modal');

    const certModalContent = document.createElement('img');
    certModalContent.classList.add('modal-content');
    certModal.appendChild(certModalContent);
    document.body.appendChild(certModal);

    // Get all certificate images
    const certificateImages = document.querySelectorAll('.certificate-image');

    // Loop through each image and add click event
    certificateImages.forEach((img) => {
        img.addEventListener('click', () => {
            // Set the modal content to the clicked image
            certModalContent.src = img.src;
            certModal.style.display = 'block'; // Show the modal
        });
    });

    // Close certificate modal when the user clicks on it
    certModal.addEventListener('click', () => {
        certModal.style.display = 'none'; // Hide the modal
    });

    // Optional: Close certificate modal when pressing the 'Esc' key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            certModal.style.display = 'none'; // Hide the modal
        }
    });

    // Horizontal auto-scroll for technical skills
    const skillsContainer = document.querySelector('.skills-container');
    const skills = document.querySelector('.skills');

    skillsContainer.addEventListener('mouseenter', () => {
        skills.style.animationPlayState = 'paused'; // Pause on hover
    });

    skillsContainer.addEventListener('mouseleave', () => {
        skills.style.animationPlayState = 'running'; // Resume on mouse leave
    });
});

