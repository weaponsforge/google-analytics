<template lang="pug">
  div(class="hello")
    h1 {{ msg }}

    router-link(to='/') Home
    span  | 
    router-link(to='/admin') Admin
    span  | 
    router-link(to='/info') Information

    p Total Count: {{ totalCount }}
    p Pilot Name: {{ pilotName }}
    p Mech Name: {{ mechName }}

    br

    h3 Getters
    p Max Count: {{ isMax }}

    br

    h3 Mutations

    span Add/Subtract &nbsp
    button(@click="incrementCount") +
    span &nbsp
    button(@click="deductCount") -

    br
    br

    input(
      placeholder="Enter new pilot name"
      ref="username")

    button(
      @click="updateUserName"
    ) Update Name

    br
    br

    input(
      placeholder="Enter new mecha name"
      ref="gundam")

    button(
      @click="updateMechaName"
    ) Update Mecha

    br
    br

    h3 Actions

    button(
      @click="loadPilotData"
    ) Load Pilot Data
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home - Vuex Demo',
    }
  },

  computed: {
    ...mapState(['pilotName', 'mechName', 'totalCount']),
    ...mapGetters(['isMax']),
  },

  methods: {
    ...mapMutations(['addCount', 'deductCount', 'updateName', 'updateMech']),
    ...mapActions(['loadPilotData']),

    updateUserName() {
      if (this.$refs.username.value) {
        this.updateName(this.$refs.username.value)
      }
    },

    updateMechaName() {
      if (this.$refs.gundam.value) {
        this.updateMech(this.$refs.gundam.value)
      }
    },

    incrementCount() {
      if (this.isMax) {
        alert('MAX count reached!')
      }
      this.addCount()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  color: paleturquoise;
}
</style>
