// subjectSelection.js

function selectSubjects(event) {
    event.preventDefault();

    const subjects = document.getElementById('subjects').value;
    const proBonoClasses = document.getElementById('proBonoClasses').value;
    const proBonoStudents = document.getElementById('proBonoStudents').value;

    // Placeholder for actual subject and class selection logic
    // This would typically involve making an API call to your backend
    console.log('Subjects and Classes:', { subjects, proBonoClasses, proBonoStudents });

    // Simulating a successful subject and class selection
    alert('Subjects and classes specified successfully!');
    window.location.href = 'donorDashboard.html';
}
