import express from 'express';
import cors from 'cors';

export default class CarsServer {
    constructor(repository, port) {
        this._repository = repository;
        this._port = port;

        this._app = express();
        // this._app(express.json());
        this._app(express.urlencoded({ extended: true }));

        this._configureRoutes();
    }


    run() {
        this._app.listen(this._port, () =>
            console.log(`Application listening on port ${this._port}`)
        );
    }


    _configureRoutes() {
        this._app.get('/api/cars', this._retrieveCars.bind(this));
        this._app.post('/api/cars', this._createCar.bind(this));
    }


    _retrieveCars(req, res) {
        const cars = this._repository.retrieveCars();
        res.status(200).json({ ok: true, cars });
    }

    _createCar(req, res) {
        const model = req.params.model;
        const brand = req.params.brand;
        this._repository.createCar(1, model, brand);
        res.status(200).json({ ok: true, message: `The car was created ${brand} ${model} successfully` });
    }
}