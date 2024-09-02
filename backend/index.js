import express from 'express';
const app = express()
const port = 8080;
import {getData, deleteEvents, addItem, updateFunction, getTables, getAllTables} from './database.js'

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
})

app.get('/api/get/:tableName', async (req, res) => {
  const tableName = req.params.tableName;
  const data = await getAllTables(tableName);
  res.json({data})
})
// For getting tables
app.get('/api/tables', async (req, res) => {
  const tables = await getTables();
  res.json(tables)
})


app.post('/api/add/:tableName', async (req, res) => {
    const {id, title, dsc, imgLink} = req.body;
    let tableName = req.params.tableName
  try {
   await addItem(tableName, id, title, dsc, imgLink);
    res.json({
      message: 'Event added successfully'
    })
  }
  catch(error) {
    res.json({
      message: `${error}`
    })
  }
})

app.put('/api/update/:tableName/:id', async (req, res) => {
  const id = req.params.id;
  let tableName = req.params.tableName
  const {title, dsc, imgLink} = req.body;
  try {
    await updateFunction(tableName, id, title, dsc, imgLink);
  }
  catch(error) {
    res.json({
      message: `${error}`
    })
  }
})

app.delete('/api/delete/:tableName/:id', async (req, res) => {
  let id = req.params.id;
  let tableName = req.params.tableName
  try {
    await deleteEvents(tableName, id)
  }
  catch {
    res.send('Event not deleted')
  }
})

// TESTING API TO FETCH ROWS AND COLUMNS;








app.listen(port), () => {
  console.log(`database is activated into port no: ${port}`)
}