# Security Policy

## Baseline
- Default-deny para recursos privados.
- Segredos somente server-side e fora do Git.
- Validar entrada/saída, uploads e redirects.
- Prevenir IDOR, XSS, SSRF, mass assignment e escalonamento de privilégio.
- Rate limit em autenticação/formulários/mutações sensíveis.
- Logs sem PII/secrets; webhooks assinados e idempotentes.
- Dependências auditadas; correções automáticas com mudança de major não são permitidas sem revisão.

## SaaS / multi-tenant
Quando integrado ao Sistema-SaaS-Geral, toda tabela/recurso tenant-owned deve usar RLS/escopo de tenant e testes negativos A→B/B→A.

## LGPD
Coleta mínima, finalidade explícita, retenção definida, acesso/correção/exclusão/exportação e consentimento quando aplicável.

## Divulgação
Não publicar vulnerabilidades com exploração ativa. Registrar issue privada/processo interno e corrigir com evidência de testes.
