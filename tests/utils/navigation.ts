import { Page } from '@playwright/test';

type LoadState = Parameters<Page['waitForLoadState']>[0];

export async function clickAndGetTarget(
  page: Page,
  click: () => Promise<void>,
  opts?: { waitForLoadState?: LoadState }
): Promise<Page> {
  const popupPromise = page.waitForEvent('popup').catch(() => null);

  await click();

  const popup = await popupPromise;
  const target = popup ?? page;

  if (opts?.waitForLoadState) {
    await target.waitForLoadState(opts.waitForLoadState);
  }

  return target;
}

