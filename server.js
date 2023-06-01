const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const jwt = require("jsonwebtoken");

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use(auth);

// const rules = auth.rewriter({
//     rides: 664
// })

// server.use(rules)
server.db = router.db

server.use(router)


server.listen(3000, () => {
    console.log('JSON Server is running')
})