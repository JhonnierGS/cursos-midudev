// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Espera a que el párrafo esté disponible
  await page.waitForSelector('p')
  const text = await page.getByRole('paragraph')

  // Espera a que la imagen esté disponible
  await page.waitForSelector('img')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log('SRC de la imagen:', imageSrc)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toBeTruthy()
})
