<!--
 * @author 胡小右
 * @date 2023-01-10 19:13:37
 * @desc
-->

<template>
    <router-view />
</template>

<script setup lang="ts">
const { locale, t } = useApp();
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: black;
}
</style>
