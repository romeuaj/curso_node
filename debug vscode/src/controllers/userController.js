const users = ["Romeu", "Kayron", "Aliane"];
function getMsg(req, res) {
  return res.status(200).json({ msg: "Servidor funcionando!" });
}

function getUsers(req, res) {
  return res.status(200).json(users);
}

function getUser(req, res) {
  if (req.params.id <= users.length - 1 && req.params.id >= 0)
    return res.status(200).json(users[req.params.id]);
  return res.status(404).json({ msg: "Usuário não encontrado" });
}

function addUser(req, res) {
  users.push(req.body.name);
  return res.status(201).json(users);
}

function deleteUser(req, res) {
  const id = users.indexOf(req.body.name);
  if (id >= 0) {
    users.splice(id, 1);
    return res.status(200).json(users);
  }
  return res.status(404).json({msg: "Usuário não encontrado para apagar"})
}

function updateUser(req, res) {
    const id = users.indexOf(req.body.name)
    if(id >= 0){
        users.splice(id, 1, req.body.newName)
        return res.status(200).json(users)
    }
    return res.status(404).json({msg: "Usuário não encontrado para edição"})
}

export { addUser, getUser, getUsers, deleteUser, updateUser, getMsg };
