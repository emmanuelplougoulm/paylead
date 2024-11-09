<template>
    <teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="triggerModal">
        <div class="modal-content">
          <h2>Modal</h2>
          <p>testing modal display</p>
          <button @click="triggerModal">Fermer</button>
        </div>
      </div>
    </teleport>
</template>


<script setup>
import {  toRefs } from 'vue';
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();
const { isModalOpen, triggerModal } = toRefs(modalStore);

</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
</style>