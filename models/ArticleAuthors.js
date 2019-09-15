const Sequelize = require("sequelize");
module.exports = function createArticleAuthorsModel(sequelize) {
  return sequelize.define("ArticleAuthors", {});
};
