/* eslint-disable vue/no-dupe-keys */
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
              <tr class="header-table">
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
            
              <tr v-for="row in rows" :key="row.sym" class="result-row" @click="popup(row)">
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
export default {
  props: ['rows'],
  methods: {
    popup (row) {
      console.log(row.sym)
    }
  }
}
</script>
<style scoped>
.header-table th {
font-size: 14.5px;
}
.result-row {
  border-bottom: 2px solid rgba(0, 0, 0, 0.137);
}
.result-row:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 4px solid #212121;
  box-shadow: 0 2px 2px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22);
  cursor: pointer;
}
.card {
  height: 27rem;
  margin-top: 0.2rem;
}
.card-title {
  font-weight: 500;
}
.table th {
  font-weight: 420;
  padding-right: 0 !important;
}

.table tr {
  line-height: 1px;
}
</style>
