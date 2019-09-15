const Sequelize = requrie("sequelize");
module.exports = function createUserModel(sequelize) {
  const User = sequelize.define("User", {
    username: { type: Sequelize.STRING, allowNull: false },
    firstname: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      valide: { isEmail: true }
    },
    picture: { type: Sequelize.STRING },
    hash: { type: Sequelize.STRING, allowNull: false }
  });

  User.associate = ({ Article, ArticleAuthors }) => {
    User.belongsToMany(Article, {
      as: "articles",
      through: ArticleAuthors,
      foreignKey: "authorId"
    });
    return User;
  };
};
