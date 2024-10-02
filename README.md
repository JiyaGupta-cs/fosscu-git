# How to make your first contribution ???
This documentation aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.
#### If you don't have git on your machine install it.
## Fork this repository
 Fork this repository by clicking on the fork button on the top of this page.
 This will create a copy of this repository in your account.
## Clone the repository
 Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click on open with Github Desktop ot you can click on  *copy to clipboard* icon if you want to use git bash.
**Note: Further command are for Git bash users not for the Git Desktop Users**
> For Git Desktop users ---> Now just click on Open with VS code and start your contribution.
## Commit Changes
 After you have updated the files,click on 'Commit to main' and then click on push origin.
 Now Come back to Github web and click on contribute to submit your changes for review.
***
## Steps for Git Bash Users 
Open a terminal and run the following git command:
```
git clone https://github.com/JiyaGupta-cs/fosscu-git
```
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.
For example:
```
git clone https://github.com/JiyaGupta-cs/fosscu-git
```



 Here you're copying the contents of the first-contributions repository on GitHub to your computer.
## Create a branch
Change to the repository directory on your computer (if you are not already there):
```
cd desktop
```
Now create a branch using the `git checkout` command:
```
git checkout -b <your-new-branch-name>
```
For example:
```
git checkout -b add-new-file
```
(The name of the branch does not need to have the word *add* in it, but it's a reasonable thing to include because the purpose of this branch is to add your name to a list.)
## Make necessary changes and commit those changes
Now open add or edit file in a text editor. Add code for any existing algorithm in other language or add some new algorithms. Make sure to update correspond README.md file if needed. Now, save the file.
If you go to the project directory and execute the command `git status`, you'll see there are changes.
Add those changes to the branch you just created using the `git add` command:

```
upstream
```

```
git remote rename origin

```

```
git add "name of the file you add or edit"
```
Now commit those changes using the `git commit` command:
```
git commit -m "Add message for the change"
```
## Push changes to GitHub
Push your changes using the command `git push`:
```
git push origin <add-your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you created earlier.
## Submit your changes for review
If you go to your repository on GitHub, you'll see a `Contribute` button. Click on that button.
click on `Open pull request`.
click on `Create pull request`.
...add git remote rename origin, upstream, git remote add origin add them
