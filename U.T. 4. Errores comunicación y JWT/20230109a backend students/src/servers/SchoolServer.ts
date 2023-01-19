import express from "express";
import cors from "cors";
import SchoolRepositoryInterface from "../repositories/SchoolRepositoryInterface";
import Student from "../entities/Student";
import SchoolRepositoryMock from "../repositories/SchoolRepositoryMock";

export default class SchoolServer {
    private app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(cors());

        this.configureRoutes();
    }

    public listen() {
        this.app.listen(80, () => console.log('Server listening on port 80'));
    }

    private configureRoutes() {
        this.app.get('/api/students', this.retrieveAndSendStudents.bind(this));
    }

    private async retrieveAndSendStudents(req: express.Request, res: express.Response) {
        setTimeout(
            async () => {
                if (this.isLoginError()) {
                    res.status(401).json({ ok: false, message: 'User has not logged properly' });
                    return;
                }

                if (this.isError()) {
                    res.status(500).json({ ok: false, message: 'There is an error on the server database' });
                    return;
                }

                const repository: SchoolRepositoryInterface = new SchoolRepositoryMock();
                const students: Student[] = await repository.retrieveStudents();
                res.status(200).json({ ok: true, students });
            },
            5000
        );
    }

    private isError(): boolean {
        return Math.random() < 0.2 ? true : false;
    }

    private isLoginError(): boolean {
        return Math.random() < 0.2 ? true : false;
    }
}