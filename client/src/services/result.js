import Api from '@/services/api'

export default {
  getResults () {
    return Api().get('results')
  }
}
