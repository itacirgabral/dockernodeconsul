import express from 'express'
import Docker from 'dockerode'
import Consul from 'consul'

// REST
const app = express()
app.get('/health', (req, res) => {
  res.status(200)
  res.send('UP')
})
app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})

// DOCKER
const socketPath = process.env.SOCKET_PATH
const docker = new Docker({ socketPath })
docker.listContainers().then(containers => {
  console.log(`Há ${containers.length} docker containers`)
}).then(async () => {
    // CONSUL
    const consul = new Consul({ promisify: true })
    const members = await consul.agent.members()
    console.log(`Há ${
      Array.isArray(members) ? members.length : 0
    } consul members`)
})

