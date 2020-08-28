@import "../../common/vendor.wxss"

.index.data-v-8f43f050 {
  height: 100%;
  position: relative;
}
.index .img.data-v-8f43f050 {
  width: 100%;
  height: 100%;
}
.index .bg-swiper.data-v-8f43f050 {
  width: 100%;
  height: 100%;
}
.index .inv.data-v-8f43f050 {
  position: absolute;
  top: 20rpx;
  left: 89rpx;
  width: 572rpx;
  height: 69rpx;
  z-index: 9;
}
.index .bg_music.data-v-8f43f050 {
  position: fixed;
  right: 0;
  top: 20rpx;
  width: 100rpx;
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.index .bg_music .musicImg.data-v-8f43f050 {
  width: 60rpx;
  height: 60rpx;
}
.index .bg_music .music_icon.data-v-8f43f050 {
  animation: musicRotate-data-v-8f43f050 3s linear infinite;
}
.index .bg_music .music_play.data-v-8f43f050 {
  width: 28rpx;
  height: 60rpx;
  margin-left: -10rpx;
  transform-origin: top;
  -webkit-transform: rotate(20deg);
}
.index .bg_music .playImg.data-v-8f43f050 {
  animation: musicStop-data-v-8f43f050 1s linear forwards;
}
.index .bg_music .pauseImg.data-v-8f43f050 {
  animation: musicStart-data-v-8f43f050 1s linear forwards;
}
.index .info.data-v-8f43f050 {
  width: 630rpx;
  background: rgba(255,255,255,0.75);
  z-index: 9;
  position: fixed;
  bottom: 40rpx;
  left: 50rpx;
  padding: 10rpx;
  animation: infoAnimation-data-v-8f43f050 12s linear infinite;
}
.index .info .content.data-v-8f43f050 {
  width: 626rpx;
  border: 1rpx solid #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 30rpx;
}
.index .info .content ._h1.data-v-8f43f050 {
  font-size: 50rpx;
  height: 100rpx;
  line-height: 100rpx;
}
.index .info .content ._p.data-v-8f43f050 {
  font-size: 24rpx;
  height: 60rpx;
  line-height: 60rpx;
}
.index .info .content .img_footer.data-v-8f43f050 {
  position: absolute;
  bottom: 0;
  left: 53rpx;
  z-index: 99;
  height: 14rpx;
  width: 520rpx;
}

@-webkit-keyframes musicRotate {
from {
    -webkit-transformb: rotate(0deg);
}
to {
    -webkit-transform: rotate(360deg);
}
}

@keyframes musicRotate-data-v-8f43f050 {
from {
    -webkit-transformb: rotate(0deg);
}
to {
    -webkit-transform: rotate(360deg);
}
}

@-webkit-keyframes musicStop {
from {
    -webkit-transform: rotate(20deg);
}
to {
    -webkit-transform: rotate(0deg);
}
}

@keyframes musicStop-data-v-8f43f050 {
from {
    -webkit-transform: rotate(20deg);
}
to {
    -webkit-transform: rotate(0deg);
}
}

@-webkit-keyframes musicStart {
from {
    -webkit-transform: rotate(0deg);
}
to {
    -webkit-transform: rotate(20deg);
}
}

@keyframes musicStart-data-v-8f43f050 {
from {
    -webkit-transform: rotate(0deg);
}
to {
    -webkit-transform: rotate(20deg);
}
}

@-webkit-keyframes infoAnimation {
0% {
    -webkit-transform: scale(1) translate(0, 0);
}
50% {
    -webkit-transform: scale(0.9) translate(10rpx, 10rpx);
}
100% {
    -webkit-transform: scale(1) translate(0, 0);
}
}

@keyframes infoAnimation-data-v-8f43f050 {
0% {
    -webkit-transform: scale(1) translate(0, 0);
}
50% {
    -webkit-transform: scale(0.9) translate(10rpx, 10rpx);
}
100% {
    -webkit-transform: scale(1) translate(0, 0);
}
}
.box.data-v-696de793 {
  position: relative;
  height: 100%;
}
.box .swiper.data-v-696de793 {
  height: 100%;
  width: 100%;
}
.box .swiper .item.data-v-696de793 {
  width: 100%;
  height: 100%;
}
.box .swiper .item image.data-v-696de793 {
  width: 100%;
  height: 100%;
  display: block;
}