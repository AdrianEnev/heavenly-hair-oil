import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
    it('renders a button with text', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeInTheDocument()
    })

    it('renders a link when href is provided', () => {
        render(<Button href="/test">Link Button</Button>)
        const link = screen.getByRole('link', { name: /link button/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/test')
    })

    it('renders an external link when external prop is true', () => {
        render(<Button href="https://google.com" external>External</Button>)
        const link = screen.getByRole('link', { name: /external/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://google.com')
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
})
