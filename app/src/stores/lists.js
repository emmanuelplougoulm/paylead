import {ref } from "vue"
import { defineStore } from 'pinia';
import { DEFAULT_LISTS } from "@/constants";

export const useListsStore = defineStore('lists', () => {
  const listNames = ref([...DEFAULT_LISTS])

  function addList(name) {
    listNames.value.push(name)
  }

  function deleteList(name) {
    listNames.value = listNames.value.filter(item => item !== name)
  }


  return { listNames, addList, deleteList }
})
