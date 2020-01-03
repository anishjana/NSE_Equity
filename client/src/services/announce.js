import Api from '@/services/api'

export default {
  announce (symbol) {
    return Api().post('announce', symbol)
  }
}
