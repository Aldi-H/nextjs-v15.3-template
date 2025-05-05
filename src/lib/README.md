# Lib / Library

This folder contains shared logic, utilities, and abstractions used across the app.

Use this space for:

- API client setup (e.g. `lib/api.ts`)
- Utility functions (e.g. `lib/utils.ts`)
- Custom hooks (e.g. `lib/useDebounce.ts`)
- External service helpers (e.g. `lib/supabase.ts`, `lib/auth.ts`)
- Data transformers, formatters, or parsers

## Suggested Structure

```plaintext
src/lib/
  ├── utils.ts          # General utilities (e.g., `cn`, `formatDate`, etc.)
  ├── api.ts            # Fetch wrapper or API config (e.g., Axios, fetch)
  ├── supabase.ts       # Supabase client config (if used)
  ├── auth.ts           # Auth helpers (e.g., cookie/token utils)
  └── hooks/
      └── useDebounce.ts
```

## Example: **utils.ts**

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Notes

- Group reusable logic here — but avoid turning it into a "junk drawer."
- Prefer small, focused files with good naming.
- Consider splitting into subfolders if this grows (e.g., `lib/api/`, `lib/hooks/`, etc.).
