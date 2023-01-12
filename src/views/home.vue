<!--
 * @author 胡小右
 * @date 2023-01-11 15:16:06
 * @desc
-->

<template>
    <van-button type="primary">主要按钮</van-button>
    <img v-lazy="`https://img1.baidu.com/it/u=1026360805,1567430550&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800`" alt="" />
</template>

<script setup lang="ts">
const { notice, t } = useApp();

notice(t('语言'));
</script>

<style scoped lang="scss">
img {
    width: 200px;
    height: 200px;
}
</style>
