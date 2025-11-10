const { model } = require("mongoose");

const PositionSchema = require("../Schema/PositionSchema");

const PositionModel = model("postion", PositionSchema);

module.exports = { PositionModel };
