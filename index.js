const express = require('express')

const server = express()

server.use(express.json())

const projects = []

//middleware1
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

//middleware2
function logRequests(req, res, next) {

  console.count("Número de requisições")

  return next()
}

server.use(logRequests);

// creating a route with POST http method
server.post('/projects', logRequests, (req, res) => {
  const { id, title } = req.body

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project)

  return res.json(projects)
})

// creating a route with POST http method that specifies a project
server.post('/projects/:id/tasks', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id = id)
  project.tasks.push(title)

  return res.json(project)
})


// creating a route with GET http method
server.get('/projects', (req, res) => {
  return res.json(projects)
})

// creating a route with PUT http method
server.put('/projects/:id', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id);
  project.title = title

  return res.json(projects)
})


// creating a route with DELETE http method
server.delete('/projects/:id', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)
  projects.splice(projectIndex, 1)

  return res.send();
})


server.listen(3000)