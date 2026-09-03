# Bardiya Kariminia — Personal Research Portfolio

A plain HTML/CSS/JS multi-page academic portfolio designed for GitHub Pages.

## Pages

- `index.html` — homepage
- `research.html` — research directions
- `publications.html` — publications
- `experience.html` — research and teaching experience
- `projects.html` — selected projects
- `contact.html` — contact + skills
- `assets/Bardiya-Kariminia-CV.pdf` — your uploaded resume

## Deploy on GitHub Pages

1. Create a **public** repository named:

   `bardiya2254kariminia.github.io`

2. Upload everything in this folder to the **root** of that repository.

3. Open:

   `Settings → Pages`

4. Under **Build and deployment**, choose:

   `Deploy from a branch`

5. Choose:

   `main` and `/ (root)`

6. Save.

Your site will be available at:

`https://bardiya2254kariminia.github.io/`

## Important placeholders to edit

The resume contains the names of links but not the destination URLs for:
- paper links
- GitHub links for each project
- LinkedIn
- Google Scholar

Replace the `href="#"` values with your actual URLs.

## Customizing your photo

The homepage currently uses a typographic placeholder (`BK`). To use a real photo:

1. Add `assets/profile.jpg`
2. In `index.html`, replace:

   `<div class="profile-photo">BK</div>`

   with:

   `<img class="profile-photo" src="assets/profile.jpg" alt="Bardiya Kariminia">`
