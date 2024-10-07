const cardsPerPage = 3;
let currentPage = 1;
let currentData = 'offers';

function renderCards() {
    const offerCards = document.querySelectorAll('.offer');
    const demandCards = document.querySelectorAll('.demand');
    const myOfferCards = document.querySelectorAll('.my-offers');
    const myWrittenOffers = document.querySelectorAll('.my-written-offers');

    // Barcha kartalarni yashirish
    offerCards.forEach(card => card.style.display = 'none');
    demandCards.forEach(card => card.style.display = 'none');
    myOfferCards.forEach(card => card.style.display = 'none');
    myWrittenOffers.forEach(card => card.style.display = 'none');

    // Hozirgi sahifada ko'rsatish
    let startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    if (currentData === 'offers') {
        for (let i = startIndex; i < endIndex && i < offerCards.length; i++) {
            offerCards[i].style.display = 'block';
        }
    } else if (currentData === 'my-offers') {
        for (let i = startIndex; i < endIndex && i < myOfferCards.length; i++) {
            myOfferCards[i].style.display = 'block';
        }
    } else if (currentData === 'my-written-offers') {
        for (let i = startIndex; i < endIndex && i < myWrittenOffers.length; i++) {
            myWrittenOffers[i].style.display = 'block';
        }
    } else {
        for (let i = startIndex; i < endIndex && i < demandCards.length; i++) {
            demandCards[i].style.display = 'block';
        }
    }

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = (currentData === 'offers' && endIndex >= offerCards.length) || (currentData === 'demands' && endIndex >= demandCards.length) || (currentData === 'my-offers' && endIndex >= demandCards.length);

    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Page: ${currentPage},  Displaying: ${currentData === 'offers' ? offerCards.length : demandCards.length}`;
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

document.getElementById('my-written-offers').addEventListener('click', () => {
    currentData = 'my-written-offers';
    currentPage = 1;
    renderCards();
    updateButtonState('my-written-offers');
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
