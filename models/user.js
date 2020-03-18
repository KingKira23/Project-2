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

  });

  User.sync({force: true});

  return User;
};
