import {ref } from "vue"
import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
  const lists = ref(["todo","pending","done"])

  function addList(name) {
    lists.value.push(name)
  }

  return { lists, addList }
})
