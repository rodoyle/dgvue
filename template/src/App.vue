<template>
  <div id="app">
    <main-nav :user="{ name: user.name }"
              :projects="projects"
              active="module-name">
    </main-nav>

    <!-- route outlet -->
    <div class="row">
      <div class="column small-12">
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '@deskgen/dg-main-nav'
import deskgen from 'deskgen'
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
      projects: deskgen.projects
    }
  },
  components: {
    MainNav
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  created(){
    this.fetchUser()
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  padding-top: 5rem;
}

.router-view {
  margin: 0;
  padding: 0;
  border: 0;
  min-height: calc(100vh - 5rem);
}
</style>
