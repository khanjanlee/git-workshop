git init
git add *
git commit -m "First Commit"
git config user.name $MyName
sit config user.mail $MyEmail
git branch -M main
git remote add origin https://github.com/khanjanlee/git-workshop.git
git push -u origin main

DID_SOME_CHANGES

git checkout -b developement
git add *
git commit -m "commit to developement branch"
git push  --set-upstream origin developement
git push 