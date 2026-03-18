const utteranceEl = document.getElementById("utterance");
const responseEl = document.getElementById("response");
const riskEl = document.getElementById("risk");
const notesEl = document.getElementById("qaNotes");

const scenarios = [
  {
    match: /remind me later/i,
    response: "I can help with that. What time should I remind you?",
    risk: "Medium",
    notes: [
      "Good clarification flow.",
      "QA should confirm no reminder is silently created without time.",
      "Check follow-up behavior if the user says 'after class' or 'tonight'."
    ]
  },
  {
    match: /weather in pittsburgh/i,
    response: "It's 52°F and cloudy in Pittsburgh. Would you like tomorrow's forecast too?",
    risk: "Low",
    notes: [
      "Verify location disambiguation and freshness of weather data.",
      "Check response timing and follow-up context carryover."
    ]
  },
  {
    match: /how about tomorrow/i,
    response: "Tomorrow in the last requested city will be 58°F with a chance of rain.",
    risk: "High",
    notes: [
      "High context-carryover risk if no prior city exists.",
      "QA should validate fallback behavior when the conversation state is missing or stale."
    ]
  },
  {
    match: /set a reminder for lunch/i,
    response: "What time should I set that reminder for?",
    risk: "Medium",
    notes: [
      "Important ambiguity case.",
      "Assistant should clarify instead of guessing a default lunch time."
    ]
  },
  {
    match: /set two timers for five minutes/i,
    response: "I can set two timers. What would you like to call them?",
    risk: "Medium",
    notes: [
      "Check duplicate timer creation and naming flows.",
      "Verify cancellation behavior when multiple timers are active."
    ]
  },
  {
    match: /schedule dinner with sam next friday/i,
    response: "What time should I schedule dinner with Sam next Friday?",
    risk: "High",
    notes: [
      "Calendar creation should not proceed with hidden assumptions.",
      "QA should confirm no event is created without time confirmation."
    ]
  }
];

function renderScenario(input) {
  const scenario = scenarios.find((item) => item.match.test(input));

  if (!scenario) {
    responseEl.textContent =
      "I'm not fully sure what you mean yet. Could you rephrase that request?";
    riskEl.textContent = "Medium";
    notesEl.innerHTML = "";
    [
      "This is a fallback path.",
      "QA should evaluate whether the response is clear, recoverable, and not misleading.",
      "Good candidate for exploratory and adversarial testing."
    ].forEach((note) => {
      const li = document.createElement("li");
      li.textContent = note;
      notesEl.appendChild(li);
    });
    return;
  }

  responseEl.textContent = scenario.response;
  riskEl.textContent = scenario.risk;
  notesEl.innerHTML = "";
  scenario.notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    notesEl.appendChild(li);
  });
}

document.getElementById("runBtn").addEventListener("click", () => {
  const value = utteranceEl.value.trim();
  renderScenario(value);
});

document.getElementById("clearBtn").addEventListener("click", () => {
  utteranceEl.value = "";
  responseEl.textContent = "No simulation run yet.";
  riskEl.textContent = "N/A";
  notesEl.innerHTML = "<li>Use the sample utterances or type your own.</li>";
});

document.querySelectorAll(".sample").forEach((button) => {
  button.addEventListener("click", () => {
    utteranceEl.value = button.textContent;
    renderScenario(button.textContent);
  });
});

