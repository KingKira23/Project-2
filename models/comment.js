module.exports = function(sequelize, DataTypes) {
  //
  var Comment = sequelize.define("Comment", {
    // eslint-disable-next-line camelcase
    message_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });

  Comment.sync({ force: true });
  Comment.assosiate = function(models){
    Comment.hasOne(models.User, { onDelete: "cascade" });
  };
  return Comment;
};
