const utteranceEl = document.getElementById("utterance");
const responseEl = document.getElementById("response");
const riskEl = document.getElementById("risk");
const riskBadgeEl = document.getElementById("riskBadge");
const notesEl = document.getElementById("qaNotes");
const issueThemeEl = document.getElementById("issueTheme");
const releaseImpactEl = document.getElementById("releaseImpact");
const followUpTestsEl = document.getElementById("followUpTests");

const scenarios = [
  {
    match: /remind me later/i,
    response: "I can help with that. What time should I remind you?",
    risk: "Medium",
    theme: "Ambiguity handling",
    releaseImpact: "Safe only if follow-up clarification is reliable and no silent reminder is created.",
    notes: [
      "Good clarification flow.",
      "QA should confirm no reminder is silently created without time.",
      "Check follow-up behavior if the user says 'after class' or 'tonight'."
    ],
    followUps: [
      "Retry with vague time phrases like 'soon' and 'this evening'.",
      "Check whether the assistant creates duplicate reminders after clarification."
    ]
  },
  {
    match: /weather in pittsburgh/i,
    response: "It's 52°F and cloudy in Pittsburgh. Would you like tomorrow's forecast too?",
    risk: "Low",
    theme: "Location correctness",
    releaseImpact: "Low release risk if city resolution remains stable across repeated queries.",
    notes: [
      "Verify location disambiguation and freshness of weather data.",
      "Check response timing and follow-up context carryover."
    ],
    followUps: [
      "Try another city with multiple matches.",
      "Check behavior when the user asks for tomorrow without repeating the city."
    ]
  },
  {
    match: /how about tomorrow/i,
    response: "Tomorrow in the last requested city will be 58°F with a chance of rain.",
    risk: "High",
    theme: "Broken conversational context",
    releaseImpact: "Potential no-ship issue if context carryover produces confident but incorrect answers.",
    notes: [
      "High context-carryover risk if no prior city exists.",
      "QA should validate fallback behavior when the conversation state is missing or stale."
    ],
    followUps: [
      "Run with no prior request in session.",
      "Switch cities repeatedly and validate context resets correctly."
    ]
  },
  {
    match: /set a reminder for lunch/i,
    response: "What time should I set that reminder for?",
    risk: "Medium",
    theme: "Clarification quality",
    releaseImpact: "Medium risk because weak clarification can create user confusion and missed tasks.",
    notes: [
      "Important ambiguity case.",
      "Assistant should clarify instead of guessing a default lunch time."
    ],
    followUps: [
      "Test phrasing like 'before lunch' and 'around lunch'.",
      "Check whether follow-up confirmation includes the final chosen time."
    ]
  },
  {
    match: /set two timers for five minutes/i,
    response: "I can set two timers. What would you like to call them?",
    risk: "Medium",
    theme: "Multi-entity state handling",
    releaseImpact: "Medium risk because timer confusion interrupts time-sensitive tasks.",
    notes: [
      "Check duplicate timer creation and naming flows.",
      "Verify cancellation behavior when multiple timers are active."
    ],
    followUps: [
      "Cancel one timer and verify the correct remaining timer persists.",
      "Try voice interruptions mid-confirmation."
    ]
  },
  {
    match: /schedule dinner with sam next friday/i,
    response: "What time should I schedule dinner with Sam next Friday?",
    risk: "High",
    theme: "Unsafe default behavior",
    releaseImpact: "High risk because silent calendar assumptions can create incorrect events and user mistrust.",
    notes: [
      "Calendar creation should not proceed with hidden assumptions.",
      "QA should confirm no event is created without time confirmation."
    ],
    followUps: [
      "Test with contact ambiguity and missing attendee details.",
      "Validate behavior when the chosen time conflicts with an existing event."
    ]
  },
  {
    match: /add lunch with maya tomorrow at 1/i,
    response: "I can add that to your calendar. Which Maya do you mean?",
    risk: "Medium",
    theme: "Entity disambiguation",
    releaseImpact: "Medium risk because contact ambiguity can create incorrect calendar entries or wrong attendee associations.",
    notes: [
      "Good candidate for contact ambiguity testing.",
      "Assistant should avoid picking a contact silently when multiple people share the same name."
    ],
    followUps: [
      "Test with one matching contact and multiple matching contacts.",
      "Validate whether event creation pauses until contact ambiguity is resolved."
    ]
  },
  {
    match: /why isn't my calendar working/i,
    response: "It looks like calendar access is turned off. You can enable it in Settings and try again.",
    risk: "High",
    theme: "Permission failure recovery",
    releaseImpact: "High risk if the assistant fails without a clear recovery path when permissions are missing.",
    notes: [
      "Permission-related failures should be clear and recoverable.",
      "Assistant should not imply success when access is blocked."
    ],
    followUps: [
      "Check the flow when permission is denied, restricted, or partially granted.",
      "Validate whether recovery guidance is consistent across platforms."
    ]
  },
  {
    match: /book a table for four tonight/i,
    response: "I can't make restaurant reservations here yet, but I can help you set a reminder or search nearby places.",
    risk: "Medium",
    theme: "Unsupported capability fallback",
    releaseImpact: "Medium risk because fallback quality directly affects trust when the user asks for unsupported tasks.",
    notes: [
      "Unsupported requests should be declined clearly without sounding broken.",
      "Helpful fallback suggestions can preserve task momentum."
    ],
    followUps: [
      "Try unsupported requests that resemble supported booking or scheduling commands.",
      "Confirm the assistant does not pretend to complete a reservation."
    ]
  },
  {
    match: /weather with no internet/i,
    response: "I can't get weather updates right now because you're offline. Please check your connection and try again.",
    risk: "High",
    theme: "Network failure handling",
    releaseImpact: "High risk if offline behavior is silent, misleading, or inconsistent across retries.",
    notes: [
      "Offline handling should be explicit and actionable.",
      "Assistant should preserve trust by clearly separating temporary failure from missing feature support."
    ],
    followUps: [
      "Retry during repeated offline failures and inspect message consistency.",
      "Check whether the assistant suggests stale data without warning."
    ]
  }
];

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function setRiskBadge(risk) {
  riskBadgeEl.textContent = `${risk} risk`;
  riskBadgeEl.className = "risk-badge";
  riskBadgeEl.classList.add(risk.toLowerCase());
}

