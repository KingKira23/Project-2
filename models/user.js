module.exports = function(sequelize, DataTypes) {
  //
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    },

    imgIcon: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: true
    },

    password: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });

  User.sync({ force: true });
  User.assosiate = function(models){
    User.hasMany(models.Art, { onDelete: "cascade" });
  };
  User.assosiate = function(models) {
    User.hasOne(models.Comment, { onDelete: "cascade" });
  };

  return User;
};
