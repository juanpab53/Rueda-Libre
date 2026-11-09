# Rueda Libre

Bicycle rental and guided tours website in Medellín. A project developed during the **Riwi Basic Track**, focused on web layout with HTML5 and CSS3, accessibility, responsive design, and exploring CSS frameworks (Tailwind and Bootstrap).

## Pages

| File | Description |
| --- | --- |
| `index.html` | Home page: about us, routes, services, bicycle types, fleet, how to rent, benefits, and contact. |
| `pages/tarifas.html` | Rental and guided tour rates, departure times, and recommendations. |
| `pages/reservas.html` | Reservation form with HTML5 validation, business hours, and contact. |
| `nocturna/index.html` | "Rueda Nocturna" landing page built with Tailwind CSS. |
| `nocturna/componentes.html` | Component kit: buttons, route card, alerts, and form fields. |
| `nocturna/prototipo.html` | Initial prototype of the main section using Tailwind Play CDN. |
| `pruebas/catalogo-bootstrap.html` | Comparative test of the fleet with Bootstrap 5. |

## Repository structure

```text
.
├── index.html                    # Home
├── css/
│   └── styles.css                # Custom styles (variables, Grid, Flexbox, mobile-first)
├── img/                          # Site images
├── pages/
│   ├── tarifas.html              # Rates and routes
│   └── reservas.html             # Reservation form
├── nocturna/
│   ├── index.html                # Tailwind landing page
│   ├── componentes.html          # Component kit
│   ├── prototipo.html            # Play CDN prototype
│   ├── src/
│   │   ├── input.css             # Tailwind directives
│   │   └── output.css            # Compiled CSS (versioned)
│   ├── tailwind.config.js
│   ├── package.json
│   └── .gitignore
├── pruebas/
│   └── catalogo-bootstrap.html   # Bootstrap comparison
├── bitacora.txt                  # Development process documentation
├── .github/workflows/static.yml  # GitHub Pages deployment
└── README.md
```

## Technologies

- **Semantic HTML5**: header, navigation, sections, tables, forms, and footer.
- **CSS3**: design variables, Grid, Flexbox, `rem`/`%`/`vh` units, mobile-first approach, and breakpoints at `768px` and `1200px`.
- **Accessibility**: skip links, alternative text, form labels, `aria-*` attributes, and color contrast verified against WCAG.
- **Tailwind CSS 3.4** (`nocturna/` folder): utilities, CLI, and compiled stylesheet.
- **Bootstrap 5.3** (only in `pruebas/`): comparison of the grid and cards against custom CSS.
- **GitHub Actions + GitHub Pages**: automatic site publishing.
- **npm**: only for compiling Tailwind in `nocturna/`.

## How to view the site

1. Clone the repository:

   ```bash
   git clone https://github.com/juanpab53/Rueda-Libre.git
   ```

2. Open `index.html` in your browser or serve it with an extension such as Live Server.

The pages in `nocturna/` already include the compiled `src/output.css`, so they can be opened directly. To regenerate that CSS after changing Tailwind classes:

```bash
cd nocturna
npm install
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Deployment

The `.github/workflows/static.yml` workflow publishes the entire repository to **GitHub Pages** every time a push is made to the `main` branch. It can also be run manually from the **Actions** tab.

## Process documentation

`bitacora.txt` contains the project's development log: page structure, form control choices, validation tests, contrast analysis, responsive issues and their solutions, comparison between custom CSS and Bootstrap, Tailwind configuration, and component kit rules.

---

**Developed by [Juan Pablo Aparicio](https://github.com/juanpab53)**

Riwi · Basic Track · 2026
