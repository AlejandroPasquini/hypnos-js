module.exports = (sequelize, DataTypes) => {

const Client = sequelize.define('clients', {
 id: { type: DataTypes.UUID,  primaryKey: true},
// firstname: { type: DataTypes.STRING, allowNull: false},
// lastname: { type: DataTypes.STRING, allowNull: false},
 email: { type: DataTypes.STRING, allowNull: false},
 alternative_emails: { type: DataTypes.TEXT, allowNull: true  }
});

Client.associate = function(models) {
    // associations can be defined here
  };

return Client;
}