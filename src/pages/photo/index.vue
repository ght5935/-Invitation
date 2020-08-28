<template>
  <div class="photo">
    <Himg></Himg>
    <h-swiper :list="list" :isGif="isGif"></h-swiper>
  </div>
</template>

<script>
import HSwiper from "components/swiper";
import Himg from "components/imgBg";
export default {
  name: "Photo",
  components: {
    HSwiper,
    Himg
  },
  onShow() {
    const that = this;
    that.isGif = !that.isGif;
    that.getList();
  },

  data() {
    return {
      list: [],
      isGif: false
    };
  },
  methods: {
    getList() {
      const that = this;
      const db = wx.cloud.database();
      const banner = db.collection("photo");
      banner.get().then(res => {
        that.list = res.data;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.photo {
  height: 100%;
}
</style>

