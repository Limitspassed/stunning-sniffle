function toggleProjectDescription(project) {
    // Find the project description within the clicked project element
    const description = project.querySelector('.project-description');

    // Toggle the visibility of the description
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
