# name: building a typescript config file

- run: tsc -- init

# name: package.json file initialization

- run: npm init -y

# name: install nodemon as a dev dependency

- run: npm i -D nodemon

# name: change package.json start script

- start: nodemon index.js

# Run typescript in node environment

- run: npm i ts-node-dev

# Change start script

- run: ts-node-dev --respawn --transfile-only index.ts
