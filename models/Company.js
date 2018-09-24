module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define('companies', {
     id: { type: DataTypes.INTEGER,  primaryKey: true},
     uuid: { type: DataTypes.UUID, allowNull: false},
     name: { type: DataTypes.STRING, allowNull: false},
     email: { type: DataTypes.STRING, allowNull: false},
     alternative_emails: { type: DataTypes.TEXT, allowNull: true  }
    });
    
    Company.associate = function(models) {
        // associations can be defined here
      };
    
    return Company;
    }