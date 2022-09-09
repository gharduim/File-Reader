<template>
<v-list v-show="files.length">
  <v-list-item
      v-for="(file, index) in files"
      :key="index"
      @dblclick="updateActiveFile(file)"
    >
      <v-list-item-content>
        <v-list-item-title v-text="file.name"></v-list-item-title>

        <v-list-item-subtitle>{{file.upload_timestamp | formatDate}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon class="primary" dark @click="updateActiveFile(file)">
          <v-icon color="white">mdi-file-search</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { Actions } from '~/store/types';

export default {
  computed: {
    ...mapGetters(['files']),
  },
  filters: {
    formatDate: function(value) {
      return new Date(value).toLocaleString();
    }
  },
  methods: {
    ...mapActions({
			updateActiveFile: Actions.CHANGE_ACTIVE_FILE,
		}),
  },
}
</script>

<style>

</style>
