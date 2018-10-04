
module.exports = (sequelize, DataTypes) => {

var PaymentSystem = sequelize.define('payment_systems', {
 id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
 name: { type: DataTypes.STRING, allowNull: false},
 model: { type: DataTypes.STRING, allowNull: false},
 customDays: { type: DataTypes.INTEGER, allowNull: false  },
 createdAt: { type: DataTypes.DATE, allowNull: false},
 updatedAt: { type: DataTypes.DATE, allowNull: false}
});

return PaymentSystem;
}