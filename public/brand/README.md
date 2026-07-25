# Assets de marca — Vitrine Digital

Assets oficiais do Kit Oficial de Marca, integrados ao projeto.

## Masters SVG (fonte oficial)

| Arquivo | Uso |
| --- | --- |
| `symbol.svg` | Símbolo/monograma isolado — base para os ícones raster abaixo |
| `favicon.svg` | Favicon SVG (navegadores modernos) |
| `logo-horizontal.svg` | Logo horizontal, texto claro — fundos escuros (Footer) |
| `logo-horizontal-dark.svg` | Logo horizontal, texto navy — fundos claros (Header) |
| `logo-white.svg` | Versão monocromática branca |
| `logo-stacked.svg` | Versão empilhada com slogan — usada na imagem Open Graph |

## Derivados raster (gerados a partir de `symbol.svg`)

| Arquivo | Uso | Componente/rota que consome |
| --- | --- | --- |
| `favicon.ico` | Ícone da aba do navegador (multi-tamanho 16/32/48, fundo navy sólido) | `src/app/favicon.ico`, `layout.tsx` |
| `apple-touch-icon.png` | Ícone iOS (180×180, fundo navy sólido) | `layout.tsx` |
| `icon-192.png` | Ícone PWA 192×192 (fundo navy sólido) | `src/app/manifest.ts`, `layout.tsx` |
| `icon-512.png` | Ícone PWA 512×512 (fundo navy sólido) | `src/app/manifest.ts`, `layout.tsx` |
| `og-image.png` | Preview ao compartilhar links (1200×630) | `src/lib/seo.ts`, `layout.tsx` |

Gerados via renderização headless (Chromium) a partir dos SVGs oficiais,
sem distorção e sem efeitos adicionados ao asset-base. A tipografia dos
SVGs usa Poppins como referência; para materiais gráficos fora do ambiente
web, converter o texto em curvas antes de exportar.

Não redesenhar o símbolo/logo em CSS. Qualquer atualização de marca deve
substituir os arquivos aqui e regenerar os derivados raster.
