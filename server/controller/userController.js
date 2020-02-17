var user = require('../model/user');

exports.list_all_users = (req, res, next) => {
    console.log(req);
    user.list()
  .then( ([userList, metadata]) => {
    res.json({data: userList});
  })
  .catch(err => {
    console.log(err);
  })}