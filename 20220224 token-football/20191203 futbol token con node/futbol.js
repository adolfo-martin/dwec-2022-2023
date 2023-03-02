'use strict';

const fetch = require('node-fetch'); //npm install node-fetch

const parametros = {
    method: 'get',
    headers: {
        //'Authorization': `Bearer ${MEDIUM_ACCESS_TOKEN}`,
        //'Content-type': 'application/json',
        //'Accept': 'application/json',
        //'Accept-Charset': 'utf-8',
        'X-Auth-Token': '0d21b05387dc403aae49c1c605925176'
    }
}

fetch('http://api.football-data.org/v2/teams/78', parametros)
    .then(function(response) {
        if (!response.ok) {
            throw new Error(`Se ha producido el error ${response.status}`);
        }
        return response.json();
    })
    .then(console.log)
    .catch(console.log);

    
