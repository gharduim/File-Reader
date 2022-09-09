<template>
  <v-app-bar app>
    <v-toolbar-title ><v-btn text @click="reset">File reader</v-btn></v-toolbar-title>
    <v-spacer />
    <v-btn icon @click.stop="">
      <v-icon>mdi-theme</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
import { Actions } from '~/store/types'
export default {
  methods: {
    ...mapActions({
			reset: Actions.RESET,
		}),
  },
}
</script>
