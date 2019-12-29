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
        <form id = "myForm">
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
                placeholder="Enter symbol / name"
              />
              </div>
            </div>

            <div class="col">
              <label>Listing Period: </label>
              <select v-model="period" class="custom-select custom-select-sm" name="period">
                <option value="1">Select Period</option>
                <option value="2">Last 1 month</option>
                <option >Last 6 months</option>
                <option >Last 1 year</option>
                <option >Last 2 years</option>
                <option >Last 5 years</option>
                <option >More than 5 years</option>
              </select>
            </div>
          </div>
          <div class="text-center">
  
          <button
                @click="submit()"
                type="submit"
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
  </div>
</template>
<script>
import search from '@/services/search'
export default {
  data () {
    return {
      symbol: '',
      period: '1'
    }
  },
  methods: {
    reset () {
      // eslint-disable-next-line no-unused-expressions
      // eslint-disable-next-line no-sequences
      this.symbol = '',
      this.period = '1'
    },
    async submit (e) {
      e.preventDefault()
      if (this.symbol === '') {
        alert('Type a company symbol')
      } else if (this.period === '1') {
        alert('select a period')
      } else {
        console.log(this.symbol, this.period)

        const params = await search.search({
          symbol: this.symbol,
          period: this.period
        })
        console.log(params.data)
      }
    }
  }
}
</script>
<style scoped >
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
