import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData)
dayjs.extend(utc)
dayjs.extend(timezone)

const Clock = {
  timezone() {
    return dayjs.tz.guess()
  },

  //   yearMonthDay(likeDate) {
  //     let time = dayjs(likeDate)
  //     return [time.format('YYYY'), time.format('MM'), time.format('DD')]
  //   },

  //   nameOfMonths() {
  //     return dayjs.months()
  //   },

  //   listYearsBackAt(yearsAgo = 20) {
  //     let current = dayjs().year()
  //     return new Array(yearsAgo).fill('').map((_, idx) => current - idx)
  //   },

  //   dateFromUnix(unix) {
  //     return new Date(unix)
  //   },

  //   userRegisteredAt(likeDate) {
  //     return dayjs(likeDate).format('YYYY-MM-DD')
  //   },
  //   yearsFrom(year) {
  //     return dayjs().year() - year
  //   },
    formatNextPayment(date) {
      return dayjs(date).format('MMMM D, YYYY')
    },

  //   tableCreatedAt(date) {
  //     return dayjs(date).format('MMMM D, YYYY hh:mma')
  //   },

  //   utcTimestamp() {
  //     return dayjs.utc().toISOString()
  //   },

  //   durationInMsUntilNowInUTC(from) {
  //     return dayjs.utc().diff(from)
  //   },

  //   minutesToMs(number) {
  //     return number * (60 * 1000)
  //   },
}

export default Clock
