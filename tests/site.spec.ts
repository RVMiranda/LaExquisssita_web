import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('shows one clear page heading and the confirmed visit details', async ({ page }) => {
  await expect(page.locator('main h1')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Cómo llegar' })).toBeVisible();
  await expect(page.getByText('Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas')).toBeVisible();
  await expect(page.getByText('Lunes a sábado')).toBeVisible();
  await expect(page.getByText('08:00–16:00')).toBeVisible();
  await expect(page.getByText('Domingo', { exact: true })).toBeVisible();
  await expect(page.getByText('08:00–15:00')).toBeVisible();
});

test('opens the confirmed Google Maps pin and embeds the matching place', async ({ page }) => {
  const mapsAction = page.getByRole('link', { name: /Abrir ubicación/ });
  await expect(mapsAction).toHaveAttribute('href', 'https://maps.app.goo.gl/wbjhmojxTzkYqQvd8');
  await expect(mapsAction).toHaveAttribute('target', '_blank');

  const map = page.getByTitle('Mapa de Carnitas estilo Michoacán la EXQUISSSITA en Ocosingo');
  await expect(map).toHaveAttribute('loading', 'lazy');
  await expect(map).toHaveAttribute('src', /google\.com\/maps\/embed\?pb=/);
  await expect(map).toHaveAttribute('src', /f4e2fa283ee6648a/);

  const box = await map.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(200);
  expect(box?.height).toBeGreaterThanOrEqual(200);
});

test('keeps the separate WhatsApp and landline actions on their destinations', async ({ page }) => {
  await expect(page.getByRole('link', { name: /Consultar por WhatsApp/ }).first())
    .toHaveAttribute('href', /https:\/\/wa\.me\/529191330424\?text=/);
  await expect(page.getByRole('link', { name: '919 673 2035' }).first())
    .toHaveAttribute('href', 'tel:+529196732035');
});

test('explores menu categories through native keyboard-friendly disclosures', async ({ page }) => {
  const categories = page.locator('details.menu-category');
  await expect(categories).toHaveCount(4);
  await expect(categories.nth(0)).toHaveAttribute('open', '');
  await expect(page.getByText('Maciza', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Hígado', { exact: true }).first()).toBeVisible();

  await categories.nth(1).locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(categories.nth(1)).toHaveAttribute('open', '');
  await expect(categories.nth(0)).not.toHaveAttribute('open', '');
  await expect(page.getByText('¾ kg', { exact: true })).toBeVisible();
  await expect(page.getByText('También puedes pedir por importe; por ejemplo, $100.')).toBeVisible();

  await categories.nth(3).locator('summary').click();
  await expect(page.getByText('Manzana Mundet', { exact: true })).toBeVisible();
  await expect(page.getByText('Aguas 100% naturales', { exact: true })).toBeVisible();
  await expect(page.getByAltText(/imagen ilustrativa, no tomada en La Exquisssita/)).toBeVisible();
});

test('uses the requested typography and details the app features conceptually', async ({ page }) => {
  const fonts = await page.evaluate(() => ({
    body: getComputedStyle(document.body).fontFamily,
    title: getComputedStyle(document.querySelector('h1')!).fontFamily,
  }));
  expect(fonts.body).toContain('Forum');
  expect(fonts.title).toContain('My Soul');

  await expect(page.getByText('Tarjeta digital', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Novedades', { exact: true }).first()).toBeVisible();
  await expect(page.locator('.app-preview figcaption'))
    .toContainText('no es una captura ni especificación de la app real');
});

for (const width of [320, 390, 768, 1440]) {
  test(`fits the ${width}px responsive viewport without horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      app: document.querySelector('.app-preview')?.getBoundingClientRect().width ?? 0,
      map: document.querySelector('.map-frame')?.getBoundingClientRect(),
    }));

    expect(dimensions.page).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.app).toBeGreaterThan(200);
    expect(dimensions.app).toBeLessThanOrEqual(dimensions.viewport - 40);
    expect(dimensions.map?.width).toBeGreaterThanOrEqual(200);
    expect(dimensions.map?.height).toBeGreaterThanOrEqual(200);
  });
}

test('respects reduced-motion preferences and keeps keyboard focus visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.locator('html').evaluate((el) => getComputedStyle(el).scrollBehavior)).toBe('auto');

  await page.keyboard.press('Tab');
  const focus = await page.evaluate(() => {
    const active = document.activeElement;
    return active instanceof HTMLElement
      ? { tag: active.tagName, outlineStyle: getComputedStyle(active).outlineStyle }
      : null;
  });
  expect(focus?.tag).toBe('A');
  expect(focus?.outlineStyle).not.toBe('none');
});

test('confirms the account on its dedicated mobile-first page', async ({ page }) => {
  await page.goto('/verificar-tu-cuenta-socio-laexquisssita');
  await expect(page.locator('main h1')).toHaveText('¡Tu cuenta ha sido confirmada!');
  await expect(page.getByRole('status', { name: 'Cuenta confirmada' })).toBeVisible();
  await expect(page.getByText('Visitas y puntos')).toBeVisible();
  await expect(page.getByText('Novedades y recompensas')).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.getByRole('link', { name: 'Volver a La Exquisssita' })).toHaveAttribute('href', '/');

  await page.setViewportSize({ width: 360, height: 780 });
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    page: document.documentElement.scrollWidth,
    card: document.querySelector('.confirmation-card')?.getBoundingClientRect(),
  }));
  expect(dimensions.page).toBeLessThanOrEqual(dimensions.viewport);
  expect(dimensions.card?.width).toBeLessThanOrEqual(dimensions.viewport - 32);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.locator('.seal-check').evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
});
