document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll('.project').forEach(project => {
        project.querySelector('.btn').addEventListener('click', function (e) {
            e.preventDefault();
            const projectName = project.querySelector('h3').innerText;

            let content = '';

            if (projectName === "OurNews") {
                content = `
                    <h2>Our News / Asa No Nettowaku</h2>
                    <p><strong>Duration:</strong> Sep 2022 - Dec 2022</p>
                    <p><strong>Associated with:</strong> University of Mumbai</p>
                    <p>The Asa No Nettowaku application is an advanced and informative tool helping users stay updated with news and articles from around the world. Users can change the app's theme and switch languages (Marathi, English, Japanese, Hindi, Gujarati, Malayalam).</p>
                    <div id="modalImages">
                        <img src="images/Welcome Page.jpg" alt="Welcome Page">
                        <img src="images/registration.jpg" alt="Registration">
                        <img src="images/News Interface.jpg" alt="News Interface">
                         <img src="images/Marathi Language Interface.jpg" alt="Marathi Language Interface">
                        <img src="images/Light Theme Interface.jpg" alt="Light Theme Interface">
                    </div>
                `;
            } else if (projectName === "FleetFusion") {
                content = `
                    <h2>FleetFusion</h2>
                    <p><strong>Duration:</strong> Jan 2024 - May 2024</p>
                    <p><strong>Associated with:</strong> Savitribai Phule Pune University</p>
                    <p>The Fleet Fusion project develops a computerized system for managing transport operations efficiently. The system automates vehicle management, order processing, and notifications.</p>
                    <div id="modalImages">
                        <img src="images/fleetfusion1.jpg" alt="FleetFusion Screenshot 1">
                        <img src="images/fleetfusion2.jpg" alt="FleetFusion Screenshot 2">
                    </div>
                `;
            } else if (projectName === "Smart City Hub - Nashik") {
                content = `
                    <h2>Smart City Hub - Nashik</h2>
                    <p><strong>Duration:</strong> July 2024 - Present</p>
                    <p>A research-based mobile app designed to enhance urban living.</p>
                    <div id="modalImages">
                        <img src="images/smartcity1.jpg" alt="Smart City Hub Screenshot 1">
                        <img src="images/smartcity2.jpg" alt="Smart City Hub Screenshot 2">
                    </div>
                `;
            } else if (projectName === "One Platform Transport Services") {
                content = `
                    <h2>One Platform Transport Services</h2>
                    <p><strong>Duration:</strong> Jan 2023 - Apr 2023</p>
                    <p>This Windows application offers an efficient ticket booking system, allowing users to view train, bus, and flight timetables and book tickets easily.</p>
                    <div id="modalImages">
                        <img src="images/oneplatform1.jpg" alt="One Platform Screenshot 1">
                    </div>
                `;
            }

            modalContent.innerHTML = content;
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
});
