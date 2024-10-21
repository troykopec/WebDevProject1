# Git Workflow Instructions for Team

This guide provides the necessary commands and steps to follow before and after making changes to your branch to ensure smooth collaboration.

## Before You Start Making Changes

1. **Ensure You Are on Your Branch**  
   Always verify that you're on the correct branch before making changes.
   ```bash
   git branch
   git checkout <your-branch>

2. **Pull the Latest Changes from Main**
    Always pull the latest changes from the main branch before starting your work to avoid conflicts later.
    ```bash
    git pull origin main

3. **Handle Conflicts (If Any)**
    If you face merge conflicts while pulling, Git will notify you. Resolve them manually, then stage and commit the resolved changes. If you get "Already up to date." you can skip this step.
    ```bash
    git add <conflicted-files>
    git commit -m "Resolved merge conflict"

4. **After Making Changes**
    Stage Your Changes
    Add all the modified files that you want to include in your commit.
    ```bash
    git status
    git add <file/files-to-add> 

5. **Commit Your Changes**
    Commit your changes with a meaningful message.
    ```bash
    git commit -m "Describe your changes"

6. **Pull From Main Again**
    Before pushing your changes, pull from the main branch again to ensure you have the latest updates and avoid conflicts.
    ```bash
    git pull origin main

7. **Push Your Changes**
    After everything is up to date and conflicts (if any) are resolved, push your changes to your branch.
    ```bash
    git push origin <your-branch>

8. **Create a Pull Request**
    Once you're ready, create a Pull Request (PR) to merge your changes into main. Make sure the code is reviewed and tested.