<template>
  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <ListSection></ListSection>
  <GallerySection></GallerySection>
  <FooterSection></FooterSection>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HeroSection from "./components/HeroSection.vue"
import ListSection from "./components/ListSection.vue"
import GallerySection from "./components/GallerySection.vue"
import FooterSection from "./components/FooterSection.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    ListSection,
    GallerySection,
    FooterSection
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
