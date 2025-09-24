@echo off
:: 获取当前批处理文件的绝对路径
set "CURRENT_DIR=%~dp0"

:: 直接在当前目录下执行 pnpm update 命令
pnpm update @whitesev/domutils @whitesev/pops @whitesev/utils @whitesev/data-paging qmsg --latest --dir %CURRENT_DIR%