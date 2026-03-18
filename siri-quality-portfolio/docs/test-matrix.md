# Test Matrix

| Area | Core Flow | Edge Case | Risk Level | Platform |
|---|---|---|---|---|
| Reminders | Create reminder with explicit date/time | vague time phrasing | High | iPhone, iPad |
| Reminders | Edit reminder | duplicate reminder creation | High | iPhone, iPad |
| Weather | Current weather lookup | ambiguous location | Medium | iPhone, iPad |
| Weather | Follow-up forecast query | broken context carryover | High | iPhone, iPad |
| Calendar | Create event | missing time or contact ambiguity | High | iPhone, iPad |
| Calendar | Move event | past-dated or conflicting schedule | High | iPhone, iPad |
| Timer | Start timer | multiple active timers | Medium | iPhone, iPad |
| Fallback | Unsupported request | misleading confidence | High | iPhone, iPad |
| Recovery | Retry after failure | duplicate actions after retry | High | iPhone, iPad |
| Cross-platform | Same utterance on both devices | inconsistent result or copy | Medium | iPhone, iPad |
