// app.js - Controller for Real-Life Scenarios Deep Dive & Quizzes

(function() {
  "use strict";

  const AppState = {
    currentScenarioId: "scenario-contract-intelligence",
    quizSessions: {
      "scenario-contract-intelligence": { answers: {}, submitted: false, score: 0 },
      "scenario-audit-surveillance": { answers: {}, submitted: false, score: 0 },
      "scenario-autonomous-close": { answers: {}, submitted: false, score: 0 }
    }
  };

  const STORAGE_KEY = "AI_REAL_LIFE_SCENARIOS_STORE_V1";

  function init() {
    loadState();
    renderTabs();
    renderActiveScenario();
    renderPrintAllScenarios();
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.quizSessions) AppState.quizSessions = parsed.quizSessions;
        if (parsed.currentScenarioId) AppState.currentScenarioId = parsed.currentScenarioId;
      }
    } catch (e) {
      console.warn("Could not load state", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        quizSessions: AppState.quizSessions,
        currentScenarioId: AppState.currentScenarioId
      }));
    } catch (e) {
      console.warn("Could not save state", e);
    }
  }

  // Render Top Scenario Tabs
  function renderTabs() {
    const container = document.getElementById("scenario-tabs-container");
    if (!container) return;

    container.innerHTML = "";
    window.REAL_LIFE_SCENARIOS.forEach(s => {
      const isActive = s.id === AppState.currentScenarioId;
      const session = AppState.quizSessions[s.id];
      const isCompleted = session && session.submitted;

      const card = document.createElement("div");
      card.className = `scenario-tab-card ${isActive ? 'active' : ''}`;
      card.innerHTML = `
        <div>
          <span class="tab-badge" style="background: ${s.primaryTrack === 'Finance' ? '#1e3a8a' : (s.primaryTrack === 'Audit' ? '#0284c7' : '#059669')}; color: #ffffff;">
            Scenario ${s.number}: ${s.primaryTrack}
          </span>
          <div class="tab-title">${s.title}</div>
          <div class="tab-industry">${s.industry}</div>
        </div>
        <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--slate-500); font-weight: 700;">4 Case Questions</span>
          ${isCompleted ? `<span style="font-size: 0.75rem; font-weight: 800; color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 9999px;">Score: ${session.score}%</span>` : ''}
        </div>
      `;

      card.addEventListener("click", () => {
        AppState.currentScenarioId = s.id;
        saveState();
        renderTabs();
        renderActiveScenario();
    renderPrintAllScenarios();
        window.scrollTo({ top: 180, behavior: "smooth" });
      });

      container.appendChild(card);
    });
  }

  // Render the Active Scenario View
  function renderActiveScenario() {
    const container = document.getElementById("active-scenario-view");
    if (!container) return;

    const scenario = window.REAL_LIFE_SCENARIOS.find(s => s.id === AppState.currentScenarioId) || window.REAL_LIFE_SCENARIOS[0];
    const session = AppState.quizSessions[scenario.id] || { answers: {}, submitted: false, score: 0 };

    // Metrics HTML
    const metricsHtml = scenario.overview.metricsImpact.map(m => `
      <div class="metric-card">
        <div class="metric-value">${m.value}</div>
        <div class="metric-label">${m.label}</div>
      </div>
    `).join("");

    // Workflow steps HTML
    const stepsHtml = scenario.overview.architectureSteps.map(step => `
      <div class="workflow-step-card">
        <div class="workflow-step-title">${step.step}</div>
        <div class="workflow-step-detail">${step.detail}</div>
      </div>
    `).join("");

    container.innerHTML = `
      <!-- Hero Header -->
      <div class="scenario-hero">
        <div class="scenario-hero-badge">
          <span>Enterprise Real-Life Scenario ${scenario.number}</span> • <span>${scenario.primaryTrack} Track</span>
        </div>
        <h2>${scenario.title}</h2>
        <div class="scenario-hero-subtitle">${scenario.subtitle}</div>
        <div style="font-size: 0.9rem; color: var(--navy-primary); font-weight: 700;">
          🏢 Industry Benchmark: ${scenario.industry}
        </div>

        <div class="metrics-grid">
          ${metricsHtml}
        </div>
      </div>

      <!-- Problem vs AI Intervention Panel -->
      <div class="section-panel">
        <h3><span>📋</span> Business Context & Operational Bottlenecks</h3>
        <p style="font-size: 1rem; color: var(--slate-700); line-height: 1.6; margin-bottom: 1rem;">
          ${scenario.overview.background}
        </p>

        <div class="callout-box problem">
          <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.25rem;">
            ⚠️ The Operational Bottleneck & Pain Points
          </div>
          <div style="font-size: 0.95rem; line-height: 1.55;">
            ${scenario.overview.theProblem}
          </div>
        </div>

        <div style="margin-top: 1.5rem;">
          <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: var(--navy-primary); margin-bottom: 0.5rem;">
            🤖 The Enterprise AI Intervention
          </div>
          <p style="font-size: 1rem; color: var(--slate-700); line-height: 1.6;">
            ${scenario.overview.aiSolution}
          </p>
        </div>
      </div>

      <!-- Architecture & Technical Workflow -->
      <div class="section-panel">
        <h3><span>⚙️</span> Technical Architecture & Data Ingestion Pipeline</h3>
        <div class="workflow-steps-list">
          ${stepsHtml}
        </div>

        <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: var(--slate-500); margin: 1.5rem 0 0.5rem;">
          Interactive End-to-End System Schematic
        </div>
        <div class="diagram-box">
          ${scenario.diagramSvg}
        </div>
      </div>

      <!-- Governance, Risk & Internal Controls -->
      <div class="section-panel">
        <h3><span>🛡️</span> Governance, Internal Controls & Human Oversight</h3>
        <div class="callout-box governance">
          <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.25rem;">
            Regulatory Safeguards & Human-in-the-Loop Protocol
          </div>
          <div style="font-size: 0.95rem; line-height: 1.55;">
            ${scenario.overview.governanceAndRisk}
          </div>
        </div>
      </div>

      <!-- Scenario Interactive Quiz Container -->
      <div class="quiz-section" id="scenario-quiz-container">
        <!-- Rendered by renderScenarioQuiz() -->
      </div>
    `;

    renderScenarioQuiz(scenario, session);
  }

  // Render the 4-Question Scenario Quiz
  function renderScenarioQuiz(scenario, session) {
    const container = document.getElementById("scenario-quiz-container");
    if (!container) return;

    if (session.submitted) {
      // Show Results View
      const total = scenario.quiz.length;
      let correct = 0;
      scenario.quiz.forEach(q => {
        const userChoice = session.answers[q.id];
        const correctOpt = q.options.find(o => o.correct);
        if (userChoice === correctOpt.id) correct++;
      });

      const scorePct = Math.round((correct / total) * 100);
      const isPassed = scorePct >= 75;

      const reviewHtml = scenario.quiz.map((q, idx) => {
        const userChoice = session.answers[q.id];
        const correctOpt = q.options.find(o => o.correct);
        const isCorrect = userChoice === correctOpt.id;

        return `
          <div class="question-card" style="border-left: 5px solid ${isCorrect ? '#10b981' : '#ef4444'}; background: #ffffff;">
            <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: ${isCorrect ? '#15803d' : '#b91c1c'}; margin-bottom: 0.25rem;">
              ${isCorrect ? '✓ Question ' + (idx + 1) + ' – Correct' : '✗ Question ' + (idx + 1) + ' – Suboptimal Choice'}
            </div>
            <div class="question-text">${q.question}</div>
            
            <div style="font-size: 0.9rem; margin-bottom: 0.35rem;">
              Your Selection: <strong style="color: ${isCorrect ? '#15803d' : '#b91c1c'};">${userChoice ? userChoice + '. ' + (q.options.find(o => o.id === userChoice)?.text || '') : 'None'}</strong>
            </div>
            ${!isCorrect ? `
              <div style="font-size: 0.9rem; margin-bottom: 0.5rem; color: #15803d;">
                Recommended Best Practice: <strong>${correctOpt.id}. ${correctOpt.text}</strong>
              </div>
            ` : ''}

            <div style="background: #f8fafc; padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--slate-200); font-size: 0.875rem; color: var(--slate-700); line-height: 1.5; margin-top: 0.5rem;">
              <strong>Executive Rationale:</strong> ${q.explanation}
            </div>
          </div>
        `;
      }).join("");

      container.innerHTML = `
        <div class="score-banner ${isPassed ? '' : 'needs-review'}">
          <div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--navy-dark); margin-bottom: 0.25rem;">
              ${isPassed ? '🎉 Scenario Mastery Achieved!' : '📚 Scenario Debrief & Review'}
            </div>
            <div style="font-size: 0.95rem; color: var(--slate-600);">
              You scored <strong>${correct} of ${total}</strong> (${scorePct}%) on Scenario ${scenario.number}.
            </div>
          </div>
          <div class="score-number" style="color: ${isPassed ? '#15803d' : '#b45309'};">
            ${scorePct}%
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          ${reviewHtml}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <button id="btn-retake-scenario-quiz" class="btn-retake">
            ↻ Retake Scenario ${scenario.number} Quiz
          </button>
          <a href="../index.html" class="btn-submit" style="text-decoration: none; display: inline-block;">
            Return to 9 Core Concepts Dashboard →
          </a>
        </div>
      `;

      document.getElementById("btn-retake-scenario-quiz").addEventListener("click", () => {
        session.submitted = false;
        session.answers = {};
        session.score = 0;
        saveState();
        renderTabs();
        renderScenarioQuiz(scenario, session);
      });

      return;
    }

    // In-Progress Quiz Questions
    const questionsHtml = scenario.quiz.map((q, idx) => {
      const selectedAns = session.answers[q.id];

      const optionsHtml = q.options.map(opt => {
        const isChecked = selectedAns === opt.id;
        return `
          <label class="option-item ${isChecked ? 'selected' : ''}" data-qid="${q.id}" data-optid="${opt.id}">
            <input type="radio" name="quiz-${q.id}" value="${opt.id}" ${isChecked ? 'checked' : ''} style="margin-top: 2px;">
            <span><strong>${opt.id}.</strong> ${opt.text}</span>
          </label>
        `;
      }).join("");

      return `
        <div class="question-card" id="qcard-${q.id}">
          <div class="question-text">
            <span style="background: var(--navy-primary); color: #fff; font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; margin-right: 6px;">Q${idx + 1}</span>
            ${q.question}
          </div>
          <div>${optionsHtml}</div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="quiz-header">
        <div>
          <div class="quiz-title">Scenario ${scenario.number} Knowledge Assessment</div>
          <div style="font-size: 0.85rem; color: var(--slate-500);">
            Evaluate your strategic understanding of this enterprise AI case study (4 Questions).
          </div>
        </div>
        <span class="tab-badge" style="background: var(--blue-soft); color: var(--blue-sky); border: 1px solid #bae6fd;">
          Passing: 75%
        </span>
      </div>

      <form id="scenario-quiz-form">
        ${questionsHtml}

        <div style="margin-top: 1.5rem; text-align: right;">
          <button type="submit" class="btn-submit">
            Submit Scenario ${scenario.number} Quiz →
          </button>
        </div>
      </form>
    `;

    // Handle Option Selection
    container.querySelectorAll(".option-item").forEach(label => {
      label.addEventListener("click", () => {
        const qid = label.getAttribute("data-qid");
        const optid = label.getAttribute("data-optid");
        container.querySelectorAll(`.option-item[data-qid="${qid}"]`).forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
        const radio = label.querySelector("input[type='radio']");
        if (radio) radio.checked = true;
        session.answers[qid] = optid;
      });
    });

    document.getElementById("scenario-quiz-form").addEventListener("submit", (e) => {
      e.preventDefault();
      
      const total = scenario.quiz.length;
      const answered = Object.keys(session.answers).length;

      if (answered < total) {
        alert(`Please answer all ${total} questions before submitting. (${total - answered} remaining)`);
        return;
      }

      let correct = 0;
      scenario.quiz.forEach(q => {
        const userChoice = session.answers[q.id];
        const correctOpt = q.options.find(o => o.correct);
        if (userChoice === correctOpt.id) correct++;
      });

      session.score = Math.round((correct / total) * 100);
      session.submitted = true;

      saveState();
      renderTabs();
      renderScenarioQuiz(scenario, session);
      window.scrollTo({ top: document.getElementById("scenario-quiz-container").offsetTop - 100, behavior: "smooth" });
    });
  }


  // Render All Scenarios For Print/PDF Export
  function renderPrintAllScenarios() {
    const container = document.getElementById("print-all-scenarios-view");
    if (!container || !window.REAL_LIFE_SCENARIOS) return;

    let fullHtml = "";

    window.REAL_LIFE_SCENARIOS.forEach(scenario => {
      const metricsHtml = scenario.overview.metricsImpact.map(m => `
        <div class="metric-card">
          <div class="metric-value">${m.value}</div>
          <div class="metric-label">${m.label}</div>
        </div>
      `).join("");

      const stepsHtml = scenario.overview.architectureSteps.map(step => `
        <div class="workflow-step-card">
          <div class="workflow-step-title">${step.step}</div>
          <div class="workflow-step-detail">${step.detail}</div>
        </div>
      `).join("");

      const quizHtml = scenario.quiz.map((q, idx) => {
        const correctOpt = q.options.find(o => o.correct);
        return `
          <div class="question-card" style="border-left: 5px solid #10b981; background: #ffffff; margin-bottom: 14px;">
            <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #15803d; margin-bottom: 0.25rem;">
              Question ${idx + 1} of 4 • Scenario Assessment
            </div>
            <div class="question-text" style="font-weight: 700; margin-bottom: 0.5rem;">${q.question}</div>
            <div style="font-size: 0.88rem; margin-bottom: 0.5rem;">
              ${q.options.map(opt => `
                <div style="padding: 4px 8px; margin-bottom: 4px; border-radius: 4px; ${opt.correct ? 'background: #dcfce7; font-weight: 700; color: #166534;' : 'color: #475569;'}">
                  ${opt.correct ? '✓ [KEY ANSWER]' : '○'} (${opt.id.toUpperCase()}) ${opt.text}
                </div>
              `).join("")}
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 8px 10px; font-size: 0.82rem; color: #166534;">
              <strong>Audit & Governance Rationale:</strong> ${correctOpt ? correctOpt.feedback : ''}
            </div>
          </div>
        `;
      }).join("");

      fullHtml += `
        <div class="scenario-print-block">
          <!-- Hero Header -->
          <div class="scenario-hero">
            <div class="scenario-hero-badge">
              <span>Enterprise Real-Life Scenario ${scenario.number}</span> • <span>${scenario.primaryTrack} Track</span>
            </div>
            <h2>${scenario.title}</h2>
            <div class="scenario-hero-subtitle">${scenario.subtitle}</div>
            <div style="font-size: 0.9rem; color: #38bdf8; font-weight: 700; margin-top: 0.5rem;">
              🏢 Industry Benchmark: ${scenario.industry}
            </div>

            <div class="metrics-grid" style="margin-top: 1rem;">
              ${metricsHtml}
            </div>
          </div>

          <!-- Problem vs AI Intervention Panel -->
          <div class="section-panel">
            <h3><span>📋</span> Business Context & Operational Bottlenecks</h3>
            <p style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.55; margin-bottom: 1rem;">
              ${scenario.overview.background}
            </p>

            <div class="callout-box problem" style="margin-bottom: 1rem;">
              <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.25rem;">
                ⚠️ The Operational Bottleneck & Pain Points
              </div>
              <div style="font-size: 0.92rem; line-height: 1.5;">
                ${scenario.overview.theProblem}
              </div>
            </div>

            <div>
              <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: var(--navy-primary); margin-bottom: 0.5rem;">
                🤖 The Enterprise AI Intervention
              </div>
              <p style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.55;">
                ${scenario.overview.aiSolution}
              </p>
            </div>
          </div>

          <!-- Architecture & Technical Workflow -->
          <div class="section-panel">
            <h3><span>⚙️</span> Technical Architecture & Data Ingestion Pipeline</h3>
            <div class="workflow-steps-list">
              ${stepsHtml}
            </div>

            <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: var(--slate-500); margin: 1.25rem 0 0.5rem;">
              Interactive End-to-End System Schematic
            </div>
            <div class="diagram-box">
              ${scenario.diagramSvg}
            </div>
          </div>

          <!-- Governance, Risk & Internal Controls -->
          <div class="section-panel">
            <h3><span>🛡️</span> Governance, Internal Controls & Human Oversight</h3>
            <div class="callout-box governance">
              <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.25rem;">
                Regulatory Safeguards & Human-in-the-Loop Protocol
              </div>
              <div style="font-size: 0.92rem; line-height: 1.5;">
                ${scenario.overview.governanceAndRisk}
              </div>
            </div>
          </div>

          <!-- Scenario Assessment & Answer Key -->
          <div class="section-panel">
            <h3><span>🎯</span> Scenario ${scenario.number} Knowledge Assessment & Answer Key</h3>
            ${quizHtml}
          </div>
        </div>
      `;
    });

    container.innerHTML = fullHtml;
  }

  // Initialize on DOM load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
