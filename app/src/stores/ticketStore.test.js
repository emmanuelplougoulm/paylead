import { describe, it, expect, vi,beforeEach } from 'vitest';
import { createPinia } from 'pinia';
import { setActivePinia } from 'pinia';
import { useTicketStore } from './index'; 

vi.mock('uuid', () => ({
  v4: vi.fn(() => 'unique-id'),
}));

describe('useTicketStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize with an empty tickets array', () => {
    const ticketStore = useTicketStore();

    expect(ticketStore.tickets).toEqual([]);
  });

  it('should add a new ticket', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');

    expect(ticketStore.tickets.length).toBe(1);
    expect(ticketStore.tickets[0]).toEqual({
      id: 'unique-id',
      title: 'Test Ticket',
      description: '',
      status: 'TODO',
    });
  });

  it('should update the status of a ticket', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');
    ticketStore.updateTicketStatus('unique-id', 'PENDING');

    expect(ticketStore.tickets[0].status).toBe('PENDING');
  });

  it('should not update status if ticket is not found', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');
    ticketStore.updateTicketStatus('non-existent-id', 'DONE');

    expect(ticketStore.tickets[0].status).toBe('TODO');
  });

  it('should update the description of a ticket', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'this is a description');
    ticketStore.updateTicketDescription('unique-id', 'this is another description');

    expect(ticketStore.tickets[0].description).toBe('this is another description');
  });

  it('should not update description if ticket is not found', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');
    ticketStore.updateTicketDescription('non-existent-id', 'New description');

    expect(ticketStore.tickets[0].description).toBe('');
  });

  it('should retrieve a ticket by its id', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');
    const ticket = ticketStore.getTicketById('unique-id');

    expect(ticket).toEqual({
      id: 'unique-id',
      title: 'Test Ticket',
      description: '',
      status: 'TODO',
    });
  });

  it('should return undefined if ticket is not found by id', () => {
    const ticketStore = useTicketStore();

    ticketStore.addNewTicket('Test Ticket', 'TODO');
    const ticket = ticketStore.getTicketById('non-existent-id');

    expect(ticket).toBeUndefined();
  });
});
