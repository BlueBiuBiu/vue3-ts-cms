export const rules = {
  num: [
    { required: true, message: "请输入手机号码", type: "number", trigger: "blur" },
    { pattern: /^[0-9]{11}$/, message: "请输入11位手机号码", trigger: "blur" }
  ],
  code: {
    required: false
  }
}
