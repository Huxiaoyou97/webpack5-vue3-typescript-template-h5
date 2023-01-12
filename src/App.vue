<!--
 * @author 胡小右
 * @date 2023-01-10 19:13:37
 * @desc
-->

<template>
    <router-view />
</template>

<script setup lang="ts">
import useApp from '@/core/hooks/useApp';
import { computed, ref } from 'vue';

const { locale, t } = useApp();
</script>

<style lang="scss"></style>
