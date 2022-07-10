<template>
  <h1>快乐大卖场</h1>
  <p>您现在有{{ userStore.cash }}元钱！</p>
  <div class="products">
    <div class="product" v-for="abc of productList">
      <img :src="abc.img" />
      <div class="name">{{ abc.name }}</div>
      <div class="button">
        <div class="price">价格：{{ abc.price }}</div>
        <button class="buy" @click="buy(abc)">加入购物车</button>
      </div>
    </div>
  </div>
</template>
<script>
import { products } from "../data/products";
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";
export default {
  data() {
    const userStore = useUserStore();
    return {
      productList: products,
      userStore,
    };
  },
  methods: {
    buy(product) {
      // console.log(product);
      this.userStore.addToCart(product);
      ElMessage({
        message: "添加购物车成功",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.products .product {
  width: 200px;
}
.products img {
  width: 100%;
  height: 200px;
}
.products .name {
  text-align: center;
  background-color: #eee;
}
.products .button {
  display: flex;
  background-color: #eee;
  height: 40px;
  /* align-items: center; */
}
.products .button .price {
  width: 50%;
  text-align: center;
  line-height: 40px;
}
.products .button .buy {
  width: 50%;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
