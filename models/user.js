const bcrypt = require("bcryptjs")

module.exports = function(sequelize, DataTypes) {
  
  //
  var User = sequelize.define("User", {

    
    user_id: {
      text: DataTypes.INT,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    
    
    name: {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    allowNull: false

    },

    imgIcon: {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: true
    },

    password: {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false

    },

  });

  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
  })

  User.sync({force: true});
  User.hasMany(Comment);
  User.hasMany(Art);
  
  return User;
};



