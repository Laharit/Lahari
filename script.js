// Mock data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1', year: 2021, availableCopies: 5 },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2', year: 2022, availableCopies: 3 },
  { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 1', year: 2021, availableCopies: 0 },
  { id: 4, title: 'Book 4', author: 'Author 4', genre: 'Genre 2', year: 2023, availableCopies: 2 },
  // More books...
];

// Global variables
let currentPage = 1;
const booksPerPage = 5;

// DOM elements
const booksCountElement = document.getElementById('books-count');
const booksListElement = document.getElementById('books-list');
const paginationSectionElement = document.getElementById('pagination-section');
const prevPageButton = document.getElementById('prev-page-button');
const nextPageButton = document.getElementById('next-page-button');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  renderBooks(currentPage);
  renderPagination();
});

prevPageButton.addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    renderBooks(currentPage);
    renderPagination();
  }
});

nextPageButton.addEventListener('click', function() {
  const totalPages = Math.ceil(books.length / booksPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderBooks(currentPage);
    renderPagination();
  }
});

// Render functions
function renderBooks(page) {
  const start = (page - 1) * booksPerPage;
  const end = start + booksPerPage;
  const booksToRender = books.slice(start, end);

  booksListElement.innerHTML = '';

  booksToRender.forEach(function(book) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${book.title} by ${book.author}</span>
      <button onclick="addToCart(${book.id})">Add to Cart</button>
    `;
    booksListElement.appendChild(li);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(books.length / booksPerPage);
  const pageInfo = `Page ${currentPage} of ${totalPages}`;

  if (currentPage === 1) {
    prevPageButton.disabled = true;
  } else {
    prevPageButton.disabled = false;
  }

  if (currentPage === totalPages) {
    nextPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
  }

  paginationSectionElement.style.display = totalPages > 1 ? 'block' : 'none';
  document.getElementById('page-info').textContent = pageInfo;
}

function addToCart(bookId) {
  // Add the book to the cart and update the cart count
  // ...
  updateCartCount();
}

function updateCartCount() {
  // Update the cart count
  // ...
}

// Other functions (authentication, search, sorting, checkout, etc.) are not implemented in this example.
