const routes = {
    '/': '/views/home.ejs',
    '/about': '/views/about.ejs',
    '/services': '/views/services.ejs',
    '/contact': '/views/contact.ejs'
};

function router() {
    const path = window.location.hash.substring(1) || '/';
    const viewPath = routes[path] || routes['/'];

    fetch(viewPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
        });
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
