import Api from '@/services/api'

export default {
  corpinfo (symbol) {
    return Api().post('corpinfo', symbol)
  }
}
