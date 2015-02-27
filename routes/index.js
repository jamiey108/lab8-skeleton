var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
var index = "index";
var index_alt = "index_alternate";
var num = Math.random();
var rend;
if(num < 0.5){
	rend = index;
}else{
	rend = index_alt;
}

  res.render(rend, projects);
};