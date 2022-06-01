const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    pageCode: { type: String },
    pageName: { type: String },
    pageSchema: { type: String },
    pagePackages: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Pages", schema);
