const Dreamer = require("../../models/dreamer");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  const dreamers = await Dreamer.find({});
  res.status(200).json(dreamers);
}

async function create(req, res) {
  const dreamer = await Dreamer.create(req.body);
  res.status(201).json(dreamer);
}

async function show(req, res) {
  const dreamer = await Dreamer.findById(req.params.id);
  res.status(200).json(dreamer);
}

async function update(req, res) {
  const updateDreamer = await Dreamer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateDreamer);
}

async function deleteOne(req, res) {
  const deletedDreamer = await Dreamer.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedDreamer);
}
