# LED — Recovery & SaaS Integration Plan

## Fonte canônica
- Repo: `tupiniquimtechsolution-blip/LED`
- Identificado: 22/09/2026
- Estado auditado: apenas `README.md` no `main`.

## Status
`BLOCKED_SOURCE_REPOSITORY_LED`: RESOLVIDO (repo identificado).

`BLOCKED_LED_SOURCE_CONTENT_MISSING`: ATIVO. Código, mídias, dependências, build e deploy do site premium P1LED não estão presentes no repositório auditado.

## Fases
### F0 — Recovery
- localizar export/branch/ZIP/origem do site real;
- preservar mídia e identidade;
- registrar commit/arquivo de origem e checksums quando possível.

### F1 — Reconhecimento Toolbox
- stack/package manager/lockfile;
- build/test/lint/typecheck;
- env/integrations;
- rotas/forms/contatos/SEO;
- segurança/a11y/performance.

### F2 — Estrutura profissional
- organizar código recuperado em `src/`, ativos em `public/` ou padrão nativo da stack;
- docs/tests/scripts sem alterar visual arbitrariamente.

### F3 — Integração no SaaS
- importar/reconciliar em `Sistema-SaaS-Geral/apps/led`;
- adaptar branding/content/media para tenant config;
- reutilizar Auth/Tenancy/RBAC/RLS/Entitlements do SaaS Core;
- novo cliente = tenant, não fork.

### F4 — Gates
Build, lint, typecheck, unit/integration/E2E, a11y, performance, secret scan, negative cross-tenant e smoke remoto.

## Critério para desbloquear
Fonte executável real recuperada e auditável. Um README ou implementação inventada não satisfaz o gate.
