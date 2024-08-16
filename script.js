//toggle sidebar

const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarTitle = document.querySelector('.sidebar-title');
const profileSection = document.querySelector('.profile-section');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  if (sidebar.classList.contains('closed')) {
    sidebarTitle.style.display = 'none';
    profileSection.style.display = 'none';
  } else {
    sidebarTitle.style.display = 'block';
    profileSection.style.display = 'flex';
  }
});


//Task Status

// Create a doughnut chart using Chart.js
const ctx = document.getElementById('status-circle').getContext('2d');
const chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40, 10, 50], // Placeholder data for Incomplete, Pending, Approved
      backgroundColor: ['#fdb44b', '#ff6b6b', '#4caf50'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      tooltip: { enabled: false },
    },
  }
});