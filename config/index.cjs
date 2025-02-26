/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx61a2eed282fb586d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c7b755838b59e6864ff1c111ff5bb7e4',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Wife',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5A6A6T50mkeoEwm5KlDcIp5AByU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Yahu7ypzaEKGmdz3QNEoLd7mHgRJN9uY6Q_j66_3jl4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小黄宝贝', year: '2000', date: '01-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小黄宝贝', year: '2000', date: '02-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-18' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-23' },
        { keyword: 'dd_day', date: '2023-10-01' },
        { keyword: 'dw_day', date: '2023-6-22' },
      ],
    },
    {
      // 想要发送的人的名字
      name: 'Wife‘s husband',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5A6A6QUnv0KvbIY_78DI3b5goME',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Yahu7ypzaEKGmdz3QNEoLd7mHgRJN9uY6Q_j66_3jl4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小黄宝贝', year: '2000', date: '01-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小黄宝贝', year: '2000', date: '02-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-18' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-23' },
        { keyword: 'dd_day', date: '2023-10-01' },
        { keyword: 'dw_day', date: '2023-6-22' },
      ],
    },{
      // 想要发送的人的名字
      name: 'Wife‘s husband',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5A6A6QUnv0KvbIY_78DI3b5goME',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3OFi1DJ7aaFtBedB6rVcGu7QgBU54Kk0ulIjwtg1O10',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小黄宝贝', year: '2000', date: '01-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小黄宝贝', year: '2000', date: '02-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-18' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-23' },
        { keyword: 'dd_day', date: '2023-10-01' },
        { keyword: 'dw_day', date: '2023-6-22' },
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'VmrehiOyuMn7vl5NkAOhVfeGJiBq7BikTcHeRyy3Nno',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5A6A6QUnv0KvbIY_78DI3b5goME',
    }
  ],

}

module.exports = USER_CONFIG

