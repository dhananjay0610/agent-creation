import { expect, Page } from '@playwright/test';
import { SIGN_UP_BUTTON_XPATH } from '../selectors/home-page.selectors';
import { SIGN_UP_VISIBILITY_TIMEOUT_MS } from '../config/timeouts';

export class HomePage {
  constructor(private readonly page: Page) {}

  signUpButton() {
    return this.page.locator(SIGN_UP_BUTTON_XPATH);
  }

  async expectSignUpVisible() {
    const signUpButton = this.signUpButton();
    await expect(signUpButton).toBeVisible({ timeout: SIGN_UP_VISIBILITY_TIMEOUT_MS });
  }
}

