# Estrutura do repositório

Esta estrutura é intencionalmente neutra até a recuperação do código-fonte real.

```text
LED/
├─ .agents/skills/tupiniquim-toolbox/
├─ .github/
├─ docs/
├─ public/
├─ scripts/
├─ src/
├─ tests/
├─ AGENTS.md
├─ SECURITY.md
└─ README.md
```

- `src/`: código da aplicação real após recovery.
- `public/`: mídias/ativos estáticos preservados.
- `tests/`: testes unitários, integração e E2E conforme stack.
- `scripts/`: automações não destrutivas.
- `docs/`: provenance, arquitetura, recovery, deploy e handoff.

Não adicionar framework/package.json fictício antes de identificar a stack original.
