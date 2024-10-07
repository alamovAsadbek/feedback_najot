const cardsPerPage = 3;
let currentPage = 1;
let currentData = 'offers';

function renderCards() {
    const offerCards = document.querySelectorAll('.offer');
    const demandCards = document.querySelectorAll('.demand');
    const myOfferCards = document.querySelectorAll('.my-offers');
    const myWrittenOffers = document.querySelectorAll('.my-written-offers');

    // Hide all cards
    offerCards.forEach(card => card.style.display = 'none');
    demandCards.forEach(card => card.style.display = 'none');
    myOfferCards.forEach(card => card.style.display = 'none');
    myWrittenOffers.forEach(card => card.style.display = 'none');

    // Calculate indices
    let startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    // Show cards based on the current data type
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

    // Update button states
    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = (currentData === 'offers' && endIndex >= offerCards.length) ||
        (currentData === 'demands' && endIndex >= demandCards.length) ||
        (currentData === 'my-offers' && endIndex >= myOfferCards.length) ||
        (currentData === 'my-written-offers' && endIndex >= myWrittenOffers.length);

    // Update page info
    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Page: ${currentPage}, Displaying: ${currentData}`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentPage--;
    renderCards();
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    renderCards();
});

document.getElementById('data-selector').addEventListener('change', (event) => {
    currentData = event.target.value;
    currentPage = 1;
    renderCards();
});

// Initial render
renderCards();
