import Api from '@/services/api'

export default {
  corpinfo (items) {
    return Api().post('corpinfo', items)
  }
}
