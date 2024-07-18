@rem 切换至master分支
git checkout -q master
@rem 合并dev分支
git merge dev
@rem 拉取远程标签
git pull --tags origin master
@rem 推送到远程
git push origin master:master
@rem 切回dev分支
git checkout -q dev