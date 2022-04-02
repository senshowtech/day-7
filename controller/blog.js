const { getDate, dateMonth } = require("./waktu.js");
const { checkboxLogic, checkboxDetail } = require("./checkbox.js");

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

exports.blogAdd = (req, res) => {
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
  let nodejs = this.blogs[index].nodejs;
  let vuejs = this.blogs[index].vuejs;
  let python = this.blogs[index].python;
  let reactjs = this.blogs[index].reactjs;
  let dataBlogs = this.blogs.map((item) => {
    return {
      ...item,
      index: index,
      icon: checkboxDetail(nodejs, vuejs, python, reactjs),
    };
  });
  return res.render("detail", dataBlogs[index]);
};

exports.blogDelete = (req, res) => {
  let index = req.params.id;
  this.blogs.splice(index, 1);
  res.redirect("/");
};

exports.blogEditdetail = (req, res) => {
  let index = req.params.id;
  let nodejs = this.blogs[index].nodejs;
  let vuejs = this.blogs[index].vuejs;
  let python = this.blogs[index].python;
  let reactjs = this.blogs[index].reactjs;
  checkboxLogic(nodejs, vuejs, python, reactjs);
  let dataBlogs = this.blogs.map((item) => {
    return {
      ...item,
      // index: index,
      nodejs_html: nodejs,
      vuejs_html: vuejs,
      python_html: python,
      reactjs_html: reactjs,
    };
  });
  return res.render("edit-project", dataBlogs[index]);
};

exports.blogEdit = (req, res) => {
  let id = req.params.id;
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
