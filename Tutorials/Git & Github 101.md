# Git & GitHub 101

A simple guide for complete beginners. No prior experience needed.

---

## What Are Git and GitHub?

**Git** is a tool on your computer that tracks changes to files over time. Think of it like "Track Changes" in Word, but for entire projects — and much more powerful.

**GitHub** is a website where you store your Git projects online. It lets you back up your work, collaborate with others, and share code.

| Term | What it is |
|------|------------|
| **Git** | The version control software (runs on your machine) |
| **GitHub** | A hosting service for Git repositories (runs in the cloud) |

You can use Git without GitHub, but GitHub makes sharing and teamwork much easier.

---

## Key Concepts (In Plain English)

### Repository (repo)
A folder that Git is tracking. It contains your project files plus a hidden `.git` folder where Git stores all history.

### Commit
A saved snapshot of your project at a point in time. Each commit has a message describing what changed (e.g., "Add login page").

### Branch
A separate line of work. The default branch is usually called `main`. You can create branches to try new features without breaking the main project.

### Remote
A copy of your repo stored somewhere else — usually on GitHub. The default remote name is `origin`.

### Push / Pull
- **Push** — send your local commits to GitHub
- **Pull** — download the latest changes from GitHub to your computer

### Clone
Copy an existing repo from GitHub to your computer for the first time.

---

## Before You Start

### 1. Install Git

- **Mac:** Open Terminal and run `git --version`. If Git isn't installed, macOS will prompt you to install it. Or install [Xcode Command Line Tools](https://developer.apple.com/xcode/resources/).
- **Windows:** Download from [git-scm.com](https://git-scm.com/)
- **Linux:** Run `sudo apt install git` (Ubuntu/Debian) or your distro's equivalent

### 2. Create a GitHub Account

Sign up at [github.com](https://github.com) — it's free.

### 3. Tell Git Who You Are (one-time setup)

Open Terminal (Mac/Linux) or Git Bash (Windows) and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email as your GitHub account.

---

## Your First Repo: Two Common Paths

### Path A — Start on GitHub, then clone to your computer

1. On GitHub, click **+ → New repository**
2. Name it (e.g., `my-first-project`), leave it public, click **Create repository**
3. On your computer, open Terminal and run:

```bash
cd ~/Documents
git clone https://github.com/YOUR-USERNAME/my-first-project.git
cd my-first-project
```

You now have a local copy. Edit files, then follow the "Daily Workflow" below.

### Path B — Start on your computer, then push to GitHub

1. Create a folder and turn it into a Git repo:

```bash
mkdir my-first-project
cd my-first-project
git init
```

2. Create a file, then save your first commit:

```bash
echo "# My First Project" > README.md
git add .
git commit -m "Initial commit"
```

3. On GitHub, create a new empty repo (don't add README or .gitignore)
4. Link your local repo and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-project.git
git branch -M main
git push -u origin main
```

---

## The Daily Workflow

This is the cycle you'll use most often:

```
Edit files → Stage → Commit → Push
```

### Step 1: Edit your files
Use any text editor or IDE. Save your changes.

### Step 2: Check what changed

```bash
git status
```

This shows which files are new, modified, or ready to commit.

### Step 3: Stage your changes

```bash
git add filename.txt        # one file
git add .                   # all changed files
```

Staging tells Git *which* changes you want in the next commit.

### Step 4: Commit

```bash
git commit -m "Describe what you changed"
```

Write a short, clear message. Examples:
- `"Add contact form to homepage"`
- `"Fix typo in README"`
- `"Update tutorial with git basics"`

### Step 5: Push to GitHub

```bash
git push
```

Your commits are now backed up online and visible to collaborators.

---

## Getting Updates from GitHub

If others (or you, from another computer) pushed changes:

```bash
git pull
```

Run this before you start working to avoid conflicts.

---

## Branches (Simple Version)

Branches let you work on something new without touching `main`.

```bash
git checkout -b my-feature    # create and switch to a new branch
# ... make changes, commit ...
git push -u origin my-feature # push the branch to GitHub
```

When you're done, you can open a **Pull Request** on GitHub to merge your branch into `main`.

To switch back to main:

```bash
git checkout main
```

---

## Essential Commands Cheat Sheet

| Command | What it does |
|---------|--------------|
| `git status` | See what's changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot |
| `git push` | Upload commits to GitHub |
| `git pull` | Download latest from GitHub |
| `git clone <url>` | Copy a repo from GitHub |
| `git log` | View commit history |
| `git diff` | See unstaged changes line-by-line |

---

## Working with Others

### Fork & Clone
- **Fork** — copy someone else's repo to your GitHub account
- **Clone** — download a repo to your computer

### Pull Request (PR)
A request to merge your changes into another branch or repo. On GitHub:
1. Push your branch
2. Click **Compare & pull request**
3. Describe your changes
4. Wait for review (if required), then merge

---

## Common Mistakes & Fixes

### "I forgot to pull first and now I have conflicts"
1. Run `git pull`
2. Git marks conflicting files — open them and look for `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Edit the file to keep the correct version
4. Run `git add .` then `git commit -m "Resolve merge conflict"`

### "I committed the wrong thing"
If you haven't pushed yet:

```bash
git reset --soft HEAD~1   # undo last commit, keep your changes
```

### "I want to discard all local changes to a file"

```bash
git checkout -- filename.txt
```

---

## Good Habits

1. **Commit often** — small, focused commits are easier to understand than one giant commit
2. **Write clear commit messages** — future you will thank you
3. **Pull before you push** — especially when working with a team
4. **Don't commit secrets** — never put passwords, API keys, or `.env` files in Git
5. **Use `.gitignore`** — tell Git to ignore files you don't want tracked (e.g., `node_modules/`, `.env`)

Example `.gitignore`:

```
node_modules/
.env
.DS_Store
```

---

## Quick Reference: Full Beginner Session

```bash
# First time only
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git clone https://github.com/YOUR-USERNAME/your-repo.git
cd your-repo

# Every work session
git pull                          # get latest
# ... edit files ...
git status                        # see changes
git add .
git commit -m "What you did"
git push                          # send to GitHub
```

---

## Learn More

- [GitHub Docs — Git Handbook](https://docs.github.com/en/get-started/using-git/about-git)
- [GitHub Skills](https://skills.github.com/) — free interactive lessons
- [Oh Shit, Git!?!](https://ohshitgit.com/) — fixes for common Git mistakes

---

*You've got this. Git feels confusing at first — everyone feels that way. Use this guide, run the commands, and it will click.*
