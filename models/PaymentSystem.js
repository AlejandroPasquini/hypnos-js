
module.exports = (sequelize, DataTypes) => {

var PaymentSystem = sequelize.define('payment_systems', {
 id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
 name: { type: DataTypes.STRING, allowNull: false},
 model: { type: DataTypes.STRING, allowNull: false},
 custom_days: { type: DataTypes.INTEGER, allowNull: false  }
});

return PaymentSystem;
}