import Api from '@/services/api'

export default {
  search (terms) {
    return Api().post('api', terms)
  }
}
