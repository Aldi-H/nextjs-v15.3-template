# Components Folder

This folder contains all **reusable components** use through the project.

- `ui/` : Basic UI building blocks (atom) such as button, input, label, etc. It's all from shadcn ui components. You can customize it based on your own design.
- Future folder can include more complex component to combine all block components, layouts, or section components if needed.

Example:

```plaintext
Components
  ├── Layouts
  │   └── Detail
  │       └── detail-layout.tsx
  └── UI
      └── button.tsx
```

---

## Notes

- Keep components **small and reusable**
- Follow naming convention using kebab-case for file and component names (button.tsx not Button.tsx, dropdown-menu.tsx not DropdownMenu.tsx)
