/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
<!-- eslint-disable -->
<template>
  <div>
    <nav class="navbar navbar-light bg-dark">
      <div class="navbar-brand">
        <a href="#"
          ><img
            src="https://www1.nseindia.com/corporates/resources/images/nse_new_logo.gif"
            alt="NSE"
        /></a>
      </div>
      <div class="search">
        <form class="form-inline my-2 my-lg-0 ml-auto" >
          <div class="">
          <input class="form-control search-nav"
            type="search"
            name="myCountry"
            placeholder="Search"
            aria-label="Search"
          />
          </div>
          <button
            class="btn btn-elegant btn-md my-6 my-sm-0 ml-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
    <div class="notes">
      <marquee>
        <p><pre> Notification(1)                 Notification(2)</pre> </p>
      </marquee>
    </div>
    <div class="card">
      <div class="card-header">
        Listing Directory- Equity
      </div>
      <div class="card-body">
        <form method="post" action="#" id = "myForm">
          <div class="row">
            <div class="col">
              <div class="autocomplete">
              <label>Company:</label>
              <input
                type="text"
                name="symbol"
                v-model="symbol"
                id="myInput"
                class="form-control form-control-sm"
                placeholder="Enter symbol only"
              />
              <span class="info" tabindex="-1">*symbol only </span>
              </div>
            </div>

            <div class="col">
              <label>Listing Period: </label>
              <select v-model="period" class="custom-select custom-select-sm" name="period">
                <option value="1">Select Period</option>
                <option value="Last 1 month">Last 1 month</option>
                <option value="Last 6 months">Last 6 months</option>
                <option value="Last 1 year">Last 1 year</option>
                <option value="Last 2 years">Last 2 years</option>
                <option value="Last 5 years">Last 5 years</option>
                <option value="More than 5 years">More than 5 years</option>
              </select>
            </div>
          </div>
          <div class="text-center">
  
          <button
                @click="submit()"
                type="button"
                 form="myForm"
                 value="Submit"
                class="btn btn-outline-grey custom waves-effect"
              >
                Search
              </button>
            
            <button
              type="button"
            @click="reset()"
              class="btn btn-outline-grey custom waves-effect"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    <loading :active.sync="visible" :can-cancel="true"></loading>
    <get-results :rows="rows" @popupFromChild="handlePopup"/>
    <pop :actions="actions" :announces="announces" :corpinfos="corpinfos"/>
  </div>
  
</template>
<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import getResults from './results'
import pop from './popup'
import search from '@/services/search'
import action from '@/services/action'
import announce from '@/services/announce'
import corpinfo from '@/services/corpinfo'
import series from '@/services/series'
export default {
  components: {
    getResults,
    pop,
    Loading
  },
  data () {
    return {
      symbol: '',
      period: 'Last 1 month',
      rows: {},
      dialog: null,
      sym: '',
      compInfo: '',
      announce: '',
      actions: {},
      announces: {},
      visible: false,
      loaded: true,
      corpinfos: ``,
      ser: ''

    }
  },
  // watch: {
  //   symbol (value) {
  //     const route = {
  //       name: 'homepage'
  //     }
  //     if (this.symbol !== '') {
  //       route.query = {
  //         symbol: this.symbol
  //       }
  //     }
  //     this.$router.push(route)
  //   },
  //   '$route.query.symbol': {
  //     immediate: true,
  //     handler (value) {
  //       this.symbol = value
  //     }
  //   }
  // },
  methods: {
    reset () {
      // eslint-disable-next-line no-unused-expressions
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line
      this.symbol = '',
      this.period = '1'
    },
    async submit (e) {
      if (this.period === '1') {
        alert('select a period')
      } else {
        console.log(this.symbol, this.period)

        const params = await search.search({
          symbol: this.symbol,
          period: this.period
        })
        this.open()
        this.rows = params.data.rows
      }
    },
    handlePopup (value) {
      this.sym = value
      this.getSeries(this.sym)
      this.getCorpActions(this.sym)
      this.getCorpAnnounce(this.sym)
      this.getCorpInfo(this.sym)
      console.log(this.ser)
      this.$root.$emit('showPop')
    },
    async getSeries (sym) {
      const serData = await series.series({
        symbol: sym
      })
      this.ser = serData.data
    },
    async getCorpActions (sym) {
      const corpActions = await action.action({
        symbol: sym
      })
      this.actions = corpActions.data.rows
    },
    async getCorpAnnounce (sym) {
      const corpAnnounce = await announce.announce({
        symbol: sym
      })
      this.announces = corpAnnounce.data.rows
    },
    async getCorpInfo (sym) {
      const corpinf = await corpinfo.corpinfo({
        symbol: sym,
        serie: this.ser

      })
      this.corpinfos = corpinf.data
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 500)
    }
  },
  watch: {

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
<style scoped >
.info{
 font-size: 12.5px;
 padding-left: 5px;
}
.search-nav{
  width: 150px !important;
}
.navbar-brand img {
  width: 150px;
  background: white;
}
.navbar {
  border: 1px black solid;
}
.notes , pre{
  color: red;
  font-weight: 800;
  height: 40px;
  padding-top: 6px;
  margin-bottom: 1rem;
}
.col {
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}
.custom {
  width: 130px !important;
}
.card-body {
  padding: 3rem 2rem 1rem 2rem;
}
.card-header {
  font-weight: bolder;
  font-size: 1.2em;
}

.card-body label {
  font-weight: 500;
  font-size: 1em;
}

.text-center button {
  font-weight: bold;
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>
