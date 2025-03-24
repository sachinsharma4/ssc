Here are some common Git commands with brief explanations:

### **Basic Git Commands**

1. **`git init`**  
   Initializes a new Git repository in your current directory. It creates a `.git` directory to track changes.
   ```bash
   git init
   ```

2. **`git clone [url]`**  
   Clones an existing Git repository from a remote server to your local machine.
   ```bash
   git clone https://github.com/username/repo.git
   ```

3. **`git status`**  
   Shows the current status of the working directory and staging area (files changed, added, or deleted).
   ```bash
   git status
   ```

4. **`git add [file]`**  
   Stages a file, preparing it for a commit.
   ```bash
   git add file.txt
   ```

5. **`git commit -m "message"`**  
   Commits staged changes with a message describing the changes.
   ```bash
   git commit -m "Fixed the bug in feature X"
   ```

6. **`git push`**  
   Pushes your local commits to the remote repository.
   ```bash
   git push origin main
   ```

7. **`git pull`**  
   Fetches changes from the remote repository and merges them into your local branch.
   ```bash
   git pull origin main
   ```

8. **`git fetch`**  
   Downloads changes from the remote repository but does not merge them automatically.
   ```bash
   git fetch origin
   ```

9. **`git branch`**  
   Lists all the branches in your repository. The current branch is highlighted with a `*`.
   ```bash
   git branch
   ```

10. **`git branch [branch-name]`**  
    Creates a new branch.
    ```bash
    git branch feature-xyz
    ```

11. **`git checkout [branch-name]`**  
    Switches to a different branch.
    ```bash
    git checkout feature-xyz
    ```

12. **`git merge [branch-name]`**  
    Merges changes from another branch into the current branch.
    ```bash
    git merge feature-xyz
    ```

13. **`git log`**  
    Displays a log of commits in the current branch, including commit hashes, messages, and dates.
    ```bash
    git log
    ```

14. **`git reset [commit]`**  
    Resets the current branch to a specific commit. Can be used with `--hard` (to discard changes) or `--soft` (to keep changes staged).
    ```bash
    git reset --hard <commit-hash>
    ```

15. **`git diff`**  
    Shows the differences between the working directory and the index (staged files).
    ```bash
    git diff
    ```

16. **`git stash`**  
    Temporarily saves changes that are not yet committed.
    ```bash
    git stash
    ```

17. **`git stash pop`**  
    Restores the most recent stashed changes.
    ```bash
    git stash pop
    ```

18. **`git remote -v`**  
    Displays the remote repositories linked to your local repository.
    ```bash
    git remote -v
    ```

19. **`git remote add [name] [url]`**  
    Adds a new remote repository.
    ```bash
    git remote add origin https://github.com/username/repo.git
    ```

### **Advanced Git Commands**

1. **`git rebase`**  
   Reapplies commits from the current branch on top of another branch. It's a way to make your branch history cleaner.
   ```bash
   git rebase main
   ```

2. **`git cherry-pick [commit-hash]`**  
   Applies the changes from a specific commit from another branch to the current branch.
   ```bash
   git cherry-pick <commit-hash>
   ```

3. **`git tag [tag-name]`**  
   Creates a new tag at the current commit.
   ```bash
   git tag v1.0.0
   ```

4. **`git tag`**  
   Lists all tags in the repository.
   ```bash
   git tag
   ```

5. **`git blame [file]`**  
   Shows who made changes to each line of a file, along with the commit ID.
   ```bash
   git blame file.txt
   ```

6. **`git log --oneline`**  
   Shows a condensed log of commits, one per line with abbreviated commit hashes.
   ```bash
   git log --oneline
   ```

### **Git Workflow Tips**

- **Forking**: Fork a repository if you're contributing to someone else's project. You can clone your fork and submit pull requests to the original repository.
- **Branching**: Use branches to develop features or fix bugs separately from the main codebase (`main` or `master`).
- **Pull Requests**: After pushing to a branch on GitHub or another platform, create a pull request for reviewing and merging your changes.

Let me know if you need more specifics on any of these!