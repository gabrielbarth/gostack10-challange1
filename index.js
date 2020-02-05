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

//criando uma rota com o método http POST - projetos
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

//criando uma rota com o método http POST - tarefas
server.post('/projects/:id/tasks', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id = id)
  project.tasks.push(title)

  return res.json(project)
})

//criando uma rota com o método http GET
server.get('/projects', (req, res) => {
  return res.json(projects)
})

//criando uma rota com o método http PUT
server.put('/projects/:id', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id);
  project.title = title

  return res.json(projects)
})


//criando uma rota com o método http DELETE
server.delete('/projects/:id', checkProjectExists, logRequests, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)
  projects.splice(projectIndex, 1)

  return res.send();
})


server.listen(3000)