const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'postgres',
//     host: '127.0.0.1',
//     database: 'edu',
//     password: 'melih',
//     port: 5432,
// });
const pool = new Pool({
    user: 'postgres',
    host: 'ooskiwjztdcgfybzukif.db.eu-central-1.nhost.run',
    database: 'ooskiwjztdcgfybzukif',
    password: 'xcHzTxwKqkyBaa1C',
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