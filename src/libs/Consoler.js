import AppConfig from '@constants/AppConfig'

class NullConsoler {
  logHttpReq({ method, endpoint, status, message }) {}
  error({ message }) {}
}

class ConsolerImpl extends NullConsoler {
  logHttpReq({ method, endpoint, status, message }) {
    console.log(method, endpoint, status, message)
  }
  error({ message }) {
    console.log('Error: ', message)
  }
}

function getClass() {
  const map = {
    0: NullConsoler,
    1: ConsolerImpl,
  }
  return map[AppConfig.CONSOLER_LEVEL] || NullConsoler
}
const Consoler = new (getClass())()

export default Consoler
