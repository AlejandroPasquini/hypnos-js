module.exports = (sequelize, DataTypes) => {

    const ClientService = sequelize.define('client_services', {
      id: { type: DataTypes.INTEGER,  primaryKey: true},
      companyServiceId: { type: DataTypes.INTEGER, allowNull: false},
      clientUuid: {type : DataTypes.UUID, allowNull: false},
      name: { type: DataTypes.STRING, allowNull: false},
      price: { type: DataTypes.DECIMAL},
      createdAt: { type: DataTypes.DATE, allowNull: false},
      updatedAt: { type: DataTypes.DATE, allowNull: false}
    });
    
    ClientService.associate = function(models) {
      ClientService.belongsTo(models.clients, { foreignKey: { name: 'client_uuid', allowNull: false  },
                                                targetKey: 'uuid'
    })};
    
    return ClientService;
    }