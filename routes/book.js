
/*
 * GET books listing.
 */

exports.list = function(req, res){
  res.render('book', { title: 'Books' });
};
