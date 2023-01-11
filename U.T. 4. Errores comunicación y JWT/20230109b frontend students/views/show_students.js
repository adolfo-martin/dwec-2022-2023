import StudentsService from '../services/StudentsService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const view = new ShowStudentsView();
    await view.retrieveAndShowStudents();
}

class ShowStudentsView {
    async retrieveAndShowStudents() {
        try {
            const service = new StudentsService();
            const students = await service.retrieveStudents();
            console.log(students);
        } catch (error) {
            alert(`Problema al recuperar los estudiantes: ${error}`);
        }
    }
}