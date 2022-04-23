const Sequelize = require("sequelize");
const sequelize = new Sequelize('react','root','30351964Asd',{
    host: "localhost",
    dialect: "mysql"
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
