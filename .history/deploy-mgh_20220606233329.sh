#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# deploy to main

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:icodea/icodea.github.io.git main
git push -u origin main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:icodea/blog.git main


# deploy to github pages

pnpm docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#git push -f git@github.com:icodea/icodea.github.io.git main:gh-pages
#git push -u origin main:gh-pages

git remote add origin https://github.com/icodea/icodea.github.io.git
git branch -M gh-pages
git push -u origin gh-pages
