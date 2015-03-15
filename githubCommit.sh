#!/bin/bash
cd /home/ubuntu/Documents/Work/badrullami.github.io/
git add .
git commit -a -m "autoupdate `date +%F-%T`"
git push origin master