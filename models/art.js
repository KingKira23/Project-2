module.exports = function(sequelize, DataTypes) {
  var Art = sequelize.define("Art", {
    // eslint-disable-next-line camelcase
    art_name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    },

    // eslint-disable-next-line camelcase
    url_link: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
    }
  });
<<<<<<< HEAD
  Art.associate = function(models){
=======
  Art.associate = function(models) {
>>>>>>> a7a9495e4a92ddc8c080249bd7fd3c43e5881656
    Art.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Art.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  //Art.sync({ force: true });
  return Art;
};
