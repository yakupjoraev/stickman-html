// Custom Scripts
// Custom scripts
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.equipment__btn');
  const contents = document.querySelectorAll('.equipment__content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add active class to the clicked button
      button.classList.add('active');

      // Get the data-tab-btn value of the clicked button
      const tab = button.getAttribute('data-tab-btn');

      // Hide all content sections
      contents.forEach(content => content.classList.remove('active'));

      // Show the content section that matches the clicked button
      document.querySelector(`.equipment__content[data-tab-content="${tab}"]`).classList.add('active');
    });
  });
});

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

