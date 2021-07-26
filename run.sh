#!/bin/bash
#
# (c) thispsj 2021
# A script to run the server. Dependencies will be installed if node_modules not found.
# Arguments : Port & A secret string

if [! -d "node_modules"]
then
  npm install express octokit safe-compare
fi

export PORT=$1
export SECRET_TOKEN=$2
node ./index.js