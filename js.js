// === Bobo Nikolov Java Script === 

document.addEventListener('DOMContentLoaded', function () {

  // === Contact form logic ===
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("form-message").classList.remove("d-none");
      this.reset();
    });
  }

  // === Java Script for the pie chart logic ===
  const ctx = document.getElementById('impactPieChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Nutrition', 'Mental Health', 'Screenings', 'Youth Outreach'],
        datasets: [{
          data: [35, 25, 20, 20],
          backgroundColor: ['#626F47', '#A4B465', '#F0BB78', '#E0A85C']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // === Logic for the images when clicked show facts  ===
  const imageFacts = document.querySelectorAll('.row-cols-md-4 .col');
  const facts = [
    "Clinics helped reduce response times by 40% in rural areas.",
    "Workshops increased community engagement by 60%.",
    "Diet programs led to a 25% improvement in youth BMI.",
    "Emergency aid saved over 500 critical cases in 2024."
  ];

  if (imageFacts.length) {
    imageFacts.forEach((col, index) => {
      const factText = document.createElement('p');
      factText.textContent = facts[index];
      factText.style.display = 'none';
      factText.classList.add('mt-2', 'small', 'text-muted');
      col.appendChild(factText);

      const img = col.querySelector('img');
      if (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
          factText.style.display = factText.style.display === 'none' ? 'block' : 'none';
        });
      }
    });
  }

});
