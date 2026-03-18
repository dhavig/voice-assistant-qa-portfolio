# Siri Quality Portfolio Project

This repository showcases a QA portfolio project inspired by the kind of customer-focused, exploratory, and adversarial testing used for voice-assistant experiences.

It is designed to demonstrate skills relevant to roles such as Apple Siri Quality Program:

- manual and exploratory testing
- adversarial testing
- customer-impact analysis
- test strategy and test planning
- release-readiness assessment
- cross-platform mobile quality thinking

## What This Project Proves

This repository is designed to answer a practical hiring question:

`Can this candidate think like a QA engineer for a conversational, customer-facing product?`

The answer is demonstrated through:

- structured test strategy
- exploratory testing charters
- adversarial and edge-case coverage
- customer-impact-based defect framing
- release-readiness reasoning
- lightweight demo artifacts that make QA thinking visible

## Project Scope

This project models quality validation for a fictional voice assistant feature set called `AssistMe`, including:

- reminders
- weather
- calendar queries
- timers
- fallback behavior
- ambiguous or incomplete voice commands

The focus is not on building a production assistant. The focus is on showing how a QA engineer would evaluate experience quality, edge cases, and user trust.

## Demo

A lightweight browser demo is included in [`demo/index.html`](demo/index.html).

Open it locally in a browser to walk through sample utterances and see how the portfolio maps assistant behavior to:

- expected responses
- QA observations
- customer-impact risk levels
- issue themes and release implications

To run it locally:

1. Open [`demo/index.html`](demo/index.html) in any browser.
2. Try the sample utterances or type your own.
3. Review the simulated response, QA notes, risk, issue theme, and recommended follow-up checks.

## Repository Structure

- [`docs/test-strategy.md`](docs/test-strategy.md): end-to-end quality strategy
- [`docs/exploratory-charters.md`](docs/exploratory-charters.md): session-based exploratory charters
- [`docs/adversarial-test-cases.md`](docs/adversarial-test-cases.md): negative and edge-case scenarios
- [`docs/test-matrix.md`](docs/test-matrix.md): coverage matrix by feature, risk, and platform
- [`docs/bug-report-samples.md`](docs/bug-report-samples.md): example customer-impacting defects
- [`docs/BUG_TRIAGE.md`](docs/BUG_TRIAGE.md): severity and priority model
- [`docs/TEST_EXECUTION_REPORT.md`](docs/TEST_EXECUTION_REPORT.md): execution summary and release recommendation
- [`docs/release-readiness-checklist.md`](docs/release-readiness-checklist.md): go/no-go checklist
- [`docs/resume-bullet.md`](docs/resume-bullet.md): resume-ready project wording
- [`demo/index.html`](demo/index.html): lightweight interactive prototype

## Why This Project Is Relevant

This portfolio demonstrates:

- how to think beyond expected happy paths
- how to evaluate qualitative user experience
- how to identify high-risk customer-facing failures
- how to document testing in a way engineering and program teams can use

## Key QA Themes

- Ambiguity handling:
  assistant should clarify instead of guessing
- Trust and recoverability:
  confidently wrong answers are often worse than obvious failures
- Cross-platform consistency:
  the same request should behave reliably across iPhone and iPad-style flows
- Customer impact:
  issues are prioritized by confusion, interruption, and trust erosion
- Release quality:
  core flows and fallback behavior should be reviewable before ship decisions

## Portfolio Talking Points

This repo is strongest when you describe it like this:

- You chose a voice-assistant style domain because it requires both functional validation and qualitative product judgment.
- You focused on ambiguity, context carryover, and fallback behavior because those are common trust-breaking areas.
- You created artifacts that engineering, QA, and program teams could realistically use in planning and release reviews.

## Demo Scenario Themes

The demo intentionally focuses on areas that often matter most for assistant quality:

- vague reminders
- context carryover failures
- event creation with missing details
- multi-timer state handling
- permission-related failure recovery
- unsupported request fallback
- network-offline behavior
- entity disambiguation for people and locations

## Suggested GitHub Positioning

Repository name:

- `siri-quality-portfolio`
- or `voice-assistant-qa-portfolio`

Suggested description:

`QA portfolio project for voice-assistant testing: exploratory charters, adversarial cases, customer-impact analysis, and release-readiness artifacts.`

## How To Use This For Applications

- Link this repo in your resume project section.
- Mention it as a QA portfolio project inspired by conversational and voice-assistant quality evaluation.
- Do not claim Apple or Siri production experience from this project.
- Do say it demonstrates relevant manual QA, exploratory testing, and customer-experience judgment.

## Resume Summary Option

`Built a Siri-relevant QA portfolio project for voice-assistant experiences, designing exploratory and adversarial test coverage, customer-impact analysis, bug reports, and release-readiness criteria across iPhone and iPad-style reminder, weather, calendar, and timer workflows.`
