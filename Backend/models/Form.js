import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  imageUrl: { type: String, default: '' }
});

export default mongoose.model('Form', FormSchema);
