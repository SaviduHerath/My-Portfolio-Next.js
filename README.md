# Savidu Herath — portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## 1. Create the project

```bash
npx create-next-app@latest savidu-portfolio
```

Answer: TypeScript **yes**, ESLint **yes**, Tailwind CSS **yes**, `src/` directory **yes**, App Router **yes**, import alias `@/*` **yes**.

```bash
cd savidu-portfolio
npm install framer-motion lucide-react next-themes
```

## 2. Drop in these files

Copy the `src/` folder from this bundle over the generated one. It replaces:

```
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/components/Nav.tsx
src/components/Hero.tsx
src/components/Projects.tsx
src/components/About.tsx
src/components/Skills.tsx
src/components/Education.tsx
src/components/Contact.tsx
src/components/Footer.tsx
src/data/portfolio.ts
```

Delete `src/app/page.module.css` if create-next-app made one.

## 3. Fill in the gaps

In `src/data/portfolio.ts`:

- Replace every `your-username` with your real GitHub and LinkedIn handles.
- Add real `demo` URLs for anything that's deployed (EmpowerHer is on Vercel).
- Change `site` to your real domain once you have one.

In `public/`:

- `Savidu-Herath-CV.pdf` — your CV, so the download buttons work.
- `og.png` — 1200×630 preview image for link sharing.
- `favicon.ico` — replace the Next.js default.

## 4. Run it

```bash
npm run dev
```

## 5. Deploy

```bash
git init
git add .
git commit -m "feat: portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/savidu-portfolio.git
git push -u origin main
```

Then import the repo at [vercel.com/new](https://vercel.com/new). Every push to `main` redeploys automatically.

## Design notes

- **Palette** lives in `globals.css` as CSS variables under `:root` and `.dark`. Change `--accent` in both blocks and the whole site shifts.
- **Type**: Bricolage Grotesque for headings, Inter for body. Swap in `layout.tsx`.
- **Motion** is deliberately limited to one load sequence in the hero and the project accordion. Adding fade-ins to every section is the fastest way to make it look generic.
- `prefers-reduced-motion` and keyboard focus are already handled.