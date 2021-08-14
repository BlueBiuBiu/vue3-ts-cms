import dayjs from "dayjs"

const DEFAULT_FORMAT = "YYYY-MM-DD hh:mm:ss"

export function dateFormat(date: string, format: string = DEFAULT_FORMAT) {
  // console.log(dayjs(date).format(format))
  return dayjs(date).format(format)
}
