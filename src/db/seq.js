/**
 * @description sequelize 的实例
 * @author
 */
const  Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db')
const {host, user, password, database} = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

const seq = new Sequelize(database, user, password, conf)
//导出实例，去创建模型数据
module.exports = seq
