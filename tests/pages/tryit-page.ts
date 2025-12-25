import { Page } from '@playwright/test';
import { TRYIT_IFRAME_SELECTOR, TRYIT_VISIT_LINK_XPATH } from '../selectors/tryit-page.selectors';
import { clickAndGetTarget } from '../utils/navigation';

const TRYIT_URL = 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_target';

export class TryItPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto(TRYIT_URL);
  }

  async clickVisitLink(): Promise<Page> {
    const frame = this.page.frameLocator(TRYIT_IFRAME_SELECTOR);
    const link = frame.locator(TRYIT_VISIT_LINK_XPATH);

    return clickAndGetTarget(this.page, () => link.click(), { waitForLoadState: 'domcontentloaded' });
  }
}

