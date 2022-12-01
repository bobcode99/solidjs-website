#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
# cd dist

# place .nojekyll to bypass Jekyll processing
echo > ./dist/nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -B main

git add dist -f
# git add -A
git commit -m 'for deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
# git push -f git@github.com:bobcode99/solidjs-website.git main:gh-pages
git subtree push --prefix dist origin gh-pages
cd -
