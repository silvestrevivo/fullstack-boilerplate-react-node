# fullstack-boilerplate-react-node

Fullstack boilerplate with react and node.

## Installation

```bash
git clone https://github.com/silvestrevivo/fullstack-boilerplate-react-node.git
cd fullstack-boilerplate-react-node
npm i
```

## Run server

1. Run gulp to generate latest swagger combined file:
```
gulp swagger-concat
```

This will generate ```server/api/swagger/swagger.yaml``` file in order
to be used by the server app.

2. Run server:

```
npm run start-server
```

Your API is being served on: 

- http://127.0.0.1:10010/hello

Now try:

- http://127.0.0.1:10010/hello?name=Silvestre

## To do

- [ ] force node version  
- [ ] button to heroku
- [ ] example page online but also in screenshots 