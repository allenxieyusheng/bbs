/**
 * @descption SQL数据请求层
 * @author
 */


 const { User } = require('../db/model/index')

 async function createUser({userName, password, gender = 3, nickName}) {
    const result = await User.create({
      userName,
      password,
      nickName: nickName ? nickName : userName,
      gender
    })

    const data = result.data
    return data
 }

 module.exports = {
   createUser
 };
