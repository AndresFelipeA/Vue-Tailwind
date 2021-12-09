<template>
  <div>
   <Image />
  </div>
  <router-view/>
</template>

<script>
import './assets/tailwind.css';
import Image from '@/components/Image.vue'

export default {
  name: 'Home',
  components: {
    Image
  }
}
</script>

<style>

</style>
