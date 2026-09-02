# Installing React (TypeScript)

A simple guide for complete beginners. No React, TypeScript, or command line experience needed.

---

## What Is React?

**React** is a JavaScript library for building websites and web apps. You write **components** (reusable pieces of UI) and React updates the page when your data changes.

**TypeScript** is JavaScript with extra type checking. It catches mistakes earlier and makes code easier to work with as projects grow. We'll use TypeScript from the start — it's the standard for new React projects.

To run React on your computer, you need:

1. **Node.js** — runs JavaScript tools on your machine
2. **npm** — installs React and other libraries (comes with Node.js)

---

## What Is the Command Line?

The **command line** (Terminal on Mac, PowerShell or Terminal on Windows) is a text-based way to talk to your computer. You type commands and press **Enter**.

### How to Open It

| System | How to open |
|--------|-------------|
| **Mac** | Press `Cmd + Space`, type `Terminal`, press Enter |
| **Windows** | Press `Win`, type `PowerShell` or `Terminal`, press Enter |

### Commands You'll Use

| Command | What it does | Example |
|---------|--------------|---------|
| `pwd` | Shows where you are (Mac/Linux) | `pwd` |
| `cd` | Go to a folder | `cd Documents` |
| `cd ..` | Go up one folder | `cd ..` |
| `ls` | List files (Mac/Linux) | `ls` |
| `dir` | List files (Windows) | `dir` |

Use the **arrow keys** to move up and down in menus. Press **Enter** to confirm a choice.

---

## Step 1: Install Node.js

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version (the recommended one)
3. Run the installer and accept the defaults

### Check That It Worked

```bash
node --version
npm --version
```

You should see version numbers (e.g., `v22.x.x` and `10.x.x`). If you get an error, close and reopen Terminal, then try again.

---

## Step 2: Go to This Project Folder

```bash
cd ~/Documents/GitHub/PWB_Class_02
```

On Windows, adjust the path if needed:

```bash
cd C:\Users\YourName\Documents\GitHub\PWB_Class_02
```

Confirm you're in the right place — you should see a `Tutorials` folder:

```bash
ls        # Mac/Linux
dir       # Windows
```

---

## Step 3: Create a React + TypeScript App

We'll use **Vite** — a fast, minimal tool for starting React projects. Run:

```bash
npm create vite@latest
```

If it asks to install `create-vite`, type **`y`** and press Enter.

Vite will ask you a few questions. Here's exactly what to pick for the **most basic** React + TypeScript setup:

---

### Question 1: Project name

```
◆  Project name:
│  vite-project
```

Type **`my-react-app`** and press Enter.

(You can use any name — this is just the folder name for your app.)

---

### Question 2: Select a framework

```
◆  Select a framework:
│  ● Vanilla
│  ○ Vue
│  ○ React          ← pick this one
│  ○ Preact
│  ...
```

Use **↓** and **↑** to highlight **React**, then press **Enter**.

---

### Question 3: Select a variant

```
◆  Select a variant:
│  ● TypeScript                    ← pick this one
│  ○ TypeScript + React Compiler
│  ○ JavaScript
│  ○ JavaScript + React Compiler
│  ...
```

Highlight **TypeScript** (the first option — *not* "TypeScript + React Compiler") and press **Enter**.

> **Skip the extras.** Options like React Compiler, React Router, and RSC are for later. Plain **TypeScript** is the simplest starting point.

---

### Question 4: Which linter to use?

```
◆  Which linter to use?
│  ● Oxlint          ← pick this one (default)
│  ○ ESLint
```

Highlight **Oxlint** and press **Enter**. It's already selected by default — just press Enter.

(Oxlint is a fast, built-in linter. You don't need to configure anything.)

---

### Question 5: Install and start now?

```
◆  Install with npm and start now?
│  ○ Yes
│  ● No              ← pick this for now
```

Choose **No** and press Enter.

We'll run the install and dev commands ourselves in the next steps so you know what each one does.

---

### Done scaffolding

You should see something like:

```
◇  Scaffolding project in .../PWB_Class_02/my-react-app...
│
└  Done. Now run:

  cd my-react-app
  npm install
  npm run dev
```

You now have a folder: `PWB_Class_02/my-react-app/`

---

### Shortcut (optional)

If you prefer to skip the questions entirely, this one command does the same thing:

```bash
npm create vite@latest my-react-app -- --template react-ts --no-eslint
```

---

## Step 4: Install Dependencies

Move into your new app and install packages:

```bash
cd my-react-app
npm install
```

This downloads React, TypeScript, and other libraries into a `node_modules` folder. The first run may take a minute.

---

## Step 5: Run the App

```bash
npm run dev
```

You should see:

```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

1. Open your browser
2. Go to **http://localhost:5173/**
3. You should see the default Vite + React page with a counter button

**You're running React with TypeScript.**

### Stop the Server

Press **`Ctrl + C`** in Terminal (hold Control, then press C).

---

## What's in the Project?

```
my-react-app/
├── node_modules/       ← installed packages (don't edit; don't commit)
├── public/             ← static files (icons, etc.)
├── src/                ← YOUR code lives here
│   ├── App.tsx         ← main component — start editing here
│   ├── main.tsx        ← entry point (loads React)
│   └── index.css       ← styles
├── index.html          ← the HTML page React attaches to
├── package.json        ← project info and scripts
├── tsconfig.json       ← TypeScript settings
└── vite.config.ts      ← Vite settings
```

Notice **`.tsx`** instead of `.jsx` — that's TypeScript + React.

### Try Your First Edit

1. Open `src/App.tsx` in Cursor
2. Find text like `Vite + React`
3. Change it to `Hello, World!`
4. Save the file
5. Your browser updates automatically

---

## Commands You'll Use Every Day

Run these from inside `my-react-app`:

| Command | When to use it |
|---------|----------------|
| `npm run dev` | Start the app for development |
| `npm run build` | Create a production build |
| `npm install` | Install packages after cloning or adding dependencies |

---

## Starting Again Later

```bash
cd ~/Documents/GitHub/PWB_Class_02/my-react-app
npm run dev
```

Open **http://localhost:5173/** in your browser.

---

## Common Problems

### "command not found: npm" or "node: command not found"
Install Node.js from [nodejs.org](https://nodejs.org/), quit Terminal, open it again, and retry.

### "Target directory is not empty"
You already have a folder with that name. Either pick a different project name, or delete/rename the existing folder first.

### Port already in use
Stop other dev servers with `Ctrl + C`, or use the alternate port Vite prints (e.g., 5174).

### Page is blank or shows an error
- Make sure `npm run dev` is still running
- Check the URL matches Terminal output
- Look for red error messages in Terminal

### TypeScript errors in the editor
Run `npm install` if you haven't yet. Most editors (including Cursor) need `node_modules` installed to understand TypeScript.

---

## Git Tip: Don't Commit `node_modules`

Add this to `.gitignore` in your React app folder:

```
node_modules/
dist/
.env
```

Anyone who clones your repo runs `npm install` once to get the same packages.

---

## Quick Reference: Full First-Time Setup

```bash
# 1. Go to this repo
cd ~/Documents/GitHub/PWB_Class_02

# 2. Create the app (interactive — answer the questions above)
npm create vite@latest

# 3. Install and run
cd my-react-app
npm install
npm run dev
```

Then open **http://localhost:5173/** in your browser.

---

## Learn More

- [React Official Tutorial](https://react.dev/learn)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Vite Documentation](https://vite.dev/guide/)

---

*Go through the Vite questions one at a time — arrow keys to move, Enter to confirm. Plain React + TypeScript is all you need to start.*
