import { expect } from "@playwright/test"

export class LogoutPage {
    constructor(page) {
        this.page = page;
    }

    async logout() {
        await this.page.locator("#logout2").click();
        await expect(this.page.locator("#login2")).toBeVisible();
    }
}