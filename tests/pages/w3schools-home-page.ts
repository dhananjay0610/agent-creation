import { expect, Page } from '@playwright/test';
import { SEARCH_INPUT_XPATH } from '../selectors/w3schools-home-page.selectors';

export class W3SchoolsHomePage {
  constructor(private readonly page: Page) {}

  searchInput() {
    return this.page.locator(SEARCH_INPUT_XPATH);
  }

  async expectSearchVisible() {
    await expect(this.searchInput()).toBeVisible();
  }
}

