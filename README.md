# How to Fork a Repo & Make a Pull Request

### Step 1: Fork the Repository

1. Go to the original repository on GitHub.
2. Click the **Fork** button (top right corner). This creates a copy in your GitHub account.

### Step 2: Clone Your Fork

1. Open your terminal.
2. Clone your forked repository:
   ```bash
   git clone <your_fork_url>
   ```
   Replace `<your_fork_url>` with the URL of your fork (found on your GitHub fork page).

### Step 3: Change Directory

Navigate to the directory of your cloned repository:
```bash
cd <repository_name>
```

### Step 4: Make Your Changes

Edit the files you want to change using your favorite text editor.

### Step 5: Stage and Commit Your Changes

1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit your changes:
   ```bash
   git commit -m "Your commit message here"
   ```

### Step 6: Push Your Changes to Your Fork

Push your changes to your fork on GitHub:
```bash
git push -u origin master
```

### Step 7: Create a Pull Request

1. Go to your forked repository on GitHub.
2. Click on **Compare & pull request**.
3. Fill out the details and click **Create pull request**.

### Step 8: Add the Original Repository as Upstream

After creating the pull request, add the original repository as a remote called `upstream`:
```bash
git remote add upstream <original_repo_url>
```
Replace `<original_repo_url>` with the URL of the original repository.

### Step 9: Pull Updates from Upstream

1. Switch to your `master` branch:
   ```bash
   git checkout master
   ```
2. Pull the latest changes from the upstream repository:
   ```bash
   git pull upstream master
   ```

### Step 10: Push Any New Updates (if needed)

If you pulled new updates, push them back to your fork (optional):
```bash
git push origin master
```

---

#### Summary of Commands for Making a PR

```bash
# Step 1: Clone your fork
git clone <your_fork_url>
cd <repository_name>

# Step 2: Make changes, then stage and commit
git add .
git commit -m "Your commit message here"

# Step 3: Push your changes
git push -u origin master

# Step 4: Create a pull request (done on GitHub)

# Step 5: Add upstream repository
git remote add upstream <original_repo_url>

# Step 6: Pull latest updates from upstream
git checkout master
git pull upstream master

# Step 7: Push any new updates if needed
git push origin master
```

---