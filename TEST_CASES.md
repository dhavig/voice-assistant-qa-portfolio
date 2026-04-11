# Test Cases — Voice Assistant QA Portfolio

> Document covering all test cases for the Siri/Voice Assistant QA Portfolio.
> Testing covers functional, adversarial, edge case, and cross-platform scenarios.

---

## Module 1 — Reminder Flows

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-001 | Create Reminder — Valid | "Remind me to call mom at 3 PM" | Assistant creates reminder with correct time | ✅ PASS |
| TC-002 | Create Reminder — No Time Given | "Remind me to call mom" | Assistant asks for time — does not create incomplete reminder silently | ✅ PASS |
| TC-003 | Create Reminder — Invalid Time | "Remind me tomorrow at 25 PM" | Invalid time handled explicitly — no reminder created | ✅ PASS |
| TC-004 | Create Reminder — Vague Time | "Set a reminder for lunch" | Assistant asks for clarification instead of guessing | ❌ FAIL |
| TC-005 | Edit Reminder | "Change my 3 PM reminder to 4 PM" | Reminder updated correctly | ✅ PASS |
| TC-006 | Duplicate Reminder Prevention | Same reminder created twice | Assistant warns about duplicate — does not create silently | ❌ FAIL |

---

## Module 2 — Weather Flows

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-007 | Current Weather — Valid City | "What is the weather in Chicago?" | Correct current weather returned | ✅ PASS |
| TC-008 | Follow-Up Weather Query | "Will it rain there?" (after previous city query) | Correct context carryover — uses previous city | ❌ FAIL |
| TC-009 | Ambiguous Location | "What is the weather in Paris Texas not Paris France" | Location disambiguation handled correctly | ✅ PASS |
| TC-010 | Weather Without Location | "What is the weather?" | Assistant asks for location — does not guess | ✅ PASS |
| TC-011 | Forecast Follow-Up | "What about tomorrow?" | Correct forecast using prior context | ✅ PASS |

---

## Module 3 — Calendar Flows

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-012 | Create Event — Valid | "Schedule a meeting at 2 PM tomorrow" | Event created with correct time | ✅ PASS |
| TC-013 | Create Event — Missing Time | "Schedule dinner with Sam next Friday" | Assistant asks for time — no hidden defaults used | ❌ FAIL |
| TC-014 | Create Event — Missing Contact | "Schedule a call with my manager" | Assistant asks to clarify contact | ✅ PASS |
| TC-015 | Move Event — Valid | "Move my 3 PM meeting to 4 PM" | Event rescheduled correctly | ✅ PASS |
| TC-016 | Move Event — Past Date | "Move my 3 PM meeting to yesterday" | Invalid past-dated action handled safely | ❌ FAIL |
| TC-017 | Conflicting Event | "Schedule a meeting at 3 PM" when 3 PM is taken | Assistant warns about conflict | ✅ PASS |

---

## Module 4 — Timer Flows

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-018 | Start Timer — Valid | "Set a timer for 5 minutes" | Timer starts with correct duration | ✅ PASS |
| TC-019 | Start Multiple Timers | "Set two timers for five minutes" | Both timers created with clear naming/count confirmation | ✅ PASS |
| TC-020 | Cancel Timer — Single | "Cancel the timer" with one timer active | Timer cancelled | ✅ PASS |
| TC-021 | Cancel Timer — Multiple Active | "Cancel the timer" with multiple timers running | Assistant asks which timer to cancel | ❌ FAIL |

---

## Module 5 — Fallback and Recovery Flows

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-022 | Unsupported Request | Request phrased like a supported one but not supported | Assistant declines clearly — does not fake completion | ❌ FAIL |
| TC-023 | Command During Network Failure | Voice command with no network | Clear failure feedback shown — retry path suggested | ❌ FAIL |
| TC-024 | Rapid Repeated Commands | Same command sent multiple times rapidly | No duplicate action created — state remains stable | ✅ PASS |
| TC-025 | Recovery After Failure | Retry after failed command | No duplicate actions — clean retry path | ✅ PASS |

---

## Module 6 — Cross-Platform Consistency

| TC ID | Test Case Name | Input | Expected Result | Status |
|---|---|---|---|---|
| TC-026 | Same Utterance — iPhone vs iPad | Same voice command on both platforms | Identical result and response copy on both | ✅ PASS |

---

## Test Summary

| Module | Total Tests | Passed | Failed |
|---|---|---|---|
| Reminder Flows | 6 | 4 | 2 |
| Weather Flows | 5 | 4 | 1 |
| Calendar Flows | 6 | 3 | 2 (unsafe assumptions) |
| Timer Flows | 4 | 3 | 1 |
| Fallback and Recovery | 4 | 2 | 2 |
| Cross-Platform | 1 | 1 | 0 |
| **Total** | **26** | **17** | **9** |

---

## High Risk Findings

| Finding | Area | Risk | Impact |
|---|---|---|---|
| Context carryover produces confident wrong responses | Weather follow-up | High | User trust drops when assistant answers confidently with wrong city |
| Calendar creates events with hidden defaults | Calendar creation | High | Creates events without confirmation — disrupts real schedules |
| Reminder ambiguity not handled | Reminder creation | Medium | System guesses time — appears functional but fails user intent |
| Unsupported input recovery is weak | Fallback | High | Users do not know what the assistant cannot do |

---

## Release Recommendation

**No-go for production release**

Reason: High-risk trust issues remain in context carryover, fallback handling, and silent assumption behavior. These are customer-visible quality issues that must be resolved before launch.

---

## Platforms Tested
- iPhone (simulated)
- iPad (simulated)

---

*Last updated: April 2026*
*Total: 26 test cases — 17 passed — 9 failed*
