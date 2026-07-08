# ⚔️ The Adventurer's Guild Quest Board

## Descirption
A simple, single-page web project built with basic **HTML, CSS, and JavaScript**.
It displays an interactive "Quest Card" where heroes can view a quest and accept it with a single click.

---

## Features

- A styled quest card showing a **quest title** and a **short description**
- An **"Accept Quest"** button at the bottom of the card
- When the button is clicked, JavaScript:
  - Changes the button text to **"Quest Accepted!"**
  - Changes the button color from **green to gray**
  - **Disables** the button so it cannot be clicked again
 
---

## Project Structure
```
quest-board/
├── index.html   → The structure of the page (card, title, description, button)
├── style.css    → The styling (card design, colors, button styles)
└── script.js    → The interactivity (what happens when the button is clicked)
```

---


## How the Code Works
1. **index.html** builds the page: a `<div>` acts as the quest card, containing an `<h2>` title, a `<p>` description, and a `<button>` with the id `accept-btn`. It links to the CSS and JS files.
2. **style.css** styles the card (white background, golden border, rounded corners, shadow) and gives the button its green color.
3. **script.js** finds the button using `document.getElementById("accept-btn")` and listens for a click with `addEventListener`. When clicked, it updates the button's text (`textContent`), changes its background color (`style.backgroundColor`), and disables it (`disabled = true`).

---

## Output (Demonstration in a GIF File Format)
<img width="800" height="422" alt="The Adventurer&#39;s Guild Quest Board-GIF" src="https://github.com/user-attachments/assets/13e08ae6-fc03-43b9-bb9b-d25763e0fd36" />

---

## How to Run

### Option 1: Open directly in the browser
1. Make sure all three files are in the **same folder**.
2. Double-click `index.html` to open it in your browser.
3. Click **"Accept Quest"** and watch the button change!

### Option 2: Run with VS Code (Live Server)
1. Open **VS Code**.
2. Go to **File → Open Folder** and select the project folder.
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel (`Ctrl+Shift+X`).
4. In the Explorer sidebar, right-click `index.html` → **"Open with Live Server"**.
5. The page opens in your browser at `http://127.0.0.1:5500` and auto-refreshes whenever you save changes.
