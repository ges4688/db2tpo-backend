import mongoose from 'mongoose';

export interface IRecipe extends mongoose.Document {
  title: string;
  ingredients: string[];
  instructions: string;
  ownerId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: {
    type: String,
    required: [true, 'Instructions are required']
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Owner ID is required']
  }
}, {
  timestamps: true
});

// Add text index for title search
recipeSchema.index({ title: 'text' });

export const Recipe = mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', recipeSchema); 