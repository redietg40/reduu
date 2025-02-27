document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Project One", description: "A cool project." },
        { title: "Project Two", description: "Another amazing project." },
        { title: "Project Three", description: "Yet another cool project." }
    ];

    const projectContainer = document.getElementById("project-container");

    projects.forEach(proj => {
        const div = document.createElement("div");
        div.classList.add("project-card");
        div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
        projectContainer.appendChild(div);
    });

    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your message!");
    });
});
