module.exports = (sequelize, DataTypes) => {

    const ClientService = sequelize.define('client_services', {
     id: { type: DataTypes.INTEGER,  primaryKey: true},
     uuid: { type: DataTypes.UUID, allowNull: false},
    });
    
    ClientService.associate = function(models) {
      ClientService.hasMany(models.clients, { foreignKey: { name: 'uuid', allowNull: false  }
    })};
    
    return ClientService;
    }