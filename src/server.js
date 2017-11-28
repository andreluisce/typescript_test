var pgPromise = require('pg-promise');
var R = require('ramda');
var request = require('request-promise');
// Limit the amount of debugging of SQL expressions
var trimLogsSize = 200;
;
// Actual database options
var options = {
    user: "postgres",
    password: "admin",
    host: 'localhost',
    port: 5432,
    database: 'lovelystay_test'
};
console.info('Connecting to the database:', options.user + "@" + options.host + ":" + options.port + "/" + options.database);
var pgpDefaultConfig = {
    promiseLib: require('bluebird'),
    // Log all querys
    query: function (query) {
        console.log('[SQL   ]', R.take(trimLogsSize, query.query));
    },
    // On error, please show me the SQL
    error: function (err, e) {
        if (e.query) {
            console.error('[SQL   ]', R.take(trimLogsSize, e.query), err);
        }
    }
};
;
var pgp = pgPromise(pgpDefaultConfig);
var db = pgp(options);
db.none('CREATE TABLE IF NOT EXISTS github_users (id BIGSERIAL, login TEXT UNIQUE, name TEXT, company TEXT)')
    .then(function () { return request({
    uri: 'https://api.github.com/users/gaearon',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
}); })
    .then(function (data) { return db.one('INSERT INTO github_users (login) VALUES ($[login]) RETURNING id', data); }).then(function (_a) {
    var id = _a.id;
    return console.log(id);
})
    .then(function () { return process.exit(0); });
