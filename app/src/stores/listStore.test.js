import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia } from 'pinia';
import { setActivePinia } from 'pinia';
import { useListStore } from './index';
import { DEFAULT_LISTS } from '@/constants';

describe('useListStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());  
  });

  it('should initialize with default list names', () => {
    const listStore = useListStore();
    
    expect(listStore.listNames).toEqual([...DEFAULT_LISTS]);
  });

  it('should add a new list name if it does not already exist', () => {
    const listStore = useListStore();
    listStore.addList('newList');

    expect(listStore.listNames).toContain('newList');
  });

  it('should not add a list name if it already exists', () => {
    const listStore = useListStore();

    listStore.addList('defaultList1');  

    expect(listStore.listNames).toContain('defaultList1');
  });

  it('should delete an existing list name', () => {
    const listStore = useListStore();

    listStore.deleteList('defaultList1');
    expect(listStore.listNames).not.toContain('defaultList1');
  });

  it('should handle deleting a non-existent list name', () => {
    const listStore = useListStore();

    listStore.deleteList('nonExistentList');
    expect(listStore.listNames).toEqual([...DEFAULT_LISTS]);
  });
});
