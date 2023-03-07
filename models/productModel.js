import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 64,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);