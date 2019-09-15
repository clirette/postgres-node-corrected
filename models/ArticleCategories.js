const Sequelize = require("sequelize");
module.exports = function createArticleCategoriesModel(sequelize) {
  return sequelize.define("ArticleCategories", {});
};
