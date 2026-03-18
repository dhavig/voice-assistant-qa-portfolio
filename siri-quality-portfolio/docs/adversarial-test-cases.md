# Adversarial Test Cases

## Reminder Flows

1. Input: `Remind me to call mom`
Expected:
- assistant asks for time if required
- does not create incomplete reminder silently

2. Input: `Remind me tomorrow at 25 PM`
Expected:
- invalid time handled explicitly
- no reminder created

3. Input: `Set a reminder for lunch`
Expected:
- assistant asks for clarification instead of guessing

## Weather Flows

4. Input: `Will it rain there?`
Precondition:
- previous city query exists
Expected:
- correct context carryover or clarification

5. Input: `What's the weather in Paris Texas not Paris France`
Expected:
- location disambiguation handled correctly

## Calendar Flows

6. Input: `Schedule dinner with Sam next Friday`
Expected:
- missing time triggers clarification
- event not created with hidden defaults

7. Input: `Move my 3 PM meeting to yesterday`
Expected:
- invalid or past-dated action handled safely

## Timer Flows

8. Input: `Set two timers for five minutes`
Expected:
- explicit handling for multiple timers
- clear naming or count confirmation

9. Input: `Cancel the timer`
Precondition:
- multiple timers active
Expected:
- assistant asks which timer

## Trust and Recovery

10. Input: unsupported request phrased like a supported one
Expected:
- assistant declines clearly
- does not fake completion

11. Input: command during network failure
Expected:
- clear failure feedback
- retry path suggested if possible

12. Input: rapid repeated voice commands
Expected:
- no duplicate action creation
- state remains stable
