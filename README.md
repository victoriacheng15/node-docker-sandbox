# Node Docker Sandbox

This is a repo for docker sandbox and help me to understand how to having docker to pick up the change.

- *Without* docker-compose.yml, do steps below:
  - docker build -t ts-node-docker . 
  - docker run -it -p 3000:3000 -v $(pwd):/app ts-node-docker npm run dev 

- *With* docker-compose.yml, do steps below:
  - docker-compose up