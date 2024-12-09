@rem 切换至master分支
git checkout -q master
@rem 合并dev分支
git merge dev
@rem 拉取远程master
git pull --tags origin master
@rem 将本地master推送到远程master
git push origin master:master
@rem 切回dev分支
git checkout -q dev