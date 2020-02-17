var award = require('../model/award');

exports.list_all_awards = (req, res, next) => {
    award.list()
  .then( ([awardList, metadata]) => {
    res.json({data: awardList});
  })
  .catch(err => {
    console.log(err);
  })}