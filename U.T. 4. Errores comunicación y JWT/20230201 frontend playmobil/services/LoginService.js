export default class LoginService {

    async validateUsernameAndPasswordAndRetrieveToken(username, password) {
        const url = 'http://10.88.72.91:8081/api/login_user';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const method = 'post';
            const headers = {
                'content-type': 'application/json',
                accept: 'application/json'
            };
            const body = JSON.stringify({ username, password });

            response = await fetch(url, { method, headers, body });
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot validate user: ${data.message}`);
        }

        return data.accessToken;
    }

}