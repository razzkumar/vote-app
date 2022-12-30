#!/bin/sh
set -eo pipefail

host="$(hostname -i || echo '127.0.0.1')"

if ping="$(redis-cli -h "$host"  -a 'redis'  ping)" && [ "$ping" = 'PONG' ]; then
	exit 0
fi

exit 1
