var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Todo.findAll({}).then(function(dbtodos) {
      res.render("index", {
        msg: "Welcome!",
        todo: dbtodos
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbtodos) {
      res.render("example", {
        todo: dbtodos
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
