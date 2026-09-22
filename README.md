# LED — Site Premium P1LED

Repositório canônico do vertical **LED** da Tupiniquim.

## Estado atual — 22/09/2026

- Repositório identificado e acessível: **PASS**.
- Fonte executável do site premium: **MISSING / BLOCKED**.
- Mídias originais: **MISSING / BLOCKED**.
- Stack/package manager/build: **NOT RUN / UNKNOWN**.
- Integração `Sistema-SaaS-Geral/apps/led`: **BLOCKED** até recovery da fonte real.

> Este repositório não receberá implementação fictícia para “preencher” o vertical. A próxima etapa é recuperar a fonte legítima do P1LED e documentar provenance antes de importar para o SaaS Core.

## Estrutura preparada

- `.agents/skills/tupiniquim-toolbox/` — baseline operacional.
- `docs/` — recovery, provenance, arquitetura e handoff.
- `src/` — reservado ao código real.
- `public/` — reservado às mídias reais.
- `tests/` — testes conforme stack recuperada.
- `scripts/` — automações seguras.

## Integração SaaS

Destino: `tupiniquimtechsolution-blip/Sistema-SaaS-Geral` → `apps/led`.
Regra: novo cliente = tenant/configuração, nunca fork.

Consulte `docs/SOURCE_RECOVERY.md` antes de implementar.
