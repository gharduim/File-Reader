<template>
  <file-reader :key="key"></file-reader>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      key: 0
    }
  },
  watch: {
    activeStep: {
      handler(newQuestion) {
        this.key++
      },
      immediate: true
    },
  },
  computed: {
    ...mapGetters(['activeStep']),
  },
}
</script>

<style>

</style>
