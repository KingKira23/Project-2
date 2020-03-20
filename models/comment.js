module.exports = function(sequelize, DataTypes) {
  //
  var Comment = sequelize.define("Comment", {
    // eslint-disable-next-line camelcase
    comment: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });

  Comment.sync({ force: true });
  Comment.assosiate = function(models) {
    Comment.hasOne(models.User, { onDelete: "cascade" });
  };
  return Comment;
};
