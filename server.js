const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    let now = new Date().toString();
    console.log(`${now} ${req.method} ${req.url}`)
    next();
})

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
});

app.get('/', (req, res)=>{
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome to my website'
    })
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About page'
    });
})

app.listen(3000, ()=> {
    console.log('Server is up on port 3000')
});
