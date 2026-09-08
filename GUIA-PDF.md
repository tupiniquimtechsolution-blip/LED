# 📄 Guia Rápido — Apresentação em PDF

## Como acessar a página de apresentação

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Acesse no navegador:**
   ```
   http://localhost:5173/#/apresentacao
   ```

3. **Ou acesse diretamente pelo menu:**
   - No site principal, adicione `#/apresentacao` à URL

## Como gerar o PDF

### Opção 1: Botão na página
1. Acesse `http://localhost:5173/#/apresentacao`
2. Clique no botão **"📄 Imprimir / Salvar PDF"** (canto superior direito)
3. Na janela de impressão que abrir:
   - **Destino**: Selecione "Salvar como PDF"
   - **Layout**: Retrato
   - **Páginas**: Todas
   - **Margens**: Padrão ou Nenhum (ajuste conforme preferência)
   - **Gráficos de fundo**: ✅ Marcado (importante para manter as cores)
4. Clique em **"Salvar"**
5. Escolha o local e nome do arquivo (ex: `LUMENIX-Apresentacao.pdf`)

### Opção 2: Impressão direta do navegador
1. Acesse `http://localhost:5173/#/apresentacao`
2. Pressione `Ctrl+P` (Windows/Linux) ou `Cmd+P` (Mac)
3. Siga os mesmos passos da Opção 1

## Conteúdo do PDF

O PDF gerado inclui **10 seções visuais**:

1. **CAPA** — Logo, título e dados de contato
2. **SOBRE A LUMENIX** — Descrição + stats (5.200 painéis, 1.200 m², etc.)
3. **HERO** — Print da página principal com headline
4. **SCROLL NARRATIVO** — 4 telas (VISIBILIDADE, IMPACTO, TECNOLOGIA, LUMENIX)
5. **EXPERIÊNCIA PIXEL** — Comparação P10 vs P2 com imagens
6. **INDOOR × OUTDOOR** — Comparador interativo visualizado
7. **PROJETOS** — Galeria com 6 projetos principais
8. **CONFIGURADOR** — Interface do simulador de projeto
9. **CENTRAL DE VENDAS** — Canais de contato + formulário
10. **ENCERRAMENTO** — Agradecimento e contatos finais

## Dicas para melhor qualidade

- ✅ **Ative "Gráficos de fundo"** na janela de impressão (essencial para manter as cores)
- ✅ Use **"Salvar como PDF"** em vez de impressora física
- ✅ Para PDF menor: selecione qualidade "Padrão" em vez de "Alta"
- ✅ O botão de impressão é **automaticamente ocultado** no PDF final

## Personalização

Se precisar modificar o conteúdo da apresentação:

1. **Edite o arquivo:** `src/pages/Presentation.tsx`
2. **Altere as seções** conforme necessário
3. **Reinicie o servidor** (`npm run dev`)
4. **Gere o PDF novamente**

## Problemas comuns

### O PDF está sem cores
- ✅ Marque "Gráficos de fundo" na janela de impressão

### O botão de impressão aparece no PDF
- ❌ Isso não deve acontecer — o CSS print oculta automaticamente
- Se acontecer, verifique se o arquivo `Presentation.tsx` tem a classe `print:hidden`

### As imagens não aparecem
- ✅ Verifique se as URLs em `src/config/assets.ts` estão acessíveis
- ✅ As imagens são carregadas de URLs externas (gerador de IA)

### O layout está quebrado
- ✅ Use layout **Retrato** (não Paisagem)
- ✅ Margens: Padrão ou Nenhum
- ✅ Escala: 100% (ou "Ajustar" se necessário)

## Alternativa: Screenshot manual

Se preferir capturar prints individuais:

1. Acesse o site principal: `http://localhost:5173/`
2. Navegue pelas seções
3. Use ferramentas de screenshot:
   - **Chrome DevTools**: F12 → Ctrl+Shift+P → "Capture full size screenshot"
   - **Extensões**: GoFullPage, Nimbus Screenshot
   - **Sistema**: Print Screen + editor de imagem

---

**Precisa de ajuda?** Verifique o `README.md` principal para mais informações sobre o projeto.
