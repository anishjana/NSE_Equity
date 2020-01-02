import Api from '@/services/api'

export default {
  action (symbol) {
    return Api().post('actions', symbol)
  }
}
