/**
 * @description 封装sequelize的数据模型
 * @author allen
 */

const Sequelize = require('sequelize');

module.exports = {
  STRING: Sequelize.STRING, //字符串
  INTEGER: Sequelize.INTEGER, //int数字
  BOOLEAN: Sequelize.BOOLEAN,  //布尔类型
  TEXT: Sequelize.TEXT, //长文本
  DECIMAL: Sequelize.DECIMAL //0,1 单选择类型
}
