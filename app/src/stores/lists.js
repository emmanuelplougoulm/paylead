import {ref } from "vue"
import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
  const listNames = ref(["todo","pending","done"])

  function addList(name) {
    listNames.value.push(name)
  }

  return { listNames, addList }
})
