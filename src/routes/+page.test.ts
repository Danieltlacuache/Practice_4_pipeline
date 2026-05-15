import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';

describe('+page.svelte', () => {
  it('debe renderizar el texto de bienvenida', () => {
    render(Page);
    expect(screen.getByText('Welcome to SvelteKit')).toBeInTheDocument();
  });
});
