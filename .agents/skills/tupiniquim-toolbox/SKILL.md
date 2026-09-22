# Tupiniquim Toolbox — Canonical Baseline

Aplicar antes de qualquer implementação:

1. **Reconhecimento** — branch/HEAD, stack, package manager, lockfile, CI/deploy, contracts, env, migrations, integrações, dados e docs.
2. **Produto white-label** — logo, favicon, cores, fontes, mídia, contatos, endereço, horários, CTAs, páginas, seções, integrações e módulos devem migrar para configuração tenant-aware quando integrar ao SaaS.
3. **Contratos Core** — Tenant/Domain/Brand/Theme/Settings; User/Membership/Role/Permission; Plan/Subscription/Feature/Entitlement; Page/Section/MediaAsset; IntegrationConnection/Webhook; Contact/Lead; AuditLog/UsageMetric/Notification.
4. **Segurança** — default-deny, auth/RBAC/RLS server-side, testes cross-tenant, schema validation, safe uploads/queries, anti-XSS/IDOR/SSRF/open redirect/mass assignment/privilege escalation, rate limits, secrets server-side, webhooks assinados/idempotentes, logs sanitizados e headers/CSP.
5. **LGPD** — minimização, finalidade, retenção, export/correção/exclusão, consentimento e privacy-by-default.
6. **Qualidade** — lint, typecheck, unit, integration, E2E, build, dependency audit, a11y WCAG 2.2 AA, performance/LCP-INP-CLS e reduced motion.
7. **Git seguro** — branch por wave, commits pequenos, PR para main, sem force push/reset destrutivo/migration destrutiva.
8. **Evidência** — `PASS` somente executado; senão `FAIL`, `BLOCKED`, `NOT RUN` ou `MISSING`.

O repositório LED está atualmente em recovery de fonte. Não escolher stack nem criar site substituto até recuperar o material real.
