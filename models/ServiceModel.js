module.exports = (sequelize, DataTypes) => {

const Service = sequelize.define('service', {
 id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
 name: { type: DataTypes.STRING, allowNull: false},
 client_id: { type: DataTypes.INTEGER, allowNull: false},
 payment_system_id: { type: DataTypes.INTEGER, allowNull: false},
 service_type_id: { type: DataTypes.INTEGER, allowNull: false}
});

return Service;
}

//Service.hasOne(Client, { foreignKey: 'client_id' })
//Service.hasOne(PaymentSystem, { foreignKey: 'payment_system_id' })