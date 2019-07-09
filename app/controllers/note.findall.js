const Note = require("../models/note.model.js");

exports.findAll = (req, res) => {
    Note.find()
      .then(notes => {
        res.send(notes);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurres while retrieving notes"
        });
      });
  };