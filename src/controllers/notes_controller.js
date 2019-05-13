import Note from '../models/note_model';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  // console.log('HELLO THERE THIS IS A PRINT STATEMENT');
  // then((note) => {
  //   console.log(note);
  //   return note.remove();
  // }).
  return Note.findOneAndRemove({ _id: id }).catch((err) => {
    console.log(err);
    return err;
  });
};

export const createNote = (fields) => {
  const newNote = new Note();

  newNote.title = fields.title;
  newNote.content = fields.content;
  newNote.x = fields.x;
  newNote.y = fields.y;
  newNote.width = fields.width;
  newNote.height = fields.height;

  return newNote.save();
  // you know the drill. create a new Note mongoose object
  // return .save()
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