function renderScenario(input) {
  const scenario = scenarios.find((item) => item.match.test(input));

  if (!scenario) {
    responseEl.textContent =
      "I'm not fully sure what you mean yet. Could you rephrase that request?";
    riskEl.textContent = "Medium";
    setRiskBadge("Medium");
    issueThemeEl.textContent = "Fallback and recoverability";
    releaseImpactEl.textContent =
      "Review before release if fallback responses are vague, repetitive, or misleading.";
    renderList(notesEl, [
      "This is a fallback path.",
      "QA should evaluate whether the response is clear, recoverable, and not misleading.",
      "Good candidate for exploratory and adversarial testing."
    ]);
    renderList(followUpTestsEl, [
      "Try unsupported requests that sound similar to supported ones.",
      "Check whether repeated failures degrade gracefully or create user frustration."
    ]);
    return;
  }

  responseEl.textContent = scenario.response;
  riskEl.textContent = scenario.risk;
  setRiskBadge(scenario.risk);
  issueThemeEl.textContent = scenario.theme;
  releaseImpactEl.textContent = scenario.releaseImpact;
  renderList(notesEl, scenario.notes);
  renderList(followUpTestsEl, scenario.followUps);
}

document.getElementById("runBtn").addEventListener("click", () => {
  const value = utteranceEl.value.trim();
  renderScenario(value);
});

document.getElementById("clearBtn").addEventListener("click", () => {
  utteranceEl.value = "";
  responseEl.textContent = "No simulation run yet.";
  riskEl.textContent = "N/A";
  riskBadgeEl.textContent = "Not evaluated";
  riskBadgeEl.className = "risk-badge";
  issueThemeEl.textContent = "No issue theme yet.";
  releaseImpactEl.textContent = "No release recommendation yet.";
  notesEl.innerHTML = "<li>Use the sample utterances or type your own.</li>";
  followUpTestsEl.innerHTML =
    "<li>Run a sample scenario to see suggested next checks.</li>";
});

document.querySelectorAll(".sample").forEach((button) => {
  button.addEventListener("click", () => {
    utteranceEl.value = button.textContent;
    renderScenario(button.textContent);
  });
});
