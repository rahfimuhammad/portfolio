const cardContainer = document.querySelector('.card-container');

const projectsData =[
    {
        name: 'Website Interaktif Arkeologi',
        link: 'https://rahfimuhammad.github.io/arkeologi-hari-ini/',
        image: './assets/arkeologihariini.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'KATA (aplikasi chat realtime)',
        link: 'https://kata-app.netlify.app',
        image: './assets/kata.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'SeblakGoInter (aplikasi pemesanan dan analitik restaurant)',
        link: 'https://seblakgointer.netlify.app',
        image: './assets/seblakGoInter.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    },
    {
        name: 'allyouneedistypescript (aplikasi task manager, kalkulator, dan kamus)',
        link: 'https://allyouneedistypescript.vercel.app',
        image: './assets/allyouneedistypescript.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam explicabo totam? Dolore iusto earum, quo odio recusandae quibusdam ipsum itaque dolorum aut neque, architecto cum fugit pariatur qui et!"
    }
]

projectsData.map(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="card-description">
            <h2><a href="${item.link}">${item.name}</a></h2>
            <p>${item.description}</p>
        </div>
        <img src="${item.image}" alt="${item.name}">`;

    cardContainer.appendChild(card);
});