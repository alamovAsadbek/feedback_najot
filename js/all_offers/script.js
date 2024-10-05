const cardsPerPage = 3;
let currentPage = 1;
let currentData = 'offers';

function renderCards() {
    const offerCards = document.querySelectorAll('.offer');
    const demandCards = document.querySelectorAll('.demand');

    // Barcha kartalarni yashirish
    offerCards.forEach(card => card.style.display = 'none');
    demandCards.forEach(card => card.style.display = 'none');

    // Hozirgi sahifada ko'rsatish
    let startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    if (currentData === 'offers') {
        for (let i = startIndex; i < endIndex && i < offerCards.length; i++) {
            offerCards[i].style.display = 'block';
        }
    } else {
        for (let i = startIndex; i < endIndex && i < demandCards.length; i++) {
            demandCards[i].style.display = 'block';
        }
    }

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = (currentData === 'offers' && endIndex >= offerCards.length) || (currentData === 'demands' && endIndex >= demandCards.length);

    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Sahifa: ${currentPage}, Ekranda: ${currentData === 'offers' ? offerCards.length : demandCards.length} ta karta`;
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
    currentData = 'offers';
    currentPage = 1;
    renderCards();
    updateButtonState('show-offers');
});

document.getElementById('show-demands').addEventListener('click', () => {
    currentData = 'demands';
    currentPage = 1;
    renderCards();
    updateButtonState('show-demands');
});

document.getElementById('show-my-offers').addEventListener('click', () => {
    currentData = 'my-offers';
    currentPage = 1;
    renderCards();
    updateButtonState('show-my-offers');
});

function updateButtonState(activeButtonId) {
    const buttons = document.querySelectorAll('#button-container button');
    buttons.forEach(button => {
        if (button.id === activeButtonId) {
            button.classList.add('active');
            button.classList.remove('btn-custom-secondary');
        } else {
            button.classList.remove('active');
            button.classList.add('btn-custom-secondary');
        }
    });
}

// Dastlabki kartalarni ko'rsatish
renderCards();
updateButtonState('show-offers'); // Dastlab takliflar aktiv
