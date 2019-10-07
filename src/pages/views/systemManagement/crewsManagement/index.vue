<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'crewsManagement'
})
export default class CrewsManagement extends Vue {}
</script>

<style scoped>

</style>