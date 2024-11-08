import {ref } from "vue"
import { defineStore } from 'pinia'

export const useTicketsStore = defineStore('tickets', () => {
  const ticketSchema = {
    id:"",
    title:"",
    description:"",
    status:"",
  }

  const tickets = ref([])

  function addNewTicket(title,status) {
    const newTicket = {...ticketSchema}; 

    newTicket.id = tickets.value.length + 1;
    newTicket.title = title;
    newTicket.status = status;

    tickets.value.push(newTicket)
  }
  

  return { tickets, addNewTicket }
})
