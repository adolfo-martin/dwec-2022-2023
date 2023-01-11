import Student from './entities/Student';

class App {
    run() {
        const student = new Student('46546-56', 'Mónica', 'Martínez');
        console.log(student);
    }
}

const app = new App();
app.run();