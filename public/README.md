# Public

This folder stores **Static Assets** that are served directly by the web server without processing or bundling.

## How It Works

- Files in this folder are accessible from the root URL
  - Example: `/public/logo.svg` → <https://yourdomain.com/logo.svg>
- No need to import files in code — just use a direct path
- Useful for:
  - Images (`/images`)
  - Fonts (`/fonts`)
  - Icons (`/icons`)
  - Favicons, Open Graph images, manifest files

## Recomended Structure

```plaintext
public/
├── assets/
│   ├── images/       # Logos, backgrounds, illustrations
│   ├── icons/        # SVG or PNG icons
│   └── fonts/        # Custom fonts
├── favicon.ico
├── site.webmanifest
└── og-image.png      # Open Graph / social preview image
```

## Usage Example

**Image tag:**

```tsx
<img src="/assets/images/logo.png" alt="Logo" />
```

**Font in CSS:**

```css
@font-face {
  font-family: "CustomFont";
  src: url("/assets/fonts/CustomFont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
```

## Notes

- Avoid placing sensitive files here — all contents are publicly accessible.
- Keep it organized with consistent naming and folder structure.
- Prefer modern formats like SVG, WebP, and WOFF2 for performance.
