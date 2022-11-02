#!/bin/bash

sed -i "s~\$$1~'${!1}'~" /var/www/js/app*.js