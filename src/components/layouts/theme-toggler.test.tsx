/**
 * @jest-environment jsdom
 */
import * as useMountedModule from '@/hooks/use-mounted'
import { cleanup, fireEvent, render } from '@/lib/test-utils'
import { useTheme } from 'next-themes'
import { afterEach, beforeAll, expect, it, vi } from 'vitest'
import { ThemeToggler } from './theme-toggler'

beforeAll(() => {
  window.PointerEvent = MouseEvent as typeof PointerEvent
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  // Mock useMounted hook to always return true
  vi.spyOn(useMountedModule, 'useMounted').mockReturnValue(true)
})

afterEach(cleanup)

const ThemeSpy: React.FC = () => {
  const { theme } = useTheme()
  return <span data-testid="theme-spy">{theme}</span>
}

const renderWithTheme = (initialTheme: string) => {
  return render(
    <>
      <ThemeToggler />
      <ThemeSpy />
    </>,
    { theme: initialTheme },
  )
}

it('Toggles the theme to dark', async () => {
  const { getByTestId } = renderWithTheme('light')

  // Toggle theme to dark
  const toggler = getByTestId('toggle-dark-theme-button')
  fireEvent.click(toggler)

  const spy = getByTestId('theme-spy').textContent
  expect(spy).toBe('dark')
})

it('Toggles the theme to light', async () => {
  const { getByTestId } = renderWithTheme('dark')

  // Toggle theme to light
  const toggler = getByTestId('toggle-light-theme-button')
  fireEvent.click(toggler)

  const spy = getByTestId('theme-spy').textContent
  expect(spy).toBe('light')

  console.log(spy)
})
