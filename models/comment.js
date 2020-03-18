module.exports = function(sequelize, DataTypes) {
  //
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    message_id: {
      text: DataTypes.INT,
      allowNull: false,
      unique: true,
      primaryKey: true
    },

    comment: {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });

  Comment.sync({ force: true });
  Comment.hasOne(User);
  Comment.hasMany(User);

  return Comment;
};
