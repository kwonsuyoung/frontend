<script setup>
const routerList = ['component', 'page98', 'page103', 'page108', 'page110',
                    ,'page118'
                    ,'mission01'];
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in routerList" :to="`/${item}`" :key="item">{{ item }}</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>