#!/bin/bash

help() {
	echo "Usage:"
	echo "        start.sh [--install]"
	echo ""
	echo "--install        	Starting the application and also running npm install"
	echo "--local			Starting the application with local backend"
	echo "--mock			Starting the application with mocked backend"
	echo "--build			Starting the application rebuiling containers"
	exit
}

command_options=" $@ "
run_install=false
fe_domain=http://localhost:88

if [[ $# -eq 0 ]]
then
    echo "Running application without npm install"
	run_install=false
fi

if [[ "$command_options" = *" -h "* ]] || [[ "$command_options" = *" --help "* ]]
then
	help
fi

containers="frontend-serve"
variables=""
if [[ "$command_options" = *" --build "* ]]
then
    echo "Running application and rebuilding"
	variables="$variables --build"
fi

if [[ "$command_options" = *" --install "* ]]
then
    echo "Running application and npm install"
	run_install=true
fi

if [[ "$command_options" = *" --local "* ]]
then
    echo "Running application with local backend"
	RUN_INSTALL=$run_install REACT_APP_FE_DOMAIN=$fe_domain REACT_APP_BASE_URL=http://localhost/v1 docker-compose up $variables frontend-serve
else
    echo "Running application with dev backend"
	RUN_INSTALL=$run_install REACT_APP_FE_DOMAIN=$fe_domain REACT_APP_BASE_URL= docker-compose up $variables frontend-serve
fi
