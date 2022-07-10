<template>
  <head class="navigator">
    <router-link
      class="home"
      :to="{
        name: 'home',
      }"
      >首页</router-link
    >
    <div class="right">
      <router-link
        :to="{
          name: 'cart',
        }"
        >购物车</router-link
      >
      <router-link
        :to="{
          name: 'order',
        }"
        >订单</router-link
      >
      <router-link
        :to="{
          name: 'work',
        }"
        >打工</router-link
      >
    </div>
  </head>
</template>
<style scoped>
.navigator {
  height: 60px;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
}
.navigator a {
  color: #333;
  text-decoration: none;
}
.navigator .right a {
  padding: 5px 20px;
  border-radius: 5px;
}
.navigator .right a:hover {
  background-color: #eee;
}
.navigator .home {
  font-size: 20px;
  font-weight: bold;
}
</style>
