<script>
import PkmnHeader from '../src/components/PkmnHeader.vue'
import CreateCard from './components/CreateCard.vue';
</script>

<template>
    <main>
      <PkmnHeader />
      <router-view />
    </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
