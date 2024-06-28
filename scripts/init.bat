@echo off

cd ../packages
for %%a in ("components", "docs", "core", "hooks", "utils", "theme") do (
	echo %%a
	md %%a
	cd %%a
	pnpm init
	cd ..
)

pause