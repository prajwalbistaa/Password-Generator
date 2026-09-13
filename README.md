# Password Generator

A simple browser-based password generator built with HTML, CSS, and JavaScript.

## Features

- Generate a password using characters from a typed word.
- Generate a completely random 10-character password.
- View multiple generated passwords in an expanding list.
- Copy a generated password to the clipboard.
- Delete individual generated passwords.
- Generated passwords are shown in the list instead of the input field.

## Typed-Word Passwords

Enter a word with at least 6 characters and at least one uppercase letter in its first 6 characters. The generated password follows this structure:

```text
Characters 0-2 from the typed word
2 random numbers or symbols
Characters 3-5 from the typed word
2 random numbers or symbols
```
### Auto-Generated Passwords

Generate a 10-characters password using random characters such as Uppercase Letters, Lowercase Letters, Numeric Values, or Special Characters.

## Getting Started

1. Open `index.html` in a web browser.
2. Enter a word and select **Generate Password**, or select **Generate Random Password**.
3. Use **Copy** to copy a password or **Delete** to remove it from the list.

No installation or build tools are required.

## Files

- `index.html` - Page structure and styling.
- `script.js` - Password generation and list interactions.
