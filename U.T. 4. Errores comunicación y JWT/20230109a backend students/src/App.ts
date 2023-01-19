import Student from './entities/Student';
import SchoolRepositoryInterface from './repositories/SchoolRepositoryInterface';
import SchoolRepositoryMock from './repositories/SchoolRepositoryMock';
import SchoolServer from './servers/SchoolServer';

class App {
    async run() {
        // const repository: SchoolRepositoryInterface = new SchoolRepositoryMock();
        // const students: Student[] = await repository.retrieveStudents();
        // console.log(students);

        const server = new SchoolServer();
        server.listen();
    }
}

const app = new App();
app.run();