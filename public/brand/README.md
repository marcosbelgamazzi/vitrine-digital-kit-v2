# Assets de marca — Vitrine Digital

Pasta reservada para os arquivos oficiais do monograma VD e demais assets de
identidade visual. Nenhum arquivo definitivo foi entregue ainda — ver
`docs/PENDENCIAS.md`.

## Arquivos esperados

| Arquivo | Uso | Componente/rota que consome |
| --- | --- | --- |
| `logo-vd.svg` | Logo principal (Header/Footer) | `src/components/ui/logo.tsx` |
| `logo-vd-mono.svg` | Versão monocromática (se houver) | — |
| `favicon.ico` | Ícone da aba do navegador | `src/app/favicon.ico` |
| `icon-192.png` | Ícone PWA 192x192 | `src/app/manifest.ts` |
| `icon-512.png` | Ícone PWA 512x512 | `src/app/manifest.ts` |
| `og-image.png` | Preview ao compartilhar links (1200x630) | `src/lib/seo.ts` |

Assim que os arquivos oficiais chegarem aqui, atualizar os componentes acima
para referenciá-los e remover o placeholder tipográfico "VD" de
`src/components/ui/logo.tsx`.
