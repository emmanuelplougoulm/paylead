import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

const useTicketStore = defineStore('tickets', () => {
  const ticketSchema = {
    id: '',
    title: '',
    description: '',
    status: '',
  }

  const tickets = ref([])

  function addNewTicket(title, status) {
    const newTicket = { ...ticketSchema }
    const uniqueId = uuidv4()

    newTicket.id = uniqueId
    newTicket.title = title
    newTicket.status = status

    tickets.value.push(newTicket)
  }

  function updateTicketStatus(id, status) {
    const ticket = tickets.value.find((ticket) => ticket.id === id)

    if (ticket) {
      ticket.status = status
    }
  }

  function updateTicketDescription(id, description) {
    const ticket = tickets.value.find((ticket) => ticket.id === id)

    if (ticket) {
      ticket.description = description
    }
  }

  function getTicketById(id) {
    return tickets.value.find((ticket) => ticket.id === id)
  }

  return {
    tickets,
    addNewTicket,
    updateTicketStatus,
    updateTicketDescription,
    getTicketById,
  }
})

export default useTicketStore
