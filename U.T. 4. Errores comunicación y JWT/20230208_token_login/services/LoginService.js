export default class LoginService {
    async validateUserAndPasswordAndRetrieveToken(username, password) {
        const url = 'http://10.88.72.23:8081/api/login_user';

        let response;
        try {
            const headers = new Headers();
            headers.append('accept', 'application/json');
            headers.append('Content-Type', 'application/json');

            response = await fetch(url, {
                method: 'post',
                headers,
                body: JSON.stringify({ username, password })
            });
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