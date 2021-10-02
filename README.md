# Interview Check (Javascript)

Node.js project for verifying interview setup

## Requirements

- docker
- vscode

## Open in dev container

1. Clone this repository
2. Open the directory in VS Code
3. Click the "Open a Remote Window" icon on the bottom-left corner of VS Code
4. Select "Reopen in Container"

Check out this [Link](https://github.com/sourceallies/interviews/blob/main/docs/interview-environment.md) for more information on using a dev container. 

A development container image will be built according to the configuration in the .devcontainer folder. Nothing is installed on your host OS. Everything can be cleaned up by deleting the development container and corresponding image.

## Run Project

```
npm start
```

## Test Project

```
npm run test
```

## Deleting development container and container image

**Assuming you have cloned the repository into a `interview-javascript-check` directory,** you can delete the container and corresponding image by running the following command:

**macOS/Linux:**

```
docker ps -a | grep 'vsc-interview-javascript-check' | awk '{print $1}' | xargs docker rm && \
docker images | grep 'vsc-interview-cjavascript-check' | awk '{print $1}' | xargs docker image rm
```

**Windows PowerShell:**

```
(docker rm (docker ps -a --format '{{.ID}} {{.Image}}' | Select-String 'vsc-interview-javascript-check').ToString().Split()[0]) -and
(docker image rm ( (docker images | Select-String 'vsc-interview-javascript-check').ToString().Split()[0]))
```