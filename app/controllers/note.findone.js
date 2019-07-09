const Note = require("../models/note.model.js");


exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: "note not found with id" + req.params.noteId
          });
        }
        res.send(note);
      })
      .catch(err => {
        if (err.kind == "ObjectId") {
          return res.status(404).send({
            message: "note not found with id " + req.params.noteId
          });
        }
        return res.status(500).send({ message: "error"});
      });
  };