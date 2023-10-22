const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

// creating virtual id, eg: we can use id in our project instead of _id
const virtual = categorySchema.virtual("id");
virtual.get(function() {
  return this._id;
});
categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {delete ret._id}
})


exports.Category = mongoose.model("Category", categorySchema);
