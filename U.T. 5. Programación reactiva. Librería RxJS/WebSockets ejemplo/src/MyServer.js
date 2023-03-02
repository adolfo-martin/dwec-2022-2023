const PORT = require('./config').SECURE_PORT;
const messages = require('./config').messages;

module.exports = class MyServer {
    _app = undefined;
    _server = undefined;
    _websocketServer = undefined;


    constructor() {
        const path = require('path');
        const express = require('express');
        const cors = require('cors');
        this._app = express();
        this._server = require('http').Server(this._app);

        const WebSocketServer = require('websocket').server;
        this._websocketServer = new WebSocketServer({
            httpServer: this._server,
            autoAcceptConnections: false
        })

        this._app.set('port', PORT);
        this._app.use(cors());
        this._app.use(express.json());
        this._app.use(express.static(path.join(__dirname, './public')));

        this._setupSendRandomMessage();
    }

    listen() {
        const port = this._app.get('port');
        this._server.listen(port, () => {
            console.log(`Servidor iniciado en el puerto: ${port}`);
        })
    }

    _setupSendRandomMessage() {
        this._websocketServer.on('request', request => {
            const connection = request.accept(null, request.origin);

            const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

            let timeAccumulator = 0;
            for (let i = 1; i <= 1000; i++) {
                const miliseconds = getRandom(1000, 5000);
                timeAccumulator += miliseconds

                setTimeout(() => {
                    const position = i % messages.length;
                    const message = `Publicidad ${i}: ${messages[position]}`;
                    console.log('Mensaje enviado:', message);
                    connection.sendUTF(message);
                }, timeAccumulator);
            }

            connection.on('message', message => {
                console.log(message.utf8Data);
            });

            connection.on('close', (reasonCode, description) => {
                console.log('El cliente se desconecto');
            });
        });
    }

}