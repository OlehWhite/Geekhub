const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

const linkGeekHub = 'https://api.github.com/users/OlehWhite';
const linkWebsiteLayout = 'https://api.github.com/repos/OlehWhite/WebsiteLayout';

const repositoryGeekHub = document.querySelector('.repository-geek-hub')
const repositoryWebsiteLayout = document.querySelector('.repository-website_layout')


repositoryGeekHub.addEventListener('click', () => {
    getData(linkGeekHub)
        .then(data => {
                const div = document.createElement('div');
                div.className = 'data'
                div.textContent = 'Час крайного редагування: ' + data.updated_at
            repositoryGeekHub.append(div)
        })
        .catch(error => console.log(error.message))
})

repositoryWebsiteLayout.addEventListener('click', () => {
    getData(linkWebsiteLayout)
        .then(data => {
            const div = document.createElement('div');
            div.className = 'data'
            div.textContent = 'Час крайного редагування: ' + data.updated_at
            repositoryWebsiteLayout.append(div)
        })
        .catch(error => console.log(error.message))
})