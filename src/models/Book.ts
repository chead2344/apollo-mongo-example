import mongoose, { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  authorId: string;
}

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IBook>('Book', schema);
