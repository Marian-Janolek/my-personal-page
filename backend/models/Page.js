const mongoose = require('mongoose');

const PageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: {
      imgMobile: { type: String },
      imgTablet: { type: String },
      imgMonitor: { type: String },
    },
    pageUrl: {
      type: String,
      required: true,
    },
    gitUrl: {
      type: String,
      required: true,
    },
    desc: {
      type: [String],
      required: true,
    },
    descSK: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
    },
    usedTech: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Page', PageSchema);
