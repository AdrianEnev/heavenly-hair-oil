import { render, screen, act } from '@testing-library/react'
import Home from '@/app/page'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

// Mock next/image since it's not supported in jsdom
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} />
    },
}))

describe('Home Page', () => {
    it('renders the hero section with product name', () => {
        render(<Home />)
        expect(screen.getByRole('heading', { level: 1, name: /heavenly hair oil/i })).toBeInTheDocument()
    })

    it('renders review section', () => {
        render(<Home />)
        expect(screen.getByText(/loved by our community/i)).toBeInTheDocument()
    })

    it('renders purchase buttons', () => {
        render(<Home />)
        const amazonBtns = screen.getAllByText(/visit on amazon/i)
        expect(amazonBtns.length).toBeGreaterThan(0)
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<Home />)
        // Run axe check
        // We need to await axe results
        await act(async () => {
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })
    })
})
