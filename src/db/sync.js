/**
 * @description 同步数据模型的到数据库
 * @author allen
 */
const seq = require('./seq')

require('./model/index')

// 连接数据库
seq.authenticate().then(() => {
    console.log('数据库链接成功')
}).catch(() => {
    console.log('数据库链接成功 err')
})

//同步字段
// 执行同步,force 是强制重制数据库，清空数据了
seq.sync({ force: true }).then(() => {
    console.log('数据模型成功ok')
    process.exit() //同步后此进程断掉
})






//知识点：Sequelize
// ORM:对象关系映射(Object Relational Mapping)
// 可编程式数据和数据关系的建立
// 通过 Sequelize 框架，我们将每个数据表直接定义为数据模型，
// 通过调用数据模型的一些方法，就可以直接操作数据库，甚至是同步数据表结构
// 步骤：
// 1. 创建数据库，配置数据库相关信息（端口，名称等）
// 2. 创建 Sequelize 实例，配置
// 3. 创建数据模型，建立表之间的关系
// 4. 执行实例
// 其他： 初始化一些数据等其他操作
