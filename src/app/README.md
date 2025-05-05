# App Folder

This is the root folder for **App Router** in a NextJS application especially V.13+. It handles routing, layout, templates and server components.

## Key Concepts

- File based routing: Each folder or file inside `/app` it wil become a route.
- `[slug]`: This special folder will make file inside that folder be more dynamic as a paramaeter on url.
- Special files:
  - `page.tsx`: Render pages content.
  - `layout.tsx`: Defined shared layout (header, sidebar, etc.) for child routes.
  - `loading.tsx`: Optional loading UI (Used for route level suspense).
  - `error.tsx`: Optional error boundary for the route.

## Example Structure

```plaintext
src
  └── app
      ├── layout.tsx
      ├── page.tsx
      ├── about
      │   └── page.tsx
      ├── dashboard
      │   ├── layout.tsx
      │   ├── page.tsx
      │   ├── loading.tsx
      │   ├── error.tsx
      │   └── setting
      │       └──page.tsx
      └── [slug]
          └── page.tsx
```

## Notes

- All files inside `/app` are treated as **React Server Component by default**.
- You can use remark `"use client"` to mark **Server Components** as a **Client Component** when needed (e.g client for interactivity).
- Each route can have its **own layout**, and layout can be nested to other route.
