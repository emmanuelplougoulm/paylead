<template>
  <main>
    <Board />
    <Modal />
  </main>
</template>

<script setup>
import { Board, Modal } from '@/components/index'
</script>

<style>
main {
  /* background-color: var(--background-color); */
  background-image: linear-gradient(to bottom, #334eac, #081f5c);
}
</style>
