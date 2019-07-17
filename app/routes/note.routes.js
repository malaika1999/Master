module.exports = (app) => {
  const createNotes = require('../controllers/note.create.js')
  const deleteNotes = require ('../controllers/note.delete.js')
  const findAllNotes = require ('../controllers/note.findall.js')
  const findOneNotes = require ('../controllers/note.findone.js')
  const updateNotes = require ('../controllers/note.update.js')

  app.post("/notes", createNotes.create);

  app.get("/notes", findAllNotes.findAll);
  app.get("/notes/:noteId", findOneNotes.findOne);
  app.put("/notes/:noteId", updateNotes.update);
  app.delete("/notes/:noteId", deleteNotes.delete);
};
//comment
