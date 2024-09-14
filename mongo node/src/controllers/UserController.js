import users from "../models/users.js";

async function getUsers(req, res) {
  return res.status(200).json(await users.find());
}

async function creatUser(req, res) {
  const user = req.body;
  const newUser = await users.create(user);

  return res.status(201).json(newUser);
}

async function userDelete(req, res) {
  const id = req.params.id;
  await users.findByIdAndDelete({ _id: id });
  res.status(200).json({ mensagem: "usuario deletado" });
}

export { getUsers, creatUser, userDelete };
