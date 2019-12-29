/* eslint-disable vue/require-v-for-key */
<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          Search Result
        </div>
        <hr />
        <div class="row">
          <table class="table">
            <thead class="grey lighten-4">
              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">ISIN</th>
                <th scope="col">Company</th>
                <th scope="col">Listing Date</th>
                <th scope="col">Face Value</th>
                <th scope="col">Paid-up Value</th>
                <th scope="col">Market Lot</th>
                <th scope="col">Industry</th>
              </tr>
            </thead>

            <tbody>
<!-- eslint-disable-next-line -->
            
              <tr v-for="row in rows" :key="row.sym">
                <th scope="col">{{ row.sym }}</th>
                <th scope="col">{{ row.isin }}</th>
                <th scope="col">{{ row.cmp }}</th>
                <th scope="col">{{ row.ListDt }}</th>
                <th scope="col">{{ row.face }}</th>
                <th scope="col">{{ row.paid }}</th>
                <th scope="col">{{ row.mlot }}</th>
                <th scope="col">{{ row.ind }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      rows: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:5000/results', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.rows = response.data.rows
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.card {
  height: 27rem;
  margin-top: 0.2rem;
}
.card-title {
  font-weight: 500;
}
.table th {
  font-weight: 420;
}

.table tr {
  line-height: 1px;
}
</style>
