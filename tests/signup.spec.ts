import { test } from '@playwright/test';
import { LandingPage } from './pages/landing-page';
import { HomePage } from './pages/home-page';

test.describe('Sign up CTA', () => {
  test('user sees sign up button after clicking entry button', async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.open();

    const targetPage = await landingPage.clickEntry();
    const homePage = new HomePage(targetPage);

    await homePage.expectSignUpVisible();
  });
});

