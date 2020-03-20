module.exports = function(sequelize, DataTypes) {
  //
  var Art = sequelize.define("Art", {
    // eslint-disable-next-line camelcase

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
  Art.associate = function(models) {
    Art.belongsTo(models.User);
  };
  //Art.sync({ force: true });
  return Art;
};
