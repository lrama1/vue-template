<template>
  <div class="row">
      <div class="form-group">
        <label for="attribute1">Attr 1</label>
        <input class="form-control" id="attribute1" placeholder="Attr 1" v-model="domain.attribute1">
      </div>
      <div class="form-group">
        <label for="attribute2">Attr 2</label>
        <input class="form-control" id="attribute2" placeholder="Attr 2" v-model="domain.attribute2">
      </div>
      <div>
          <button @click="saveDomain">Save</button>
      </div>
    <div>
</template>

<script>
  export default{
    data () {
      let domain = {
        attribute1: 'test value 1',
        attribute2: 'test value 2'
      }
      return {
        domain
      }
    },
    methods: {
      saveDomain () {
        console.log('Saving.xxyy..')
        console.log(this.domain.attribute1)
      }
    }
  }
</script>
