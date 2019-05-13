import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  content: String,
  width: Number,
  height: Number,
});


// create model class
const Note = mongoose.model('Poll', NoteSchema);

export default Note;
