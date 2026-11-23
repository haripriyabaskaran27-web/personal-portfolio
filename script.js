
function showMessage() {
    alert("Welcome to my portfolio!");
}

const projects = [
    {
        title: "Weather Dashboard",
        description: "A website that displays real-time weather information.",
        technologies: "HTML, CSS, JavaScript"
    },
    {
        title: "Personal Portfolio",
        description: "A website to showcase my skills and projects.",
        technologies: "HTML, CSS, JavaScript"
    },
    {
        title: "Student Management System",
        description: "A system to manage student information.",
        technologies: "Java, MySQL"
    }
];

const projectList = document.getElementById("project-list");

projectList.innerHTML = "";

projects.forEach(function(project) {
    projectList.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
        </div>
    `;
});
