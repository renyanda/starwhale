#!/usr/bin/env bash

set -e

if [[ ! -z ${DEBUG} ]]; then
    set -x
fi

if [ "$1" = "1" ] ; then
    echo "overwrite pip config..."
    mkdir /root/.pip
    echo "[global]
index-url = http://$2:$3/repository/pypi-hosted/simple
extra-index-url=https://pypi.org/simple

[install]
trusted-host=$2
" > /root/.pip/pip.conf

fi
