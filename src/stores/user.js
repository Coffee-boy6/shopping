import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state() {
    return {
      cash: 100,
      cart: [], //购物车
      orders: [], //订单
    };
  },
  getters: {
    //购物车里的总商品数
    carNumber() {
      return this.cart.length;
    },
    // 订单数量
    oredrNumber() {
      return this.orders.length;
    },
    //购物车里所以商品的价格
    totalPrice() {
      let total = 0;
      for (let item of this.cart) {
        total += item.product.price;
      }
      return total;
    },
    isEnough() {
      return this.totalPrice <= this.cash;
    },
  },
  actions: {
    // 打工挣钱
    payoff() {
      this.cash += 100;
    },
    // 加入购物车
    addToCart(product) {
      this.cart.push({
        product,
        addTime: Date.now(),
      });
    },
    // 从购物车中删除
    discard(index) {
      this.cart.splice(index, 1);
    },
    // 购物车支付
    payment() {
      if (this.totalPrice <= this.cash) {
        const order = {};
        order.orderTime = Date.now();
        order.products = [];
        for (const item of this.cart) {
          const product = {
            name: item.product.name,
            img: item.product.img,
            price: item.product.price,
          };
          order.products.push(product);
        }
        this.orders.unshift(order);

        this.cash -= this.totalPrice;
        this.cart = [];
        return true;
      }
      return false;
    },
  },
  persist: true, // 开启持久化
});
