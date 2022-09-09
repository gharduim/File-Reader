<template>
  <v-window :value="activeStep" style="width: 100%">
    <v-window-item :value="1">
      <Step1 />
    </v-window-item>

    <v-window-item :value="2">
      <Step2 />
    </v-window-item>

    <v-window-item :value="3">
      <Step3/>
    </v-window-item>
  </v-window>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters(['activeStep']),
  },
}
</script>
