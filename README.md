# 🚀 Synergia Tech Blog (Astro + GitHub Actions)

Blog estático de alto rendimiento para **Synergia**, diseñado para alojarse en **GitHub Pages** con despliegue continuo automatizado y apuntando al subdominio `blog.synergia.website`.

---

## ⚡ Características

* **Rendimiento Máximo:** Generado con **Astro 4**, 0 KB de JavaScript innecesario en el cliente y puntuación 100/100 en Google Lighthouse.
* **Despliegue Continuo (CI/CD):** Cada `git push` a la rama `main` ejecuta la GitHub Action oficial que compila el sitio y lo despliega en segundos.
* **Diseño Profesional Synergia:** Paleta oscura (#07090e), acentos cian y violeta, tipografía técnica y bloques de código con sintaxis limpia.
* **Contenido en Markdown:** Escribe tus artículos en archivos `.md` dentro de `src/content/blog/` con frontmatter estructurado (título, descripción, fecha, autor, tags, etc.).
* **Dominio Personalizado:** Configurado para `blog.synergia.website` a través del archivo `public/CNAME`.

---

## 📂 Estructura del Repositorio

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Action oficial de despliegue a GitHub Pages
├── public/
│   └── CNAME                   # Configuración del subdominio (blog.synergia.website)
├── src/
│   ├── content/
│   │   ├── config.ts           # Schema y validación de tipos de los artículos
│   │   └── blog/               # Tus artículos en Markdown (.md)
│   ├── layouts/
│   │   └── Layout.astro        # Layout base con cabecera, footer y estilos Synergia
│   └── pages/
│       ├── index.astro         # Portada del blog con artículo destacado y listado
│       └── blog/
│           └── [...slug].astro # Vista de lectura de cada artículo individual
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Cómo ponerlo en marcha en GitHub (3 pasos)

### 1. Subir a tu cuenta de GitHub
```bash
# Inicializar repositorio local
git init
git add .
git commit -m "feat: initial commit blog synergia con astro"

# Enlazar con tu repositorio en GitHub
git remote add origin https://github.com/TU_USUARIO/synergia-blog.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages en el repositorio
1. Entra a tu repositorio en GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona:  
   👉 **`GitHub Actions`** (en lugar de "Deploy from a branch").

¡Listo! A partir de ese momento, cada vez que hagas `git push`, la GitHub Action compilará y publicará la web automáticamente.

### 3. Conectar tu subdominio en Cloudflare (`blog.synergia.website`)
En el panel de **Cloudflare** donde tienes el dominio `synergia.website`:
1. Ve a **DNS → Records**.
2. Añade un registro **CNAME**:
   * **Nombre:** `blog`
   * **Objetivo / Destino:** `TU_USUARIO.github.io`
   * **Proxy:** Activo (Nube naranja de Cloudflare) o Desactivado (ambos funcionan).
