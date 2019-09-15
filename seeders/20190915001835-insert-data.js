const { hash } = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const authorId = 1;
      const articleId = 2;
      const categoryNames = ["React", "Node"];
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            id: authorId,
            username: "elvira93",
            firstname: "Elvira",
            lastname: "Chenglou",
            email: "elvira@demo.com",
            hash: await hash("WallayBillayItsaPassword", 10),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "Articles",
        [
          {
            id: articleId,
            title: "Bilal writes all the titles",
            minutesRead: 10,
            body:
              "Les pyramides comme tu sais, on est là. Fais attention, on est chaud, il y a des scientifiques dans la place.",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "Categories",
        [
          {
            name: categoryNames[0]
          },
          {
            name: categoryNames[1]
          }
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "ArticleAuthors",
        [
          {
            authorId,
            articleId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "ArticleCategories",
        [
          {
            articleId,
            name: categoryNames[0]
          },
          {
            articleId,
            name: categoryNames[1]
          }
        ],
        {}
      );
    } catch (err) {
      console.error("Error in seeding: ", err);
    }
  },

  down: async (queryInterface, Sequelize) => {
    const deleteArticleCategories = queryInterface.bulkDelete(
      "ArticleCategories",
      null,
      {}
    );
    const deleteArticleAuthor = queryInterface.bulkDelete(
      "ArticleAuthors",
      null,
      {}
    );
    const deleteUser = queryInterface.bulkDelete("Users", null, {});
    const deleteArticle = queryInterface.bulkDelete("Articles", null, {});
    const deleteCategory = queryInterface.bulkDelete("Categories", null, {});

    return Promise.all([
      deleteArticleCategories,
      deleteArticleAuthor,
      deleteUser,
      deleteArticle,
      deleteCategory
    ]);
  }
};
