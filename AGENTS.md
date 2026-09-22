# LED — Tupiniquim Toolbox Governance

## Estado auditado
Repositório canônico identificado em 22/09/2026. O `main` continha apenas um README no momento da auditoria. O código-fonte/mídias do site premium ainda não foram recuperados; portanto, **não inventar stack, layout ou conteúdo**.

## Regras
1. Reconhecer branch/HEAD, arquivos, stack, lockfile, CI, deploy, env e integrações antes de editar.
2. Preservar identidade visual e conteúdo real quando a fonte for recuperada.
3. Novo cliente no Sistema-SaaS-Geral = tenant/configuração, nunca fork.
4. Auth, RBAC, RLS, tenancy, secrets e validações são server-side/default-deny.
5. Aplicar LGPD, WCAG 2.2 AA, segurança web, performance e testes negativos cross-tenant.
6. Não force-push, reset destrutivo, clean destrutivo, migration destrutiva ou segredo no Git.
7. Usar estados `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`, `MISSING` com evidência.

## Integração SaaS
Destino futuro: `Sistema-SaaS-Geral/apps/led`, somente após recuperar a fonte real e produzir provenance/reconciliation.
