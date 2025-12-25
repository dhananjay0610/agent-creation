import { test } from '@playwright/test';
import { TryItPage } from './pages/tryit-page';
import { W3SchoolsHomePage } from './pages/w3schools-home-page';

test.describe('Search input visibility', () => {
  test('user sees search input after visiting W3Schools', async ({ page }) => {
    const tryItPage = new TryItPage(page);
    await tryItPage.open();

    const targetPage = await tryItPage.clickVisitLink();
    const w3SchoolsHomePage = new W3SchoolsHomePage(targetPage);

    await w3SchoolsHomePage.expectSearchVisible();
  });
});

