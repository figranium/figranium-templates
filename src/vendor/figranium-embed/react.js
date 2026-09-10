import { jsx as t, jsxs as a, Fragment as ee } from "react/jsx-runtime";
import tt, { useRef as H, useEffect as te, useMemo as Ee, useState as V, useCallback as q, useLayoutEffect as ut } from "react";
import { createPortal as Ne } from "react-dom";
const v = tt.memo(({ name: e, className: r = "", fill: l = !1 }) => /* @__PURE__ */ t(
  "span",
  {
    className: `material-symbols-outlined ${r}`,
    style: {
      fontVariationSettings: l ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    },
    "aria-hidden": "true",
    children: e
  }
)), rt = {
  name: "block.output",
  label: "Block output",
  description: "Output from the previous block",
  icon: "output"
}, nt = [
  { name: "now", label: "Current time", description: "Current ISO-8601 timestamp", icon: "schedule", hasValue: !0 },
  { name: "loop.index", label: "Loop index", description: "Zero-based index in a foreach loop", icon: "format_list_numbered" },
  { name: "loop.count", label: "Loop count", description: "Number of items in the current foreach loop", icon: "tag" },
  { name: "loop.item", label: "Loop item", description: "Current foreach item", icon: "data_object" },
  { name: "loop.text", label: "Loop text", description: "Text of the current foreach item", icon: "text_fields" },
  { name: "loop.html", label: "Loop HTML", description: "HTML of the current foreach item", icon: "code" }
], pt = [rt, ...nt], Fe = (e) => pt.find((r) => r.name === e), ht = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, F = (e) => /[&<>"']/.test(e) ? e.replace(/[&<>"']/g, (r) => ht[r]) : e, mt = /* @__PURE__ */ new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "try",
  "catch",
  "finally",
  "throw",
  "new",
  "class",
  "extends",
  "super",
  "import",
  "from",
  "export",
  "default",
  "await",
  "async",
  "typeof",
  "instanceof",
  "in",
  "of",
  "this"
]), Pe = (e, r) => {
  if (!e.includes("{$")) return F(e);
  const l = /\{\$([\w.]+)\}/g;
  let i = "", s = 0, o;
  const n = (f) => !!Fe(f) || !!r && f in r, c = (f) => {
    const d = Fe(f);
    if (d) return !!d.hasValue;
    const b = r ? r[f] : void 0;
    return b && b.value !== "" && b.value !== void 0 && b.value !== null;
  };
  for (; (o = l.exec(e)) !== null; ) {
    o.index > s && (i += F(e.substring(s, o.index)));
    const f = o[1], d = n(f), b = c(f);
    i += `<span class="${d ? b ? "var-highlight-default" : "var-highlight" : "var-highlight-undefined"}">${F(o[0])}</span>`, s = l.lastIndex;
  }
  return i += F(e.substring(s)), i;
}, bt = (e) => {
  const r = /("(?:\\.|[^"\\])*")|(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|\b(true|false|null)\b/g;
  let l = "", i = 0, s;
  for (; (s = r.exec(e)) !== null; ) {
    s.index > i && (l += F(e.substring(i, s.index)));
    const o = s[0];
    if (s[1]) {
      let n = !1, c = s.index + o.length;
      for (; c < e.length && /\s/.test(e[c]); ) c += 1;
      e[c] === ":" && (n = !0), l += `<span class="${n ? "code-token-key" : "code-token-string"}">${F(o)}</span>`;
    } else s[2] ? l += `<span class="code-token-number">${F(o)}</span>` : l += `<span class="code-token-boolean">${F(o)}</span>`;
    i = r.lastIndex;
  }
  return l += F(e.substring(i)), l;
}, xt = (e, r) => {
  const l = /(\{\$[\w.]+\})|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b|\bundefined\b)|(\b[A-Za-z_]\w*\b)/g;
  let i = "", s = 0, o;
  for (; (o = l.exec(e)) !== null; ) {
    o.index > s && (i += F(e.substring(s, o.index)));
    const n = o[0];
    if (o[1])
      i += Pe(n, r);
    else if (o[2])
      i += `<span class="code-token-comment">${F(n)}</span>`;
    else if (o[3])
      i += `<span class="code-token-string">${F(n)}</span>`;
    else if (o[4])
      i += `<span class="code-token-number">${F(n)}</span>`;
    else if (o[5])
      i += `<span class="code-token-boolean">${F(n)}</span>`;
    else if (o[6]) {
      const c = mt.has(n) ? "code-token-keyword" : "code-token-identifier";
      i += `<span class="${c}">${F(n)}</span>`;
    } else
      i += F(n);
    s = l.lastIndex;
  }
  return i += F(e.substring(s)), i;
}, gt = (e, r) => {
  const l = /<\/?[^>]+>/g;
  let i = "", s = 0, o;
  for (; (o = l.exec(e)) !== null; ) {
    o.index > s && (i += Pe(e.substring(s, o.index), r));
    const c = o[0], f = c.match(/^<(\/?[A-Za-z0-9-]+)([\s\S]*?)>$/);
    if (f) {
      const d = f[1], b = f[2];
      let x = F(d);
      x.startsWith("/") ? x = `/<span class="code-token-tag">${x.substring(1)}</span>` : x = `<span class="code-token-tag">${x}</span>`;
      let w = F(b);
      w = w.replace(/(\s)([A-Za-z0-9-:]+)(=)/g, '$1<span class="code-token-attr">$2</span>$3'), w = w.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="code-token-string">$1</span>'), i += `<span class="code-token-punct">&lt;${x}${w}&gt;</span>`;
    } else
      i += `<span class="code-token-punct">${F(c)}</span>`;
    s = l.lastIndex;
  }
  const n = e.substring(s);
  return n && (i += Pe(n, r)), i;
}, at = (e, r, l) => r === "javascript" ? xt(e, l) : r === "json" ? bt(e) : r === "html" ? gt(e, l) : Pe(e, l), ot = "application/x-figranium-variable", Me = (e) => Array.from(e.types).includes(ot), lt = (e) => e.getData(ot) || e.getData("text/plain"), Xe = (e, r, l) => {
  const i = document;
  let s = null;
  const o = i.caretPositionFromPoint?.(r, l);
  o ? (s = document.createRange(), s.setStart(o.offsetNode, o.offset), s.collapse(!0)) : s = i.caretRangeFromPoint?.(r, l) || null, (!s || !e.contains(s.startContainer)) && (s = document.createRange(), s.selectNodeContents(e), s.collapse(!1));
  const n = window.getSelection();
  return n?.removeAllRanges(), n?.addRange(s), s;
}, Ie = (e, r) => e.measureText(r).width, ft = (e, r, l) => {
  let i = 0, s = r.length;
  for (; i < s; ) {
    const c = Math.ceil((i + s) / 2);
    Ie(e, r.slice(0, c)) <= l ? i = c : s = c - 1;
  }
  if (i >= r.length) return r.length;
  const o = Ie(e, r.slice(0, i)), n = Ie(e, r.slice(0, i + 1));
  return l - o < n - l ? i : i + 1;
}, Ge = (e, r, l) => {
  const i = window.getComputedStyle(e), o = document.createElement("canvas").getContext("2d");
  if (!o) return e.selectionStart ?? e.value.length;
  o.font = i.font;
  const n = e.getBoundingClientRect(), c = Number.parseFloat(i.paddingLeft) || 0, f = Number.parseFloat(i.paddingTop) || 0, d = Math.max(0, r - n.left - c + e.scrollLeft), b = e.value.split(`
`);
  let x = 0;
  if (e instanceof HTMLTextAreaElement) {
    const C = Number.parseFloat(i.fontSize) || 16, N = Number.parseFloat(i.lineHeight) || C * 1.5;
    x = Math.max(0, Math.min(b.length - 1, Math.floor((l - n.top - f + e.scrollTop) / N)));
  }
  const w = ft(o, b[x] || "", d), g = b.slice(0, x).reduce((C, N) => C + N.length + 1, 0) + w;
  return e.focus({ preventScroll: !0 }), e.setSelectionRange(g, g), g;
}, Y = ({ value: e, onChange: r, onBlur: l, placeholder: i, variables: s, className: o, syntax: n = "plain", allowVariableInsertion: c = !0 }) => {
  const f = H(null);
  return te(() => {
    if (f.current) {
      const d = f.current.innerHTML, b = at(e, n, s);
      if (d !== b) {
        const x = window.getSelection();
        let w = 0;
        if (x && x.rangeCount > 0) {
          const S = x.getRangeAt(0), g = S.cloneRange();
          g.selectNodeContents(f.current), g.setEnd(S.endContainer, S.endOffset), w = g.toString().length;
        }
        if (f.current.innerHTML = b, w > 0) {
          const S = document.createTreeWalker(f.current, NodeFilter.SHOW_TEXT);
          let g = 0, C = S.nextNode();
          for (; C; ) {
            const N = C.textContent?.length || 0;
            if (g + N >= w) {
              const L = document.createRange();
              L.setStart(C, w - g), L.collapse(!0), x?.removeAllRanges(), x?.addRange(L);
              break;
            }
            g += N, C = S.nextNode();
          }
        }
      }
    }
  }, [e, s]), /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      contentEditable: !0,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": i || "Text input",
      "data-variable-insertion-target": c ? "true" : void 0,
      className: `rich-input-content w-full bg-transparent focus:outline-none text-white min-h-[1.5rem] ${o}`,
      "data-placeholder": i,
      onInput: (d) => r(d.currentTarget.textContent || ""),
      onDragOver: (d) => {
        !c || !Me(d.dataTransfer) || (d.preventDefault(), d.dataTransfer.dropEffect = "copy", d.currentTarget.focus({ preventScroll: !0 }), Xe(d.currentTarget, d.clientX, d.clientY));
      },
      onDrop: (d) => {
        if (!c || !Me(d.dataTransfer)) return;
        d.preventDefault(), d.stopPropagation();
        const b = lt(d.dataTransfer);
        if (!b) return;
        const x = Xe(d.currentTarget, d.clientX, d.clientY);
        x.deleteContents();
        const w = document.createTextNode(b);
        x.insertNode(w), x.setStartAfter(w), x.collapse(!0);
        const S = window.getSelection();
        S?.removeAllRanges(), S?.addRange(x), r(d.currentTarget.textContent || "");
      },
      onBlur: (d) => {
        const b = d.currentTarget.textContent || "";
        r(b), l?.(b);
      }
    }
  );
}, ye = ({ value: e, onChange: r, onBlur: l, language: i, placeholder: s, className: o, readOnly: n, variables: c, allowVariableInsertion: f = !0 }) => {
  const d = H(null), b = H(null), x = e || s || "", w = !e && !!s, S = Ee(() => at(x, i, c), [x, i, c]);
  return te(() => {
    const g = d.current, C = b.current;
    if (!g || !C) return;
    const N = () => {
      C.scrollTop = g.scrollTop, C.scrollLeft = g.scrollLeft;
    };
    return g.addEventListener("scroll", N), () => {
      g.removeEventListener("scroll", N);
    };
  }, []), /* @__PURE__ */ a(
    "div",
    {
      className: `code-editor ${o || ""}`,
      onWheel: (g) => {
        const C = d.current;
        C && (C.scrollHeight <= C.clientHeight || (C.scrollTop += g.deltaY, C.scrollLeft += g.deltaX, C.focus(), g.preventDefault()));
      },
      children: [
        /* @__PURE__ */ t(
          "pre",
          {
            ref: b,
            className: `code-editor-pre ${w ? "code-editor-placeholder" : ""}`,
            "aria-hidden": !0,
            dangerouslySetInnerHTML: { __html: S }
          }
        ),
        /* @__PURE__ */ t(
          "textarea",
          {
            ref: d,
            value: e,
            onChange: (g) => r?.(g.target.value),
            onBlur: (g) => l?.(g.target.value),
            spellCheck: !1,
            wrap: "off",
            readOnly: n,
            className: `code-editor-textarea ${n ? "code-editor-textarea-readonly" : ""}`,
            "aria-label": "Code editor",
            "data-variable-insertion-target": !n && f ? "true" : void 0,
            tabIndex: n ? -1 : 0,
            onDragOver: (g) => {
              n || !f || !Me(g.dataTransfer) || (g.preventDefault(), g.dataTransfer.dropEffect = "copy", Ge(g.currentTarget, g.clientX, g.clientY));
            },
            onDrop: (g) => {
              if (n || !f || !Me(g.dataTransfer)) return;
              g.preventDefault(), g.stopPropagation();
              const C = lt(g.dataTransfer);
              if (!C) return;
              const N = Ge(g.currentTarget, g.clientX, g.clientY), L = `${e.slice(0, N)}${C}${e.slice(N)}`;
              r?.(L), requestAnimationFrame(() => {
                const I = N + C.length;
                d.current?.focus({ preventScroll: !0 }), d.current?.setSelectionRange(I, I);
              });
            }
          }
        )
      ]
    }
  );
}, it = [
  { type: "click", label: "Click", description: "Click an element", icon: "ads_click" },
  { type: "type", label: "Type", description: "Type text into a field", icon: "text_format" },
  { type: "hover", label: "Hover", description: "Hover an element", icon: "my_location" },
  { type: "press", label: "Press", description: "Press a key", icon: "keyboard" },
  { type: "wait", label: "Wait", description: "Pause for seconds", icon: "schedule" },
  { type: "wait_selector", label: "Wait for Selector", description: "Wait until element appears", icon: "schedule" },
  { type: "wait_downloads", label: "Wait for Downloads", description: "Wait until downloads finish", icon: "download" },
  { type: "scroll", label: "Scroll", description: "Scroll the page or container", icon: "swap_vert" },
  { type: "javascript", label: "JavaScript", description: "Run custom JS", icon: "code" },
  { type: "csv", label: "CSV", description: "Parse CSV into rows", icon: "csv" },
  { type: "upload", label: "Upload", description: "Upload latest cabinet item", icon: "upload_file" },
  { type: "finalize_uploads", label: "Finalize Uploads", description: "Mark this run’s uploads complete", icon: "task_alt" },
  { type: "merge", label: "Merge", description: "Merge inputs into a single output", icon: "layers" },
  { type: "screenshot", label: "Screenshot", description: "Capture a screenshot", icon: "photo_camera" },
  { type: "navigate", label: "Navigate To", description: "Navigate to a URL", icon: "navigation" },
  { type: "if", label: "If", description: "Conditional block start", icon: "call_split" },
  { type: "else", label: "Else", description: "Conditional alternate path", icon: "call_split" },
  { type: "end", label: "End Block", description: "Close a block", icon: "subdirectory_arrow_right" },
  { type: "while", label: "While", description: "Loop while condition true", icon: "repeat" },
  { type: "repeat", label: "Repeat N", description: "Repeat block N times", icon: "repeat" },
  { type: "foreach", label: "For Each", description: "Loop through items", icon: "list" },
  { type: "set", label: "Set Variable", description: "Update variable value", icon: "data_object" },
  { type: "stop", label: "Stop Task", description: "Stop task with status", icon: "stop" },
  { type: "on_error", label: "On Error", description: "Run on failure", icon: "warning" },
  { type: "start", label: "Start Task", description: "Run another task", icon: "play_circle" },
  { type: "http_request", label: "HTTP Request", description: "Make an API call", icon: "language" },
  { type: "get_content", label: "Get Content", description: "Get page or element text content", icon: "article" },
  { type: "solve_captcha", label: "Solve Captcha", description: "Solve through a compatible remote endpoint or the active-browser local solver", icon: "verified_user" },
  { type: "wait_captcha", label: "Wait for Captcha", description: "Wait until a captcha interaction is ready", icon: "hourglass_top" },
  { type: "do_nothing", label: "Do Nothing", description: "No operation block", icon: "block" }
], st = (e) => {
  const r = e.getBoundingClientRect(), l = 6, i = 12, s = 280, o = window.innerHeight - r.bottom - i, n = r.top - i, c = o < 180 && n > o, f = Math.max(120, Math.min(s, (c ? n : o) - l)), d = Math.min(Math.max(r.width, 160), window.innerWidth - i * 2), b = Math.max(i, Math.min(r.left, window.innerWidth - d - i));
  return c ? { left: b, bottom: window.innerHeight - r.top + l, width: d, maxHeight: f } : { left: b, top: r.bottom + l, width: d, maxHeight: f };
};
function ne({
  value: e,
  options: r,
  onChange: l,
  placeholder: i = "Select…",
  disabled: s = !1,
  ariaLabel: o,
  className: n = ""
}) {
  const c = H(null), f = H(null), d = H(""), b = H(null), [x, w] = V(null), S = r.findIndex((y) => y.value === e), [g, C] = V(Math.max(0, S)), N = S >= 0 ? r[S] : null, L = (y = !1) => {
    w(null), y && requestAnimationFrame(() => c.current?.focus());
  }, I = () => {
    s || !c.current || (C(S >= 0 ? S : Math.max(0, r.findIndex((y) => !y.disabled))), w(st(c.current)));
  };
  te(() => {
    if (!x) return;
    const y = (T) => {
      const z = T.target;
      !c.current?.contains(z) && !f.current?.contains(z) && L();
    }, m = () => L(), M = (T) => {
      f.current?.contains(T.target) || L();
    };
    return document.addEventListener("mousedown", y), window.addEventListener("resize", m), window.addEventListener("scroll", M, !0), requestAnimationFrame(() => f.current?.focus()), () => {
      document.removeEventListener("mousedown", y), window.removeEventListener("resize", m), window.removeEventListener("scroll", M, !0);
    };
  }, [x]), te(() => () => {
    b.current && clearTimeout(b.current);
  }, []);
  const X = (y) => {
    if (!r.length) return;
    let m = g;
    for (let M = 0; M < r.length; M += 1)
      if (m = (m + y + r.length) % r.length, !r[m].disabled) {
        C(m), requestAnimationFrame(() => f.current?.querySelector(`[data-option-index="${m}"]`)?.scrollIntoView({ block: "nearest" }));
        return;
      }
  }, P = (y) => {
    y.disabled || (l(y.value), L(!0));
  }, j = (y) => {
    if (!x && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(y.key)) {
      y.preventDefault(), I();
      return;
    }
    if (x) {
      if (y.key === "Escape" || y.key === "Tab")
        y.key === "Escape" && y.preventDefault(), L(y.key === "Escape");
      else if (y.key === "ArrowDown" || y.key === "ArrowUp")
        y.preventDefault(), X(y.key === "ArrowDown" ? 1 : -1);
      else if (y.key === "Home" || y.key === "End") {
        y.preventDefault();
        const m = r.map((T, z) => ({ option: T, index: z })).filter(({ option: T }) => !T.disabled), M = y.key === "Home" ? m[0]?.index : m[m.length - 1]?.index;
        M !== void 0 && C(M);
      } else if (y.key === "Enter" || y.key === " ")
        y.preventDefault(), r[g] && P(r[g]);
      else if (y.key.length === 1 && !y.ctrlKey && !y.metaKey && !y.altKey) {
        d.current += y.key.toLowerCase();
        const m = r.findIndex((M) => !M.disabled && M.label.toLowerCase().startsWith(d.current));
        m >= 0 && C(m), b.current && clearTimeout(b.current), b.current = setTimeout(() => {
          d.current = "";
        }, 600);
      }
    }
  };
  return /* @__PURE__ */ a(ee, { children: [
    /* @__PURE__ */ a(
      "button",
      {
        ref: c,
        type: "button",
        role: "combobox",
        "aria-label": o,
        "aria-expanded": !!x,
        "aria-haspopup": "listbox",
        disabled: s,
        onClick: () => x ? L() : I(),
        onKeyDown: j,
        className: `custom-dropdown-trigger ${n}`,
        children: [
          /* @__PURE__ */ a("span", { className: "flex items-center gap-2 min-w-0", children: [
            N?.iconUrl ? /* @__PURE__ */ t("img", { src: N.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${N.iconImageClassName || ""}` }) : null,
            !N?.iconUrl && N?.icon ? /* @__PURE__ */ t(v, { name: N.icon, className: `text-base shrink-0 ${N.iconClassName || "theme-text-faint"}` }) : null,
            /* @__PURE__ */ t("span", { className: `truncate ${N ? "" : "theme-text-faint"}`, children: N?.label || i })
          ] }),
          /* @__PURE__ */ t(v, { name: "expand_more", className: `text-base shrink-0 transition-transform ${x ? "rotate-180" : ""}` })
        ]
      }
    ),
    x ? Ne(
      /* @__PURE__ */ t(
        "div",
        {
          ref: f,
          role: "listbox",
          "aria-label": o,
          tabIndex: -1,
          onKeyDown: j,
          className: "custom-dropdown-menu custom-scrollbar",
          style: { left: x.left, top: x.top, bottom: x.bottom, width: x.width, maxHeight: x.maxHeight },
          children: r.map((y, m) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": y.value === e,
              disabled: y.disabled,
              "data-option-index": m,
              onMouseEnter: () => !y.disabled && C(m),
              onClick: () => P(y),
              className: `custom-dropdown-option ${g === m ? "custom-dropdown-option-active" : ""}`,
              children: [
                /* @__PURE__ */ a("span", { className: "flex items-center gap-2 min-w-0", children: [
                  y.iconUrl ? /* @__PURE__ */ t("img", { src: y.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${y.iconImageClassName || ""}` }) : null,
                  !y.iconUrl && y.icon ? /* @__PURE__ */ t(v, { name: y.icon, className: `text-base shrink-0 ${y.iconClassName || "theme-text-faint"}` }) : null,
                  /* @__PURE__ */ t("span", { className: "truncate", children: y.label })
                ] }),
                y.value === e ? /* @__PURE__ */ t(v, { name: "check", className: "text-sm shrink-0" }) : null
              ]
            },
            `${String(y.value)}-${m}`
          ))
        }
      ),
      document.body
    ) : null
  ] });
}
function wt({ value: e, options: r, onChange: l, ariaLabel: i, placeholder: s, disabled: o, className: n = "", autoFocus: c, onEnter: f, onEscape: d }) {
  const b = H(null), x = H(null), [w, S] = V(null), [g, C] = V(0), N = Ee(() => {
    const P = e.trim().toLowerCase();
    return r.filter((j) => !P || j.toLowerCase().includes(P)).slice(0, 30);
  }, [r, e]), L = () => {
    !o && b.current && N.length && S(st(b.current));
  }, I = () => S(null);
  te(() => {
    if (!w) return;
    const P = (m) => {
      const M = m.target;
      !b.current?.contains(M) && !x.current?.contains(M) && I();
    }, j = () => I(), y = (m) => {
      x.current?.contains(m.target) || I();
    };
    return document.addEventListener("mousedown", P), window.addEventListener("resize", j), window.addEventListener("scroll", y, !0), () => {
      document.removeEventListener("mousedown", P), window.removeEventListener("resize", j), window.removeEventListener("scroll", y, !0);
    };
  }, [w]);
  const X = (P) => {
    l(P), I(), b.current?.focus();
  };
  return /* @__PURE__ */ a(ee, { children: [
    /* @__PURE__ */ a("div", { className: `relative ${n}`, children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: b,
          value: e,
          onChange: (P) => {
            l(P.target.value), C(0), requestAnimationFrame(L);
          },
          onFocus: L,
          onKeyDown: (P) => {
            P.key === "ArrowDown" && N.length ? (P.preventDefault(), w ? C((j) => (j + 1) % N.length) : L()) : P.key === "ArrowUp" && N.length ? (P.preventDefault(), w ? C((j) => (j - 1 + N.length) % N.length) : L()) : P.key === "Enter" ? (P.preventDefault(), w && N[g] ? X(N[g]) : f?.()) : P.key === "Escape" && (w ? I() : d?.());
          },
          placeholder: s,
          disabled: o,
          "aria-label": i,
          role: "combobox",
          "aria-expanded": !!w,
          "aria-autocomplete": "list",
          className: "w-full bg-transparent text-xs theme-text font-mono focus:outline-none",
          autoFocus: c
        }
      ),
      /* @__PURE__ */ t("button", { type: "button", onClick: () => w ? I() : L(), className: "absolute right-0 top-1/2 -translate-y-1/2 theme-text-faint", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ t(v, { name: "expand_more", className: "text-base" }) })
    ] }),
    w && N.length ? Ne(
      /* @__PURE__ */ t("div", { ref: x, role: "listbox", "aria-label": `${i} suggestions`, className: "custom-dropdown-menu custom-scrollbar", style: { left: w.left, top: w.top, bottom: w.bottom, width: w.width, maxHeight: w.maxHeight }, children: N.map((P, j) => /* @__PURE__ */ a("button", { type: "button", role: "option", "aria-selected": P === e, onMouseEnter: () => C(j), onClick: () => X(P), className: `custom-dropdown-option ${g === j ? "custom-dropdown-option-active" : ""}`, children: [
        /* @__PURE__ */ t("span", { className: "truncate font-mono normal-case tracking-normal", children: P }),
        P === e ? /* @__PURE__ */ t(v, { name: "check", className: "text-sm" }) : null
      ] }, P)) }),
      document.body
    ) : null
  ] });
}
const vt = {
  string: "text_fields",
  number: "numbers",
  boolean: "toggle_on",
  selector: "ads_click"
}, yt = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, je = ({
  variables: e,
  canInsertVariable: r = !1,
  loopVariablesAvailable: l = !1,
  onInsertVariable: i
}) => {
  const s = Object.entries(e || {}), [o, n] = V("variables"), c = (d, b = !1) => ({
    draggable: !b,
    disabled: b,
    "aria-disabled": b || !r,
    onClick: () => {
      r && !b && i?.(d);
    },
    onDragStart: (x) => {
      if (b) {
        x.preventDefault();
        return;
      }
      const w = `{$${d}}`;
      x.dataTransfer.effectAllowed = "copy", x.dataTransfer.setData("text/plain", w), x.dataTransfer.setData("application/x-figranium-variable", w);
    }
  }), f = (d) => {
    const b = d.name.startsWith("loop.") && !l;
    return /* @__PURE__ */ a("div", { className: `flex w-full items-start gap-3 ${b ? "opacity-35" : ""}`, children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          ...c(d.name, b),
          className: `inline-flex max-w-[58%] shrink-0 overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left ${b ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing"} ${r ? "" : "opacity-75"}`,
          title: b ? "Available only inside a For Each loop" : r ? `Insert {$${d.name}}` : `Drag {$${d.name}} into a field`,
          children: [
            /* @__PURE__ */ t("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ t(v, { name: d.icon, className: "text-sm" }) }),
            /* @__PURE__ */ t("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: d.name })
          ]
        }
      ),
      /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: d.description })
    ] }, d.name);
  };
  return /* @__PURE__ */ a("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
        /* @__PURE__ */ t(v, { name: "data_object", className: "text-sm" }),
        "Variables"
      ] }),
      /* @__PURE__ */ t("span", { className: "text-[10px] text-[var(--app-text-faint)]", children: s.length })
    ] }),
    /* @__PURE__ */ a("div", { className: "mt-3 flex gap-1 border-b theme-border", role: "tablist", "aria-label": "Variable categories", children: [
      /* @__PURE__ */ t("button", { type: "button", role: "tab", "aria-selected": o === "variables", onClick: () => n("variables"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${o === "variables" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "Variables" }),
      /* @__PURE__ */ t("button", { type: "button", role: "tab", "aria-selected": o === "more", onClick: () => n("more"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${o === "more" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "More" })
    ] }),
    /* @__PURE__ */ t("p", { className: "mt-2 text-[10px] text-[var(--app-text-faint)]", children: r ? "Click or drag a variable into a field." : "Drag a variable, or focus a field before clicking." }),
    /* @__PURE__ */ a("div", { className: "mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1 custom-scrollbar", children: [
      o === "variables" && s.map(([d, b]) => /* @__PURE__ */ a("div", { className: "flex w-full items-start gap-3", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            ...c(d),
            className: `inline-flex max-w-[58%] shrink-0 cursor-grab overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left active:cursor-grabbing ${r ? "" : "opacity-75"}`,
            title: r ? `Insert {$${d}}` : `Drag {$${d}} into a field`,
            children: [
              /* @__PURE__ */ t("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ t(v, { name: vt[b.type], className: "text-sm" }) }),
              /* @__PURE__ */ t("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: d })
            ]
          }
        ),
        /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 whitespace-pre-wrap break-words pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: yt(b.value) })
      ] }, d)),
      o === "variables" && f(rt),
      o === "variables" && s.length === 0 && /* @__PURE__ */ t("p", { className: "py-4 text-center text-xs text-[var(--app-text-faint)]", children: "No task variables defined" }),
      o === "more" && nt.map(f)
    ] })
  ] });
}, Nt = /* @__PURE__ */ new Set(["while", "repeat", "foreach"]), Ct = /* @__PURE__ */ new Set([
  "if",
  "while",
  "repeat",
  "foreach",
  "on_error"
]), kt = (e) => Nt.has(e), Te = (e) => Ct.has(e), _t = (e, r) => {
  const l = e[r];
  if (!l || !Te(l.type)) return null;
  let i = 1;
  for (let s = r + 1; s < e.length; s += 1) {
    const o = e[s];
    if (Te(o.type) && (i += 1), o.type === "end" && (i -= 1), i === 0) return s;
  }
  return null;
}, $t = (e) => `if:${e}:true`, St = (e) => `if:${e}:false`, Et = (e) => `loop:${e}:body`, ct = {
  selector: "Selector",
  value: "Value",
  key: "Key",
  conditionVar: "Variable",
  conditionVarType: "Variable type",
  conditionOp: "Relation",
  conditionValue: "Comparison value",
  typeMode: "Typing mode",
  method: "Method",
  headers: "Headers",
  body: "Body",
  timeout: "Timeout",
  captchaType: "Captcha type"
}, Pt = Object.keys(ct), Mt = (e, r) => typeof e != "string" || !e.includes("{$") ? e : e.replace(/\{\$([\w.]+)\}/g, (l, i) => {
  if (i === "now") return (/* @__PURE__ */ new Date()).toISOString();
  const s = r[i]?.value;
  if (s == null) return "";
  if (typeof s == "object")
    try {
      return JSON.stringify(s);
    } catch {
      return String(s);
    }
  return String(s);
}), Tt = (e, r) => {
  const l = [];
  for (const i of Pt) {
    const s = e[i];
    s == null || s === "" || l.push({ key: i, label: ct[i] || i, raw: s, resolved: Mt(s, r) });
  }
  return l;
}, Dt = (e) => {
  switch (e.type) {
    case "javascript":
      return "The value returned by the script.";
    case "csv":
      return "An array of parsed CSV row objects.";
    case "merge":
      return "The merged source value.";
    case "if":
    case "while":
      return "A boolean condition result.";
    case "repeat":
      return "The current remaining iteration count.";
    case "foreach":
      return "The current collection item.";
    case "http_request":
      return "The parsed response body.";
    case "get_content":
      return "The selected element or page content.";
    case "solve_captcha":
      return "Captcha solve details.";
    case "wait_captcha":
      return "Captcha readiness details.";
    case "set":
      return "The value assigned to the variable.";
    default:
      return "This block has no direct output value.";
  }
}, ke = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, Lt = {
  success: "text-green-500",
  error: "text-red-500",
  skipped: "text-amber-500",
  stopped: "text-amber-500",
  not_reached: "text-[var(--app-text-muted)]"
}, It = ({
  configuration: e,
  action: r,
  actions: l,
  variables: i,
  canInsertVariable: s,
  isTesting: o,
  testError: n,
  testResult: c,
  onInsertVariable: f,
  onRunTest: d,
  onStopTest: b
}) => {
  const x = Tt(r, i), w = Ee(() => {
    const g = l.findIndex((N) => N.id === r.id);
    if (g < 1) return !1;
    const C = [];
    for (let N = 0; N < g; N++) {
      const L = l[N].type;
      Te(L) ? C.push(L) : L === "end" && C.pop();
    }
    return C.includes("foreach");
  }, [r.id, l]), S = Ee(() => c ? Object.entries(c.variables || {}).filter(([g, C]) => g !== "block.output" && !Object.is(i[g]?.value, C)) : [], [c, i]);
  return /* @__PURE__ */ a("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ a("div", { className: "min-w-0 space-y-6", children: [
      e,
      /* @__PURE__ */ a("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
          /* @__PURE__ */ t(v, { name: "input", className: "text-sm" }),
          " Inputs"
        ] }),
        /* @__PURE__ */ a("div", { className: "mt-3 space-y-2", children: [
          x.map((g) => {
            const N = !!c && Object.prototype.hasOwnProperty.call(c?.resolvedInputs || {}, g.key) ? c?.resolvedInputs[g.key] : g.resolved;
            return /* @__PURE__ */ a("div", { className: "rounded-xl bg-[var(--app-input)] px-3 py-2", children: [
              /* @__PURE__ */ t("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: g.label }),
              /* @__PURE__ */ t("pre", { className: "mt-1 whitespace-pre-wrap break-words font-mono text-[11px] text-[var(--app-text)]", children: ke(N) }),
              !Object.is(g.raw, N) && /* @__PURE__ */ a("div", { className: "mt-1 truncate font-mono text-[10px] text-[var(--app-text-faint)]", children: [
                "Raw: ",
                ke(g.raw)
              ] })
            ] }, g.key);
          }),
          x.length === 0 && /* @__PURE__ */ t("p", { className: "text-xs text-[var(--app-text-faint)]", children: "No configurable inputs." })
        ] }),
        /* @__PURE__ */ a("div", { className: "mt-4 border-t theme-border pt-4", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t(v, { name: "output", className: "text-sm" }),
            " Output"
          ] }),
          /* @__PURE__ */ t("p", { className: "mt-2 text-xs leading-5 text-[var(--app-text-muted)]", children: Dt(r) }),
          r.varName && /* @__PURE__ */ a("p", { className: "mt-2 font-mono text-[11px] text-blue-500", children: [
            "Stores in ",
            r.varName
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("aside", { className: "min-w-0 space-y-5", "aria-label": "Block context", children: [
      /* @__PURE__ */ t(je, { variables: i, canInsertVariable: s, loopVariablesAvailable: w, onInsertVariable: f }),
      /* @__PURE__ */ a("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", "aria-live": "polite", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t(v, { name: "science", className: "text-sm" }),
            " Test block"
          ] }),
          c && /* @__PURE__ */ t("span", { className: `text-[10px] font-bold tracking-wider ${Lt[c.status]}`, children: c.status.replace("_", " ") })
        ] }),
        /* @__PURE__ */ t("p", { className: "mt-2 text-[10px] leading-4 text-[var(--app-text-faint)]", children: "Runs preceding blocks in a temporary browser. Actions may affect the target site." }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: o ? b : d,
            "aria-busy": o,
            className: `mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${o ? "border border-red-400/30 bg-red-500/10 text-red-500 hover:bg-red-500/15" : "theme-accent-bg hover:opacity-90"}`,
            children: [
              /* @__PURE__ */ t(v, { name: o ? "stop" : "play_arrow", className: o ? "text-sm" : "text-base" }),
              o ? "Stop test" : "Run through block"
            ]
          }
        ),
        n && /* @__PURE__ */ t("p", { className: "mt-3 text-xs leading-5 text-red-500", children: n }),
        c?.status === "error" && c.error && /* @__PURE__ */ t("p", { className: "mt-3 rounded-xl border border-red-400/20 bg-red-500/[0.08] px-3 py-2 text-xs leading-5 text-red-500", children: c.error }),
        c && /* @__PURE__ */ a("div", { className: "mt-4 space-y-3 border-t theme-border pt-4", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center justify-between text-[10px] text-[var(--app-text-faint)]", children: [
            /* @__PURE__ */ t("span", { children: "Latest result" }),
            /* @__PURE__ */ a("span", { children: [
              c.durationMs,
              "ms"
            ] })
          ] }),
          /* @__PURE__ */ t("pre", { className: "max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[11px] leading-5 text-[var(--app-code-text)] custom-scrollbar", children: ke(c.output) }),
          S.length > 0 && /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ t("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: "Changed variables" }),
            /* @__PURE__ */ t("div", { className: "mt-2 space-y-1", children: S.map(([g, C]) => /* @__PURE__ */ a("div", { className: "flex gap-2 font-mono text-[10px] text-[var(--app-text-muted)]", children: [
              /* @__PURE__ */ t("span", { className: "text-blue-500", children: g }),
              /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 truncate text-right", children: ke(C) })
            ] }, g)) })
          ] }),
          c.screenshotUrl && /* @__PURE__ */ t("img", { src: c.screenshotUrl, alt: "Page after the block test", className: "w-full rounded-xl border theme-border object-cover" }),
          c.logs.length > 0 && /* @__PURE__ */ a("details", { className: "text-xs text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t("summary", { className: "cursor-pointer select-none", children: "Execution logs" }),
            /* @__PURE__ */ t("pre", { className: "mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[10px] leading-4 custom-scrollbar", children: c.logs.join(`
`) })
          ] })
        ] })
      ] })
    ] })
  ] });
}, Be = ({ icon: e, title: r, children: l, onClose: i }) => (te(() => {
  const s = (o) => {
    o.key === "Escape" && i();
  };
  return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
}, [i]), Ne(
  /* @__PURE__ */ t(
    "div",
    {
      className: "fixed inset-0 z-[190] flex items-center justify-center bg-black/65 p-3 backdrop-blur-lg sm:p-6 lg:p-10",
      onPointerDown: (s) => s.stopPropagation(),
      onPointerUp: (s) => s.stopPropagation(),
      onMouseDown: (s) => s.stopPropagation(),
      onMouseUp: (s) => s.stopPropagation(),
      onClick: (s) => s.stopPropagation(),
      children: /* @__PURE__ */ a(
        "section",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "config-modal-title",
          className: "theme-surface theme-text flex max-h-[calc(100vh-1.5rem)] min-h-[min(540px,calc(100vh-1.5rem))] w-full max-w-[1200px] flex-col gap-6 rounded-[28px] border theme-border-strong p-5 shadow-[0_32px_100px_rgba(0,0,0,0.55)] animate-in fade-in zoom-in-95 duration-200 sm:max-h-[90vh] sm:w-[92vw] sm:p-8 lg:p-10",
          onClick: (s) => s.stopPropagation(),
          children: [
            /* @__PURE__ */ a("header", { className: "flex shrink-0 items-center justify-between gap-4", children: [
              /* @__PURE__ */ a("div", { className: "flex min-w-0 items-center gap-3", children: [
                /* @__PURE__ */ t(v, { name: e, className: "shrink-0 text-base text-[var(--app-text-muted)]" }),
                /* @__PURE__ */ t("h2", { id: "config-modal-title", className: "truncate text-base font-semibold normal-case tracking-normal text-[var(--app-text)]", children: r })
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: "rounded-md p-1 text-[var(--app-text-faint)] transition-colors hover:text-[var(--app-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)]",
                  "aria-label": "Close",
                  title: "Close",
                  children: /* @__PURE__ */ t(v, { name: "close", className: "text-[12px]" })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-y-auto pr-1 custom-scrollbar sm:pr-3", children: l })
          ]
        }
      )
    }
  ),
  document.body
)), Rt = (e) => e instanceof HTMLElement && e.dataset.variableInsertionTarget === "true", ze = () => {
  const [e, r] = V(!1), l = H(null), i = q((o) => {
    if (Rt(o)) {
      if (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement)
        l.current = {
          target: o,
          start: o.selectionStart ?? o.value.length,
          end: o.selectionEnd ?? o.value.length
        };
      else {
        const n = window.getSelection(), c = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
        l.current = {
          target: o,
          range: c && o.contains(c.commonAncestorContainer) ? c.cloneRange() : void 0
        };
      }
      r(!0);
    }
  }, []), s = q((o) => {
    const n = l.current;
    if (!n) return;
    const c = `{$${o}}`, { target: f } = n;
    if (f.focus(), f instanceof HTMLInputElement || f instanceof HTMLTextAreaElement) {
      const w = n.start ?? f.value.length, S = n.end ?? w;
      f.setRangeText(c, w, S, "end"), f.dispatchEvent(new Event("input", { bubbles: !0 }));
      const g = w + c.length;
      f.setSelectionRange(g, g), l.current = { target: f, start: g, end: g };
      return;
    }
    const d = window.getSelection(), b = n.range || document.createRange();
    n.range || (b.selectNodeContents(f), b.collapse(!1)), d?.removeAllRanges(), d?.addRange(b), b.deleteContents();
    const x = document.createTextNode(c);
    b.insertNode(x), b.setStartAfter(x), b.collapse(!0), d?.removeAllRanges(), d?.addRange(b), l.current = { target: f, range: b.cloneRange() }, f.dispatchEvent(new Event("input", { bubbles: !0 }));
  }, []);
  return { canInsertVariable: e, captureInsertionSelection: i, insertVariable: s };
}, Ot = [
  { value: "Control", label: "Ctrl" },
  { value: "Shift", label: "Shift" },
  { value: "Alt", label: "Alt" },
  { value: "Meta", label: "Meta" }
], At = [
  "Enter",
  "Tab",
  "Escape",
  "Space",
  "Backspace",
  "Delete",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5"
].concat([...Array(10)].map((e, r) => `${r}`)).concat(Array.from({ length: 26 }, (e, r) => String.fromCharCode(65 + r))), Vt = [
  { value: "replace", label: "Replace Text" },
  { value: "append", label: "Append Text" }
], jt = (e) => {
  if (!e) return { modifiers: [], baseKey: "" };
  const r = e.split("+"), l = r.pop() || "";
  return { modifiers: r, baseKey: l };
}, We = (e, r) => [...e.filter(Boolean), r].filter(Boolean).join("+"), Bt = (e) => {
  const r = (e || "").trim(), l = r.match(/^\{\$([\w.]+)\}$/);
  return l ? l[1] : r;
}, _e = {
  string: [
    { value: "equals", label: "Equals" },
    { value: "not_equals", label: "Not equal" },
    { value: "contains", label: "Contains" },
    { value: "starts_with", label: "Starts with" },
    { value: "ends_with", label: "Ends with" },
    { value: "matches", label: "Matches regex" }
  ],
  number: [
    { value: "equals", label: "Equals" },
    { value: "not_equals", label: "Not equal" },
    { value: "gt", label: "Greater than" },
    { value: "gte", label: "Greater or equal" },
    { value: "lt", label: "Less than" },
    { value: "lte", label: "Less or equal" }
  ],
  boolean: [
    { value: "is_true", label: "Is true" },
    { value: "is_false", label: "Is false" }
  ],
  selector: [
    { value: "exists", label: "Exists" },
    { value: "not_exists", label: "Does not exist" }
  ]
}, zt = ["else", "end", "on_error", "do_nothing"], Ht = ({
  action: e,
  task: r,
  variables: l,
  availableTasks: i,
  selectorOptions: s,
  onUpdate: o,
  onAutoSave: n,
  onClose: c,
  onStartInspect: f,
  onCreateVariable: d,
  onDeleteVariable: b,
  testResult: x,
  onTestResult: w
}) => {
  const S = it.find((h) => h.type === e.type), g = S?.label || e.type, [C, N] = V(!1), [L, I] = V(null), { canInsertVariable: X, captureInsertionSelection: P, insertVariable: j } = ze(), y = H(null), m = H(null), M = H(0), [T, z] = V(!1), [K, ie] = V(""), [U, he] = V(!1), [ae, G] = V(null), [re, D] = V([]);
  te(() => {
    e.type === "upload" && fetch("/api/cabinets").then((h) => h.ok ? h.json() : null).then((h) => {
      h?.cabinets && D(h.cabinets);
    }).catch(() => {
    });
  }, [e.type]);
  const me = async () => {
    if (K.trim()) {
      he(!0), G(null);
      try {
        const h = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: K.trim() })
        }), $ = await h.json();
        if (!h.ok) throw new Error($.details ? `${$.error}: ${$.details}` : $.error || "Generation failed");
        o(e.id, { value: $.script }), z(!1), ie("");
      } catch (h) {
        G(h.message);
      } finally {
        he(!1);
      }
    }
  }, oe = q((h = !0) => {
    const $ = m.current;
    $ && fetch("/api/executions/stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ runId: $ })
    }).catch(() => {
    }), y.current?.abort(), y.current = null, m.current = null, N(!1), h && M.current && w({
      actionId: e.id,
      status: "stopped",
      durationMs: Date.now() - M.current,
      resolvedInputs: {},
      variables: Object.fromEntries(Object.entries(l).map(([k, _]) => [k, _.value])),
      logs: ["Block test stopped by user."],
      screenshotUrl: null,
      timestamp: Date.now()
    });
  }, [e.id, w, l]), se = q(async () => {
    if (C) return;
    const h = `block_test_${Date.now()}_${Math.floor(Math.random() * 1e3)}`, $ = new AbortController(), k = Object.fromEntries(
      Object.entries(l).map(([_, B]) => [_, B.value])
    );
    y.current = $, m.current = h, M.current = Date.now(), N(!0), I(null), n();
    try {
      const _ = await fetch("/api/tasks/test-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskSnapshot: r, targetActionId: e.id, variables: k, runId: h }),
        signal: $.signal
      });
      if (_.redirected && new URL(_.url).pathname === "/login")
        throw new Error("Your session expired. Sign in again, then retry the block test.");
      if (!_.headers.get("content-type")?.includes("application/json"))
        throw _.status === 404 ? new Error("The block-test endpoint is unavailable. Restart the backend and refresh this page.") : new Error(`The block-test endpoint returned an unexpected response (${_.status}).`);
      const A = await _.json();
      if (!_.ok) throw new Error(A.details || A.error || "Block test failed");
      w({
        actionId: e.id,
        status: A.status || "not_reached",
        durationMs: Number(A.durationMs) || 0,
        resolvedInputs: A.resolvedInputs || {},
        output: A.output,
        error: A.errorMessage,
        variables: A.variables || {},
        logs: Array.isArray(A.logs) ? A.logs : [],
        screenshotUrl: A.screenshotUrl || null,
        timestamp: Number(A.timestamp) || Date.now()
      });
    } catch (_) {
      _?.name !== "AbortError" && I(_?.message || "Block test failed");
    } finally {
      y.current === $ && (y.current = null, m.current = null, N(!1));
    }
  }, [e.id, C, n, w, r, l]), xe = q(() => {
    y.current && oe(!1), c();
  }, [c, oe]), de = H(oe);
  de.current = oe, te(() => () => {
    y.current && de.current(!1);
  }, []);
  const ge = H(/* @__PURE__ */ new Set());
  te(() => {
    const h = [
      e.selector,
      e.value,
      e.key,
      e.varName,
      e.conditionValue,
      e.headers,
      e.body
    ], $ = /\{\$([\w.]+)\}/g, k = /* @__PURE__ */ new Set();
    for (const _ of h) {
      if (!_) continue;
      $.lastIndex = 0;
      let B;
      for (; (B = $.exec(_)) !== null; ) {
        const A = B[1];
        A !== "now" && A !== "block.output" && k.add(A);
      }
    }
    for (const _ of k)
      _ in l || (d?.(_), ge.current.add(_));
    for (const _ of ge.current)
      !k.has(_) && l[_]?.autoCreated && (b?.(_), ge.current.delete(_));
  }, [e]);
  const R = (h, $) => /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1 block", children: h }),
    $
  ] }), O = (h) => /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all", children: h }), u = () => {
    if (zt.includes(e.type))
      return /* @__PURE__ */ t("p", { className: "text-xs text-gray-600 text-center py-4", children: "This block has no configurable options." });
    const { modifiers: h, baseKey: $ } = jt(e.key), k = Object.keys(l || {}), _ = Bt(e.conditionVar || ""), B = _ && l?.[_]?.type, A = e.conditionVarType || B || "string", ue = _e[A] || _e.string, J = e.conditionOp || ue[0].value, Q = e.method || "GET", E = ["POST", "PUT", "PATCH", "DELETE"], ce = ["type", "scroll", "foreach", "set", "merge", "solve_captcha", "upload"].includes(e.type);
    return /* @__PURE__ */ a("div", { className: ce ? "grid grid-cols-1 content-start items-start gap-x-8 gap-y-10 md:grid-cols-2" : "space-y-10", children: [
      (e.type === "click" || e.type === "type" || e.type === "hover" || e.type === "wait_selector" || e.type === "scroll" || e.type === "upload") && R(
        e.type === "scroll" ? "Selector (Optional)" : "Selector",
        /* @__PURE__ */ a("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all flex items-center gap-2", children: [
          /* @__PURE__ */ a("div", { className: "flex-1 min-w-0 flex flex-col gap-1", children: [
            /* @__PURE__ */ t(
              Y,
              {
                value: e.selector || "",
                onChange: (p) => o(e.id, { selector: p }),
                onBlur: () => n(),
                variables: l,
                placeholder: e.type === "scroll" ? ".scroll-container or leave empty" : e.type === "upload" ? "input[type=file] or .drop-zone" : ".btn-primary"
              }
            ),
            s && s.length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1 mt-1", children: s.map((p, Z) => /* @__PURE__ */ t(
              "button",
              {
                onClick: () => o(e.id, { selector: p }, !0),
                className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${e.selector === p ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                children: p
              },
              Z
            )) })
          ] }),
          f && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                xe(), f(e.id);
              },
              disabled: e.disabled,
              className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
              title: "Pick Selector in Browser",
              "aria-label": "Pick Selector in Browser",
              children: /* @__PURE__ */ t(v, { name: "my_location", className: "text-lg" })
            }
          )
        ] })
      ),
      e.type === "upload" && /* @__PURE__ */ a(ee, { children: [
        R("Cabinet", /* @__PURE__ */ t(
          ne,
          {
            value: e.cabinetId || "",
            onChange: (p) => o(e.id, { cabinetId: p }, !0),
            options: re.length ? [{ value: "", label: "Default cabinet" }, ...re.map((p) => ({ value: p.id, label: p.name, icon: "inventory_2" }))] : [{ value: "", label: "Loading cabinets…", disabled: !0 }],
            ariaLabel: "Upload cabinet"
          }
        )),
        R("Mark as uploaded", /* @__PURE__ */ a("label", { className: "flex items-center gap-2 text-xs text-white/80", children: [
          /* @__PURE__ */ t("input", { type: "checkbox", checked: !!e.markAsUploaded, onChange: (p) => o(e.id, { markAsUploaded: p.target.checked }, !0), className: "h-4 w-4" }),
          " Mark after the page accepts this item"
        ] }))
      ] }),
      e.type === "scroll" && R(
        "Scroll Speed (ms)",
        O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.key || "",
              onChange: (p) => o(e.id, { key: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "500"
            }
          )
        )
      ),
      (e.type === "navigate" || e.type === "type" || e.type === "wait" || e.type === "wait_selector" || e.type === "javascript" || e.type === "csv") && (e.type === "javascript" ? /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
          /* @__PURE__ */ a(
            "button",
            {
              onClick: () => {
                z((p) => !p), G(null);
              },
              className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
              title: "Generate with AI",
              children: [
                /* @__PURE__ */ t(v, { name: "auto_awesome", className: "text-sm" }),
                "Generate"
              ]
            }
          )
        ] }),
        T && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              type: "text",
              value: K,
              onChange: (p) => ie(p.target.value),
              onKeyDown: (p) => {
                p.key === "Enter" && !U && me();
              },
              placeholder: "e.g. extract all article titles and links",
              className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
            }
          ),
          ae && /* @__PURE__ */ t("p", { className: "text-xs text-red-400", children: ae }),
          /* @__PURE__ */ a("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ t("button", { onClick: () => {
              z(!1), G(null);
            }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
            /* @__PURE__ */ a(
              "button",
              {
                onClick: me,
                disabled: U || !K.trim(),
                className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                children: [
                  U && /* @__PURE__ */ t(v, { name: "autorenew", className: "text-xs animate-spin" }),
                  U ? "Generating…" : "Generate"
                ]
              }
            )
          ] })
        ] }),
        O(
          /* @__PURE__ */ t(
            ye,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              language: "javascript",
              variables: l,
              className: "min-h-[120px]",
              placeholder: "return document.title"
            }
          )
        )
      ] }) : R(
        e.type === "navigate" ? "URL" : e.type === "type" ? "Content" : e.type === "wait" ? "Seconds" : e.type === "wait_selector" ? "Timeout (Sec)" : "CSV Input",
        O(
          e.type === "csv" ? /* @__PURE__ */ t(
            ye,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              language: "plain",
              variables: l,
              className: "min-h-[120px]",
              placeholder: `name,age
Ada,31`
            }
          ) : /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: e.type === "navigate" ? "https://example.com" : e.type === "type" ? "Search keywords" : e.type === "wait" ? "3" : e.type === "wait_selector" ? "10" : "400"
            }
          )
        )
      )),
      e.type === "type" && R(
        "Mode",
        O(
          /* @__PURE__ */ t(
            ne,
            {
              value: e.typeMode || "replace",
              onChange: (p) => o(e.id, { typeMode: p }, !0),
              options: Vt,
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Typing mode"
            }
          )
        )
      ),
      e.type === "screenshot" && R(
        "Label (Optional)",
        O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "checkout-step"
            }
          )
        )
      ),
      e.type === "press" && /* @__PURE__ */ a("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Key" }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3 text-xs text-white", children: Ot.map((p) => /* @__PURE__ */ a("label", { className: "inline-flex items-center space-x-1", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              checked: h.includes(p.value),
              onChange: (Z) => {
                const le = Z.target.checked ? [...h, p.value] : h.filter((pe) => pe !== p.value);
                o(e.id, { key: We(le, $) }, !0);
              },
              className: "h-3 w-3 rounded border border-white/30 bg-black/80"
            }
          ),
          /* @__PURE__ */ t("span", { className: "text-xs text-white/70", children: p.label })
        ] }, p.value)) }),
        O(
          /* @__PURE__ */ t(
            ne,
            {
              value: $,
              onChange: (p) => o(e.id, { key: We(h, p) }, !0),
              options: [{ value: "", label: "Select key" }, ...At.map((p) => ({ value: p, label: p }))],
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Press key"
            }
          )
        )
      ] }),
      (e.type === "if" || e.type === "while") && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Condition" }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: A === "selector" ? "Selector" : "Variable" }),
            A === "selector" ? /* @__PURE__ */ a("div", { className: "bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30 transition-all flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  value: e.selector || "",
                  onChange: (p) => o(e.id, { selector: p.target.value }),
                  onBlur: () => n(),
                  placeholder: ".verified-badge",
                  className: "flex-1 min-w-0 bg-transparent text-xs font-mono text-white focus:outline-none"
                }
              ),
              f && /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => {
                    xe(), f(e.id);
                  },
                  disabled: e.disabled,
                  className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
                  title: "Pick Selector in Browser",
                  "aria-label": "Pick Selector in Browser",
                  children: /* @__PURE__ */ t(v, { name: "my_location", className: "text-lg" })
                }
              )
            ] }) : /* @__PURE__ */ t("div", { className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30", children: /* @__PURE__ */ t(
              wt,
              {
                value: e.conditionVar || "",
                onChange: (p) => o(e.id, { conditionVar: p }),
                options: k,
                placeholder: "variable name",
                ariaLabel: "Condition variable"
              }
            ) })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Type" }),
            /* @__PURE__ */ t(
              ne,
              {
                value: A,
                onChange: (p) => {
                  const Z = _e[p] || _e.string;
                  o(e.id, {
                    conditionVarType: p,
                    conditionOp: Z[0].value,
                    conditionValue: p === "boolean" || p === "selector" ? "" : e.conditionValue || ""
                  }, !0);
                },
                options: [
                  { value: "string", label: "String", icon: "text_fields" },
                  { value: "number", label: "Number", icon: "numbers" },
                  { value: "boolean", label: "Boolean", icon: "toggle_on" },
                  { value: "selector", label: "Selector", icon: "ads_click" }
                ],
                ariaLabel: "Condition variable type"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Relation" }),
            /* @__PURE__ */ t(
              ne,
              {
                value: J,
                onChange: (p) => o(e.id, { conditionOp: p }, !0),
                options: ue,
                ariaLabel: "Condition relation"
              }
            )
          ] })
        ] }),
        A !== "boolean" && A !== "selector" && /* @__PURE__ */ a("div", { className: "space-y-1", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Value" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: A === "number" ? "number" : "text",
              value: e.conditionValue || "",
              onChange: (p) => o(e.id, { conditionValue: p.target.value }),
              onBlur: () => n(),
              placeholder: A === "number" ? "0" : "value",
              "data-variable-insertion-target": A === "number" ? void 0 : "true",
              className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30"
            }
          )
        ] })
      ] }),
      e.type === "repeat" && R(
        "Times",
        O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "3"
            }
          )
        )
      ),
      e.type === "foreach" && /* @__PURE__ */ a(ee, { children: [
        R("Selector (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.selector || "",
              onChange: (p) => o(e.id, { selector: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: ".list-item"
            }
          )
        )),
        R("Variable (Array Name)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "items"
            }
          )
        ))
      ] }),
      e.type === "set" && /* @__PURE__ */ a(ee, { children: [
        R("Variable Name", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "status"
            }
          )
        )),
        R("Value", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "ready"
            }
          )
        ))
      ] }),
      e.type === "merge" && /* @__PURE__ */ a(ee, { children: [
        R("Sources", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "items, extraItems, {$block.output}"
            }
          )
        )),
        R("Target Variable (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "allItems"
            }
          )
        ))
      ] }),
      e.type === "stop" && R(
        "Outcome",
        /* @__PURE__ */ t(
          ne,
          {
            value: e.value || "success",
            onChange: (p) => o(e.id, { value: p }, !0),
            options: [
              { value: "success", label: "Success", icon: "check_circle", iconClassName: "text-green-400" },
              { value: "error", label: "Error", icon: "error", iconClassName: "text-red-400" }
            ],
            ariaLabel: "Stop outcome"
          }
        )
      ),
      e.type === "start" && R(
        "Task",
        /* @__PURE__ */ t(
          ne,
          {
            value: e.value || "",
            onChange: (p) => o(e.id, { value: p }, !0),
            options: i.length ? [{ value: "", label: "Select task", disabled: !0 }, ...i.map((p) => ({ value: p.id || "", label: p.name || p.id || "Untitled" }))] : [{ value: "", label: "No other tasks", disabled: !0 }],
            placeholder: "Select task",
            ariaLabel: "Task to start"
          }
        )
      ),
      e.type === "wait_downloads" && R(
        "Max Wait (Sec, Optional)",
        O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.value || "",
              onChange: (p) => o(e.id, { value: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "30"
            }
          )
        )
      ),
      e.type === "http_request" && /* @__PURE__ */ a(ee, { children: [
        /* @__PURE__ */ a("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Method" }),
            /* @__PURE__ */ t(
              ne,
              {
                value: Q,
                onChange: (p) => o(e.id, { method: p }, !0),
                options: [
                  { value: "GET", label: "GET", icon: "download" },
                  { value: "POST", label: "POST", icon: "upload" },
                  { value: "PUT", label: "PUT", icon: "published_with_changes" },
                  { value: "PATCH", label: "PATCH", icon: "edit" },
                  { value: "DELETE", label: "DELETE", icon: "delete", iconClassName: "text-red-400" }
                ],
                ariaLabel: "HTTP method"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "URL" }),
            O(
              /* @__PURE__ */ t(
                Y,
                {
                  value: e.value || "",
                  onChange: (p) => o(e.id, { value: p }),
                  onBlur: () => n(),
                  variables: l,
                  placeholder: "https://api.example.com/data"
                }
              )
            )
          ] })
        ] }),
        R("Headers (JSON, Optional)", O(
          /* @__PURE__ */ t(
            ye,
            {
              value: e.headers || "",
              onChange: (p) => o(e.id, { headers: p }),
              onBlur: () => n(),
              language: "json",
              variables: l,
              className: "min-h-[56px]",
              placeholder: '{"Authorization": "Bearer {$token}"}'
            }
          )
        )),
        E.includes(Q) && R("Body", O(
          /* @__PURE__ */ t(
            ye,
            {
              value: e.body || "",
              onChange: (p) => o(e.id, { body: p }),
              onBlur: () => n(),
              language: "json",
              variables: l,
              className: "min-h-[80px]",
              placeholder: '{"key": "value"}'
            }
          )
        )),
        R("Store Response In Variable (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "apiResponse"
            }
          )
        ))
      ] }),
      e.type === "get_content" && /* @__PURE__ */ a(ee, { children: [
        R("Selector (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.selector || "",
              onChange: (p) => o(e.id, { selector: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: ".article-body or leave empty for full page"
            }
          )
        )),
        R("Store In Variable (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "pageContent"
            }
          )
        ))
      ] }),
      (e.type === "solve_captcha" || e.type === "wait_captcha") && /* @__PURE__ */ a(ee, { children: [
        e.type === "wait_captcha" && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Waits until the captcha control is initialized, visible, enabled, and stable. This block does not click or solve it." }),
        /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Captcha Type (Optional)" }),
          /* @__PURE__ */ t(
            ne,
            {
              value: e.captchaType || "",
              onChange: (p) => o(e.id, { captchaType: p || void 0 }, !0),
              options: [
                { value: "", label: "Auto-detect", icon: "search" },
                { value: "recaptcha_v2", label: "reCAPTCHA v2", iconUrl: "https://www.google.com/s2/favicons?domain=google.com&sz=64", iconImageClassName: "grayscale opacity-70" },
                { value: "recaptcha_v3", label: "reCAPTCHA v3", iconUrl: "https://www.google.com/s2/favicons?domain=google.com&sz=64", iconImageClassName: "grayscale opacity-70" },
                { value: "hcaptcha", label: "hCaptcha", iconUrl: "https://www.google.com/s2/favicons?domain=hcaptcha.com&sz=64", iconImageClassName: "grayscale opacity-70" },
                { value: "turnstile", label: "Cloudflare Turnstile", iconUrl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64", iconImageClassName: "grayscale opacity-70" }
              ],
              ariaLabel: "Captcha type"
            }
          )
        ] }),
        R("Container Selector (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.selector || "",
              onChange: (p) => o(e.id, { selector: p }),
              onBlur: () => n(),
              variables: l,
              placeholder: "#recaptcha-container or leave empty for full page"
            }
          )
        )),
        R("Timeout (Seconds)", O(
          /* @__PURE__ */ t(
            "input",
            {
              type: "number",
              min: "1",
              step: "1",
              value: Math.max(1, Math.round((e.timeout || 12e4) / 1e3)),
              onChange: (p) => o(e.id, { timeout: Math.max(1, Number(p.target.value) || 120) * 1e3 }),
              onBlur: () => n(),
              className: "w-full bg-transparent border-none px-0 py-0 text-xs text-white focus:outline-none"
            }
          )
        )),
        R("Store Result In Variable (Optional)", O(
          /* @__PURE__ */ t(
            Y,
            {
              value: e.varName || "",
              onChange: (p) => o(e.id, { varName: p }),
              onBlur: () => n(),
              variables: l,
              allowVariableInsertion: !1,
              placeholder: "captchaResult"
            }
          )
        ))
      ] })
    ] });
  };
  return /* @__PURE__ */ t(Be, { icon: S?.icon || "tune", title: g, onClose: xe, children: /* @__PURE__ */ t(
    It,
    {
      configuration: /* @__PURE__ */ t(
        "div",
        {
          className: "min-w-0",
          onFocusCapture: (h) => P(h.target),
          onSelectCapture: (h) => P(h.target),
          onKeyUpCapture: (h) => P(h.target),
          onPointerUpCapture: (h) => P(h.target),
          children: u()
        }
      ),
      action: e,
      actions: r.actions,
      variables: l,
      canInsertVariable: X,
      isTesting: C,
      testError: L,
      testResult: x,
      onInsertVariable: j,
      onRunTest: se,
      onStopTest: () => oe(!0)
    }
  ) });
}, Yt = (e) => {
  let r = "";
  if (e.type === "click" || e.type === "hover" || e.type === "scroll" || e.type === "wait_selector")
    r = e.selector || "";
  else if (e.type === "type" || e.type === "navigate" || e.type === "wait" || e.type === "javascript" || e.type === "repeat" || e.type === "start" || e.type === "screenshot" || e.type === "wait_downloads" || e.type === "stop" || e.type === "upload")
    r = e.value || "";
  else if (e.type === "set" || e.type === "foreach" || e.type === "merge")
    r = e.varName || "";
  else if (e.type === "press")
    r = e.key || "";
  else if (e.type === "if" || e.type === "while")
    r = e.conditionVar || "";
  else if (e.type === "http_request") {
    const l = e.method || "GET";
    r = e.value ? `[${l}] ${e.value}` : l;
  } else e.type === "get_content" ? r = e.varName ? `→ ${e.varName}` : e.selector || "" : (e.type === "solve_captcha" || e.type === "wait_captcha") && (r = e.captchaType || "Auto-detect");
  return r.trim();
}, Kt = (e) => {
  const r = "text-[12px]";
  return e === "if" || e === "else" ? /* @__PURE__ */ t(v, { name: "call_split", className: `${r} text-white` }) : e === "end" ? /* @__PURE__ */ t(v, { name: "subdirectory_arrow_right", className: `${r} text-gray-500` }) : e === "while" || e === "repeat" ? /* @__PURE__ */ t(v, { name: "repeat", className: `${r} text-white` }) : e === "foreach" ? /* @__PURE__ */ t(v, { name: "list", className: `${r} text-white` }) : e === "on_error" ? /* @__PURE__ */ t(v, { name: "warning", className: `${r} text-red-400` }) : e === "set" ? /* @__PURE__ */ t(v, { name: "data_object", className: `${r} text-white` }) : e === "stop" ? /* @__PURE__ */ t(v, { name: "stop", className: `${r} text-white` }) : e === "click" ? /* @__PURE__ */ t(v, { name: "ads_click", className: `${r} text-white` }) : e === "type" ? /* @__PURE__ */ t(v, { name: "text_format", className: `${r} text-white` }) : e === "hover" ? /* @__PURE__ */ t(v, { name: "my_location", className: `${r} text-white` }) : e === "press" ? /* @__PURE__ */ t(v, { name: "keyboard", className: `${r} text-white` }) : e === "wait" ? /* @__PURE__ */ t(v, { name: "schedule", className: `${r} text-white` }) : e === "wait_selector" ? /* @__PURE__ */ t(v, { name: "schedule", className: `${r} text-white` }) : e === "scroll" ? /* @__PURE__ */ t(v, { name: "swap_vert", className: `${r} text-white` }) : e === "javascript" ? /* @__PURE__ */ t(v, { name: "code", className: `${r} text-white` }) : e === "csv" ? /* @__PURE__ */ t(v, { name: "csv", className: `${r} text-white` }) : e === "upload" ? /* @__PURE__ */ t(v, { name: "upload_file", className: `${r} text-white` }) : e === "finalize_uploads" ? /* @__PURE__ */ t(v, { name: "task_alt", className: `${r} text-white` }) : e === "merge" ? /* @__PURE__ */ t(v, { name: "layers", className: `${r} text-white` }) : e === "screenshot" ? /* @__PURE__ */ t(v, { name: "photo_camera", className: `${r} text-white` }) : e === "start" ? /* @__PURE__ */ t(v, { name: "play_circle", className: `${r} text-white` }) : e === "navigate" ? /* @__PURE__ */ t(v, { name: "navigation", className: `${r} text-white` }) : e === "http_request" ? /* @__PURE__ */ t(v, { name: "language", className: `${r} text-white` }) : e === "wait_downloads" ? /* @__PURE__ */ t(v, { name: "download", className: `${r} text-white` }) : e === "get_content" ? /* @__PURE__ */ t(v, { name: "article", className: `${r} text-white` }) : e === "solve_captcha" ? /* @__PURE__ */ t(v, { name: "verified_user", className: `${r} text-white` }) : e === "wait_captcha" ? /* @__PURE__ */ t(v, { name: "hourglass_top", className: `${r} text-white` }) : e === "do_nothing" ? /* @__PURE__ */ t(v, { name: "block", className: `${r} text-white/50` }) : /* @__PURE__ */ t("span", { className: "text-xs text-white/20", children: "|" });
}, Ft = ["else", "end", "on_error", "do_nothing", "finalize_uploads"], Re = tt.memo(({
  action: e,
  task: r,
  index: l,
  status: i,
  isDragging: s,
  isDragOver: o,
  translateY: n,
  variables: c,
  availableTasks: f,
  onUpdate: d,
  onAutoSave: b,
  onOpenPalette: x,
  onOpenContextMenu: w,
  onPointerDown: S,
  dragTransformY: g,
  onStartInspect: C,
  onCreateVariable: N,
  onDeleteVariable: L,
  isSelected: I,
  selectorOptions: X,
  autoOpenConfig: P,
  onCloseConfigModal: j,
  testResult: y,
  onTestResult: m
}) => {
  const [M, T] = V(!1), z = H(null), K = H(null), ie = i === "running" ? "border-yellow-400/60" : i === "success" ? "border-green-400/60" : i === "error" ? "border-red-400/70" : i === "skipped" ? "border-gray-500/40" : "", U = (D) => !D || !(D instanceof HTMLElement) ? !1 : !!D.closest('input, textarea, select, button, a, [contenteditable="true"], [data-no-drag="true"], [role="button"]'), he = s ? `translateY(${g || 0}px)` : n ? `translateY(${n}px)` : void 0, ae = Yt(e), G = !Ft.includes(e.type);
  te(() => {
    P && G && T(!0);
  }, [P, G]), te(() => () => {
    K.current && (clearTimeout(K.current), K.current = null);
  }, []);
  const re = () => {
    if (K.current) {
      clearTimeout(K.current), K.current = null, G && T(!0);
      return;
    }
    K.current = setTimeout(() => {
      K.current = null, x(e.id);
    }, 180);
  };
  return /* @__PURE__ */ a(ee, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        id: `action-${e.id}`,
        "data-action-id": e.id,
        onPointerDown: (D) => {
          U(D.target) || D.button === 0 && (z.current = { x: D.clientX, y: D.clientY }, D.stopPropagation(), S(D, e.id, l));
        },
        onDoubleClick: (D) => {
          G && (U(D.target) || (D.stopPropagation(), T(!0)));
        },
        onContextMenu: (D) => w(D, e.id),
        className: `bg-black min-w-[280px] w-full max-w-sm mx-auto border p-5 rounded-2xl group/item relative transition-[transform,box-shadow,opacity,filter,background-color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform select-none touch-none ${ie || (I ? "border-blue-500 ring-2 ring-blue-500/50" : "border-white/20")} ${s ? "ring-2 ring-white/40 scale-[1.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)] opacity-85 z-20 mx-auto" : ""} ${o && !s ? "ring-2 ring-blue-400/60 bg-blue-500/5" : ""} ${e.disabled ? "opacity-40 grayscale" : ""}`,
        style: { transform: he },
        children: /* @__PURE__ */ a("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/20 font-mono tracking-tighter shrink-0", children: (l + 1).toString().padStart(2, "0") }),
          /* @__PURE__ */ t("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: Kt(e.type) }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: (D) => {
                D.stopPropagation(), re();
              },
              onDoubleClick: (D) => {
                G && (U(D.target) || (D.preventDefault(), D.stopPropagation(), T(!0)));
              },
              className: "action-type-select text-xs font-bold tracking-[0.2em] text-white focus:outline-none cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-white/50 shrink-0",
              "aria-label": `Change action type: ${e.type}`,
              children: it.find((D) => D.type === e.type)?.label || e.type
            }
          ),
          ae && /* @__PURE__ */ t("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: ae }),
          G && /* @__PURE__ */ t(
            "button",
            {
              "data-no-drag": "true",
              onClick: (D) => {
                D.stopPropagation(), T(!0);
              },
              className: "ml-auto shrink-0 text-white/20 hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded",
              "aria-label": "Configure block",
              title: "Configure block",
              children: /* @__PURE__ */ t(v, { name: "tune", className: "text-sm" })
            }
          )
        ] })
      }
    ),
    M && /* @__PURE__ */ t(
      Ht,
      {
        action: e,
        task: r,
        variables: c,
        availableTasks: f,
        selectorOptions: X,
        onUpdate: d,
        onAutoSave: b,
        onClose: () => {
          T(!1), j?.();
        },
        onStartInspect: C,
        onCreateVariable: N,
        onDeleteVariable: L,
        testResult: y,
        onTestResult: m
      }
    )
  ] });
}), Xt = async (e) => {
  try {
    if (navigator.clipboard && window.isSecureContext)
      return await navigator.clipboard.writeText(e), !0;
    {
      const r = document.createElement("textarea");
      r.value = e, r.style.position = "fixed", r.style.left = "-999999px", r.style.top = "-999999px", document.body.appendChild(r), r.focus(), r.select();
      const l = document.execCommand("copy");
      return r.remove(), l;
    }
  } catch (r) {
    return console.error("Copy failed:", r), !1;
  }
}, Gt = ({
  text: e,
  label: r,
  className: l,
  iconClassName: i,
  onCopy: s,
  title: o,
  disabled: n = !1
}) => {
  const [c, f] = V(!1), d = async (g) => {
    if (g.stopPropagation(), n) return;
    await Xt(e) && (f(!0), s?.(), setTimeout(() => f(!1), 2e3));
  }, b = "flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs font-bold tracking-widest disabled:opacity-50 disabled:cursor-not-allowed", x = "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50", w = l ? `${l} ${x}` : `${b} ${x}`, S = c ? w.replace("border-white/10", "border-green-400 text-green-400") : w;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: d,
      disabled: n,
      className: S,
      title: o || (c ? "Copied" : "Copy"),
      type: "button",
      "aria-label": r || o || "Copy to clipboard",
      children: [
        c ? /* @__PURE__ */ t(
          v,
          {
            name: "check",
            className: `${i || "text-sm"} text-green-400`
          }
        ) : /* @__PURE__ */ t(
          v,
          {
            name: "content_copy",
            className: i || "text-sm"
          }
        ),
        r && /* @__PURE__ */ t("span", { children: c ? "Copied" : r })
      ]
    }
  );
}, qe = {
  default: {
    bg: "rgba(255,255,255,0.07)",
    border: "rgba(255,255,255,0.18)",
    header: "rgba(255,255,255,0.10)"
  },
  yellow: {
    bg: "rgba(250,204,21,0.14)",
    border: "rgba(250,204,21,0.40)",
    header: "rgba(250,204,21,0.20)"
  },
  pink: {
    bg: "rgba(236,72,153,0.14)",
    border: "rgba(236,72,153,0.40)",
    header: "rgba(236,72,153,0.20)"
  },
  green: {
    bg: "rgba(34,197,94,0.14)",
    border: "rgba(34,197,94,0.40)",
    header: "rgba(34,197,94,0.20)"
  },
  purple: {
    bg: "rgba(168,85,247,0.14)",
    border: "rgba(168,85,247,0.40)",
    header: "rgba(168,85,247,0.20)"
  }
}, Je = {
  default: "#ffffff",
  yellow: "#facc15",
  pink: "#ec4899",
  green: "#22c55e",
  purple: "#a855f7"
}, Wt = ["default", "yellow", "pink", "green", "purple"], qt = ({ note: e, canvasScale: r, isSelected: l, onUpdate: i, onDelete: s, onDuplicate: o }) => {
  const [n, c] = V(e.content === ""), [f, d] = V(e.content), [b, x] = V(null), w = H(null), S = H(null), g = H(null), C = qe[e.color] || qe.default;
  te(() => {
    n && w.current && (w.current.focus(), w.current.select());
  }, [n]);
  const N = q((m) => {
    m.stopPropagation(), m.preventDefault(), S.current = {
      startX: m.clientX,
      startY: m.clientY,
      origX: e.x,
      origY: e.y
    }, m.target.setPointerCapture(m.pointerId);
  }, [e.x, e.y]), L = q((m) => {
    if (m.stopPropagation(), !S.current) return;
    const M = (m.clientX - S.current.startX) / r, T = (m.clientY - S.current.startY) / r;
    i(e.id, {
      x: Math.round(S.current.origX + M),
      y: Math.round(S.current.origY + T)
    });
  }, [r, e.id, i]), I = q((m) => {
    m.stopPropagation(), S.current = null;
  }, []), X = q((m) => {
    m.stopPropagation(), m.preventDefault(), g.current = {
      startX: m.clientX,
      startY: m.clientY,
      origW: e.width,
      origH: e.height
    }, m.target.setPointerCapture(m.pointerId);
  }, [e.width, e.height]), P = q((m) => {
    if (m.stopPropagation(), !g.current) return;
    const M = (m.clientX - g.current.startX) / r, T = (m.clientY - g.current.startY) / r;
    i(e.id, {
      width: Math.round(Math.max(160, g.current.origW + M)),
      height: Math.round(Math.max(100, g.current.origH + T))
    });
  }, [r, e.id, i]), j = q((m) => {
    m.stopPropagation(), g.current = null;
  }, []), y = q(() => {
    i(e.id, { content: f }), c(!1);
  }, [e.id, f, i]);
  return /* @__PURE__ */ a(ee, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        "data-sticky-note-id": e.id,
        className: "absolute select-none group",
        style: {
          left: e.x,
          top: e.y,
          width: e.width,
          minHeight: e.height,
          zIndex: 5
        },
        onPointerDown: (m) => m.stopPropagation(),
        onContextMenu: (m) => {
          m.preventDefault(), m.stopPropagation();
          const M = 8, T = 200, z = 164, K = Math.min(Math.max(m.clientX + 12, M), window.innerWidth - T - M), ie = Math.min(Math.max(m.clientY + 12, M), window.innerHeight - z - M);
          x({ x: K, y: ie });
        },
        children: /* @__PURE__ */ a(
          "div",
          {
            className: "w-full min-h-full rounded-xl flex flex-col overflow-hidden",
            style: {
              background: C.bg,
              border: `1px solid ${l ? "rgba(96,165,250,0.8)" : C.border}`,
              boxShadow: l ? "0 0 0 2px rgba(59,130,246,0.4), 0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.4)"
            },
            children: [
              /* @__PURE__ */ a(
                "div",
                {
                  className: "flex items-center justify-between px-2.5 py-1.5 cursor-grab active:cursor-grabbing shrink-0",
                  style: { background: C.header },
                  onPointerDown: N,
                  onPointerMove: L,
                  onPointerUp: I,
                  onPointerCancel: I,
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-1", style: { opacity: n ? 1 : 0, pointerEvents: n ? "auto" : "none", transition: "opacity 0.15s" }, children: Wt.map((m) => /* @__PURE__ */ t(
                      "button",
                      {
                        className: "w-3 h-3 rounded-full transition-all hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        style: {
                          background: Je[m],
                          opacity: e.color === m ? 1 : 0.35,
                          outline: e.color === m ? `1.5px solid ${Je[m]}` : "none",
                          outlineOffset: "1px"
                        },
                        onMouseDown: (M) => {
                          M.preventDefault(), M.stopPropagation();
                        },
                        onPointerDown: (M) => M.stopPropagation(),
                        onClick: (M) => {
                          M.stopPropagation(), i(e.id, { color: m });
                        },
                        title: `Set color to ${m}`,
                        "aria-label": `Set color to ${m}`
                      },
                      m
                    )) }),
                    /* @__PURE__ */ a("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200", children: [
                      /* @__PURE__ */ t(
                        "button",
                        {
                          className: "w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          onPointerDown: (m) => m.stopPropagation(),
                          onClick: (m) => {
                            m.stopPropagation(), c(!0), d(e.content);
                          },
                          title: "Edit note",
                          "aria-label": "Edit note",
                          children: /* @__PURE__ */ t(v, { name: "edit", className: "text-[14px]" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        Gt,
                        {
                          text: e.content,
                          title: "Copy note",
                          className: "w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          iconClassName: "text-[14px]"
                        }
                      ),
                      /* @__PURE__ */ t(
                        "button",
                        {
                          className: "w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-red-400 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          onPointerDown: (m) => m.stopPropagation(),
                          onClick: (m) => {
                            m.stopPropagation(), s(e.id);
                          },
                          title: "Delete note",
                          "aria-label": "Delete note",
                          children: /* @__PURE__ */ t(v, { name: "close", className: "text-[14px]" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: "flex-1 min-h-0 custom-scrollbar",
                  onDoubleClick: () => {
                    n || (c(!0), d(e.content));
                  },
                  children: n ? /* @__PURE__ */ t(
                    "textarea",
                    {
                      ref: w,
                      value: f,
                      onChange: (m) => d(m.target.value),
                      onBlur: y,
                      onKeyDown: (m) => {
                        m.key === "Escape" && y(), (m.ctrlKey || m.metaKey) && m.key === "Enter" && y(), m.stopPropagation();
                      },
                      className: "w-full min-h-[120px] resize-none bg-transparent px-3 py-2 text-xs text-white/80 placeholder-white/20 focus:outline-none font-mono leading-relaxed",
                      placeholder: "Write markdown here...",
                      onClick: (m) => m.stopPropagation()
                    }
                  ) : /* @__PURE__ */ t(
                    "div",
                    {
                      className: "px-3 py-2 text-xs text-white/75 leading-relaxed cursor-text custom-scrollbar font-mono whitespace-pre-wrap",
                      children: e.content || /* @__PURE__ */ t("span", { className: "text-white/20 italic", children: "Double-click to edit..." })
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute bottom-0 right-0 w-5 h-5 cursor-se-resize flex items-end justify-end pb-1 pr-1",
                  onPointerDown: X,
                  onPointerMove: P,
                  onPointerUp: j,
                  onPointerCancel: j,
                  children: /* @__PURE__ */ t("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", children: /* @__PURE__ */ t("path", { d: "M7 1L1 7M7 4L4 7", stroke: "rgba(255,255,255,0.25)", strokeWidth: "1.5", strokeLinecap: "round" }) })
                }
              )
            ]
          }
        )
      }
    ),
    b && Ne(
      /* @__PURE__ */ a(ee, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "fixed inset-0 z-40",
            onClick: () => x(null),
            onContextMenu: (m) => {
              m.preventDefault(), x(null);
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "fixed z-50 w-[200px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
            style: { left: b.x, top: b.y },
            children: [
              /* @__PURE__ */ a(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    o(e), x(null);
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "material-symbols-outlined text-white/40", style: { fontSize: "14px" }, children: "copy_all" }),
                    "Duplicate"
                  ]
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(e.content).catch(() => {
                    }), x(null);
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "material-symbols-outlined text-white/40", style: { fontSize: "14px" }, children: "content_copy" }),
                    "Copy"
                  ]
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(e.content).catch(() => {
                    }), s(e.id), x(null);
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "material-symbols-outlined text-white/40", style: { fontSize: "14px" }, children: "content_cut" }),
                    "Cut"
                  ]
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-red-400 flex items-center gap-2.5",
                  onClick: () => {
                    s(e.id), x(null);
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "material-symbols-outlined text-red-400/70", style: { fontSize: "14px" }, children: "delete" }),
                    "Delete"
                  ]
                }
              )
            ]
          }
        )
      ] }),
      document.body
    )
  ] });
}, Ue = (e) => {
  switch (e.attribute) {
    case "html":
      return "el.innerHTML";
    case "value":
      return "(el.value !== undefined ? el.value : el.textContent.trim())";
    case "attr":
      return `el.getAttribute(${JSON.stringify(e.attrName || "")})`;
    case "image":
      return `(() => {
        const src = el.currentSrc || el.getAttribute('src') || el.getAttribute('data-src') || el.getAttribute('data-lazy-src') || el.getAttribute('data-original');
        if (src) return new URL(src, location.href).href;
        const srcset = el.getAttribute('srcset');
        if (srcset) {
          const candidates = srcset.split(',').map(s => s.trim().split(' ')[0]).filter(Boolean);
          if (candidates.length) return new URL(candidates[candidates.length - 1], location.href).href;
        }
        const bg = getComputedStyle(el).backgroundImage;
        const match = bg && bg.match(/url\\((['"]?)(.*?)\\1\\)/);
        if (match && match[2]) return new URL(match[2], location.href).href;
        return null;
      })()`;
    case "link":
      return `(() => {
        const href = el.getAttribute('href') || el.getAttribute('src') || el.getAttribute('data-href');
        return href ? new URL(href, location.href).href : null;
      })()`;
    default:
      return "el.textContent.trim()";
  }
}, Ze = (e, r = []) => {
  const l = (e || []).filter((n) => n.name.trim() && n.selector.trim()), i = (r || []).filter((n) => n.name.trim() && n.containerSelector.trim() && (n.fields || []).some((c) => c.name.trim() && c.selector.trim()));
  if (l.length === 0 && i.length === 0)
    return `// Add fields in Visual mode, or write a script here.
// Example: return { title: document.title };`;
  const s = l.map((n) => {
    const c = JSON.stringify(n.name), f = JSON.stringify(n.selector);
    if (n.attribute === "exists")
      return `  ${c}: document.querySelector(${f}) !== null,`;
    const d = Ue(n);
    return n.multiple ? `  ${c}: Array.from(document.querySelectorAll(${f})).map(el => ${d}),` : `  ${c}: (() => { const el = document.querySelector(${f}); return el ? ${d} : null; })(),`;
  }), o = i.map((n) => {
    const c = JSON.stringify(n.name), f = JSON.stringify(n.containerSelector), b = (n.fields || []).filter((x) => x.name.trim() && x.selector.trim()).map((x) => {
      const w = JSON.stringify(x.name), S = JSON.stringify(x.selector);
      if (x.attribute === "exists")
        return `      ${w}: container.querySelector(${S}) !== null,`;
      const g = Ue(x);
      return `      ${w}: (() => { const el = container.querySelector(${S}); return el ? ${g} : null; })(),`;
    });
    return `  ${c}: Array.from(document.querySelectorAll(${f})).map(container => ({
${b.join(`
`)}
  })),`;
  });
  return `return {
${[...s, ...o].join(`
`)}
};`;
}, Jt = "extraction_field_", Ut = "extraction_group_container_", Zt = "extraction_group_field_", $e = (e) => `${Jt}${e}`, Oe = (e) => `${Ut}${e}`, Ae = (e, r) => `${Zt}${e}__${r}`, Qe = [
  { value: "text", label: "Text", icon: "text_fields" },
  { value: "html", label: "HTML", icon: "code" },
  { value: "value", label: "Input Value", icon: "input" },
  { value: "attr", label: "Attribute", icon: "label" },
  { value: "image", label: "Image URL", icon: "image" },
  { value: "link", label: "Link URL", icon: "link" },
  { value: "exists", label: "Exists (true/false)", icon: "check_circle" }
], Qt = [
  { mode: "agent", icon: "smart_toy", label: "Agent Mode", description: "Custom action sequence with logic" },
  { mode: "scrape", icon: "api", label: "Scrape Mode", description: "Fixed data extraction flow" }
], er = ({ task: e, onUpdate: r, onClose: l }) => {
  const { canInsertVariable: i, captureInsertionSelection: s, insertVariable: o } = ze();
  return /* @__PURE__ */ t(Be, { icon: "bolt", title: "On Execution", onClose: l, children: /* @__PURE__ */ a("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "min-w-0 space-y-8",
        onFocusCapture: (n) => s(n.target),
        onSelectCapture: (n) => s(n.target),
        onKeyUpCapture: (n) => s(n.target),
        onPointerUpCapture: (n) => s(n.target),
        children: [
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "URL" }),
            /* @__PURE__ */ t("div", { className: "rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm transition-colors focus-within:border-[var(--app-border-strong)]", children: /* @__PURE__ */ t(
              Y,
              {
                value: e.url,
                onChange: (n) => r({ url: n }),
                onBlur: () => r({}, !0),
                variables: e.variables,
                placeholder: "https://..."
              }
            ) })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Wait (seconds)" }),
            /* @__PURE__ */ t(
              "input",
              {
                type: "number",
                min: "0",
                value: e.wait,
                onChange: (n) => r({ wait: Number(n.target.value) || 0 }),
                onBlur: () => r({}, !0),
                className: "w-full rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm text-[var(--app-text)] transition-colors focus:border-[var(--app-border-strong)] focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Execution mode" }),
            /* @__PURE__ */ t("div", { className: "grid gap-3 sm:grid-cols-2", children: Qt.map((n) => {
              const c = e.mode === n.mode;
              return /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  onClick: () => r({ mode: n.mode }, !0),
                  "aria-pressed": c,
                  className: `flex items-start gap-3 rounded-2xl border p-4 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)] ${c ? "border-[var(--app-border-strong)] bg-[var(--app-surface-2)] ring-1 ring-[var(--app-border-strong)]" : "theme-border bg-[var(--app-surface-3)] opacity-70 hover:opacity-100"}`,
                  children: [
                    /* @__PURE__ */ t(v, { name: n.icon, className: "mt-0.5 text-lg text-[var(--app-text-muted)]" }),
                    /* @__PURE__ */ a("span", { children: [
                      /* @__PURE__ */ t("span", { className: "block text-xs font-bold text-[var(--app-text)]", children: n.label }),
                      /* @__PURE__ */ t("span", { className: "mt-1 block text-xs leading-5 text-[var(--app-text-faint)]", children: n.description })
                    ] })
                  ]
                },
                n.mode
              );
            }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("aside", { className: "min-w-0", "aria-label": "Execution context", children: /* @__PURE__ */ t(je, { variables: e.variables, canInsertVariable: i, onInsertVariable: o }) })
  ] }) });
}, et = ({ task: e, onUpdate: r, onAutoSave: l, onDelete: i, onStartInspect: s, onStartGroupContainerInspect: o, onStartGroupFieldInspect: n, selectorOptionsById: c }) => {
  const [f, d] = V(!1), [b, x] = V(!1), [w, S] = V(""), [g, C] = V(null), [N, L] = V(!1), [I, X] = V(null), { canInsertVariable: P, captureInsertionSelection: j, insertVariable: y } = ze(), m = (e.extractionScript || "").split(`
`).find((u) => u.trim()) || "", M = e.extractionMode || (e.extractionScript && !(e.extractionFields && e.extractionFields.length) ? "javascript" : "visual"), T = e.extractionFields || [], z = e.extractionGroups || [], K = (u) => {
    r({ extractionFields: u, extractionScript: Ze(u, z) });
  }, ie = () => {
    K([...T, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }]);
  }, U = (u, h) => {
    K(T.map(($) => $.id === u ? { ...$, ...h } : $));
  }, he = (u) => {
    K(T.filter((h) => h.id !== u));
  }, ae = (u) => {
    r({ extractionMode: u });
  }, G = (u) => {
    r({ extractionGroups: u, extractionScript: Ze(T, u) });
  }, re = () => {
    G([...z, { id: `group_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", containerSelector: "", fields: [] }]);
  }, D = (u, h) => {
    G(z.map(($) => $.id === u ? { ...$, ...h } : $));
  }, me = (u) => {
    G(z.filter((h) => h.id !== u));
  }, oe = (u) => {
    const h = z.find(($) => $.id === u);
    h && D(u, { fields: [...h.fields, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }] });
  }, se = (u, h, $) => {
    const k = z.find((_) => _.id === u);
    k && D(u, { fields: k.fields.map((_) => _.id === h ? { ..._, ...$ } : _) });
  }, xe = (u, h) => {
    const $ = z.find((k) => k.id === u);
    $ && D(u, { fields: $.fields.filter((k) => k.id !== h) });
  }, de = async () => {
    if (w.trim()) {
      L(!0), X(null);
      try {
        const u = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: w.trim() })
        }), h = await u.json();
        if (!u.ok) throw new Error(h.details ? `${h.error}: ${h.details}` : h.error || "Generation failed");
        r({ extractionScript: h.script }), x(!1), S("");
      } catch (u) {
        X(u.message);
      } finally {
        L(!1);
      }
    }
  }, ge = q(() => {
    d(!1), x(!1), X(null), l();
  }, [l]), R = f ? /* @__PURE__ */ t(Be, { icon: "data_object", title: "Extraction Script", onClose: ge, children: /* @__PURE__ */ a("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "min-w-0 space-y-6",
        onFocusCapture: (u) => j(u.target),
        onSelectCapture: (u) => j(u.target),
        onKeyUpCapture: (u) => j(u.target),
        onPointerUpCapture: (u) => j(u.target),
        children: [
          /* @__PURE__ */ a("div", { className: "space-y-3", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1", children: ["visual", "javascript"].map((u) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => ae(u),
                  className: `px-2.5 py-0.5 rounded-md text-xs font-bold tracking-tight transition-all ${M === u ? "bg-white text-black" : "text-white/50 hover:text-white"}`,
                  children: u === "visual" ? "Visual" : "JavaScript"
                },
                u
              )) })
            ] }),
            M === "visual" ? /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              T.length === 0 && /* @__PURE__ */ t("div", { className: "text-xs text-white/40 bg-white/[0.03] border border-dashed border-white/10 rounded-xl p-4 text-center", children: "No fields yet. Add a field, then use the target icon to pick its selector from the page." }),
              T.map((u) => /* @__PURE__ */ a("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: u.name,
                      onChange: (h) => U(u.id, { name: h.target.value }),
                      placeholder: "fieldName",
                      className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                    }
                  ),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => he(u.id),
                      className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                      title: "Remove field",
                      "aria-label": "Remove field",
                      children: /* @__PURE__ */ t(v, { name: "close", className: "text-base" })
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                    Y,
                    {
                      value: u.selector,
                      onChange: (h) => U(u.id, { selector: h }),
                      variables: e.variables,
                      placeholder: ".price, h1.title, ...",
                      className: "text-xs"
                    }
                  ) }),
                  s && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        d(!1), s($e(u.id));
                      },
                      className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                      title: "Pick Selector in Browser",
                      "aria-label": "Pick Selector in Browser",
                      children: /* @__PURE__ */ t(v, { name: "my_location", className: "text-lg" })
                    }
                  )
                ] }),
                c?.[$e(u.id)] && c[$e(u.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[$e(u.id)].map((h, $) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => U(u.id, { selector: h }),
                    className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${u.selector === h ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                    children: h
                  },
                  $
                )) }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ t(
                    ne,
                    {
                      value: u.attribute,
                      onChange: (h) => U(u.id, { attribute: h }),
                      options: Qe,
                      className: "w-[170px] !min-h-8",
                      ariaLabel: `${u.name || "Field"} attribute`
                    }
                  ),
                  u.attribute === "attr" && /* @__PURE__ */ t(
                    "input",
                    {
                      value: u.attrName || "",
                      onChange: (h) => U(u.id, { attrName: h.target.value }),
                      placeholder: "href",
                      className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                    }
                  ),
                  u.attribute !== "exists" && /* @__PURE__ */ a("label", { className: "flex items-center gap-1.5 text-xs text-white/50 cursor-pointer ml-auto", children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!u.multiple,
                        onChange: (h) => U(u.id, { multiple: h.target.checked }),
                        className: "accent-current"
                      }
                    ),
                    "Multiple (list)"
                  ] })
                ] })
              ] }, u.id)),
              /* @__PURE__ */ a(
                "button",
                {
                  onClick: ie,
                  className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                  children: [
                    /* @__PURE__ */ t(v, { name: "add", className: "text-base" }),
                    "Add Field"
                  ]
                }
              ),
              /* @__PURE__ */ a("div", { className: "pt-2 mt-2 border-t border-dashed border-white/10 space-y-3", children: [
                /* @__PURE__ */ a("div", { children: [
                  /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Repeating Groups" }),
                  /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-0.5", children: "One row per matched container — e.g. every product card on a search results page — with a column per sub-field. Produces a multi-row CSV." })
                ] }),
                z.map((u) => /* @__PURE__ */ a("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        value: u.name,
                        onChange: (h) => D(u.id, { name: h.target.value }),
                        placeholder: "groupName (e.g. products)",
                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => me(u.id),
                        className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                        title: "Remove group",
                        "aria-label": "Remove group",
                        children: /* @__PURE__ */ t(v, { name: "close", className: "text-base" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                      Y,
                      {
                        value: u.containerSelector,
                        onChange: (h) => D(u.id, { containerSelector: h }),
                        variables: e.variables,
                        placeholder: "Row container, e.g. [data-component-type='s-search-result']",
                        className: "text-xs"
                      }
                    ) }),
                    o && /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => {
                          d(!1), o(u.id);
                        },
                        className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                        title: "Pick Row Container in Browser",
                        "aria-label": "Pick Row Container in Browser",
                        children: /* @__PURE__ */ t(v, { name: "my_location", className: "text-lg" })
                      }
                    )
                  ] }),
                  c?.[Oe(u.id)] && c[Oe(u.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[Oe(u.id)].map((h, $) => /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => D(u.id, { containerSelector: h }),
                      className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${u.containerSelector === h ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                      children: h
                    },
                    $
                  )) }),
                  /* @__PURE__ */ a("div", { className: "pl-3 border-l-2 border-white/10 space-y-2", children: [
                    u.fields.length === 0 && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500", children: "No columns yet. Add one for each piece of data to pull from every row (e.g. title, price)." }),
                    u.fields.map((h) => /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ t(
                          "input",
                          {
                            value: h.name,
                            onChange: ($) => se(u.id, h.id, { name: $.target.value }),
                            placeholder: "columnName",
                            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                          }
                        ),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: () => xe(u.id, h.id),
                            className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                            title: "Remove column",
                            "aria-label": "Remove column",
                            children: /* @__PURE__ */ t(v, { name: "close", className: "text-base" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                          Y,
                          {
                            value: h.selector,
                            onChange: ($) => se(u.id, h.id, { selector: $ }),
                            variables: e.variables,
                            placeholder: "Selector relative to row, e.g. h2 span",
                            className: "text-xs"
                          }
                        ) }),
                        n && /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: () => {
                              d(!1), n(u.id, h.id);
                            },
                            className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                            title: "Pick Selector in Browser (within row)",
                            "aria-label": "Pick Selector in Browser (within row)",
                            children: /* @__PURE__ */ t(v, { name: "my_location", className: "text-lg" })
                          }
                        )
                      ] }),
                      c?.[Ae(u.id, h.id)] && c[Ae(u.id, h.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[Ae(u.id, h.id)].map(($, k) => /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => se(u.id, h.id, { selector: $ }),
                          className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${h.selector === $ ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                          children: $
                        },
                        k
                      )) }),
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ t(
                          ne,
                          {
                            value: h.attribute,
                            onChange: ($) => se(u.id, h.id, { attribute: $ }),
                            options: Qe,
                            className: "w-[170px] !min-h-8",
                            ariaLabel: `${h.name || "Group field"} attribute`
                          }
                        ),
                        h.attribute === "attr" && /* @__PURE__ */ t(
                          "input",
                          {
                            value: h.attrName || "",
                            onChange: ($) => se(u.id, h.id, { attrName: $.target.value }),
                            placeholder: "href",
                            className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                          }
                        )
                      ] })
                    ] }, h.id)),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        onClick: () => oe(u.id),
                        className: "w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                        children: [
                          /* @__PURE__ */ t(v, { name: "add", className: "text-sm" }),
                          "Add Column"
                        ]
                      }
                    )
                  ] })
                ] }, u.id)),
                /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: re,
                    className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                    children: [
                      /* @__PURE__ */ t(v, { name: "add", className: "text-base" }),
                      "Add Group"
                    ]
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ a(ee, { children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ a(
                "button",
                {
                  onClick: () => {
                    x((u) => !u), X(null);
                  },
                  className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
                  title: "Generate with AI",
                  children: [
                    /* @__PURE__ */ t(v, { name: "auto_awesome", className: "text-sm" }),
                    "Generate"
                  ]
                }
              ) }),
              b && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    autoFocus: !0,
                    type: "text",
                    value: w,
                    onChange: (u) => S(u.target.value),
                    onKeyDown: (u) => {
                      u.key === "Enter" && !N && de();
                    },
                    placeholder: "e.g. extract all article titles and links",
                    className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
                  }
                ),
                I && /* @__PURE__ */ t("p", { className: "text-xs text-red-400", children: I }),
                /* @__PURE__ */ a("div", { className: "flex justify-end gap-2", children: [
                  /* @__PURE__ */ t("button", { onClick: () => {
                    x(!1), X(null);
                  }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
                  /* @__PURE__ */ a(
                    "button",
                    {
                      onClick: de,
                      disabled: N || !w.trim(),
                      className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                      children: [
                        N && /* @__PURE__ */ t(v, { name: "autorenew", className: "text-xs animate-spin" }),
                        N ? "Generating…" : "Generate"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ t(
                ye,
                {
                  value: e.extractionScript || "",
                  onChange: (u) => r({ extractionScript: u }),
                  onBlur: l,
                  language: "javascript",
                  className: "min-h-[180px]",
                  placeholder: "// Example: return { title: document.title };"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Output Format" }),
            /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ t(
              ne,
              {
                value: e.extractionFormat || "json",
                onChange: (u) => r({ extractionFormat: u }),
                options: [
                  { value: "json", label: "JSON", icon: "data_object" },
                  { value: "csv", label: "CSV", icon: "table_rows" }
                ],
                className: "!min-h-0 !border-0 !bg-transparent !p-0",
                ariaLabel: "Extraction format"
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("aside", { className: "min-w-0", "aria-label": "Extraction context", children: /* @__PURE__ */ t(je, { variables: e.variables, canInsertVariable: P, onInsertVariable: y }) })
  ] }) }) : null, O = g ? Ne(
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[200]",
        onClick: () => C(null),
        onContextMenu: (u) => {
          u.preventDefault(), C(null);
        },
        children: /* @__PURE__ */ t(
          "div",
          {
            className: "absolute bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl py-1 min-w-[140px]",
            style: { top: g.y, left: g.x },
            onClick: (u) => u.stopPropagation(),
            children: /* @__PURE__ */ a(
              "button",
              {
                onClick: () => {
                  C(null), i();
                },
                className: "w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-white/5 transition-colors",
                children: [
                  /* @__PURE__ */ t(v, { name: "delete", className: "text-sm" }),
                  "Remove extraction script"
                ]
              }
            )
          }
        )
      }
    ),
    document.body
  ) : null;
  return /* @__PURE__ */ a(ee, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        onClick: () => d(!0),
        onContextMenu: (u) => {
          u.preventDefault(), C({ x: u.clientX, y: u.clientY });
        },
        "data-interactive-target": "true",
        className: "bg-black min-w-[280px] w-full max-w-sm mx-auto border border-white/20 p-5 rounded-2xl group/item relative transition-all duration-150 select-none touch-none cursor-pointer hover:border-white/40 hover:bg-white/[0.02]",
        children: /* @__PURE__ */ a("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: /* @__PURE__ */ t(v, { name: "data_object", className: "text-[12px] text-white" }) }),
          /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-white shrink-0", children: "Extraction Script" }),
          m && /* @__PURE__ */ t("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: m.trim() })
        ] })
      }
    ),
    R,
    O
  ] });
}, tr = 760, Se = 380, we = 600, ve = 160, rr = 132, nr = () => {
  const e = H(null), [r, l] = V(0);
  te(() => {
    const o = e.current;
    if (!o) return;
    const n = () => l(Math.round(o.getBoundingClientRect().height));
    n();
    const c = new ResizeObserver(n);
    return c.observe(o), () => c.disconnect();
  }, []);
  const i = Math.max(rr + 48, r - 22), s = [
    `M ${Se} 58`,
    `H ${we - 16}`,
    `Q ${we} 58 ${we} 74`,
    `V ${i - 18}`,
    `Q ${we} ${i} ${we - 18} ${i}`,
    `H ${ve + 18}`,
    `Q ${ve} ${i} ${ve} ${i - 18}`,
    "V 76",
    `Q ${ve} 58 ${ve + 18} 58`,
    `H ${Se}`,
    "Z"
  ].join(" ");
  return /* @__PURE__ */ t("div", { ref: e, className: "absolute inset-0 z-0 pointer-events-none", "aria-hidden": "true", children: r > 0 && /* @__PURE__ */ a(
    "svg",
    {
      className: "absolute inset-0 overflow-visible text-white/25",
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${tr} ${r}`,
      preserveAspectRatio: "none",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ t("path", { d: `M ${Se} 0 V 58`, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ t("path", { d: s, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ t("path", { d: `M ${Se} ${i} V ${r}`, vectorEffect: "non-scaling-stroke" })
      ]
    }
  ) });
}, ar = ({
  currentTask: e,
  setCurrentTask: r,
  canvasOffset: l,
  canvasScale: i,
  canvasViewportRef: s,
  onOpenCabinet: o,
  handleAutoSave: n,
  dragState: c,
  dragOverIndex: f,
  selectedActionIds: d,
  actionStatusById: b,
  availableTasks: x,
  selectorOptionsById: w,
  onStartGroupContainerInspect: S,
  onStartGroupFieldInspect: g,
  updateAction: C,
  openActionPalette: N,
  openContextMenu: L,
  handleActionPointerDown: I,
  onOpenHeadful: X,
  isHeadfulOpen: P,
  onPointerDown: j,
  onPointerMove: y,
  onPointerUp: m,
  onPointerCancel: M,
  selectionBox: T,
  onAddStickyNote: z,
  onUpdateStickyNote: K,
  onDeleteStickyNote: ie,
  onDuplicateStickyNote: U,
  selectedNoteIds: he,
  autoOpenActionId: ae,
  onClearAutoOpenActionId: G
}) => {
  const re = q((k) => {
    P || X?.(e.url || "https://www.google.com", k, e, e.variables);
  }, [P, X, e.url, e.variables]), D = q((k) => {
    const _ = { ...e.variables };
    if (k in _) return;
    _[k] = { type: "string", value: "", autoCreated: !0 };
    const B = { ...e, variables: _ };
    r(B), n(B);
  }, [e, r, n]), me = q((k) => {
    const _ = { ...e.variables };
    if (!(k in _) || !_[k].autoCreated) return;
    delete _[k];
    const B = { ...e, variables: _ };
    r(B), n(B);
  }, [e, r, n]), [oe, se] = V({}), [xe, de] = V(!1), ge = q((k, _ = !1) => {
    const B = { ...e, ...k };
    r(B), _ && n(B);
  }, [e, r, n]);
  te(() => {
    se({});
  }, [e.id]);
  const R = q((k) => {
    se((_) => ({ ..._, [k.actionId]: k }));
  }, []), [O, u] = V(null), h = q((k) => {
    const _ = k.target;
    if (_.closest("[data-action-id]") || _.closest("[data-sticky-note-id]") || _.closest('[data-interactive-target="true"]')) return;
    k.preventDefault();
    const B = k.currentTarget.getBoundingClientRect(), A = Math.round((k.clientX - B.left - l.x) / i), ue = Math.round((k.clientY - B.top - l.y) / i), J = 8, Q = 180, E = 48, ce = Math.min(Math.max(k.clientX + 12, J), window.innerWidth - Q - J), p = Math.min(Math.max(k.clientY + 12, J), window.innerHeight - E - J);
    u({ x: ce, y: p, worldX: A, worldY: ue });
  }, [l, i]), $ = (k, _, B = 0, A = 360) => {
    const ue = [];
    let J = k;
    for (; J < _; ) {
      const Q = J, E = e.actions[Q];
      if (!E) {
        J++;
        continue;
      }
      const ce = _t(e.actions, Q);
      if (E.type === "if" && ce !== null && ce < _) {
        const p = J, Z = ce;
        let le = 1, pe = J + 1, be = -1;
        for (; pe < Z && le > 0; ) {
          const fe = e.actions[pe];
          Te(fe.type) && le++, fe.type === "end" && le--, fe.type === "else" && le === 1 && (be = pe), pe++;
        }
        const dt = p + 1, He = be !== -1 ? be : Z, De = be !== -1 ? be + 1 : -1, Ye = be !== -1 ? Z : -1, Ce = B > 0, Ke = Ce ? 280 : A;
        ue.push(
          /* @__PURE__ */ a("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ t("div", { className: "w-[360px]", children: /* @__PURE__ */ t(
              Re,
              {
                action: E,
                task: e,
                index: Q,
                isDragOver: f === Q && c?.id !== E.id,
                isDragging: c?.id === E.id,
                dragTransformY: c?.id === E.id ? c.currentY - c.startY : void 0,
                isSelected: d.has(E.id),
                status: b[E.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: x,
                selectorOptions: w[E.id],
                onUpdate: C,
                onAutoSave: n,
                onOpenPalette: N,
                onOpenContextMenu: L,
                onPointerDown: I,
                onStartInspect: re,
                onCreateVariable: D,
                onDeleteVariable: me,
                autoOpenConfig: ae === E.id,
                onCloseConfigModal: G,
                testResult: oe[E.id],
                onTestResult: R
              }
            ) }),
            /* @__PURE__ */ a("div", { className: `flex mt-4 relative ${Ce ? "gap-6 -translate-x-[132px]" : "gap-16"}`, children: [
              /* @__PURE__ */ a("div", { className: `flex flex-col items-center ${Ce ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "True" }),
                /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3", children: $(dt, He, B + 1, Ke) }),
                /* @__PURE__ */ a("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": $t(E.id),
                      onClick: () => N(void 0, He),
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ a("div", { className: `flex flex-col items-center ${Ce ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "Otherwise" }),
                /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3", children: De !== -1 ? $(De, Ye, B + 1, Ke) : null }),
                /* @__PURE__ */ a("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": St(E.id),
                      onClick: () => {
                        if (De !== -1)
                          N(void 0, Ye);
                        else {
                          const fe = { id: "act_" + Date.now() + "_else", type: "else", selector: "", value: "" }, Le = [...e.actions];
                          Le.splice(Z, 0, fe), r({ ...e, actions: Le }), n({ ...e, actions: Le }), setTimeout(() => N(void 0, Z + 1), 50);
                        }
                      },
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "flex flex-col items-center mt-3", children: [
              /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(void 0, Z + 1),
                  className: "w-8 h-8 border border-dashed border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action (Ctrl + K)",
                  title: "Add action (Ctrl + K)",
                  children: /* @__PURE__ */ t(v, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
                }
              ),
              /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" })
            ] })
          ] }, E.id)
        ), J = Z + 1;
      } else if (kt(E.type) && ce !== null && ce < _) {
        const p = ce, Z = Q + 1, le = p, pe = Et(E.id), be = Z === le;
        ue.push(
          /* @__PURE__ */ a("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ t("div", { className: "w-[360px]", children: /* @__PURE__ */ t(
              Re,
              {
                action: E,
                task: e,
                index: Q,
                isDragOver: f === Q && c?.id !== E.id,
                isDragging: c?.id === E.id,
                dragTransformY: c?.id === E.id ? c.currentY - c.startY : void 0,
                isSelected: d.has(E.id),
                status: b[E.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: x,
                selectorOptions: w[E.id],
                onUpdate: C,
                onAutoSave: n,
                onOpenPalette: N,
                onOpenContextMenu: L,
                onPointerDown: I,
                onStartInspect: re,
                onCreateVariable: D,
                onDeleteVariable: me,
                autoOpenConfig: ae === E.id,
                onCloseConfigModal: G,
                testResult: oe[E.id],
                onTestResult: R
              }
            ) }),
            /* @__PURE__ */ a("div", { className: "relative w-[760px] min-h-[260px] shrink-0 pt-[132px] pb-11", children: [
              /* @__PURE__ */ t(nr, {}),
              be ? /* @__PURE__ */ t(
                "button",
                {
                  "data-action-drop-scope": pe,
                  onClick: () => N(void 0, le),
                  className: "absolute left-[576px] top-[123px] z-20 w-12 h-12 border border-dashed border-white/15 rounded-xl bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action inside loop (Ctrl + K)",
                  title: "Add action inside loop (Ctrl + K)",
                  children: /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                }
              ) : /* @__PURE__ */ a("div", { className: "relative z-10 ml-[420px] w-[360px] flex flex-col items-center", children: [
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3 w-full", children: $(Z, le, B + 1) }),
                /* @__PURE__ */ a("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "h-4 border-l border-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": pe,
                      onClick: () => N(void 0, le),
                      className: "relative z-20 w-12 h-12 border border-dashed border-white/15 rounded-xl bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action inside loop (Ctrl + K)",
                      title: "Add action inside loop (Ctrl + K)",
                      children: /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "relative z-10 flex flex-col items-center", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(void 0, p + 1),
                  className: "relative z-20 w-8 h-8 border border-dashed border-white/10 rounded-lg bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action after loop (Ctrl + K)",
                  title: "Add action after loop (Ctrl + K)",
                  children: /* @__PURE__ */ t(v, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
                }
              ),
              /* @__PURE__ */ t("div", { className: "h-2 border-l border-white/25" })
            ] })
          ] }, E.id)
        ), J = p + 1;
      } else E.type === "end" || E.type === "else" || ue.push(
        /* @__PURE__ */ a("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ t("div", { className: A === 280 ? "w-[280px]" : "w-[360px]", children: /* @__PURE__ */ t(
            Re,
            {
              action: E,
              task: e,
              index: Q,
              isDragOver: f === Q && c?.id !== E.id,
              isDragging: c?.id === E.id,
              dragTransformY: c?.id === E.id ? c.currentY - c.startY : void 0,
              isSelected: d.has(E.id),
              status: b[E.id],
              translateY: 0,
              variables: e.variables,
              availableTasks: x,
              selectorOptions: w[E.id],
              onUpdate: C,
              onAutoSave: n,
              onOpenPalette: N,
              onOpenContextMenu: L,
              onPointerDown: I,
              onStartInspect: re,
              onCreateVariable: D,
              onDeleteVariable: me,
              autoOpenConfig: ae === E.id,
              onCloseConfigModal: G,
              testResult: oe[E.id],
              onTestResult: R
            }
          ) }),
          J < _ - 1 && e.actions[J + 1]?.type !== "end" && /* @__PURE__ */ a("div", { className: "flex flex-col items-center my-1", children: [
            /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => N(void 0, Q + 1),
                className: "relative z-20 w-8 h-8 border border-dashed border-white/10 rounded-lg bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                "aria-label": "Add action (Ctrl + K)",
                title: "Add action (Ctrl + K)",
                children: /* @__PURE__ */ t(v, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
              }
            ),
            /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" })
          ] })
        ] }, E.id)
      ), J++;
    }
    return ue;
  };
  return /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      className: "flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing select-none",
      style: { touchAction: "none" },
      onPointerDown: j,
      onPointerMove: y,
      onPointerUp: m,
      onPointerCancel: M,
      onContextMenu: h,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "absolute inset-0 pointer-events-none z-0",
            style: {
              backgroundImage: "radial-gradient(circle, var(--app-dot) 0.8px, transparent 0)",
              backgroundSize: `${22 * i}px ${22 * i}px`,
              backgroundPosition: `${l.x}px ${l.y}px`
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "absolute origin-top-left",
            style: {
              transform: `translate(${l.x}px, ${l.y}px) scale(${i})`
            },
            children: [
              (e.stickyNotes || []).map((k) => /* @__PURE__ */ t(
                qt,
                {
                  note: k,
                  canvasScale: i,
                  isSelected: he.has(k.id),
                  onUpdate: K,
                  onDelete: ie,
                  onDuplicate: U
                },
                k.id
              )),
              /* @__PURE__ */ a("div", { className: "relative z-10 flex flex-col items-center pointer-events-none", style: { paddingTop: "60px", minWidth: "500px" }, children: [
                /* @__PURE__ */ a(
                  "div",
                  {
                    className: "w-[360px] bg-black border border-white/15 p-5 rounded-2xl shadow-2xl shadow-black/50 select-text cursor-auto relative z-10 pointer-events-auto",
                    onDoubleClick: (k) => {
                      k.stopPropagation(), de(!0);
                    },
                    children: [
                      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ a(
                          "button",
                          {
                            type: "button",
                            "aria-label": "Configure On Execution",
                            title: "Configure On Execution",
                            onClick: () => de(!0),
                            className: "flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg pr-2 transition-all",
                            children: [
                              /* @__PURE__ */ t(v, { name: "bolt", className: "text-white/40 text-base" }),
                              /* @__PURE__ */ t("h3", { className: "text-white/60 font-bold tracking-widest text-xs", children: "On Execution" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: () => o("mode"),
                            className: "p-2 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                            title: "Open Task Settings",
                            "aria-label": "Open Task Settings",
                            children: /* @__PURE__ */ t(v, { name: "settings", className: "text-lg" })
                          }
                        )
                      ] }),
                      e.description && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-2 leading-relaxed", children: e.description })
                    ]
                  }
                ),
                (e.mode === "agent" || e.mode === "scrape") && /* @__PURE__ */ t("div", { className: "w-px h-10 bg-white/25" }),
                e.mode === "scrape" && /* @__PURE__ */ t("div", { className: "w-[360px] pointer-events-auto", children: e.extractionScript !== void 0 ? /* @__PURE__ */ t(
                  et,
                  {
                    task: e,
                    onUpdate: (k) => {
                      const _ = { ...e, ...k };
                      r(_), n(_);
                    },
                    onAutoSave: () => n(),
                    onDelete: () => {
                      const k = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                      r(k), n(k);
                    },
                    onStartInspect: re,
                    onStartGroupContainerInspect: S,
                    onStartGroupFieldInspect: g,
                    selectorOptionsById: w
                  }
                ) : /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: () => {
                      const k = { ...e, extractionScript: "" };
                      r(k), n(k);
                    },
                    "data-interactive-target": "true",
                    className: "w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                    children: [
                      /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" }),
                      /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                    ]
                  }
                ) }),
                e.mode === "agent" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center w-full select-text cursor-auto pointer-events-auto", children: /* @__PURE__ */ a("div", { className: "space-y-6 w-full flex flex-col items-center relative", children: [
                  $(0, e.actions.length),
                  /* @__PURE__ */ a("div", { className: "pt-2 flex flex-col items-center", children: [
                    /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/10" }),
                    /* @__PURE__ */ a(
                      "button",
                      {
                        "data-action-drop-scope": "root",
                        onClick: () => N(),
                        className: "w-[360px] bg-[#0a0a0a] border border-dashed border-white/15 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.03] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        "aria-label": "Add action (Ctrl + K)",
                        title: "Add action (Ctrl + K)",
                        children: [
                          /* @__PURE__ */ t("div", { className: "w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all flex items-center justify-center", children: /* @__PURE__ */ t(v, { name: "add", className: "text-2xl text-gray-500 group-hover:text-white transition-colors" }) }),
                          /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Action" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                  /* @__PURE__ */ t("div", { className: "w-[360px]", children: e.extractionScript !== void 0 ? /* @__PURE__ */ t(
                    et,
                    {
                      task: e,
                      onUpdate: (k) => {
                        const _ = { ...e, ...k };
                        r(_), n(_);
                      },
                      onAutoSave: () => n(),
                      onDelete: () => {
                        const k = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                        r(k), n(k);
                      },
                      onStartInspect: re,
                      onStartGroupContainerInspect: S,
                      onStartGroupFieldInspect: g,
                      selectorOptionsById: w
                    }
                  ) : /* @__PURE__ */ a(
                    "button",
                    {
                      onClick: () => {
                        const k = { ...e, extractionScript: "" };
                        r(k), n(k);
                      },
                      "data-interactive-target": "true",
                      className: "w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      children: [
                        /* @__PURE__ */ t(v, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" }),
                        /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                      ]
                    }
                  ) })
                ] }) })
              ] })
            ]
          }
        ),
        T && /* @__PURE__ */ t("div", { className: "fixed inset-0 pointer-events-none z-20 overflow-hidden", children: /* @__PURE__ */ t(
          "div",
          {
            className: "absolute bg-blue-500/10 border border-blue-400",
            style: {
              left: Math.min(T.startX, T.currentX),
              top: Math.min(T.startY, T.currentY),
              width: Math.abs(T.currentX - T.startX),
              height: Math.abs(T.currentY - T.startY)
            }
          }
        ) }),
        xe && /* @__PURE__ */ t(
          er,
          {
            task: e,
            onUpdate: ge,
            onClose: () => {
              de(!1), n(e);
            }
          }
        ),
        O && /* @__PURE__ */ a(ee, { children: [
          /* @__PURE__ */ t("div", { className: "fixed inset-0 z-40", onClick: () => u(null), onContextMenu: (k) => {
            k.preventDefault(), u(null);
          } }),
          /* @__PURE__ */ t(
            "div",
            {
              className: "fixed z-50 w-[180px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
              style: { left: O.x, top: O.y },
              children: /* @__PURE__ */ a(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2",
                  onClick: () => {
                    z(O.worldX, O.worldY), u(null);
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "material-symbols-outlined text-white/50", style: { fontSize: "14px" }, children: "sticky_note_2" }),
                    "Add sticky note"
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, W = () => {
}, or = 400, Ve = 20, lr = ({ task: e, className: r = "" }) => {
  const l = H(null), [i, s] = V({ x: 0, y: 20 }), o = H(null);
  ut(() => {
    const d = l.current;
    if (!d) return;
    const b = () => {
      if (o.current) return;
      const w = e.stickyNotes || [], S = Math.min(0, ...w.map((I) => I.x)), C = Math.max(or, ...w.map((I) => I.x + I.width)) - S, N = Math.max(0, d.clientWidth - Ve * 2), L = C <= N ? (d.clientWidth - C) / 2 - S : Ve - S;
      s({ x: L, y: Ve });
    };
    b();
    const x = new ResizeObserver(b);
    return x.observe(d), () => x.disconnect();
  }, [e]), te(() => {
    const d = l.current;
    if (!d) return;
    const b = (x) => {
      x.ctrlKey || x.metaKey || (x.preventDefault(), s((w) => ({
        x: w.x - x.deltaX,
        y: w.y - x.deltaY
      })));
    };
    return d.addEventListener("wheel", b, { passive: !1 }), () => d.removeEventListener("wheel", b);
  }, []);
  const n = (d) => {
    d.button === 0 && (o.current = {
      pointerId: d.pointerId,
      x: d.clientX,
      y: d.clientY,
      offsetX: i.x,
      offsetY: i.y
    }, d.currentTarget.setPointerCapture?.(d.pointerId));
  }, c = (d) => {
    const b = o.current;
    !b || b.pointerId !== d.pointerId || s({
      x: b.offsetX + d.clientX - b.x,
      y: b.offsetY + d.clientY - b.y
    });
  }, f = (d) => {
    o.current?.pointerId === d.pointerId && (o.current = null, d.currentTarget.releasePointerCapture?.(d.pointerId));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: `figranium-readonly-canvas relative flex h-full w-full select-none cursor-grab active:cursor-grabbing ${r}`.trim(),
      "aria-label": "Read-only Figranium task canvas. Drag or scroll to pan.",
      style: { "--app-dot": "rgba(255, 255, 255, 0.12)", touchAction: "none" },
      onPointerDown: n,
      onPointerMove: c,
      onPointerUp: f,
      onPointerCancel: f,
      children: /* @__PURE__ */ t(
        ar,
        {
          currentTask: e,
          setCurrentTask: W,
          canvasOffset: i,
          canvasScale: 1,
          canvasViewportRef: l,
          triggerExpanded: !1,
          setTriggerExpanded: W,
          onOpenCabinet: W,
          handleAutoSave: W,
          dragState: null,
          dragOverIndex: null,
          selectedActionIds: /* @__PURE__ */ new Set(),
          setSelectedActionIds: W,
          actionStatusById: {},
          availableTasks: [],
          selectorOptionsById: {},
          updateAction: W,
          openActionPalette: W,
          openContextMenu: W,
          handleActionPointerDown: W,
          onOpenHeadful: W,
          isHeadfulOpen: !1,
          onPointerDown: W,
          onPointerMove: W,
          onPointerUp: W,
          onPointerCancel: W,
          selectionBox: null,
          onAddStickyNote: W,
          onUpdateStickyNote: W,
          onDeleteStickyNote: W,
          onDuplicateStickyNote: W,
          selectedNoteIds: /* @__PURE__ */ new Set(),
          autoOpenActionId: null,
          onClearAutoOpenActionId: W
        }
      )
    }
  );
};
function dr({
  task: e,
  className: r = "",
  height: l = 560,
  ariaLabel: i = "Figranium task preview"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `figranium-embed ${r}`.trim(),
      style: { height: l },
      "aria-label": i,
      role: "img",
      children: /* @__PURE__ */ t("div", { className: "figranium-embed__surface", "aria-hidden": "true", children: /* @__PURE__ */ t(lr, { task: e }) })
    }
  );
}
export {
  dr as FigraniumEmbed
};
