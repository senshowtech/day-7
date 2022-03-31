const { getDate, dateMonth } = require("../controller/waktu.js");

exports.blogs = [
  {
    project: "data 1",
    description: "data 1",
    start_date: "2022-03-31",
    end_date: "2022-04-02",
    date: "2 hari",
    date_moth: "31 Maret 2022 - 02 April 2022",
    nodejs: "fa-brands fa-node-js icon-size",
    vuejs: "fa-brands fa-vuejs icon-size",
  },
];

exports.blogArray = (req, res) => {
  let data = {
    project: req.body.inputproject,
    description: req.body.inputdescription,
    start_date: req.body.inputstartdate,
    end_date: req.body.inputenddate,
    date: getDate(req.body.inputstartdate, req.body.inputenddate),
    date_moth: dateMonth(req.body.inputstartdate, req.body.inputenddate),
    nodejs: req.body.nodejs,
    vuejs: req.body.vuejs,
    python: req.body.python,
    reactjs: req.body.reactjs,
  };
  this.blogs.push(data);
  res.redirect("/");
};

exports.blogData = (req, res) => {
  return res.render("index", { list: this.blogs });
};

exports.blogCreateproject = (req, res) => {
  return res.render("create-project");
};

exports.blogDetail = (req, res) => {
  let index = req.params.id;
  let dataBlogs = this.blogs.map(function (item) {
    return {
      ...item,
      index: index,
    };
  });
  return res.render("detail", dataBlogs[index]);
};

exports.blogEditdetail = (req, res) => {
  let index = req.params.id;
  let dataBlogs = this.blogs.map(function (item) {
    return {
      ...item,
      index: index,
    };
  });
  return res.render("edit-project", dataBlogs[index]);
};

exports.blogDelete = (req, res) => {
  let index = req.params.id;
  this.blogs.splice(index, 1);
  res.redirect("/");
};

exports.blogEdit = (req, res) => {
  let id = req.body.id;
  const updatedArray = this.blogs.map((value, index) => {
    if (index == id) {
      return {
        ...value,
        project: req.body.inputproject,
        description: req.body.inputdescription,
        start_date: req.body.inputstartdate,
        end_date: req.body.inputenddate,
        date: getDate(req.body.inputstartdate, req.body.inputenddate),
        date_moth: dateMonth(req.body.inputstartdate, req.body.inputenddate),
        nodejs: req.body.nodejs,
        vuejs: req.body.vuejs,
        python: req.body.python,
        reactjs: req.body.reactjs,
      };
    } else {
      return value;
    }
  });
  this.blogs.splice(id, 1);
  this.blogs.splice(id, 1, updatedArray[id]);
  res.redirect("/");
};
