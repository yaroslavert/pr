// Example model


module.exports = function (sequelize, DataTypes) {
  
  var Article = sequelize.define('furniture', {
    numberHeadset: DataTypes.STRING,
    name: DataTypes.STRING,
    typeFurniture: DataTypes.STRING,
    countItems: DataTypes.INTEGER,
    prise: DataTypes.REAL,
    countStorage : DataTypes.STRING,
    dateBuy      : {
        type : DataTypes.DATE,
        defaultValue:sequelize.NOW
    }
    
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Article;
};

