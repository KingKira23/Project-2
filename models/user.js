var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD

=======
  //
>>>>>>> a7a9495e4a92ddc8c080249bd7fd3c43e5881656
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: true
    },

    username: {
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

  User.prototype.validPassword = function(pass) {
    return bcrypt.compareSync(pass, this.password);
  };

  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

<<<<<<< HEAD
=======
  //User.sync({ force: true });
>>>>>>> a7a9495e4a92ddc8c080249bd7fd3c43e5881656
  User.associate = function(models) {
    User.hasMany(models.Art, { onDelete: "cascade" });
    User.hasMany(models.Comment, { onDelete: "cascade" });
  };
<<<<<<< HEAD
  //User.sync({ force: true });
=======
  // User.assosiate = function (models) {
  //   User.hasOne(models.Comment, { onDelete: "cascade" });
  // };
>>>>>>> a7a9495e4a92ddc8c080249bd7fd3c43e5881656

  return User;
};
