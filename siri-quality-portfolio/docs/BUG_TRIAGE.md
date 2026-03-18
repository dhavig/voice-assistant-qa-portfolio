# Bug Triage Guide

## Triage Principles

This project prioritizes defects using a customer-impact-first model instead of a purely technical model.

Each bug is evaluated on:

- user trust impact
- task completion failure
- recoverability
- frequency
- visibility

## Severity Model

### High

Use when:

- the assistant gives an incorrect answer confidently
- a wrong action can be created silently
- recovery is unclear or impossible
- the issue affects a core customer workflow

Examples:

- wrong city used for a weather follow-up
- calendar event created with hidden assumptions
- reminder saved without enough user confirmation

### Medium

Use when:

- the feature can still be completed, but with confusion or friction
- the issue affects clarity, consistency, or repeated task flow
- workaround exists but is not ideal

Examples:

- weak clarification prompts
- timer naming confusion
- inconsistent confirmation phrasing

### Low

Use when:

- the issue is cosmetic or has minimal customer disruption
- the issue does not affect task correctness

Examples:

- minor text inconsistency
- formatting mismatch
- low-impact response polish issue

## Priority Suggestions

| Severity | Example Priority | Rationale |
|---|---|---|
| High | P0 / P1 | trust-breaking or release-blocking |
| Medium | P2 | impacts quality but not always blocking |
| Low | P3 | polish, cleanup, or follow-up work |

## Triage Questions

When reviewing a bug, ask:

1. Would a user notice this immediately?
2. Could this cause the user to trust a wrong result?
3. Can the user recover without restarting or redoing work?
4. Is the failure obvious, or does it look successful while being wrong?
5. Would this block release for a customer-facing product?

## Example Triage Outcomes

### Bug: Weather follow-up uses wrong prior city

- Severity: High
- Priority: P1
- Reason:
  Response appears confident and correct while actually being wrong.

### Bug: Assistant asks an awkward but understandable clarification question

- Severity: Medium
- Priority: P2
- Reason:
  Flow remains usable but quality and confidence are reduced.

### Bug: Slight response punctuation inconsistency

- Severity: Low
- Priority: P3
- Reason:
  No effect on task completion or trust.
