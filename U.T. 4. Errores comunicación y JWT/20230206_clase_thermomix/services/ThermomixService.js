export default class ThermomixServices {

    async retrieveDishesByBookId(bookId, token) {
        const url = `http://10.88.72.91:8082/api/book/${bookId}/dishes`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            const method = 'get';

            response = await fetch(url, { method, headers });
        } catch (error) {
            throw new Error(`Cannot retrieve book dishes: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve book dishes: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve book dishes: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve book dishes: ${data.message}`);
        }

        return data.dishes;
    }

    async retrieveDish(dishId, token) {
        const url = `http://10.88.72.91:8082/api/dish/${dishId}`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            const method = 'get';

            response = await fetch(url, { method, headers });
        } catch (error) {
            throw new Error(`Cannot retrieve dish: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve dish: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve dish: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve dish: ${data.message}`);
        }

        return data.dish;
    }
}