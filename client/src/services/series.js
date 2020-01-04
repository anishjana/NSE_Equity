import Api from '@/services/api'

export default {
  series (symbol) {
    return Api().post('series', symbol)
  }
}
