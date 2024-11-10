import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia } from 'pinia';
import { setActivePinia } from 'pinia';
import { useModalStore } from './index';

describe('useModalStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize with the modal closed and no ticket id', () => {
    const modalStore = useModalStore();

    expect(modalStore.isModalOpen).toBe(false);
    expect(modalStore.currentTicketId).toBe('');
  });

  it('should toggle the modal state and set the current ticket id when triggered', () => {
    const modalStore = useModalStore();
    
    expect(modalStore.isModalOpen).toBe(false);
    expect(modalStore.currentTicketId).toBe('');

    modalStore.onTriggerModal('ticket-123');

    expect(modalStore.isModalOpen).toBe(true);
    expect(modalStore.currentTicketId).toBe('ticket-123');

    modalStore.onTriggerModal('ticket-123');

    expect(modalStore.isModalOpen).toBe(false);
    expect(modalStore.currentTicketId).toBe('ticket-123');
  });

  it('should update the currentTicketId when triggered with a new id', () => {
    const modalStore = useModalStore();
    
    modalStore.onTriggerModal('ticket-456');
    expect(modalStore.currentTicketId).toBe('ticket-456');
  });
});
