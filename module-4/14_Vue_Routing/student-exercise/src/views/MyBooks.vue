<template>
<div>
  <h1> <reading-list />  </h1>
  <nav>
<router-link v-bind:to="{name: 'addBook'}"> Add Book to Reading List </router-link>
  </nav>
  </div>
</template>

<script>
import ReadingList from '../components/ReadingList.vue';
export default {
    components: {
        ReadingList,
        
    },
}
</script>

<style>

