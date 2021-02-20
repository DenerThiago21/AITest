const knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: 'your_host',
        user: 'your_user',
        password: 'your_password',
        database: 'your_DB'
    }
});

module.exports = knex