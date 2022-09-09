<template>
  <v-carousel
    v-model="activeSentence"
    progress
    progress-color="grey"
    hide-delimiters
    :show-arrows="false"
    @change="handleSentenceChanged"
    ref="caroulsel"
    >
    <v-carousel-item
      v-for="(s, i) in sentences"
      :key="i"
    >
      <v-row
          class="fill-height wrapper"
          align="center"
          justify="center"
        >
        <div class="text-h2 text-center" v-text="s" v-show="!(hue && inGap)">
        </div>
        <span class="floating text-h5">{{activeSentence + 1}}</span>
      </v-row>
      <v-fade-transition>
        <v-overlay
          v-if="hue"
          absolute
          color="#036358"
        >
        </v-overlay>
      </v-fade-transition>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Mutations } from '~/store/types';

export default {
  data() {
    return {
      text: '',
      activeSentence: 0,
      sentences: [],
      interval: 500,
      gap: 200,
      inGap: false,
    }
  },
  created () {
    this.activeFile && this.init();
  },
  computed: {
    ...mapGetters(['activeFile', 'hue', 'activeStep']),
  },
  methods: {
    ...mapMutations({
			changeStep: Mutations.SET_ACTIVE_STEP,
		}),
    init(){
      this.loadTextFromFile()
    },
    reset(){
      this.activeSentence = 0
      this.sentences = []
      this.text = ''
    },
    loadTextFromFile() {
      const reader = new FileReader();

      reader.onload = e => {
        this.text = e.target.result
        this.splitText()
      };
      reader.readAsText(this.activeFile);
    },
    splitText() {
      if(!this.text) return
      const regex = /[.?](?!$)/
      this.sentences = this.text.trim().replaceAll('\n','').split(regex)
      this.calculateDisplayTime(0)
      this.cycle = true
    },
    handleSentenceChanged(index)
    {
      if(index + 1 === this.sentences.length) {
        this.changeStep(3)
        return
      }

      this.calculateDisplayTime(index)

    },
    async calculateDisplayTime(index) {
      const sentence = this.sentences[index]

      if(!sentence) return
      const countWords = sentence.trim().split(/\s+/).length

      if(countWords < 4) this.interval = 500
      else if (countWords >= 4 && countWords < 10) this.interval = 1000
      else this.interval = 1500

      this.inGap = true
      await this.timeout(this.gap)
      this.inGap = false

      await this.timeout(this.interval)
      this.$refs.caroulsel && this.$refs.caroulsel.next()
    },
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: relative;

    .floating {
      position: absolute;
      right: 30px;
      top: 15px;
    }
  }
</style>
