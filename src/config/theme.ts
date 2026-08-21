/**
 * Tokens de design do site P1LED.
 * Paleta extraída do universo da marca: preto profundo de sala de exibição,
 * ciano de pixel aceso (volt) e âmbar de tungstênio/holofote (ember).
 * Espelhados em src/index.css (@theme do Tailwind v4).
 */
export const theme = {
  colors: {
    night950: "#04070c",
    night900: "#070c14",
    night850: "#0a101b",
    night800: "#0d1522",
    night700: "#142032",
    line: "#1b2839",
    ink: "#eaf1f8",
    dim: "#93a3b6",
    faint: "#5d6d80",
    volt300: "#8beaff",
    volt400: "#3fdcff",
    volt500: "#14c4ee",
    volt600: "#0b9fc4",
    ember300: "#ffd08a",
    ember400: "#ffb44d",
    ember500: "#f79b1e",
    signal500: "#ff5468",
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
