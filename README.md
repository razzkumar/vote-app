
Architecture
-----

![Architecture diagram](architecture.png)

* A front-end web app in [Python](/vote)
* A [Redis](https://hub.docker.com/_/redis/) queue which collects new votes
* A [.NET Core](/worker/src/Worker) worker which consumes votes and stores them in...
* A [Postgres](https://hub.docker.com/_/postgres/) database backed by a Docker volume
* A [Node.js](/result) webapp which shows the results of the voting in real time
