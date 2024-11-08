import {ref } from "vue"
import { defineStore } from 'pinia';
import { DEFAULT_LISTS } from "@/constants";

export const useListsStore = defineStore('lists', () => {
  const listNames = ref([...DEFAULT_LISTS])

  function addList(name) {
    const isFound =  listNames.value.includes(name.toUpperCase());

    if(!isFound){
      listNames.value.push(name)
    } else{
      alert('this list name already exists, please choose another one')
    }
  }

  function deleteList(name) {
    listNames.value = listNames.value.filter(item => item !== name)
  }


  return { listNames, addList, deleteList }
})
