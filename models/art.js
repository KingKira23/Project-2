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
  Art.assosiate = function(models){
    Art.hasOne(models.User);
    Art.hasMany(models.Comment);
  };
  Art.sync({ force: true });
  return Art;
};
