/**
 *  @descption 用户数据控制器
 *  @author allen
 */

const {createUser} = require('../services/user');

/**
 * 注册
 * @return {[type]} [description]
 */
async function register({userName, password, gender=3}) {
      try {
        await createUser({
          userName,
          password,
          gender
        })
        return "xxx"
      } catch (e) {
         console.error(e);
      }
  }
