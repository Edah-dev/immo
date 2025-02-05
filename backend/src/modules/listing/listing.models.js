const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  surface: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['maison', 'appartement', 'chambre'], required: true },
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

module.exports = mongoose.model('Listing', ListingSchema);