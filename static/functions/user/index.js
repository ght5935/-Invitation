// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'wedding'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log('云函数user')
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}