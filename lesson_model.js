const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'edu',
    password: 'melih',
    port: 5432,
});


const getLessons = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM lesson')
            .then(res => {
                console.log(res.rows)
                resolve(res.rows);

            })
            .catch(e => console.error(e.stack))
    })
}

module.exports = {
    getLessons
}