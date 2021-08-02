export const rules = {
  name: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 5, max: 10, message: "账号长度在 5 到 10 个字符", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "用户名必须是3位以上的字母或者数字~",
      trigger: "blur"
    }
  ]
}
