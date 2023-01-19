export default class StudentsService {
    async retrieveStudents() {
        const url = 'http://10.88.72.41:80/api/students';

        // Comprueba si el servidor está encendido
        let response;
        try {
            response = await fetch(url);
        } catch (error) {
            throw new Error(`Cannot retrieve students: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve students: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve students: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve students: ${data.message}`);
        }

        const students = data.students;
        return students;
    }
}