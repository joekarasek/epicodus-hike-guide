echo "Switch to gh-pages branch"
git checkout -b gh-pages
git merge master

echo "Clean up"
rm -rf dist

echo "Create new production build"
source .env
ember build --environment production

echo "Add dist to commit and push it to GitHub"
git add dist --force
git commit -am "deploy"
git push origin gh-pages

echo "Switch back to master branch"
git checkout master
