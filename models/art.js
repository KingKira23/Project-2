module.exports = function(sequelize, DataTypes) {
  
    //
    var Art = sequelize.define("Art", {
  
      
      art_id: {
        text: DataTypes.INT,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      
      
      art_name: {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false
  
      },
  
      url_link: {
        text: DataTypes.STRING,
        description: DataTypes.TEXT,
        allowNull: false
      },
  
    });
  
    Art.sync({force: true});
    Art.hasOne(User);

  
    return Art;
  };
  