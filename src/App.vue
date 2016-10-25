<template>
  <div id="app">
    <main-nav :user="{ name: userName }"
              :projects="filteredProjects"
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
import projects from '../../projects.json'
import buildConfig from 'build-config'
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
    }
  },
  components: {
    MainNav
  },
  computed: {
    filteredProjects: () => projects.filter(p => buildConfig.modules[p.module]),
    ...mapGetters(['userName'])
  },
  methods: mapActions([
    'fetchUser'
  ]),
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
