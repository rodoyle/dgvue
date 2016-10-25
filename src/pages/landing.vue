<template>
  <div>Hi, {{ user.name }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
