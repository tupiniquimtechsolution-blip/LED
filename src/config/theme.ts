/**
 * Tokens de design do site LUMENIX.
 * Paleta: violeta elétrico + verde neon sobre preto profundo.
 */
export const theme = {
  colors: {
    night950: "#05040a",
    night900: "#0a0814",
    night850: "#0e0b1c",
    night800: "#130f26",
    night700: "#1e1636",
    line: "#2a1f47",
    ink: "#f0ecff",
    dim: "#a89fd4",
    faint: "#6b5f99",
    volt300: "#d4a8ff",
    volt400: "#b366ff",
    volt500: "#9933ff",
    volt600: "#7a1fd9",
    ember300: "#a8ffb8",
    ember400: "#5cff7a",
    ember500: "#2ee855",
    signal500: "#ff3366",
  },
  fonts: {
    display: '"Unbounded", system-ui, sans-serif',
    body: '"Archivo", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  ease: {
    out: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
} as const;
