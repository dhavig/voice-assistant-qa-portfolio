# Sample Bug Reports

## Bug 1: Reminder Created Without Time Clarification

Severity:
High

Customer Impact:
Users believe reminder was created correctly, but it is stored without actionable timing, reducing trust.

Steps:

1. Say `Remind me to submit my assignment tomorrow morning`
2. Observe assistant response

Actual:
Reminder created without asking what time `morning` means.

Expected:
Assistant should confirm a specific time or ask a clarifying follow-up.

## Bug 2: Weather Follow-Up Uses Wrong City Context

Severity:
High

Customer Impact:
Users receive incorrect weather information while believing it is accurate for the intended city.

Steps:

1. Ask `What's the weather in Chicago?`
2. Ask `What about tomorrow?`
3. Ask `How about Pittsburgh?`
4. Ask `And the next day?`

Actual:
Assistant answers using the wrong prior city.

Expected:
Assistant should switch context to Pittsburgh or ask for clarification.

## Bug 3: Timer Cancellation Fails with Multiple Timers

Severity:
Medium

Customer Impact:
Users cannot reliably manage active timers, causing confusion and task disruption.

Steps:

1. Set two timers
2. Say `Cancel the timer`

Actual:
Assistant cancels an arbitrary timer without confirmation.

Expected:
Assistant should ask which timer to cancel.
