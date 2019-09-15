const Sequelize = require("sequelize");

module.exports = function createArticleModel(sequelize) {
  const Article = sequelize.define("Article", {
    title: { type: Sequelize.STRING, allowNull: false },
    body: { type: Sequelize.STRING, allowNull: false },
    minutesRead: { type: Sequelize.INTEGER, allowNull: false }
  });

  Article.associate = ({
    User,
    ArticleAuthors,
    Category,
    ArticleCategories
  }) => {
    Article.belongsToMany(User, {
      as: "authors",
      through: ArticleAuthors,
      foreignKey: "articleId"
    });

    Article.belongsToMany(Category, {
      as: "categories",
      through: ArticleCategories,
      foreignKey: "articleId"
    });

    return Article;
  };
};
