const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

// Konfiguracja sesji
app.use(session({
  secret: 'sekretny_klucz',
  resave: false,
  saveUninitialized: true
}));


// Ustawienie portu na 3000 lub na wartość zdefiniowaną w zmiennej środowiskowej
const PORT = process.env.PORT || 3000;

// Ustawienie silnika widoków na EJS
app.set('view engine', 'ejs');

// Ustawienie katalogu z widokami na /views
app.set('views', path.join(__dirname, 'views'));

// Serwowanie plików statycznych z katalogu /public
app.use(express.static(path.join(__dirname, 'public')));

// Importowanie tras
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const servicesRoute = require('./routes/services');
const certificatesRoute = require('./routes/certificates');
const contactRoute = require('./routes/contact');
const blogRoute = require('./routes/blog');
const authRoute = require('./routes/auth');


// Użycie tras
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/services', servicesRoute);
app.use('/certificates', certificatesRoute);
app.use('/contact', contactRoute);
app.use('/blog', blogRoute);
app.use('/', authRoute);

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
