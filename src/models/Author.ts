import mongoose, { Document } from 'mongoose';

export interface IAuthor extends Document {
  name: String;
}

const schema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IAuthor>('Author', schema);
