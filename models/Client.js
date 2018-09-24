module.exports = (sequelize, DataTypes) => {

const Client = sequelize.define('clients', {
 id: { type: DataTypes.INTEGER,  primaryKey: true},
 uuid: { type: DataTypes.UUID, allowNull: false},
 firstname: { type: DataTypes.STRING, allowNull: false},
 lastname: { type: DataTypes.STRING, allowNull: false},
 email: { type: DataTypes.STRING, allowNull: false},
 alternative_emails: { type: DataTypes.TEXT, allowNull: true  }
});

Client.associate = function(models) {
  Client.hasMany(models.client_services, {foreignKey: 'client_uuid'});
};

return Client;
}