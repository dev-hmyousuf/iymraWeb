import { writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseUrl = 'https://iymralabs.com'; // change to your domain

const staticRoutes = [
  '/',
  '/abouts',
  '/about',
  '/products',
  '/contact',
  '/testimonials',
  '/faq',
  '/team'
];

// Read and parse JSON file manually (instead of import with assertion)
const teamDataPath = path.resolve(__dirname, '../src/assets/team_pic/team.json');
const teamDataRaw = readFileSync(teamDataPath, 'utf-8');
const teamData = JSON.parse(teamDataRaw);

// Generate dynamic team routes
const teamRoutes = teamData.map(member => `/team/${member.slug}`);

const allRoutes = [...staticRoutes, ...teamRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>
`
  )
  .join('')}
</urlset>`;

writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);

console.log('✅ Sitemap generated!');
