const cardContainer = document.querySelector('.card-container');

const projectsData =[
    {
        name: 'Arkeologi Hari Ini',
        link: 'https://rahfimuhammad.github.io/arkeologi-hari-ini/',
        image: './assets/arkeologihariini.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'allyouneedistypescript',
        link: 'https://allyouneedistypescript.vercel.app',
        image: './assets/allyouneedistypescript.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'KATA',
        link: 'https://kata-app.netlify.app',
        image: './assets/kata.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'SeblakGoInter',
        link: 'https://seblakgointer.netlify.app',
        image: './assets/seblakGoInter.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    }
]

projectsData.map(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="card-content">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="card-button">
                <a href="${item.link}">View Project</a>
            </div>
        </div>
        <img src="${item.image}" alt="${item.name}">`;

    cardContainer.appendChild(card);
});