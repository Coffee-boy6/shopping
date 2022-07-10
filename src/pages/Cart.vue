<template>
  <h1>你的购物车共有{{ userStore.carNumber }}件商品</h1>
  <div class="cart">
    <div class="operation">
      <span>商品总价 {{ userStore.totalPrice }} 元</span>
      <el-button v-if="userStore.isEnough" type="primary" @click="payment"
        >支付</el-button
      ><el-button v-else type="primary" disabled
        >您的现金为 {{ userStore.cash }} 元，请去打工。</el-button
      >
    </div>
    <div class="product" v-for="(item, index) of userStore.cart">
      <img :src="item.product.img" />
      <div class="right">
        <div>产品：{{ item.product.name }}</div>
        <div>价格：{{ item.product.price }}</div>
        <div>添加时间：{{ $common.formatTimestamp(item.addTime) }}</div>
        <button class="discard" @click="discard(index)">丢弃</button>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    discard(index) {
      this.userStore.discard(index);
    },
    payment() {
      if (this.userStore.payment()) {
        ElMessage({
          message: "支付成功！",
          type: "success",
        });
      }
    },
  },
};
</script>
<style scoped>
.cart .product {
  height: 140px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart .product:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
.cart .product img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}
.cart .product .right {
  text-align: right;
  font-size: 14px;
}
.cart .product .right .discard {
  outline: none;
  border: none;
  margin-top: 10px;
  padding: 2px 10px;
  background-color: orange;
  cursor: pointer;
}
.cart .operation {
  display: flex;
  justify-content: space-between;
}
</style>
