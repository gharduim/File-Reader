<template>
<v-layout justify-center align-center>

    <v-btn color="primary" @click="rerun(2)">Rerun <v-icon>mdi-arrow-u-left-top-bold</v-icon></v-btn>
</v-layout>
</template>

<script>
import {  Mutations } from '~/store/types'
import {  mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
			rerun: Mutations.SET_ACTIVE_STEP,
		}),
  },
}
</script>

<style>

</style>
