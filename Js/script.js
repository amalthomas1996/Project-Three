//toggle sidebar

document.getElementById('toggleSidebar').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('closed');
});


// mobile menu open and close 

document.getElementById('toggleMenu').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.add('open');
});

document.getElementById('closeMenu').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.remove('open');
});
// when mobile menu open the top barmove up
document.getElementById('toggleMenu').addEventListener('click', function () {
  const topBar = document.querySelector('.top-bar');
  const mobileMenu = document.getElementById('mobileMenu');

  topBar.classList.add('move-up'); // Move the top bar up
  mobileMenu.classList.add('open'); // Show the mobile menu
});

document.getElementById('closeMenu').addEventListener('click', function () {
  const topBar = document.querySelector('.top-bar');
  const mobileMenu = document.getElementById('mobileMenu');

  topBar.classList.remove('move-up'); // Move the top bar back down
  mobileMenu.classList.remove('open'); // Hide the mobile menu
});

//trascaction open and close

document.querySelectorAll('.toggle-description').forEach(function (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    const transactionItem = this.closest('.mobile-transaction-item');
    const descriptionWrapper = transactionItem.querySelector('.mobile-transaction-description-wrapper');

    if (transactionItem.classList.contains('active')) {
      // If active, collapse it
      descriptionWrapper.style.maxHeight = 0;
    } else {
      // If not active, expand it
      descriptionWrapper.style.maxHeight = descriptionWrapper.scrollHeight + 'px';
    }

    transactionItem.classList.toggle('active');

    // Toggle the arrow icon
    if (transactionItem.classList.contains('active')) {
      this.src = './Assets/up.svg'; // Change to up arrow when open
    } else {
      this.src = './Assets/down.svg'; // Change to down arrow when closed
    }
  });
});

