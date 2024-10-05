const offers = [
    {
        title: "Taklif 1",
        description: "Bu taklif birinchi tavsifi. Bunda juda ko'p ma'lumotlar keltirilgan.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Taklif 2",
        description: "Bu taklif ikkinchi tavsifi. Ko'proq tafsilotlar keltirilgan.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Taklif 3",
        description: "Bu taklif uchinchi tavsifi. Katta ma'lumotlar berilgan.",
        image: "https://via.placeholder.com/150"
    },
];

const demands = [
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 1",
        description: "Bu talab birinchi tavsifi. Bunda ham ko'plab ma'lumotlar bor.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 2",
        description: "Bu talab ikkinchi tavsifi. Yana ko'plab tafsilotlar berilgan.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Talab 3",
        description: "Bu talab uchinchi tavsifi. O'ziga xos ma'lumotlar keltirilgan.",
        image: "https://via.placeholder.com/150"
    },
];

const cardsPerPage = 3;
let currentPage = 1;
let currentData = offers;

function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = currentData.slice(startIndex, endIndex);

    currentCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-4';
        cardElement.innerHTML = `
            <div class="card">
                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(cardElement);
    });

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = endIndex >= currentData.length;

    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Sahifa: ${currentPage}, Ekranda: ${currentCards.length} ta karta`;
}

function updateButtonState(activeButtonId) {
    const buttons = document.querySelectorAll('#button-container button');
    buttons.forEach(button => {
        if (button.id === activeButtonId) {
            button.classList.add('btn-primary');
            button.classList.remove('btn-secondary');
        } else {
            button.classList.remove('btn-primary');
            button.classList.add('btn-secondary');
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentPage--;
    renderCards();
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    renderCards();
});

document.getElementById('show-offers').addEventListener('click', () => {
    currentData = offers;
    currentPage = 1;
    renderCards();
    updateButtonState('show-offers');
});

document.getElementById('show-demands').addEventListener('click', () => {
    currentData = demands;
    currentPage = 1;
    renderCards();
    updateButtonState('show-demands');
});

// Dastlabki kartalarni ko'rsatish
renderCards();
updateButtonState('show-offers'); // Dastlab takliflar aktiv
