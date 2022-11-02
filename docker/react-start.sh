#!/bin/bash

cd /home/node/workdir/src

if [[ $1 == "true" ]]
then
    echo "Running npm install $1"
    npm install
fi

echo "Running ./node_modules/.bin/react-scripts start"

./node_modules/.bin/react-scripts start