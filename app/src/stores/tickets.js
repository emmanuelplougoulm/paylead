import {ref } from "vue"
import { defineStore } from 'pinia'

export const useTicketsStore = defineStore('tickets', () => {
  const ticketSchema = {
    id:"",
    title:"",
    description:"",
  }

  const tickets = ref([])

  function addNewTicket(title) {
    const newTicket = {...ticketSchema}; 

    newTicket.id = tickets.value.length + 1;
    newTicket.title = title;

    tickets.value.push(newTicket)
  }
  

  return { tickets, addNewTicket }
})
