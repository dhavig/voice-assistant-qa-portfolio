# Exploratory Charters

## Charter 1: Reminder Creation Under Ambiguity

Goal:
Assess how the assistant handles vague reminder requests.

Examples:

- "Remind me later"
- "Set a reminder for tomorrow morning"
- "Remind me after class"

Focus:

- clarification behavior
- whether assistant guesses incorrectly
- recovery path after follow-up questions

## Charter 2: Context Carryover Across Follow-Up Commands

Goal:
Evaluate whether the assistant correctly maintains conversational context.

Examples:

- "What is the weather in Pittsburgh?"
- "How about tomorrow?"
- "What about Chicago?"

Focus:

- context persistence
- wrong-city carryover
- follow-up clarity

## Charter 3: Error Messaging and User Trust

Goal:
Determine whether failure responses are actionable and understandable.

Examples:

- network unavailable
- calendar permission denied
- unsupported command

Focus:

- clarity of failure message
- recovery guidance
- whether user can continue without restarting the flow

## Charter 4: Interruptions and Mixed Commands

Goal:
Test how the assistant behaves when the user changes direction mid-flow.

Examples:

- start timer request, then ask weather
- interrupt reminder confirmation with a new location request

Focus:

- state handling
- cancellation behavior
- cross-command contamination

## Charter 5: Tone, Readability, and Confidence

Goal:
Evaluate whether responses sound confident when correct and cautious when uncertain.

Focus:

- overconfident wrong answers
- vague confirmations
- missing confirmation details

## Charter 6: Cross-Platform Consistency

Goal:
Compare behavior across iPhone and iPad style experiences.

Focus:

- same command, different output
- UI confirmation consistency
- latency or timing differences
