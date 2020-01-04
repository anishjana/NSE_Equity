<template>
<div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">

  <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
  <div class="modal-dialog modal-center modal-dialog-centered" role="document">
      <loading :active.sync="visible" :can-cancel="true"></loading>
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" @click="reset()" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-4 column">
              <h6> Company Information </h6>
             <div v-html="corpinfos"></div>
            </div>
            <!-- corp actions -->
            <div class="col-md-4 column col-sm-offset">
              <h6> Corporate Actions </h6>
        <hr/>
              <div v-if="actions.length > 0">
              <div v-for="action in actions" :key="action.exDt">
                <div class="row data">
              <div class="col-4 data-col">{{action.exDt}}</div><div class="col-8 data-col">{{action.sub}}</div>
                </div>
              </div>
              </div>
              <div v-else>
                  <span><p>NIL</p></span>
              </div>
            </div>
            <!-- corp announcements -->
            <div class="col-md-4 column col-sm-offset">
              <h6> Corporate Announcements </h6>
        <hr/>
                 <div v-if="announces.length > 0">
              <div v-for="item in announces" :key="item.date">
                <div class="row data" >
              <div class="col-8 data-col">{{item.desc}}</div><div class="col-4 data-col">{{item.date}}</div>
                <!-- <div class="row">
                  <div class="col">
                  {{item.longDesc}}
                  </div>
                </div> -->
                </div>
              </div>
              </div>
            </div>
        </div>

      </div>
      </div>
  </div>
 </div>
</div>
</template>
<script>
import loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      visible: false
    }
  },
  props: ['actions', 'announces', 'corpinfos'],
  components: { loading },
  created () {
    this.$root.$on('showPop', this.showmodal)
  },
  methods: {
    showmodal () {
      this.reset()
      this.open()
      // eslint-disable-next-line no-undef
      $('#myModal').modal('show')
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 1200)
    },
    reset () {
      this.actions = ''
      this.announces = ''
      this.corpinfos = ''
    }
  }
}
</script>
<style scoped>
.modal-dialog{
  max-width: 1200px !important;
  max-height: 500px !important;
}
h6{
  font-weight: 800;
  text-align: center;
  background-color: rgb(201, 201, 201);
  line-height: 2rem;
  font-size: 18px;
}
.column{
  border: 1px black solid;
  padding-top: 1rem;
  padding-bottom: 2rem;
  width: 90% !important;
}
.data {
  padding-top: 1rem;
}
.data-col {
  padding: 8px;
  font-size: 15px;
  font-weight: 400;
}
</style>
