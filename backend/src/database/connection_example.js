const knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'your_user',
        password: 'your_password',
        database: 'your_DB'
    }
});

module.exports = knex