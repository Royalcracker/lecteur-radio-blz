<script setup>
  // mettre dans les cookies le volume
  import { ref, onMounted } from 'vue'
  import RadioFullScreen from './RadioFullScreen.vue'


  async function getRadioData() {
    const response = await fetch("https://cast.blzradio.fr/status-json.xsl")
    // const response = await fetch("https://blzradio.fr:8443/status-json.xsl")
    const json = await response.json();
    urlRadio.value = "https://cast.blzradio.fr/radio1"
    // urlRadio.value = json.icestats.source.listenurl
    titleRadio.value = json.icestats.source.title
  }

  onMounted(() => {
    const volumebar = document.getElementById("volumebar")
    getRadioData()
  })

  var audio = null
  const isPlaying = ref(false)
  const isLoading = ref(false)
  const volume = ref(50)
  const previousVolume = ref(50)
  const isFullSize = ref(true)

  const urlRadio = ref("")
  const titleRadio = ref("")

  function play() {
    // audio = new Audio("http://icecast.rtl2.fr/rtl2-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg")
    audio = new Audio(urlRadio.value)
    // audio = new Audio("https://blzradio.fr:8443/blzradio")
    audio.addEventListener('canplaythrough', isAudioReady)
    isLoading.value = true
  }
  function stop() {
    audio.pause()
    audio.removeEventListener('canplaythrough', isAudioReady)
    audio = null
    isPlaying.value = false
    isLoading.value = false
  }
  function isAudioReady() {
    isPlaying.value = true
    isLoading.value = false
    audio.play()
  }
  function setVolume(event) {
    volume.value = event.target.value
    newVolume(event.target.value)
  }
  function volumeDown() {
    previousVolume.value = volume.value
    volume.value = 0
    volumebar.value = 0
    newVolume(0)
  }
  function volumeUp() {
    var volumeToSet = previousVolume.value
    if (volumeToSet == 0) {
      volumeToSet = 50
    }
    volume.value = volumeToSet
    volumebar.value = volumeToSet
    newVolume(volumeToSet)
  }
  function newVolume(vol) {
    if (audio != null)
      audio.volume = (vol / 100)    
  }
  function setFullSize() {
    isFullSize.value = true
  }
  function unsetFullSize() {
    isFullSize.value = false
  }

</script>

<template>
  <RadioFullScreen v-if="isFullSize" />
  <div class="sticky z-50 bottom-0 bg-black h-12 w-screen text-white px-8">
    <div class="h-full flex flex-row justify-between items-center max-w-md mx-auto md:max-w-4xl">
      <div class="*:h-6 *:cursor-pointer">
        <font-awesome-icon icon="stop" @click="stop" v-if="isPlaying && !isLoading" />
        <font-awesome-icon icon="spinner" @click="stop" spin v-if="isLoading && !isPlaying" />
        <font-awesome-icon icon="play" @click="play" v-if="!isPlaying && !isLoading" />
      </div>
      <div class="*:h-4">
        <!-- <p>Radio BLZ</p> -->
        <p>{{ titleRadio }}</p>
      </div>
      <div class="*:h-4 *:cursor-pointer">
        <font-awesome-icon icon="volume-xmark" @click="volumeUp" v-if="volume == 0" />
        <font-awesome-icon icon="volume-low" @click="volumeDown" v-else-if="volume <= 33" />
        <!-- <font-awesome-icon icon="volume" @click="volumeDown" v-if="volume <= 66" /> -->
        <font-awesome-icon icon="volume-high" @click="volumeDown" v-else />
        <input id="volumebar" type="range" min="0" max="100" @mousemove="setVolume($event)" />
      </div>
      <div class="*:h-6 *:cursor-pointer">
        <font-awesome-icon icon="up-right-and-down-left-from-center" @click="setFullSize" v-if="!isFullSize" />
        <font-awesome-icon icon="down-left-and-up-right-to-center" @click="unsetFullSize" v-else-if="isFullSize" />
      </div>
    </div>
  </div>
</template>