import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// Mocking WebSocket because it's not available in jsdom environment easily
global.WebSocket = vi.fn().mockImplementation(function() {
  return {
    send: vi.fn(),
    close: vi.fn(),
    onmessage: vi.fn(),
    onopen: vi.fn(),
    onerror: vi.fn(),
  };
});

describe('IQ Test 2003 App', () => {
  it('renders the header title correctly', () => {
    render(<App />);
    const titleElement = screen.getByText(/IQ TEST 2003: ПРОВЕРЬ СВОЙ МОЗГ/i);
    expect(titleElement).toBeDefined();
  });

  it('renders the start button on initial load', () => {
    render(<App />);
    const startButton = screen.getByText(/НАЧАТЬ ИНТЕЛЛЕКТУАЛЬНОЕ СТРАДАНИЕ/i);
    expect(startButton).toBeDefined();
  });

  it('shows the visitor counter', () => {
    render(<App />);
    const counterText = screen.getByText(/ВЫ ПОСЕТИТЕЛЬ №/i);
    expect(counterText).toBeDefined();
  });
});
