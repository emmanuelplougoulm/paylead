import {ref } from "vue"
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

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
    const uniqueId = uuidv4();  

    newTicket.id = uniqueId;
    newTicket.title = title;
    newTicket.status = status;

    tickets.value.push(newTicket)
  }

  function updateTicketStatus(id, status) {
    const ticket = tickets.value.find(ticket => ticket.id === id);

    if (ticket) {
        ticket.status = status;
    }
}
  

  return { tickets, addNewTicket, updateTicketStatus }
})
