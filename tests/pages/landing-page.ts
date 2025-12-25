import { Page } from '@playwright/test';
import { ENTRY_BUTTON_XPATH } from '../selectors/landing-page.selectors';
import { clickAndGetTarget } from '../utils/navigation';

const DEFAULT_URL = 'https://v0-button-to-open-v0-home-page-h5dizpkwp.vercel.app/';

export class LandingPage {
  constructor(private readonly page: Page, private readonly url = DEFAULT_URL) {}

  async open() {
    await this.page.goto(this.url);
  }
  async clickEntry(): Promise<Page> {
    const trigger = this.page.locator(ENTRY_BUTTON_XPATH);
    return clickAndGetTarget(this.page, () => trigger.click());
  }
}

