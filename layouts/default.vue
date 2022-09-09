<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
        <v-switch
        v-model="column"
        label="Enable / Disable Hue"
        @change="toggle"
      ></v-switch>
    </v-footer>
  </v-app>
</template>

<script>
import {mapMutations} from 'vuex'
import {Mutations} from '@/store/types'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      column: 0
    }
  },
  methods: {
    ...mapMutations({
			toggle: Mutations.TOGGLE_HUE,
		}),
  },
}
</script>
