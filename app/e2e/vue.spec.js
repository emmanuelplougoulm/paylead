import { test, expect } from '@playwright/test';

test('Checks the presence of elements on the board', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const todoList = page.locator('.list-name:has-text("TODO")');
    await expect(todoList).toBeVisible();

    const pendingList = page.locator('.list-name:has-text("PENDING")');
    await expect(pendingList).toBeVisible();

    const doneList = page.locator('.list-name:has-text("DONE")');
    await expect(doneList).toBeVisible();

    const deleteButtons = page.locator('button:has-text("Delete List")');
    await expect(deleteButtons).toHaveCount(3);

    const addTicketButtons = page.locator('button:has-text("+ Add a ticket")');
    await expect(addTicketButtons).toHaveCount(3);

    const listNameInput = page.locator('.list-add input[placeholder="List name"]');
    await expect(listNameInput).toBeVisible();

    const addListButton = page.locator('.list-add button:has-text("Add a list")');
    await expect(addListButton).toBeVisible();
});
