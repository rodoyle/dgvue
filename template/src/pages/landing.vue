<template>
  <div>
    <h1>Deskgen Template App</h1>
    <p>Hi, \{{ user.name }}, welcome to your new app.</p>
    <p>This is a basic setup with a simple router and store configuration,
    as well as a test suite.</p>
    <p>It should be everything you need to get going.</p>
    <p>Checkout the <a :href="showcase">showcase</a> app for more components
      you can use.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    showcase: 'http://showroom.deskgen.com/showcase'
  }),

  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    ...mapActions(['fetchUser'])
  },

  created(){
    this.fetchUser()
  }
}
</script>
