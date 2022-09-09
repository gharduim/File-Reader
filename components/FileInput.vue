<template>
  <v-file-input
    color="primary"
    v-model="files"
    counter
    multiple
    label="Select file"
    accept="text/plain"
    @change="handleFileLoad"
    block
    dark
    clearable
    ref="fileinput"
  ></v-file-input>
</template>

<script>
import {mapMutations} from 'vuex'
import {Mutations} from '@/store/types'

export default {
  data() {
    return {
      files: []
    }
  },
  methods: {
    ...mapMutations({
			uploadFile: Mutations.ADD_FILE,
		}),
    handleFileLoad([file]) {
      if(file) {

        file['upload_timestamp'] = new Date().getTime()
        this.uploadFile(file)
        this.files = []
        // this.$refs.fileinput.$refs.input.value = null
      }
    }
  }
};
</script>
