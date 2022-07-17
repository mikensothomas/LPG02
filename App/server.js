const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
//const csrf = require('csurf');
const {
    middlewareGlobal,
    csrfErrorMessage
} = require('./src/middlewares/middleware');

const sqlite3 = require('sqlite3');
const session = require('express-session');
const SqliteStore = require('connect-sqlite3')(session);
const flashMsg = require('connect-flash');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));

const sessionOptions = session({
    secret: 'qualquer coisa',
    store: new SqliteStore({
        sqliteConnection: sqlite3.connection
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flashMsg());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
//app.use(csrf());
//app.use(middlewareGlobal);
//app.use(csrfErrorMessage);
app.use(routes);
app.use(helmet());

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});