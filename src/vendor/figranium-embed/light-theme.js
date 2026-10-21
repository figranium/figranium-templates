// Applied to the iframe document before it loads; values follow Figranium's light theme.
export const lightThemeStyles = `
:root {
  --app-bg: #f5f5f5; --app-surface: #fff; --app-surface-2: #eaeaea; --app-surface-3: #fafafa;
  --app-border: rgba(0,0,0,.1); --app-border-strong: rgba(0,0,0,.2);
  --app-text: #111; --app-text-muted: rgba(0,0,0,.6); --app-text-faint: rgba(0,0,0,.55);
  --app-glass: rgba(255,255,255,.9); --app-glass-card: rgba(0,0,0,.02); --app-glass-card-hover: rgba(0,0,0,.05);
  --app-glass-modal: rgba(255,255,255,.88); --app-input: rgba(0,0,0,.05);
  --app-scrollbar: rgba(0,0,0,.12); --app-scrollbar-hover: rgba(0,0,0,.2);
  --app-accent: #2563eb; --app-accent-text: #fff; --app-logo: #111;
  --app-modal-backdrop: rgba(15,23,42,.14); --app-modal-shadow: 0 14px 36px rgba(15,23,42,.14);
  --app-code-bg: #fafafa; --app-code-text: #1d4ed8; --app-code-keyword: #1d4ed8;
  --app-code-string: #15803d; --app-code-number: #b45309; --app-code-comment: #6b7280;
  --app-code-boolean: #b91c1c; --app-code-identifier: #111; --app-code-key: #0e7490;
  --app-code-tag: #1d4ed8; --app-code-attr: #92400e; --app-code-punct: rgba(0,0,0,.6);
  --app-caret: #111; --app-selection-bg: rgba(37,99,235,.24); --app-selection-text: #111;
  --app-dot: rgba(0,0,0,.18); --app-shadow-raised: none;
  --app-shadow-overlay: 0 14px 36px rgba(17,24,39,.16); --app-shadow-sticky: 0 4px 14px rgba(17,24,39,.12);
  --app-sticky-default-bg: rgba(96,165,250,.32); --app-sticky-default-border: rgba(59,130,246,.62);
  --app-sticky-default-header: rgba(147,197,253,.46); --app-sticky-default-dot: #3b82f6;
  --app-sticky-text: #111827; --app-sticky-text-muted: rgba(17,24,39,.78); --app-sticky-text-faint: rgba(17,24,39,.56);
  --app-sticky-control: rgba(17,24,39,.68); --app-sticky-control-hover: rgba(17,24,39,.1); --app-sticky-code-bg: rgba(255,255,255,.34);
  color-scheme: light;
}
html, body, #root, .figranium-iframe-empty { background: var(--app-bg); }
.figranium-readonly-canvas { --app-dot: rgba(0,0,0,.18) !important; }
`;
