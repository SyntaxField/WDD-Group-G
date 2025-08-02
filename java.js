//after submitting the feedback form Shows a thank you we will try and do better message 


document.addEventListener('DOMContentLoaded', function() {
  // Feedback form thank you message
  var form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('feedbackMessage').textContent = "Thank you, for your feedback! We will try and do better!";
      form.reset();
    });
  }

  // Health quiz scoring and advice
  var quizForm = document.getElementById('healthQuiz');
  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let score = 0;
      for (let i = 1; i <= 20; i++) {
        if (document.querySelector('input[name="q'+i+'"]:checked')?.value === 'yes') {
          score++;
        }
      }
      let resultMsg = "";
      let advice = "";

      if (score >= 16) {
        resultMsg = "Excellent alignment with a healthy lifestyle—keep it up!";
        advice = `
        <ul>
          <li>Continue meeting the 150–300 minutes/week of moderate‑intensity aerobic activity (or 75‑150 minutes of vigorous activity) plus two or more strength-training sessions per week. <br><em>World Health Organization, CDC, NCBI</em></li>
          <li>Sustain a plant‑forward diet with at least 400 g (≈5 daily portions) of fruits/vegetables, regular legumes/whole grains, and low sugar, salt (&lt;5 g/day) and saturated/trans fats intake. <br><em>World Health Organization</em></li>
          <li>Keep your sleep habits (7–9 hours, consistent schedule) and hydration (≈2 L/day or eight glasses), while also maintaining regular stress‑buffering habits (mindfulness, walking, creative leisure). <br><em>Family Medicine</em></li>
          <li>Stay tobacco‑free and, if you drink, keep weekly intake within Ireland’s low‑risk limits (under 11 standard drinks/week for women, 17 for men), with at least two alcohol‑free days. <br><em>drinkaware.ie, drugs.ie</em></li>
          <li>Once/week try a mini‑upgrade: add a novel vegetable or 1-minute resistance exercise after brushing your teeth, and stay up‑to‑date with preventive screenings.</li>
        </ul>
        `;
      } else if (score >= 11) {
        resultMsg = "Good habits overall; identify 1–2 areas to improve.";
        advice = `
        <ul>
          <li>Identify which pillar (nutrition, sleep, movement, stress, or social) had most “No” responses.</li>
          <li>Set one SMART micro‑goal this week (e.g. “After I pour my morning coffee, I will take a 10‑minute brisk walk” or “At lunch, I will add one cooked vegetable portion”).</li>
          <li>Track habit completion daily (calendar, checklist). Celebrate a 7‑day streak before adding another micro‑goal.</li>
          <li>After two weeks, evaluate and either strengthen that pillar further or introduce a second pillar micro‑habit.</li>
        </ul>
        `;
      } else if (score >= 6) {
        resultMsg = "<strong style='color:#0077cc;'>There's room for improvement!</strong><br>Some healthy steps in place—could benefit from more consistency.";
        advice = `
        <ul>
          <li>Begin with one or two ultra‑tiny micro‑habits this week: for example, one glass of water on waking and a 5‑minute walk or short stretch after lunch.</li>
          <li>After 3 successful days, add a second habit: one extra fruit/vegetable at a meal or a 2‑minute breathing break mid‑afternoon.</li>
          <li>Use habit stacking: attach each new habit to a reliable trigger (e.g. after breakfast, after clearing the plates).</li>
          <li>After one week, reassess and introduce a micro‑habit in another pillar (e.g. early wind‑down before bed).</li>
          <li>Keep visible tracking and aim for at least 70 percent completion each week to build momentum.</li>
        </ul>
        `;
      } else {
        resultMsg = "Likely many areas to address—small changes can make a significant impact.";
        advice = `
        <ul>
          <li>Choose one micro‑habit this week only. For example:
            <ul>
              <li>Three deep breaths before your first coffee or tea.</li>
              <li>After breakfast, add a handful of fruit or vegetables.</li>
              <li>Stand or walk for 2 minutes every hour after a meal.</li>
              <li>Keep a 500 ml water bottle in view; refill once.</li>
              <li>Set a consistent wake‑up time ±15 minutes, even if bedtime varies slightly.</li>
            </ul>
          </li>
          <li>When you achieve five straight days of the first habit, layer in a second micro‑habit in a different pillar.</li>
          <li>Each completed day counts as a “Yes.” Build streaks (5–7 days) before adding new micro‑habits.</li>
        </ul>
        `;
      }

      // Growth strategy for all scores
      let growthStrategy = `
      <hr>
      <h5>Growth Strategy for All Score Levels</h5>
      <ul>
        <li>Prioritise one new micro‑habit per pillar per 2‑week block.</li>
        <li>Stack each new habit onto an established cue (e.g. “After I brush my teeth…” or “Before I pour coffee…”).</li>
        <li>Track progress visually; missing one day does not break progress.</li>
        <li>Once a habit feels easier, expand it slightly—e.g. lengthen walk or add more vegetables.</li>
        <li>Most simple habits take around two months to become automatic, though some take longer (the median is 59–66 days).</li>
      </ul>
      `;

      document.getElementById('quizResult').innerHTML = `
        <div>
          <h4>Your Score: ${score} / 20</h4>
          <h5 class="mt-3 mb-2">Your Personalised Health Advice:</h5>
          <div>${resultMsg}</div>
          <div>${advice}</div>
          ${growthStrategy}
        </div>
      `;
    });
  }
});
