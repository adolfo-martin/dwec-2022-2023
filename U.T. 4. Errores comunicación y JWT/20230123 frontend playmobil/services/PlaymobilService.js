export default class PlaymobilService {

    async retrieveSeries(token) {
        const url = 'http://10.88.72.41:8082/api/series';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            const method = 'get';

            response = await fetch(url, { method, headers });
        } catch (error) {
            throw new Error(`Cannot retrieve playmobil series: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve playmobil series: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve playmobil series: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve playmobil series: ${data.message}`);
        }

        return data.series;
    }


    async retrievePlaymobilBoxesBySerieUuid(token, serieUuid) {
        const url = `http://10.88.72.41:8082/api/serie/${serieUuid}/boxes`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            const method = 'get';

            response = await fetch(url, { method, headers });
        } catch (error) {
            throw new Error(`Cannot retrieve playmobil boxes: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve playmobil boxes: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve playmobil boxes: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve playmobil boxes: ${data.message}`);
        }

        return data.boxes;
    }
}