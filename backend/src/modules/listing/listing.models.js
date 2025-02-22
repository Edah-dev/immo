const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  surface: { type: Number, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  state : { type: String, required: true },
  numberOfRooms: { type: Number, required: true },
  yearOfConstruction: { type: Number },
  status: { type: String, enum: ['pending', 'published', 'sold', 'deleted'], default: 'pending' },
  type: { type: String, enum: ['house', 'apartment', 'office', 'land', 'other'], required: true },
  category: { type: String, enum: ['sale', 'rent'], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  images: [{ type: String }], // URLs des images
  videos: [{ type: String }], // URLs des vidéos
  amenities: {
    wifi: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    bathroom: { type: Boolean, default: false },
    balcony: { type: Boolean, default: false },
    electricityIncluded: { type: Boolean, default: false },
    airConditioner: { type: Boolean, default: false },
    allChargesIncluded: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    securityGuard: { type: Boolean, default: false },
    swimmingPool: { type: Boolean, default: false },
    garden: { type: Boolean, default: false },
    terrace: { type: Boolean, default: false },
    heating: { type: Boolean, default: false },
    furnished: { type: Boolean, default: false },
    petsAllowed: { type: Boolean, default: false },    
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


ListingSchema.index({ title: 'text', description: 'text', address: 'text', country: 'text', city: 'text', zipCode: 'text', state: 'text' });
ListingSchema.index({ price: 1 });
ListingSchema.index({ surface: 1 });
//ListingSchema.index({ SchemaTypeOptions})

module.exports = mongoose.model('Listing', ListingSchema);