server:
        hugo server --enableGitInfo

build:
        hugo --minify --gc --cleanDestinationDir --enableGitInfo

clear:
        rm -r ./public/
        rm -r ./resources/
