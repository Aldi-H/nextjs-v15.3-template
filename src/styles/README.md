# Styles Folder

This folder contains global and shared styling for the application.

- `global.css` : The main stylesheet, including Tailwind base, components, and utilities layer.
- Custom CSS variable (e.g., colors tokens, border radius, etc) are defined here.

## `global.css` Structure

```css
@import "tailwindcss";
@import "tw-animate-css";

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Notes

- Keep global styles minimal — prefer component-scoped styling when possible.
- Define theme tokens (colors, spacing, radius) here for consistency across the app.
