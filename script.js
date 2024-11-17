// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Responsive Menu Toggle
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Show Project Details in Modal
function showProjectDetails(projectId) {
    const modal = document.getElementById("projectModal");
    const projectTitle = document.getElementById("projectTitle");
    const projectDescription = document.getElementById("projectDescription");

    // Sample data for demonstration
    const projects = {
        project1: {
            title: "Project 1",
            description: "Details about Project 1.",
        },
        project2: {
            title: "Project 2",
            description: "Details about Project 2.",
        },
        project3: {
            title: "Project 3",
            description: "Details about Project 3.",
        },
    };

    projectTitle.textContent = projects[projectId].title;
    projectDescription.textContent = projects[projectId].description;

    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
});
