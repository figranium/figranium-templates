import { jsx as t, jsxs as o, Fragment as te } from "react/jsx-runtime";
import nt, { forwardRef as ut, createElement as Le, useRef as F, useEffect as ae, useMemo as $e, useState as j, useCallback as G, useLayoutEffect as gt } from "react";
import { createPortal as ke } from "react-dom";
var mt = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
const d = (e, a, s, l) => {
  const i = ut(
    ({ color: r = "currentColor", size: n = 24, stroke: c = 2, title: y, className: v, children: p, ...m }, w) => Le(
      "svg",
      {
        ref: w,
        ...mt[e],
        width: n,
        height: n,
        className: ["tabler-icon", `tabler-icon-${a}`, v].join(" "),
        strokeWidth: c,
        stroke: r,
        ...m
      },
      [
        y && Le("title", { key: "svg-title" }, y),
        ...l.map(([I, f]) => Le(I, f)),
        ...Array.isArray(p) ? p : [p]
      ]
    )
  );
  return i.displayName = `${s}`, i;
};
const vt = [["path", { d: "M3 16v-6a2 2 0 1 1 4 0v6", key: "svg-0" }], ["path", { d: "M3 13h4", key: "svg-1" }], ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1", key: "svg-2" }], ["path", { d: "M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01", key: "svg-3" }]], bt = d("outline", "abc", "Abc", vt);
const ft = [["path", { d: "M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]], xt = d("outline", "adjustments-horizontal", "AdjustmentsHorizontal", ft);
const yt = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], wt = d("outline", "alert-circle", "AlertCircle", yt);
const kt = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Nt = d("outline", "alert-triangle", "AlertTriangle", kt);
const Mt = [["path", { d: "M4 13h5", key: "svg-0" }], ["path", { d: "M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3", key: "svg-1" }], ["path", { d: "M20 8v8", key: "svg-2" }], ["path", { d: "M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5", key: "svg-3" }]], _t = d("outline", "api", "Api", Mt);
const Ct = [["path", { d: "M5 12l14 0", key: "svg-0" }], ["path", { d: "M5 12l6 6", key: "svg-1" }], ["path", { d: "M5 12l6 -6", key: "svg-2" }]], It = d("outline", "arrow-left", "ArrowLeft", Ct);
const $t = [["path", { d: "M16 4l4 0l0 4", key: "svg-0" }], ["path", { d: "M14 10l6 -6", key: "svg-1" }], ["path", { d: "M8 20l-4 0l0 -4", key: "svg-2" }], ["path", { d: "M4 20l6 -6", key: "svg-3" }], ["path", { d: "M16 20l4 0l0 -4", key: "svg-4" }], ["path", { d: "M14 14l6 6", key: "svg-5" }], ["path", { d: "M8 4l-4 0l0 4", key: "svg-6" }], ["path", { d: "M4 4l6 6", key: "svg-7" }]], St = d("outline", "arrows-maximize", "ArrowsMaximize", $t);
const Et = [["path", { d: "M18 9l3 3l-3 3", key: "svg-0" }], ["path", { d: "M15 12h6", key: "svg-1" }], ["path", { d: "M6 9l-3 3l3 3", key: "svg-2" }], ["path", { d: "M3 12h6", key: "svg-3" }], ["path", { d: "M9 18l3 3l3 -3", key: "svg-4" }], ["path", { d: "M12 15v6", key: "svg-5" }], ["path", { d: "M15 6l-3 -3l-3 3", key: "svg-6" }], ["path", { d: "M12 3v6", key: "svg-7" }]], Pt = d("outline", "arrows-move", "ArrowsMove", Et);
const Tt = [["path", { d: "M18 4l3 3l-3 3", key: "svg-0" }], ["path", { d: "M18 20l3 -3l-3 -3", key: "svg-1" }], ["path", { d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5", key: "svg-2" }], ["path", { d: "M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3", key: "svg-3" }]], Dt = d("outline", "arrows-shuffle", "ArrowsShuffle", Tt);
const Lt = [["path", { d: "M7 3l0 18", key: "svg-0" }], ["path", { d: "M10 6l-3 -3l-3 3", key: "svg-1" }], ["path", { d: "M20 18l-3 3l-3 -3", key: "svg-2" }], ["path", { d: "M17 21l0 -18", key: "svg-3" }]], At = d("outline", "arrows-up-down", "ArrowsUpDown", Lt);
const Rt = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M5.7 5.7l12.6 12.6", key: "svg-1" }]], Ot = d("outline", "ban", "Ban", Rt);
const Vt = [["path", { d: "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11", key: "svg-0" }]], jt = d("outline", "bolt", "Bolt", Vt);
const zt = [["path", { d: "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2", key: "svg-0" }], ["path", { d: "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2", key: "svg-1" }]], Bt = d("outline", "braces", "Braces", zt);
const Ht = [["path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0", key: "svg-0" }], ["path", { d: "M7.5 8h3v8l-2 -1", key: "svg-1" }], ["path", { d: "M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5", key: "svg-2" }]], Ft = d("outline", "brand-javascript", "BrandJavascript", Ht);
const Kt = [["path", { d: "M4 8h8", key: "svg-0" }], ["path", { d: "M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5", key: "svg-1" }], ["path", { d: "M8 4v4", key: "svg-2" }], ["path", { d: "M16 8l5 -5", key: "svg-3" }], ["path", { d: "M21 7.5v-4.5h-4.5", key: "svg-4" }]], Yt = d("outline", "browser-maximize", "BrowserMaximize", Kt);
const Xt = [["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3", key: "svg-0" }], ["path", { d: "M16 3v4", key: "svg-1" }], ["path", { d: "M8 3v4", key: "svg-2" }], ["path", { d: "M4 11h12", key: "svg-3" }], ["path", { d: "M20 14l2 2h-3", key: "svg-4" }], ["path", { d: "M20 18l2 -2", key: "svg-5" }], ["path", { d: "M19 16a3 3 0 1 0 2 5.236", key: "svg-6" }]], Wt = d("outline", "calendar-repeat", "CalendarRepeat", Xt);
const Gt = [["path", { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]], qt = d("outline", "camera", "Camera", Gt);
const Jt = [["path", { d: "M4 4h6v6h-6l0 -6", key: "svg-0" }], ["path", { d: "M14 4h6v6h-6l0 -6", key: "svg-1" }], ["path", { d: "M4 14h6v6h-6l0 -6", key: "svg-2" }], ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-3" }]], Ut = d("outline", "category", "Category", Jt);
const Zt = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Qt = d("outline", "check", "Check", Zt);
const ea = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ta = d("outline", "chevron-down", "ChevronDown", ea);
const aa = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], na = d("outline", "circle-check", "CircleCheck", aa);
const oa = [["path", { d: "M15 11l-3 3l-3 -3", key: "svg-0" }], ["path", { d: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18", key: "svg-1" }]], ra = d("outline", "circle-chevron-down", "CircleChevronDown", oa);
const sa = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M10 10l4 4m0 -4l-4 4", key: "svg-1" }]], la = d("outline", "circle-x", "CircleX", sa);
const ia = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]], ot = d("outline", "circle", "Circle", ia);
const ca = [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]], da = d("outline", "click", "Click", ca);
const ha = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 7v5l3 3", key: "svg-1" }]], pa = d("outline", "clock", "Clock", ha);
const ua = [["path", { d: "M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878", key: "svg-0" }]], ga = d("outline", "cloud", "Cloud", ua);
const ma = [["path", { d: "M7 8l-4 4l4 4", key: "svg-0" }], ["path", { d: "M17 8l4 4l-4 4", key: "svg-1" }], ["path", { d: "M14 4l-4 16", key: "svg-2" }]], va = d("outline", "code", "Code", ma);
const ba = [["path", { d: "M13 9l3 -1l-1 3m-1 3l-6 2l2 -6", key: "svg-0" }], ["path", { d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73", key: "svg-1" }], ["path", { d: "M12 3v2", key: "svg-2" }], ["path", { d: "M12 19v2", key: "svg-3" }], ["path", { d: "M3 12h2", key: "svg-4" }], ["path", { d: "M19 12h2", key: "svg-5" }], ["path", { d: "M3 3l18 18", key: "svg-6" }]], fa = d("outline", "compass-off", "CompassOff", ba);
const xa = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }], ["path", { d: "M11 14h6", key: "svg-2" }], ["path", { d: "M14 11v6", key: "svg-3" }]], ya = d("outline", "copy-plus", "CopyPlus", xa);
const wa = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], ka = d("outline", "copy", "Copy", wa);
const Na = [["path", { d: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4", key: "svg-0" }]], Ma = d("outline", "corner-down-right", "CornerDownRight", Na);
const _a = [["path", { d: "M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12", key: "svg-0" }], ["path", { d: "M9 9h6v6h-6l0 -6", key: "svg-1" }], ["path", { d: "M3 10h2", key: "svg-2" }], ["path", { d: "M3 14h2", key: "svg-3" }], ["path", { d: "M10 3v2", key: "svg-4" }], ["path", { d: "M14 3v2", key: "svg-5" }], ["path", { d: "M21 10h-2", key: "svg-6" }], ["path", { d: "M21 14h-2", key: "svg-7" }], ["path", { d: "M14 21v-2", key: "svg-8" }], ["path", { d: "M10 21v-2", key: "svg-9" }]], Ca = d("outline", "cpu", "Cpu", _a);
const Ia = [["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }], ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }], ["path", { d: "M9.15 14.85l8.85 -10.85", key: "svg-2" }], ["path", { d: "M6 4l8.85 10.85", key: "svg-3" }]], $a = d("outline", "cut", "Cut", Ia);
const Sa = [["path", { d: "M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0", key: "svg-0" }], ["path", { d: "M4 6v6a8 3 0 0 0 16 0v-6", key: "svg-1" }], ["path", { d: "M4 12v6a8 3 0 0 0 16 0v-6", key: "svg-2" }]], Ea = d("outline", "database", "Database", Sa);
const Pa = [["path", { d: "M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7", key: "svg-0" }], ["path", { d: "M7 20h5", key: "svg-1" }], ["path", { d: "M9 16v4", key: "svg-2" }], ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M19.001 15.5v1.5", key: "svg-4" }], ["path", { d: "M19.001 21v1.5", key: "svg-5" }], ["path", { d: "M22.032 17.25l-1.299 .75", key: "svg-6" }], ["path", { d: "M17.27 20l-1.3 .75", key: "svg-7" }], ["path", { d: "M15.97 17.25l1.3 .75", key: "svg-8" }], ["path", { d: "M20.733 20l1.3 .75", key: "svg-9" }]], Ta = d("outline", "device-desktop-cog", "DeviceDesktopCog", Pa);
const Da = [["path", { d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10", key: "svg-0" }], ["path", { d: "M7 20h10", key: "svg-1" }], ["path", { d: "M9 16v4", key: "svg-2" }], ["path", { d: "M15 16v4", key: "svg-3" }]], La = d("outline", "device-desktop", "DeviceDesktop", Da);
const Aa = [["path", { d: "M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M14 4l0 4l-6 0l0 -4", key: "svg-2" }]], Ra = d("outline", "device-floppy", "DeviceFloppy", Aa);
const Oa = [["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Va = d("outline", "dots-vertical", "DotsVertical", Oa);
const ja = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], za = d("outline", "download", "Download", ja);
const Ba = [["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", key: "svg-0" }], ["path", { d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415", key: "svg-1" }], ["path", { d: "M16 5l3 3", key: "svg-2" }]], Ha = d("outline", "edit", "Edit", Ba);
const Fa = [["path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6", key: "svg-0" }], ["path", { d: "M11 13l9 -9", key: "svg-1" }], ["path", { d: "M15 4h5v5", key: "svg-2" }]], Ka = d("outline", "external-link", "ExternalLink", Fa);
const Ya = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Xa = d("outline", "eye-off", "EyeOff", Ya);
const Wa = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], Ga = d("outline", "eye", "Eye", Wa);
const qa = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M9 17h6", key: "svg-2" }], ["path", { d: "M9 13h6", key: "svg-3" }]], Ja = d("outline", "file-description", "FileDescription", qa);
const Ua = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M9 9l1 0", key: "svg-2" }], ["path", { d: "M9 13l6 0", key: "svg-3" }], ["path", { d: "M9 17l6 0", key: "svg-4" }]], Za = d("outline", "file-text", "FileText", Ua);
const Qa = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4", key: "svg-1" }], ["path", { d: "M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0", key: "svg-2" }], ["path", { d: "M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75", key: "svg-3" }], ["path", { d: "M16 15l2 6l2 -6", key: "svg-4" }]], en = d("outline", "file-type-csv", "FileTypeCsv", Qa);
const tn = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M12 11v6", key: "svg-2" }], ["path", { d: "M9.5 13.5l2.5 -2.5l2.5 2.5", key: "svg-3" }]], an = d("outline", "file-upload", "FileUpload", tn);
const nn = [["path", { d: "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1", key: "svg-0" }], ["path", { d: "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2", key: "svg-1" }], ["path", { d: "M11 5l-1 0", key: "svg-2" }], ["path", { d: "M13 7l-1 0", key: "svg-3" }], ["path", { d: "M11 9l-1 0", key: "svg-4" }], ["path", { d: "M13 11l-1 0", key: "svg-5" }], ["path", { d: "M11 13l-1 0", key: "svg-6" }], ["path", { d: "M13 15l-1 0", key: "svg-7" }]], on = d("outline", "file-zip", "FileZip", nn);
const rn = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }]], sn = d("outline", "file", "File", rn);
const ln = [["path", { d: "M15 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-2" }]], cn = d("outline", "files", "Files", ln);
const dn = [["path", { d: "M9 3l6 0", key: "svg-0" }], ["path", { d: "M10 9l4 0", key: "svg-1" }], ["path", { d: "M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6", key: "svg-2" }]], hn = d("outline", "flask", "Flask", dn);
const pn = [["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", key: "svg-1" }], ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", key: "svg-2" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "svg-3" }], ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", key: "svg-4" }]], un = d("outline", "focus-centered", "FocusCentered", pn);
const gn = [["path", { d: "M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], mn = d("outline", "folder-plus", "FolderPlus", gn);
const vn = [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]], bn = d("outline", "folder", "Folder", vn);
const fn = [["path", { d: "M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M17 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2", key: "svg-1" }]], xn = d("outline", "folders", "Folders", fn);
const yn = [["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-2" }], ["path", { d: "M7 8l0 8", key: "svg-3" }], ["path", { d: "M9 18h6a2 2 0 0 0 2 -2v-5", key: "svg-4" }], ["path", { d: "M14 14l3 -3l3 3", key: "svg-5" }]], wn = d("outline", "git-branch", "GitBranch", yn);
const kn = [["path", { d: "M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], Nn = d("outline", "grip-vertical", "GripVertical", kn);
const Mn = [["path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969", key: "svg-0" }], ["path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554", key: "svg-1" }], ["path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592", key: "svg-2" }], ["path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305", key: "svg-3" }], ["path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356", key: "svg-4" }], ["path", { d: "M12 8v4l3 3", key: "svg-5" }]], _n = d("outline", "history-toggle", "HistoryToggle", Mn);
const Cn = [["path", { d: "M12 8l0 4l2 2", key: "svg-0" }], ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]], In = d("outline", "history", "History", Cn);
const $n = [["path", { d: "M5 12l-2 0l9 -9l9 9l-2 0", key: "svg-0" }], ["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7", key: "svg-1" }], ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6", key: "svg-2" }]], Sn = d("outline", "home", "Home", $n);
const En = [["path", { d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1", key: "svg-0" }], ["path", { d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1", key: "svg-1" }]], Pn = d("outline", "hourglass-empty", "HourglassEmpty", En);
const Tn = [["path", { d: "M6.5 7h11", key: "svg-0" }], ["path", { d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1", key: "svg-1" }], ["path", { d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1", key: "svg-2" }]], Dn = d("outline", "hourglass-high", "HourglassHigh", Tn);
const Ln = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]], An = d("outline", "info-circle", "InfoCircle", Ln);
const Rn = [["path", { d: "M20 16v-8l3 8v-8", key: "svg-0" }], ["path", { d: "M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2", key: "svg-1" }], ["path", { d: "M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5", key: "svg-2" }], ["path", { d: "M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1", key: "svg-3" }]], On = d("outline", "json", "Json", Rn);
const Vn = [["path", { d: "M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0", key: "svg-0" }], ["path", { d: "M15 9h.01", key: "svg-1" }]], jn = d("outline", "key", "Key", Vn);
const zn = [["path", { d: "M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8", key: "svg-0" }], ["path", { d: "M6 10l0 .01", key: "svg-1" }], ["path", { d: "M10 10l0 .01", key: "svg-2" }], ["path", { d: "M14 10l0 .01", key: "svg-3" }], ["path", { d: "M18 10l0 .01", key: "svg-4" }], ["path", { d: "M6 14l0 .01", key: "svg-5" }], ["path", { d: "M18 14l0 .01", key: "svg-6" }], ["path", { d: "M10 14l4 .01", key: "svg-7" }]], Bn = d("outline", "keyboard", "Keyboard", zn);
const Hn = [["path", { d: "M9 6.371c0 4.418 -2.239 6.629 -5 6.629", key: "svg-0" }], ["path", { d: "M4 6.371h7", key: "svg-1" }], ["path", { d: "M5 9c0 2.144 2.252 3.908 6 4", key: "svg-2" }], ["path", { d: "M12 20l4 -9l4 9", key: "svg-3" }], ["path", { d: "M19.1 18h-6.2", key: "svg-4" }], ["path", { d: "M6.694 3l.793 .582", key: "svg-5" }]], Fn = d("outline", "language", "Language", Hn);
const Kn = [["path", { d: "M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3", key: "svg-0" }], ["path", { d: "M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3", key: "svg-1" }]], Yn = d("outline", "layers-linked", "LayersLinked", Kn);
const Xn = [["path", { d: "M9 15l6 -6", key: "svg-0" }], ["path", { d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464", key: "svg-1" }], ["path", { d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463", key: "svg-2" }]], Wn = d("outline", "link", "Link", Xn);
const Gn = [["path", { d: "M11 6h9", key: "svg-0" }], ["path", { d: "M11 12h9", key: "svg-1" }], ["path", { d: "M12 18h8", key: "svg-2" }], ["path", { d: "M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4", key: "svg-3" }], ["path", { d: "M6 10v-6l-2 2", key: "svg-4" }]], qn = d("outline", "list-numbers", "ListNumbers", Gn);
const Jn = [["path", { d: "M9 6l11 0", key: "svg-0" }], ["path", { d: "M9 12l11 0", key: "svg-1" }], ["path", { d: "M9 18l11 0", key: "svg-2" }], ["path", { d: "M5 6l0 .01", key: "svg-3" }], ["path", { d: "M5 12l0 .01", key: "svg-4" }], ["path", { d: "M5 18l0 .01", key: "svg-5" }]], Un = d("outline", "list", "List", Jn);
const Zn = [["path", { d: "M12 3a9 9 0 1 0 9 9", key: "svg-0" }]], Qn = d("outline", "loader-2", "Loader2", Zn);
const eo = [["path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5", key: "svg-0" }]], to = d("outline", "location", "Location", eo);
const ao = [["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", key: "svg-0" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }], ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]], no = d("outline", "lock", "Lock", ao);
const oo = [["path", { d: "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M21 12h-13l3 -3", key: "svg-1" }], ["path", { d: "M11 15l-3 -3", key: "svg-2" }]], ro = d("outline", "login", "Login", oo);
const so = [["path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M9 12h12l-3 -3", key: "svg-1" }], ["path", { d: "M18 15l3 -3", key: "svg-2" }]], lo = d("outline", "logout", "Logout", so);
const io = [["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", key: "svg-0" }], ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", key: "svg-1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "svg-2" }], ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", key: "svg-3" }]], co = d("outline", "maximize", "Maximize", io);
const ho = [["path", { d: "M6 7a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4l0 -10", key: "svg-0" }], ["path", { d: "M12 7l0 4", key: "svg-1" }]], po = d("outline", "mouse", "Mouse", ho);
const uo = [["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M8 4l0 16", key: "svg-1" }], ["path", { d: "M16 4l0 16", key: "svg-2" }], ["path", { d: "M4 8l4 0", key: "svg-3" }], ["path", { d: "M4 16l4 0", key: "svg-4" }], ["path", { d: "M4 12l16 0", key: "svg-5" }], ["path", { d: "M16 8l4 0", key: "svg-6" }], ["path", { d: "M16 16l4 0", key: "svg-7" }]], go = d("outline", "movie", "Movie", uo);
const mo = [["path", { d: "M12 18.5l7.265 2.463c.196 .077 .42 .032 .57 -.116a.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463", key: "svg-0" }]], vo = d("outline", "navigation", "Navigation", mo);
const bo = [["path", { d: "M13 20l7 -7", key: "svg-0" }], ["path", { d: "M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7", key: "svg-1" }]], fo = d("outline", "note", "Note", bo);
const xo = [["path", { d: "M8 10v-7l-2 2", key: "svg-0" }], ["path", { d: "M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4", key: "svg-1" }], ["path", { d: "M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2", key: "svg-2" }], ["path", { d: "M6.5 10h3", key: "svg-3" }]], yo = d("outline", "numbers", "Numbers", xo);
const wo = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], ko = d("outline", "package", "Package", wo);
const No = [["path", { d: "M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25", key: "svg-0" }], ["path", { d: "M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }]], Mo = d("outline", "palette", "Palette", No);
const _o = [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", key: "svg-2" }], ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", key: "svg-3" }]], Co = d("outline", "photo", "Photo", _o);
const Io = [["path", { d: "M7 4v16l13 -8l-13 -8", key: "svg-0" }]], $o = d("outline", "player-play", "PlayerPlay", Io);
const So = [["path", { d: "M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }]], Eo = d("outline", "player-stop", "PlayerStop", So);
const Po = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]], To = d("outline", "plus", "Plus", Po);
const Do = [["path", { d: "M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1", key: "svg-0" }]], Lo = d("outline", "puzzle", "Puzzle", Do);
const Ao = [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]], Ro = d("outline", "refresh", "Refresh", Ao);
const Oo = [["path", { d: "M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3", key: "svg-0" }], ["path", { d: "M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3", key: "svg-1" }]], Vo = d("outline", "repeat", "Repeat", Oo);
const jo = [["path", { d: "M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3", key: "svg-0" }], ["path", { d: "M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3", key: "svg-1" }], ["path", { d: "M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], zo = d("outline", "rocket", "Rocket", jo);
const Bo = [["path", { d: "M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057", key: "svg-0" }], ["path", { d: "M3 3l18 18", key: "svg-1" }]], Ho = d("outline", "search-off", "SearchOff", Bo);
const Fo = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Ko = d("outline", "search", "Search", Fo);
const Yo = [["path", { d: "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2", key: "svg-0" }], ["path", { d: "M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2", key: "svg-1" }], ["path", { d: "M7 8l0 .01", key: "svg-2" }], ["path", { d: "M7 16l0 .01", key: "svg-3" }]], Xo = d("outline", "server", "Server", Yo);
const Wo = [["path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065", key: "svg-0" }], ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]], Go = d("outline", "settings", "Settings", Wo);
const qo = [["path", { d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06", key: "svg-0" }], ["path", { d: "M15 19l2 2l4 -4", key: "svg-1" }]], Jo = d("outline", "shield-check", "ShieldCheck", qo);
const Uo = [["path", { d: "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3", key: "svg-0" }]], Zo = d("outline", "shield", "Shield", Uo);
const Qo = [["path", { d: "M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4", key: "svg-0" }], ["path", { d: "M19 21h-4l4 -7h-4", key: "svg-1" }], ["path", { d: "M4 15l3 3l3 -3", key: "svg-2" }], ["path", { d: "M7 6v12", key: "svg-3" }]], er = d("outline", "sort-ascending-letters", "SortAscendingLetters", Qo);
const tr = [["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], ar = d("outline", "square-check", "SquareCheck", tr);
const nr = [["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14", key: "svg-0" }]], or = d("outline", "square", "Square", nr);
const rr = [["path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245", key: "svg-0" }]], sr = d("outline", "star", "Star", rr);
const lr = [["path", { d: "M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3", key: "svg-1" }]], ir = d("outline", "tag", "Tag", lr);
const cr = [["path", { d: "M8 9l3 3l-3 3", key: "svg-0" }], ["path", { d: "M13 15l3 0", key: "svg-1" }], ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12", key: "svg-2" }]], dr = d("outline", "terminal-2", "Terminal2", cr);
const hr = [["path", { d: "M3 7v-2h13v2", key: "svg-0" }], ["path", { d: "M10 5v14", key: "svg-1" }], ["path", { d: "M12 19h-4", key: "svg-2" }], ["path", { d: "M15 13v-1h6v1", key: "svg-3" }], ["path", { d: "M18 12v7", key: "svg-4" }], ["path", { d: "M17 19h2", key: "svg-5" }]], pr = d("outline", "text-size", "TextSize", hr);
const ur = [["path", { d: "M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6", key: "svg-1" }]], gr = d("outline", "toggle-right", "ToggleRight", ur);
const mr = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], vr = d("outline", "trash-x", "TrashX", mr);
const br = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], fr = d("outline", "trash", "Trash", br);
const xr = [["path", { d: "M4 20l3 0", key: "svg-0" }], ["path", { d: "M14 20l7 0", key: "svg-1" }], ["path", { d: "M6.9 15l6.9 0", key: "svg-2" }], ["path", { d: "M10.2 6.3l5.8 13.7", key: "svg-3" }], ["path", { d: "M5 20l6 -16l2 0l7 16", key: "svg-4" }]], yr = d("outline", "typography", "Typography", xr);
const wr = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], kr = d("outline", "upload", "Upload", wr);
const Nr = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h1.5", key: "svg-1" }], ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-2" }], ["path", { d: "M20.2 20.2l1.8 1.8", key: "svg-3" }]], Mr = d("outline", "user-search", "UserSearch", Nr);
const _r = [["path", { d: "M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1", key: "svg-0" }], ["path", { d: "M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5", key: "svg-1" }]], Cr = d("outline", "variable", "Variable", _r);
const Ir = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946", key: "svg-1" }], ["path", { d: "M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1", key: "svg-2" }]], $r = d("outline", "video-off", "VideoOff", Ir);
const Sr = [["path", { d: "M6 21l15 -15l-3 -3l-15 15l3 3", key: "svg-0" }], ["path", { d: "M15 6l3 3", key: "svg-1" }], ["path", { d: "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2", key: "svg-2" }], ["path", { d: "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2", key: "svg-3" }]], Er = d("outline", "wand", "Wand", Sr);
const Pr = [["path", { d: "M12 18l.01 0", key: "svg-0" }], ["path", { d: "M9.172 15.172a4 4 0 0 1 5.656 0", key: "svg-1" }], ["path", { d: "M6.343 12.343a8 8 0 0 1 11.314 0", key: "svg-2" }], ["path", { d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0", key: "svg-3" }]], Tr = d("outline", "wifi", "Wifi", Pr);
const Dr = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M3.6 9h16.8", key: "svg-1" }], ["path", { d: "M3.6 15h16.8", key: "svg-2" }], ["path", { d: "M11.5 3a17 17 0 0 0 0 18", key: "svg-3" }], ["path", { d: "M12.5 3a17 17 0 0 1 0 18", key: "svg-4" }]], Lr = d("outline", "world", "World", Dr);
const Ar = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Rr = d("outline", "x", "X", Ar), Or = {
  account_tree: "IconGitBranch",
  add: "IconPlus",
  ads_click: "IconClick",
  api: "IconApi",
  arrow_back: "IconArrowLeft",
  arrow_drop_down_circle: "IconCircleChevronDown",
  article: "IconFileText",
  audio_file: "IconFile",
  auto_awesome: "IconWand",
  auto_delete: "IconTrash",
  autorenew: "IconRefresh",
  block: "IconBan",
  bolt: "IconBolt",
  call_split: "IconGitBranch",
  cancel: "IconCircleX",
  category: "IconCategory",
  center_focus_strong: "IconFocusCentered",
  check: "IconCheck",
  check_box: "IconSquareCheck",
  check_box_outline_blank: "IconSquare",
  check_circle: "IconCircleCheck",
  circle: "IconCircle",
  close: "IconX",
  code: "IconCode",
  computer: "IconDeviceDesktop",
  content_copy: "IconCopy",
  content_cut: "IconCut",
  copy_all: "IconCopyPlus",
  create_new_folder: "IconFolderPlus",
  csv: "IconFileTypeCsv",
  data_object: "IconBraces",
  database: "IconDatabase",
  delete: "IconTrash",
  delete_sweep: "IconTrashX",
  description: "IconFileDescription",
  dns: "IconServer",
  done: "IconCheck",
  download: "IconDownload",
  drag_and_drop: "IconArrowsMove",
  drag_indicator: "IconGripVertical",
  edit: "IconEdit",
  error: "IconAlertCircle",
  event_repeat: "IconCalendarRepeat",
  expand_more: "IconChevronDown",
  explore_off: "IconCompassOff",
  file: "IconFile",
  fit_screen: "IconMaximize",
  folder: "IconFolder",
  folders: "IconFolders",
  folder_zip: "IconFileZip",
  format_list_numbered: "IconListNumbers",
  fullscreen: "IconMaximize",
  get_content: "IconFileText",
  history: "IconHistory",
  history_toggle: "IconHistoryToggle",
  home: "IconHome",
  hourglass_empty: "IconHourglassEmpty",
  hourglass_top: "IconHourglassHigh",
  image: "IconPhoto",
  info: "IconInfoCircle",
  input: "IconLogin",
  inventory_2: "IconPackage",
  javascript: "IconBrandJavascript",
  json: "IconJson",
  keyboard: "IconKeyboard",
  key: "IconKey",
  label: "IconTag",
  language: "IconWorld",
  layers: "IconLayersLinked",
  link: "IconLink",
  list: "IconList",
  logout: "IconLogout",
  more_vert: "IconDotsVertical",
  mouse: "IconMouse",
  monitor: "IconDeviceDesktopCog",
  movie: "IconMovie",
  my_location: "IconLocation",
  near_me: "IconLocation",
  navigation: "IconNavigation",
  numbers: "IconNumbers",
  open_in_browser: "IconBrowserMaximize",
  open_in_new: "IconExternalLink",
  output: "IconLogout",
  palette: "IconPalette",
  person_search: "IconUserSearch",
  photo_camera: "IconCamera",
  play_arrow: "IconPlayerPlay",
  play_circle: "IconPlayerPlay",
  progress_activity: "IconLoader2",
  psychology: "IconCpu",
  public: "IconWorld",
  published_with_changes: "IconRefresh",
  refresh: "IconRefresh",
  reload: "IconRefresh",
  repeat: "IconRepeat",
  shelves: "IconFiles",
  restart_alt: "IconRefresh",
  restore: "IconHistory",
  rocket_launch: "IconRocket",
  save: "IconDeviceFloppy",
  screenshot_monitor: "IconDeviceDesktop",
  schedule: "IconClock",
  science: "IconFlask",
  search: "IconSearch",
  search_off: "IconSearchOff",
  security: "IconShield",
  select: "IconChevronDown",
  settings: "IconSettings",
  settings_input_component: "IconAdjustmentsHorizontal",
  shuffle: "IconArrowsShuffle",
  smart_toy: "IconCpu",
  sort_by_alpha: "IconSortAscendingLetters",
  spellcheck: "IconAbc",
  star: "IconStar",
  star_border: "IconStar",
  star_outline: "IconStar",
  stop: "IconPlayerStop",
  subdirectory_arrow_right: "IconCornerDownRight",
  table: "IconList",
  tag: "IconTag",
  swap_vert: "IconArrowsUpDown",
  sync: "IconRefresh",
  task_alt: "IconCircleCheck",
  terminal: "IconTerminal2",
  text_fields: "IconTypography",
  text_format: "IconTextSize",
  toggle_on: "IconToggleRight",
  translate: "IconLanguage",
  tune: "IconAdjustmentsHorizontal",
  unarchive: "IconFileZip",
  unfold_more: "IconArrowsMaximize",
  upload: "IconUpload",
  upload_file: "IconFileUpload",
  variable_insert: "IconVariable",
  variables: "IconVariable",
  verified_user: "IconShieldCheck",
  videocam_off: "IconVideoOff",
  visibility: "IconEye",
  visibility_off: "IconEyeOff",
  vpn_lock: "IconLock",
  wait: "IconClock",
  wait_captcha: "IconHourglassHigh",
  wait_downloads: "IconDownload",
  wait_selector: "IconClock",
  warning: "IconAlertTriangle",
  wifi: "IconWifi",
  sticky_note_2: "IconNote",
  cloud: "IconCloud",
  extension: "IconPuzzle"
}, Vr = {
  IconGitBranch: wn,
  IconPlus: To,
  IconClick: da,
  IconApi: _t,
  IconArrowLeft: It,
  IconCircleChevronDown: ra,
  IconFileText: Za,
  IconWand: Er,
  IconTrash: fr,
  IconRefresh: Ro,
  IconBan: Ot,
  IconBolt: jt,
  IconCircleX: la,
  IconCategory: Ut,
  IconFocusCentered: un,
  IconCheck: Qt,
  IconSquareCheck: ar,
  IconSquare: or,
  IconCircleCheck: na,
  IconCircle: ot,
  IconX: Rr,
  IconCode: va,
  IconDeviceDesktop: La,
  IconCopy: ka,
  IconCut: $a,
  IconCopyPlus: ya,
  IconFolderPlus: mn,
  IconFileTypeCsv: en,
  IconBraces: Bt,
  IconDatabase: Ea,
  IconTrashX: vr,
  IconFileDescription: Ja,
  IconServer: Xo,
  IconDownload: za,
  IconArrowsMove: Pt,
  IconGripVertical: Nn,
  IconEdit: Ha,
  IconAlertCircle: wt,
  IconCalendarRepeat: Wt,
  IconChevronDown: ta,
  IconCompassOff: fa,
  IconFile: sn,
  IconMaximize: co,
  IconFolder: bn,
  IconFolders: xn,
  IconFileZip: on,
  IconListNumbers: qn,
  IconHistory: In,
  IconHistoryToggle: _n,
  IconHourglassEmpty: Pn,
  IconHourglassHigh: Dn,
  IconPhoto: Co,
  IconLogin: ro,
  IconPackage: ko,
  IconBrandJavascript: Ft,
  IconJson: On,
  IconKeyboard: Bn,
  IconKey: jn,
  IconWorld: Lr,
  IconLayersLinked: Yn,
  IconList: Un,
  IconLogout: lo,
  IconDotsVertical: Va,
  IconMouse: po,
  IconMovie: go,
  IconLocation: to,
  IconNavigation: vo,
  IconNumbers: yo,
  IconBrowserMaximize: Yt,
  IconExternalLink: Ka,
  IconPalette: Mo,
  IconUserSearch: Mr,
  IconCamera: qt,
  IconPlayerPlay: $o,
  IconLoader2: Qn,
  IconRepeat: Vo,
  IconRocket: zo,
  IconDeviceFloppy: Ra,
  IconClock: pa,
  IconFlask: hn,
  IconSearch: Ko,
  IconSearchOff: Ho,
  IconShield: Zo,
  IconSettings: Go,
  IconArrowsShuffle: Dt,
  IconCpu: Ca,
  IconSortAscendingLetters: er,
  IconAbc: bt,
  IconStar: sr,
  IconPlayerStop: Eo,
  IconCornerDownRight: Ma,
  IconArrowsUpDown: At,
  IconTerminal2: dr,
  IconTypography: yr,
  IconTextSize: pr,
  IconToggleRight: gr,
  IconLanguage: Fn,
  IconAdjustmentsHorizontal: xt,
  IconArrowsMaximize: St,
  IconUpload: kr,
  IconFileUpload: an,
  IconVariable: Cr,
  IconShieldCheck: Jo,
  IconVideoOff: $r,
  IconEye: Ga,
  IconEyeOff: Xa,
  IconLock: no,
  IconAlertTriangle: Nt,
  IconWifi: Tr,
  IconNote: fo,
  IconInfoCircle: An,
  IconLink: Wn,
  IconTag: ir,
  IconHome: Sn,
  IconFiles: cn,
  IconCloud: ga,
  IconDeviceDesktopCog: Ta,
  IconPuzzle: Lo
}, jr = ot, x = nt.memo(({ name: e, className: a = "", fill: s = !1 }) => {
  const l = Or[e] || e, i = Vr[l] || jr;
  return /* @__PURE__ */ t(i, { size: "1.1em", className: `inline-block shrink-0 ${a}`, stroke: 1.8, fill: s ? "currentColor" : "none", "aria-hidden": "true" });
}), rt = {
  name: "block.output",
  label: "Block output",
  description: "Output from the previous block",
  icon: "output"
}, st = [
  { name: "now", label: "Current time", description: "Current ISO-8601 timestamp", icon: "schedule", hasValue: !0 },
  { name: "loop.index", label: "Loop index", description: "Zero-based index in a foreach loop", icon: "format_list_numbered" },
  { name: "loop.count", label: "Loop count", description: "Number of items in the current foreach loop", icon: "tag" },
  { name: "loop.item", label: "Loop item", description: "Current foreach item", icon: "data_object" },
  { name: "loop.text", label: "Loop text", description: "Text of the current foreach item", icon: "text_fields" },
  { name: "loop.html", label: "Loop HTML", description: "HTML of the current foreach item", icon: "code" }
], zr = [rt, ...st], We = (e) => zr.find((a) => a.name === e), Br = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, q = (e) => /[&<>"']/.test(e) ? e.replace(/[&<>"']/g, (a) => Br[a]) : e, Hr = /* @__PURE__ */ new Set([
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
]), Se = (e, a) => {
  if (!e.includes("{$")) return q(e);
  const s = /\{\$([\w.]+)\}/g;
  let l = "", i = 0, r;
  const n = (y) => !!We(y) || !!a && y in a, c = (y) => {
    const v = We(y);
    if (v) return !!v.hasValue;
    const p = a ? a[y] : void 0;
    return p && p.value !== "" && p.value !== void 0 && p.value !== null;
  };
  for (; (r = s.exec(e)) !== null; ) {
    r.index > i && (l += q(e.substring(i, r.index)));
    const y = r[1], v = n(y), p = c(y);
    l += `<span class="${v ? p ? "var-highlight-default" : "var-highlight" : "var-highlight-undefined"}">${q(r[0])}</span>`, i = s.lastIndex;
  }
  return l += q(e.substring(i)), l;
}, Fr = (e) => {
  const a = /("(?:\\.|[^"\\])*")|(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|\b(true|false|null)\b/g;
  let s = "", l = 0, i;
  for (; (i = a.exec(e)) !== null; ) {
    i.index > l && (s += q(e.substring(l, i.index)));
    const r = i[0];
    if (i[1]) {
      let n = !1, c = i.index + r.length;
      for (; c < e.length && /\s/.test(e[c]); ) c += 1;
      e[c] === ":" && (n = !0), s += `<span class="${n ? "code-token-key" : "code-token-string"}">${q(r)}</span>`;
    } else i[2] ? s += `<span class="code-token-number">${q(r)}</span>` : s += `<span class="code-token-boolean">${q(r)}</span>`;
    l = a.lastIndex;
  }
  return s += q(e.substring(l)), s;
}, Kr = (e, a) => {
  const s = /(\{\$[\w.]+\})|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b|\bundefined\b)|(\b[A-Za-z_]\w*\b)/g;
  let l = "", i = 0, r;
  for (; (r = s.exec(e)) !== null; ) {
    r.index > i && (l += q(e.substring(i, r.index)));
    const n = r[0];
    if (r[1])
      l += Se(n, a);
    else if (r[2])
      l += `<span class="code-token-comment">${q(n)}</span>`;
    else if (r[3])
      l += `<span class="code-token-string">${q(n)}</span>`;
    else if (r[4])
      l += `<span class="code-token-number">${q(n)}</span>`;
    else if (r[5])
      l += `<span class="code-token-boolean">${q(n)}</span>`;
    else if (r[6]) {
      const c = Hr.has(n) ? "code-token-keyword" : "code-token-identifier";
      l += `<span class="${c}">${q(n)}</span>`;
    } else
      l += q(n);
    i = s.lastIndex;
  }
  return l += q(e.substring(i)), l;
}, Yr = (e, a) => {
  const s = /<\/?[^>]+>/g;
  let l = "", i = 0, r;
  for (; (r = s.exec(e)) !== null; ) {
    r.index > i && (l += Se(e.substring(i, r.index), a));
    const c = r[0], y = c.match(/^<(\/?[A-Za-z0-9-]+)([\s\S]*?)>$/);
    if (y) {
      const v = y[1], p = y[2];
      let m = q(v);
      m.startsWith("/") ? m = `/<span class="code-token-tag">${m.substring(1)}</span>` : m = `<span class="code-token-tag">${m}</span>`;
      let w = q(p);
      w = w.replace(/(\s)([A-Za-z0-9-:]+)(=)/g, '$1<span class="code-token-attr">$2</span>$3'), w = w.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="code-token-string">$1</span>'), l += `<span class="code-token-punct">&lt;${m}${w}&gt;</span>`;
    } else
      l += `<span class="code-token-punct">${q(c)}</span>`;
    i = s.lastIndex;
  }
  const n = e.substring(i);
  return n && (l += Se(n, a)), l;
}, lt = (e, a, s) => a === "javascript" ? Kr(e, s) : a === "json" ? Fr(e) : a === "html" ? Yr(e, s) : Se(e, s), it = "application/x-figranium-variable", Ee = (e) => Array.from(e.types).includes(it), ct = (e) => e.getData(it) || e.getData("text/plain"), Ge = (e, a, s) => {
  const l = document;
  let i = null;
  const r = l.caretPositionFromPoint?.(a, s);
  r ? (i = document.createRange(), i.setStart(r.offsetNode, r.offset), i.collapse(!0)) : i = l.caretRangeFromPoint?.(a, s) || null, (!i || !e.contains(i.startContainer)) && (i = document.createRange(), i.selectNodeContents(e), i.collapse(!1));
  const n = window.getSelection();
  return n?.removeAllRanges(), n?.addRange(i), i;
}, Ae = (e, a) => e.measureText(a).width, Xr = (e, a, s) => {
  let l = 0, i = a.length;
  for (; l < i; ) {
    const c = Math.ceil((l + i) / 2);
    Ae(e, a.slice(0, c)) <= s ? l = c : i = c - 1;
  }
  if (l >= a.length) return a.length;
  const r = Ae(e, a.slice(0, l)), n = Ae(e, a.slice(0, l + 1));
  return s - r < n - s ? l : l + 1;
}, qe = (e, a, s) => {
  const l = window.getComputedStyle(e), r = document.createElement("canvas").getContext("2d");
  if (!r) return e.selectionStart ?? e.value.length;
  r.font = l.font;
  const n = e.getBoundingClientRect(), c = Number.parseFloat(l.paddingLeft) || 0, y = Number.parseFloat(l.paddingTop) || 0, v = Math.max(0, a - n.left - c + e.scrollLeft), p = e.value.split(`
`);
  let m = 0;
  if (e instanceof HTMLTextAreaElement) {
    const C = Number.parseFloat(l.fontSize) || 16, N = Number.parseFloat(l.lineHeight) || C * 1.5;
    m = Math.max(0, Math.min(p.length - 1, Math.floor((s - n.top - y + e.scrollTop) / N)));
  }
  const w = Xr(r, p[m] || "", v), f = p.slice(0, m).reduce((C, N) => C + N.length + 1, 0) + w;
  return e.focus({ preventScroll: !0 }), e.setSelectionRange(f, f), f;
}, X = ({ value: e, onChange: a, onBlur: s, placeholder: l, variables: i, className: r, syntax: n = "plain", allowVariableInsertion: c = !0 }) => {
  const y = F(null);
  return ae(() => {
    if (y.current) {
      const v = y.current.innerHTML, p = lt(e, n, i);
      if (v !== p) {
        const m = window.getSelection();
        let w = 0;
        if (m && m.rangeCount > 0) {
          const I = m.getRangeAt(0), f = I.cloneRange();
          f.selectNodeContents(y.current), f.setEnd(I.endContainer, I.endOffset), w = f.toString().length;
        }
        if (y.current.innerHTML = p, w > 0) {
          const I = document.createTreeWalker(y.current, NodeFilter.SHOW_TEXT);
          let f = 0, C = I.nextNode();
          for (; C; ) {
            const N = C.textContent?.length || 0;
            if (f + N >= w) {
              const E = document.createRange();
              E.setStart(C, w - f), E.collapse(!0), m?.removeAllRanges(), m?.addRange(E);
              break;
            }
            f += N, C = I.nextNode();
          }
        }
      }
    }
  }, [e, i]), /* @__PURE__ */ t(
    "div",
    {
      ref: y,
      contentEditable: !0,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": l || "Text input",
      "data-variable-insertion-target": c ? "true" : void 0,
      className: `rich-input-content w-full bg-transparent focus:outline-none text-white min-h-[1.5rem] ${r}`,
      "data-placeholder": l,
      onInput: (v) => a(v.currentTarget.textContent || ""),
      onDragOver: (v) => {
        !c || !Ee(v.dataTransfer) || (v.preventDefault(), v.dataTransfer.dropEffect = "copy", v.currentTarget.focus({ preventScroll: !0 }), Ge(v.currentTarget, v.clientX, v.clientY));
      },
      onDrop: (v) => {
        if (!c || !Ee(v.dataTransfer)) return;
        v.preventDefault(), v.stopPropagation();
        const p = ct(v.dataTransfer);
        if (!p) return;
        const m = Ge(v.currentTarget, v.clientX, v.clientY);
        m.deleteContents();
        const w = document.createTextNode(p);
        m.insertNode(w), m.setStartAfter(w), m.collapse(!0);
        const I = window.getSelection();
        I?.removeAllRanges(), I?.addRange(m), a(v.currentTarget.textContent || "");
      },
      onBlur: (v) => {
        const p = v.currentTarget.textContent || "";
        a(p), s?.(p);
      }
    }
  );
}, we = ({ value: e, onChange: a, onBlur: s, language: l, placeholder: i, className: r, readOnly: n, variables: c, allowVariableInsertion: y = !0 }) => {
  const v = F(null), p = F(null), m = e || i || "", w = !e && !!i, I = $e(() => lt(m, l, c), [m, l, c]);
  return ae(() => {
    const f = v.current, C = p.current;
    if (!f || !C) return;
    const N = () => {
      C.scrollTop = f.scrollTop, C.scrollLeft = f.scrollLeft;
    };
    return f.addEventListener("scroll", N), () => {
      f.removeEventListener("scroll", N);
    };
  }, []), /* @__PURE__ */ o(
    "div",
    {
      className: `code-editor ${r || ""}`,
      onWheel: (f) => {
        const C = v.current;
        C && (C.scrollHeight <= C.clientHeight || (C.scrollTop += f.deltaY, C.scrollLeft += f.deltaX, C.focus(), f.preventDefault()));
      },
      children: [
        /* @__PURE__ */ t(
          "pre",
          {
            ref: p,
            className: `code-editor-pre ${w ? "code-editor-placeholder" : ""}`,
            "aria-hidden": !0,
            dangerouslySetInnerHTML: { __html: I }
          }
        ),
        /* @__PURE__ */ t(
          "textarea",
          {
            ref: v,
            value: e,
            onChange: (f) => a?.(f.target.value),
            onBlur: (f) => s?.(f.target.value),
            spellCheck: !1,
            wrap: "off",
            readOnly: n,
            className: `code-editor-textarea ${n ? "code-editor-textarea-readonly" : ""}`,
            "aria-label": "Code editor",
            "data-variable-insertion-target": !n && y ? "true" : void 0,
            tabIndex: n ? -1 : 0,
            onDragOver: (f) => {
              n || !y || !Ee(f.dataTransfer) || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", qe(f.currentTarget, f.clientX, f.clientY));
            },
            onDrop: (f) => {
              if (n || !y || !Ee(f.dataTransfer)) return;
              f.preventDefault(), f.stopPropagation();
              const C = ct(f.dataTransfer);
              if (!C) return;
              const N = qe(f.currentTarget, f.clientX, f.clientY), E = `${e.slice(0, N)}${C}${e.slice(N)}`;
              a?.(E), requestAnimationFrame(() => {
                const R = N + C.length;
                v.current?.focus({ preventScroll: !0 }), v.current?.setSelectionRange(R, R);
              });
            }
          }
        )
      ]
    }
  );
}, ze = [
  { type: "click", label: "Click", description: "Click an element", icon: "ads_click" },
  { type: "check", label: "Check", description: "Ensure a checkbox is checked", icon: "check_box" },
  { type: "uncheck", label: "Uncheck", description: "Ensure a checkbox is unchecked", icon: "check_box_outline_blank" },
  { type: "drag_and_drop", label: "Drag and Drop", description: "Drag an element to a target", icon: "drag_indicator" },
  { type: "reload", label: "Reload", description: "Reload the current page", icon: "refresh" },
  { type: "select", label: "Select", description: "Select an option from a menu", icon: "arrow_drop_down_circle" },
  { type: "type", label: "Type", description: "Type text into a field", icon: "text_format" },
  { type: "hover", label: "Hover", description: "Hover an element", icon: "my_location" },
  { type: "press", label: "Press", description: "Press a key", icon: "keyboard" },
  { type: "wait", label: "Wait", description: "Pause for seconds", icon: "schedule" },
  { type: "wait_selector", label: "Wait for Selector", description: "Wait until element appears", icon: "schedule" },
  { type: "wait_downloads", label: "Wait for Downloads", description: "Wait until downloads finish", icon: "download" },
  { type: "scroll", label: "Scroll", description: "Scroll the page or container", icon: "swap_vert" },
  { type: "javascript", label: "JavaScript", description: "Run custom JS", icon: "javascript" },
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
  { type: "set", label: "Set Variable", description: "Update variable value", icon: "variable_insert" },
  { type: "stop", label: "Stop Task", description: "Stop task with status", icon: "stop" },
  { type: "on_error", label: "On Error", description: "Run on failure", icon: "warning" },
  { type: "start", label: "Start Task", description: "Run another task", icon: "play_circle" },
  { type: "http_request", label: "HTTP Request", description: "Make an API call", icon: "language" },
  { type: "get_content", label: "Get Content", description: "Get page or element text content", icon: "article" },
  { type: "solve_captcha", label: "Solve Captcha", description: "Solve through a compatible remote endpoint or the active-browser local solver", icon: "verified_user" },
  { type: "wait_captcha", label: "Wait for Captcha", description: "Wait until a captcha interaction is ready", icon: "hourglass_top" },
  { type: "do_nothing", label: "Do Nothing", description: "No operation block", icon: "block" }
], Wr = /* @__PURE__ */ new Set(["else", "end"]);
ze.filter(
  (e) => !Wr.has(e.type)
);
const dt = (e) => {
  const a = e.getBoundingClientRect(), s = 6, l = 12, i = 280, r = window.innerHeight - a.bottom - l, n = a.top - l, c = r < 180 && n > r, y = Math.max(120, Math.min(i, (c ? n : r) - s)), v = Math.min(Math.max(a.width, 160), window.innerWidth - l * 2), p = Math.max(l, Math.min(a.left, window.innerWidth - v - l));
  return c ? { left: p, bottom: window.innerHeight - a.top + s, width: v, maxHeight: y } : { left: p, top: a.bottom + s, width: v, maxHeight: y };
};
function se({
  value: e,
  options: a,
  onChange: s,
  placeholder: l = "Select…",
  disabled: i = !1,
  ariaLabel: r,
  className: n = ""
}) {
  const c = F(null), y = F(null), v = F(""), p = F(null), [m, w] = j(null), I = a.findIndex((M) => M.value === e), [f, C] = j(Math.max(0, I)), N = I >= 0 ? a[I] : null, E = (M = !1) => {
    w(null), M && requestAnimationFrame(() => c.current?.focus());
  }, R = () => {
    i || !c.current || (C(I >= 0 ? I : Math.max(0, a.findIndex((M) => !M.disabled))), w(dt(c.current)));
  };
  ae(() => {
    if (!m) return;
    const M = (B) => {
      const K = B.target;
      !c.current?.contains(K) && !y.current?.contains(K) && E();
    }, D = () => E(), L = (B) => {
      y.current?.contains(B.target) || E();
    };
    return document.addEventListener("mousedown", M), window.addEventListener("resize", D), window.addEventListener("scroll", L, !0), requestAnimationFrame(() => y.current?.focus()), () => {
      document.removeEventListener("mousedown", M), window.removeEventListener("resize", D), window.removeEventListener("scroll", L, !0);
    };
  }, [m]), ae(() => () => {
    p.current && clearTimeout(p.current);
  }, []);
  const H = (M) => {
    if (!a.length) return;
    let D = f;
    for (let L = 0; L < a.length; L += 1)
      if (D = (D + M + a.length) % a.length, !a[D].disabled) {
        C(D), requestAnimationFrame(() => y.current?.querySelector(`[data-option-index="${D}"]`)?.scrollIntoView({ block: "nearest" }));
        return;
      }
  }, P = (M) => {
    M.disabled || (s(M.value), E(!0));
  }, z = (M) => {
    if (!m && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(M.key)) {
      M.preventDefault(), R();
      return;
    }
    if (m) {
      if (M.key === "Escape" || M.key === "Tab")
        M.key === "Escape" && M.preventDefault(), E(M.key === "Escape");
      else if (M.key === "ArrowDown" || M.key === "ArrowUp")
        M.preventDefault(), H(M.key === "ArrowDown" ? 1 : -1);
      else if (M.key === "Home" || M.key === "End") {
        M.preventDefault();
        const D = a.map((B, K) => ({ option: B, index: K })).filter(({ option: B }) => !B.disabled), L = M.key === "Home" ? D[0]?.index : D[D.length - 1]?.index;
        L !== void 0 && C(L);
      } else if (M.key === "Enter" || M.key === " ")
        M.preventDefault(), a[f] && P(a[f]);
      else if (M.key.length === 1 && !M.ctrlKey && !M.metaKey && !M.altKey) {
        v.current += M.key.toLowerCase();
        const D = a.findIndex((L) => !L.disabled && L.label.toLowerCase().startsWith(v.current));
        D >= 0 && C(D), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
          v.current = "";
        }, 600);
      }
    }
  };
  return /* @__PURE__ */ o(te, { children: [
    /* @__PURE__ */ o(
      "button",
      {
        ref: c,
        type: "button",
        role: "combobox",
        "aria-label": r,
        "aria-expanded": !!m,
        "aria-haspopup": "listbox",
        disabled: i,
        onClick: () => m ? E() : R(),
        onKeyDown: z,
        className: `custom-dropdown-trigger ${n}`,
        children: [
          /* @__PURE__ */ o("span", { className: "flex items-center gap-2 min-w-0", children: [
            N?.iconUrl ? /* @__PURE__ */ t("img", { src: N.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${N.iconImageClassName || ""}` }) : null,
            !N?.iconUrl && N?.icon ? /* @__PURE__ */ t(x, { name: N.icon, className: `text-base shrink-0 ${N.iconClassName || "theme-text-faint"}` }) : null,
            /* @__PURE__ */ t("span", { className: `truncate ${N ? "" : "theme-text-faint"}`, children: N?.label || l })
          ] }),
          /* @__PURE__ */ t(x, { name: "expand_more", className: `text-base shrink-0 transition-transform ${m ? "rotate-180" : ""}` })
        ]
      }
    ),
    m ? ke(
      /* @__PURE__ */ t(
        "div",
        {
          ref: y,
          role: "listbox",
          "aria-label": r,
          tabIndex: -1,
          onKeyDown: z,
          className: "custom-dropdown-menu custom-scrollbar",
          style: { left: m.left, top: m.top, bottom: m.bottom, width: m.width, maxHeight: m.maxHeight },
          children: a.map((M, D) => /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": M.value === e,
              disabled: M.disabled,
              "data-option-index": D,
              onMouseEnter: () => !M.disabled && C(D),
              onClick: () => P(M),
              className: `custom-dropdown-option ${f === D ? "custom-dropdown-option-active" : ""}`,
              children: [
                /* @__PURE__ */ o("span", { className: "flex items-center gap-2 min-w-0", children: [
                  M.iconUrl ? /* @__PURE__ */ t("img", { src: M.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${M.iconImageClassName || ""}` }) : null,
                  !M.iconUrl && M.icon ? /* @__PURE__ */ t(x, { name: M.icon, className: `text-base shrink-0 ${M.iconClassName || "theme-text-faint"}` }) : null,
                  /* @__PURE__ */ t("span", { className: "truncate", children: M.label })
                ] }),
                M.value === e ? /* @__PURE__ */ t(x, { name: "check", className: "text-sm shrink-0" }) : null
              ]
            },
            `${String(M.value)}-${D}`
          ))
        }
      ),
      document.body
    ) : null
  ] });
}
function Gr({ value: e, options: a, onChange: s, ariaLabel: l, placeholder: i, disabled: r, className: n = "", autoFocus: c, onEnter: y, onEscape: v }) {
  const p = F(null), m = F(null), [w, I] = j(null), [f, C] = j(0), N = $e(() => {
    const P = e.trim().toLowerCase();
    return a.filter((z) => !P || z.toLowerCase().includes(P)).slice(0, 30);
  }, [a, e]), E = () => {
    !r && p.current && N.length && I(dt(p.current));
  }, R = () => I(null);
  ae(() => {
    if (!w) return;
    const P = (D) => {
      const L = D.target;
      !p.current?.contains(L) && !m.current?.contains(L) && R();
    }, z = () => R(), M = (D) => {
      m.current?.contains(D.target) || R();
    };
    return document.addEventListener("mousedown", P), window.addEventListener("resize", z), window.addEventListener("scroll", M, !0), () => {
      document.removeEventListener("mousedown", P), window.removeEventListener("resize", z), window.removeEventListener("scroll", M, !0);
    };
  }, [w]);
  const H = (P) => {
    s(P), R(), p.current?.focus();
  };
  return /* @__PURE__ */ o(te, { children: [
    /* @__PURE__ */ o("div", { className: `relative ${n}`, children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: p,
          value: e,
          onChange: (P) => {
            s(P.target.value), C(0), requestAnimationFrame(E);
          },
          onFocus: E,
          onKeyDown: (P) => {
            P.key === "ArrowDown" && N.length ? (P.preventDefault(), w ? C((z) => (z + 1) % N.length) : E()) : P.key === "ArrowUp" && N.length ? (P.preventDefault(), w ? C((z) => (z - 1 + N.length) % N.length) : E()) : P.key === "Enter" ? (P.preventDefault(), w && N[f] ? H(N[f]) : y?.()) : P.key === "Escape" && (w ? R() : v?.());
          },
          placeholder: i,
          disabled: r,
          "aria-label": l,
          role: "combobox",
          "aria-expanded": !!w,
          "aria-autocomplete": "list",
          className: "w-full bg-transparent text-xs theme-text font-mono focus:outline-none",
          autoFocus: c
        }
      ),
      /* @__PURE__ */ t("button", { type: "button", onClick: () => w ? R() : E(), className: "absolute right-0 top-1/2 -translate-y-1/2 theme-text-faint", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ t(x, { name: "expand_more", className: "text-base" }) })
    ] }),
    w && N.length ? ke(
      /* @__PURE__ */ t("div", { ref: m, role: "listbox", "aria-label": `${l} suggestions`, className: "custom-dropdown-menu custom-scrollbar", style: { left: w.left, top: w.top, bottom: w.bottom, width: w.width, maxHeight: w.maxHeight }, children: N.map((P, z) => /* @__PURE__ */ o("button", { type: "button", role: "option", "aria-selected": P === e, onMouseEnter: () => C(z), onClick: () => H(P), className: `custom-dropdown-option ${f === z ? "custom-dropdown-option-active" : ""}`, children: [
        /* @__PURE__ */ t("span", { className: "truncate font-mono normal-case tracking-normal", children: P }),
        P === e ? /* @__PURE__ */ t(x, { name: "check", className: "text-sm" }) : null
      ] }, P)) }),
      document.body
    ) : null
  ] });
}
const qr = {
  string: "text_fields",
  number: "numbers",
  boolean: "toggle_on",
  selector: "ads_click"
}, Jr = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, Be = ({
  variables: e,
  canInsertVariable: a = !1,
  loopVariablesAvailable: s = !1,
  onInsertVariable: l
}) => {
  const i = Object.entries(e || {}), [r, n] = j("variables"), c = (v, p = !1) => ({
    draggable: !p,
    disabled: p,
    "aria-disabled": p || !a,
    onClick: () => {
      a && !p && l?.(v);
    },
    onDragStart: (m) => {
      if (p) {
        m.preventDefault();
        return;
      }
      const w = `{$${v}}`;
      m.dataTransfer.effectAllowed = "copy", m.dataTransfer.setData("text/plain", w), m.dataTransfer.setData("application/x-figranium-variable", w);
    }
  }), y = (v) => {
    const p = v.name.startsWith("loop.") && !s;
    return /* @__PURE__ */ o("div", { className: `flex w-full items-start gap-3 ${p ? "opacity-35" : ""}`, children: [
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          ...c(v.name, p),
          className: `inline-flex max-w-[58%] shrink-0 overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left ${p ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing"} ${a ? "" : "opacity-75"}`,
          title: p ? "Available only inside a For Each loop" : a ? `Insert {$${v.name}}` : `Drag {$${v.name}} into a field`,
          children: [
            /* @__PURE__ */ t("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ t(x, { name: v.icon, className: "text-sm" }) }),
            /* @__PURE__ */ t("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: v.name })
          ]
        }
      ),
      /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: v.description })
    ] }, v.name);
  };
  return /* @__PURE__ */ o("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ o("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
        /* @__PURE__ */ t(x, { name: "variables", className: "text-sm" }),
        "Variables"
      ] }),
      /* @__PURE__ */ t("span", { className: "text-[10px] text-[var(--app-text-faint)]", children: i.length })
    ] }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex gap-1 border-b theme-border", role: "tablist", "aria-label": "Variable categories", children: [
      /* @__PURE__ */ t("button", { type: "button", role: "tab", "aria-selected": r === "variables", onClick: () => n("variables"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${r === "variables" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "Variables" }),
      /* @__PURE__ */ t("button", { type: "button", role: "tab", "aria-selected": r === "more", onClick: () => n("more"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${r === "more" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "More" })
    ] }),
    /* @__PURE__ */ t("p", { className: "mt-2 text-[10px] text-[var(--app-text-faint)]", children: a ? "Click or drag a variable into a field." : "Drag a variable, or focus a field before clicking." }),
    /* @__PURE__ */ o("div", { className: "mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1 custom-scrollbar", children: [
      r === "variables" && i.map(([v, p]) => /* @__PURE__ */ o("div", { className: "flex w-full items-start gap-3", children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            ...c(v),
            className: `inline-flex max-w-[58%] shrink-0 cursor-grab overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left active:cursor-grabbing ${a ? "" : "opacity-75"}`,
            title: a ? `Insert {$${v}}` : `Drag {$${v}} into a field`,
            children: [
              /* @__PURE__ */ t("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ t(x, { name: qr[p.type], className: "text-sm" }) }),
              /* @__PURE__ */ t("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: v })
            ]
          }
        ),
        /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 whitespace-pre-wrap break-words pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: Jr(p.value) })
      ] }, v)),
      r === "variables" && y(rt),
      r === "variables" && i.length === 0 && /* @__PURE__ */ t("p", { className: "py-4 text-center text-xs text-[var(--app-text-faint)]", children: "No task variables defined" }),
      r === "more" && st.map(y)
    ] })
  ] });
}, Ur = /* @__PURE__ */ new Set(["while", "repeat", "foreach"]), Zr = /* @__PURE__ */ new Set([
  "if",
  "while",
  "repeat",
  "foreach",
  "on_error"
]), Qr = (e) => Ur.has(e), Pe = (e) => Zr.has(e), es = (e, a) => {
  const s = e[a];
  if (!s || !Pe(s.type)) return null;
  let l = 1;
  for (let i = a + 1; i < e.length; i += 1) {
    const r = e[i];
    if (Pe(r.type) && (l += 1), r.type === "end" && (l -= 1), l === 0) return i;
  }
  return null;
}, ts = (e) => `if:${e}:true`, as = (e) => `if:${e}:false`, ns = (e) => `loop:${e}:body`, ht = {
  selector: "Selector",
  targetSelector: "Target selector",
  value: "Value",
  key: "Key",
  conditionVar: "Variable",
  conditionVarType: "Variable type",
  conditionOp: "Relation",
  conditionValue: "Comparison value",
  typeMode: "Typing mode",
  clickType: "Click type",
  method: "Method",
  headers: "Headers",
  body: "Body",
  timeout: "Timeout",
  captchaType: "Captcha type"
}, os = Object.keys(ht), rs = (e, a) => typeof e != "string" || !e.includes("{$") ? e : e.replace(/\{\$([\w.]+)\}/g, (s, l) => {
  if (l === "now") return (/* @__PURE__ */ new Date()).toISOString();
  const i = a[l]?.value;
  if (i == null) return "";
  if (typeof i == "object")
    try {
      return JSON.stringify(i);
    } catch {
      return String(i);
    }
  return String(i);
}), ss = (e, a) => {
  const s = [];
  for (const l of os) {
    const i = e[l];
    i == null || i === "" || s.push({ key: l, label: ht[l] || l, raw: i, resolved: rs(i, a) });
  }
  return s;
}, ls = (e) => {
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
}, Me = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, is = {
  success: "text-green-500",
  error: "text-red-500",
  skipped: "text-amber-500",
  stopped: "text-amber-500",
  not_reached: "text-[var(--app-text-muted)]"
}, cs = ({
  configuration: e,
  action: a,
  actions: s,
  variables: l,
  canInsertVariable: i,
  isTesting: r,
  testError: n,
  testResult: c,
  onInsertVariable: y,
  onRunTest: v,
  onStopTest: p
}) => {
  const m = ss(a, l), w = $e(() => {
    const f = s.findIndex((N) => N.id === a.id);
    if (f < 1) return !1;
    const C = [];
    for (let N = 0; N < f; N++) {
      const E = s[N].type;
      Pe(E) ? C.push(E) : E === "end" && C.pop();
    }
    return C.includes("foreach");
  }, [a.id, s]), I = $e(() => c ? Object.entries(c.variables || {}).filter(([f, C]) => f !== "block.output" && !Object.is(l[f]?.value, C)) : [], [c, l]);
  return /* @__PURE__ */ o("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ o("div", { className: "min-w-0 space-y-6", children: [
      e,
      /* @__PURE__ */ o("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
          /* @__PURE__ */ t(x, { name: "input", className: "text-sm" }),
          " Inputs"
        ] }),
        /* @__PURE__ */ o("div", { className: "mt-3 space-y-2", children: [
          m.map((f) => {
            const N = !!c && Object.prototype.hasOwnProperty.call(c?.resolvedInputs || {}, f.key) ? c?.resolvedInputs[f.key] : f.resolved;
            return /* @__PURE__ */ o("div", { className: "rounded-xl bg-[var(--app-input)] px-3 py-2", children: [
              /* @__PURE__ */ t("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: f.label }),
              /* @__PURE__ */ t("pre", { className: "mt-1 whitespace-pre-wrap break-words font-mono text-[11px] text-[var(--app-text)]", children: Me(N) }),
              !Object.is(f.raw, N) && /* @__PURE__ */ o("div", { className: "mt-1 truncate font-mono text-[10px] text-[var(--app-text-faint)]", children: [
                "Raw: ",
                Me(f.raw)
              ] })
            ] }, f.key);
          }),
          m.length === 0 && /* @__PURE__ */ t("p", { className: "text-xs text-[var(--app-text-faint)]", children: "No configurable inputs." })
        ] }),
        /* @__PURE__ */ o("div", { className: "mt-4 border-t theme-border pt-4", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t(x, { name: "output", className: "text-sm" }),
            " Output"
          ] }),
          /* @__PURE__ */ t("p", { className: "mt-2 text-xs leading-5 text-[var(--app-text-muted)]", children: ls(a) }),
          a.varName && /* @__PURE__ */ o("p", { className: "mt-2 font-mono text-[11px] text-blue-500", children: [
            "Stores in ",
            a.varName
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o("aside", { className: "min-w-0 space-y-5", "aria-label": "Block context", children: [
      /* @__PURE__ */ t(Be, { variables: l, canInsertVariable: i, loopVariablesAvailable: w, onInsertVariable: y }),
      /* @__PURE__ */ o("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", "aria-live": "polite", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t(x, { name: "science", className: "text-sm" }),
            " Test block"
          ] }),
          c && /* @__PURE__ */ t("span", { className: `text-[10px] font-bold tracking-wider ${is[c.status]}`, children: c.status.replace("_", " ") })
        ] }),
        /* @__PURE__ */ t("p", { className: "mt-2 text-[10px] leading-4 text-[var(--app-text-faint)]", children: "Runs preceding blocks in a temporary browser. Actions may affect the target site." }),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: r ? p : v,
            "aria-busy": r,
            className: `mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${r ? "border border-red-400/30 bg-red-500/10 text-red-500 hover:bg-red-500/15" : "theme-accent-bg hover:opacity-90"}`,
            children: [
              /* @__PURE__ */ t(x, { name: r ? "stop" : "play_arrow", className: r ? "text-sm" : "text-base" }),
              r ? "Stop test" : "Run through block"
            ]
          }
        ),
        n && /* @__PURE__ */ t("p", { className: "mt-3 text-xs leading-5 text-red-500", children: n }),
        c?.status === "error" && c.error && /* @__PURE__ */ t("p", { className: "mt-3 rounded-xl border border-red-400/20 bg-red-500/[0.08] px-3 py-2 text-xs leading-5 text-red-500", children: c.error }),
        c && /* @__PURE__ */ o("div", { className: "mt-4 space-y-3 border-t theme-border pt-4", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-[10px] text-[var(--app-text-faint)]", children: [
            /* @__PURE__ */ t("span", { children: "Latest result" }),
            /* @__PURE__ */ o("span", { children: [
              c.durationMs,
              "ms"
            ] })
          ] }),
          /* @__PURE__ */ t("pre", { className: "max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[11px] leading-5 text-[var(--app-code-text)] custom-scrollbar", children: Me(c.output) }),
          I.length > 0 && /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: "Changed variables" }),
            /* @__PURE__ */ t("div", { className: "mt-2 space-y-1", children: I.map(([f, C]) => /* @__PURE__ */ o("div", { className: "flex gap-2 font-mono text-[10px] text-[var(--app-text-muted)]", children: [
              /* @__PURE__ */ t("span", { className: "text-blue-500", children: f }),
              /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 truncate text-right", children: Me(C) })
            ] }, f)) })
          ] }),
          c.screenshotUrl && /* @__PURE__ */ t("img", { src: c.screenshotUrl, alt: "Page after the block test", className: "w-full rounded-xl border theme-border object-cover" }),
          c.logs.length > 0 && /* @__PURE__ */ o("details", { className: "text-xs text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ t("summary", { className: "cursor-pointer select-none", children: "Execution logs" }),
            /* @__PURE__ */ t("pre", { className: "mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[10px] leading-4 custom-scrollbar", children: c.logs.join(`
`) })
          ] })
        ] })
      ] })
    ] })
  ] });
}, He = ({ icon: e, title: a, children: s, onClose: l }) => (ae(() => {
  const i = (r) => {
    r.key === "Escape" && l();
  };
  return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
}, [l]), ke(
  /* @__PURE__ */ t(
    "div",
    {
      className: "fixed inset-0 z-[190] flex items-center justify-center bg-black/65 p-3 backdrop-blur-lg sm:p-6 lg:p-10",
      onPointerDown: (i) => i.stopPropagation(),
      onPointerUp: (i) => i.stopPropagation(),
      onMouseDown: (i) => i.stopPropagation(),
      onMouseUp: (i) => i.stopPropagation(),
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ o(
        "section",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "config-modal-title",
          className: "theme-surface theme-text flex max-h-[calc(100vh-1.5rem)] min-h-[min(540px,calc(100vh-1.5rem))] w-full max-w-[1200px] flex-col gap-6 rounded-[28px] border theme-border-strong p-5 shadow-[0_32px_100px_rgba(0,0,0,0.55)] animate-in fade-in zoom-in-95 duration-200 sm:max-h-[90vh] sm:w-[92vw] sm:p-8 lg:p-10",
          onClick: (i) => i.stopPropagation(),
          children: [
            /* @__PURE__ */ o("header", { className: "flex shrink-0 items-center justify-between gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-3", children: [
                /* @__PURE__ */ t(x, { name: e, className: "shrink-0 text-base text-[var(--app-text-muted)]" }),
                /* @__PURE__ */ t("h2", { id: "config-modal-title", className: "truncate text-base font-semibold normal-case tracking-normal text-[var(--app-text)]", children: a })
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: l,
                  className: "rounded-md p-1 text-[var(--app-text-faint)] transition-colors hover:text-[var(--app-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)]",
                  "aria-label": "Close",
                  title: "Close",
                  children: /* @__PURE__ */ t(x, { name: "close", className: "text-[12px]" })
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-y-auto pr-1 custom-scrollbar sm:pr-3", children: s })
          ]
        }
      )
    }
  ),
  document.body
)), ds = (e) => e instanceof HTMLElement && e.dataset.variableInsertionTarget === "true", Fe = () => {
  const [e, a] = j(!1), s = F(null), l = G((r) => {
    if (ds(r)) {
      if (r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement)
        s.current = {
          target: r,
          start: r.selectionStart ?? r.value.length,
          end: r.selectionEnd ?? r.value.length
        };
      else {
        const n = window.getSelection(), c = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
        s.current = {
          target: r,
          range: c && r.contains(c.commonAncestorContainer) ? c.cloneRange() : void 0
        };
      }
      a(!0);
    }
  }, []), i = G((r) => {
    const n = s.current;
    if (!n) return;
    const c = `{$${r}}`, { target: y } = n;
    if (y.focus(), y instanceof HTMLInputElement || y instanceof HTMLTextAreaElement) {
      const w = n.start ?? y.value.length, I = n.end ?? w;
      y.setRangeText(c, w, I, "end"), y.dispatchEvent(new Event("input", { bubbles: !0 }));
      const f = w + c.length;
      y.setSelectionRange(f, f), s.current = { target: y, start: f, end: f };
      return;
    }
    const v = window.getSelection(), p = n.range || document.createRange();
    n.range || (p.selectNodeContents(y), p.collapse(!1)), v?.removeAllRanges(), v?.addRange(p), p.deleteContents();
    const m = document.createTextNode(c);
    p.insertNode(m), p.setStartAfter(m), p.collapse(!0), v?.removeAllRanges(), v?.addRange(p), s.current = { target: y, range: p.cloneRange() }, y.dispatchEvent(new Event("input", { bubbles: !0 }));
  }, []);
  return { canInsertVariable: e, captureInsertionSelection: l, insertVariable: i };
}, hs = [
  { value: "Control", label: "Ctrl" },
  { value: "Shift", label: "Shift" },
  { value: "Alt", label: "Alt" },
  { value: "Meta", label: "Meta" }
], ps = [
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
].concat([...Array(10)].map((e, a) => `${a}`)).concat(Array.from({ length: 26 }, (e, a) => String.fromCharCode(65 + a))), us = [
  { value: "replace", label: "Replace Text" },
  { value: "append", label: "Append Text" }
], gs = [
  { value: "single", label: "Single Click" },
  { value: "double", label: "Double Click" },
  { value: "right", label: "Right Click" }
], ms = (e) => {
  if (!e) return { modifiers: [], baseKey: "" };
  const a = e.split("+"), s = a.pop() || "";
  return { modifiers: a, baseKey: s };
}, Je = (e, a) => [...e.filter(Boolean), a].filter(Boolean).join("+"), vs = (e) => {
  const a = (e || "").trim(), s = a.match(/^\{\$([\w.]+)\}$/);
  return s ? s[1] : a;
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
}, bs = ["else", "end", "on_error", "do_nothing", "reload", "finalize_uploads"], fs = ({
  action: e,
  task: a,
  variables: s,
  availableTasks: l,
  selectorOptions: i,
  onUpdate: r,
  onAutoSave: n,
  onClose: c,
  onStartInspect: y,
  onCreateVariable: v,
  onDeleteVariable: p,
  testResult: m,
  onTestResult: w
}) => {
  const I = ze.find((g) => g.type === e.type), f = I?.label || e.type, [C, N] = j(!1), [E, R] = j(null), { canInsertVariable: H, captureInsertionSelection: P, insertVariable: z } = Fe(), M = F(null), D = F(null), L = F(0), [B, K] = j(!1), [W, le] = j(""), [J, ie] = j(!1), [re, Y] = j(null), [k, _] = j([]);
  ae(() => {
    e.type === "upload" && fetch("/api/cabinets").then((g) => g.ok ? g.json() : null).then((g) => {
      g?.cabinets && _(g.cabinets);
    }).catch(() => {
    });
  }, [e.type]);
  const ne = async () => {
    if (W.trim()) {
      ie(!0), Y(null);
      try {
        const g = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: W.trim() })
        }), b = await g.json();
        if (!g.ok) throw new Error(b.details ? `${b.error}: ${b.details}` : b.error || "Generation failed");
        r(e.id, { value: b.script }), K(!1), le("");
      } catch (g) {
        Y(g.message);
      } finally {
        ie(!1);
      }
    }
  }, Q = G((g = !0) => {
    const b = D.current;
    b && fetch("/api/executions/stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ runId: b })
    }).catch(() => {
    }), M.current?.abort(), M.current = null, D.current = null, N(!1), g && L.current && w({
      actionId: e.id,
      status: "stopped",
      durationMs: Date.now() - L.current,
      resolvedInputs: {},
      variables: Object.fromEntries(Object.entries(s).map(([S, $]) => [S, $.value])),
      logs: ["Block test stopped by user."],
      screenshotUrl: null,
      timestamp: Date.now()
    });
  }, [e.id, w, s]), he = G(async () => {
    if (C) return;
    const g = `block_test_${Date.now()}_${Math.floor(Math.random() * 1e3)}`, b = new AbortController(), S = Object.fromEntries(
      Object.entries(s).map(([$, de]) => [$, de.value])
    );
    M.current = b, D.current = g, L.current = Date.now(), N(!0), R(null), n();
    try {
      const $ = await fetch("/api/tasks/test-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskSnapshot: a, targetActionId: e.id, variables: S, runId: g }),
        signal: b.signal
      });
      if ($.redirected && new URL($.url).pathname === "/login")
        throw new Error("Your session expired. Sign in again, then retry the block test.");
      if (!$.headers.get("content-type")?.includes("application/json"))
        throw $.status === 404 ? new Error("The block-test endpoint is unavailable. Restart the backend and refresh this page.") : new Error(`The block-test endpoint returned an unexpected response (${$.status}).`);
      const O = await $.json();
      if (!$.ok) throw new Error(O.details || O.error || "Block test failed");
      w({
        actionId: e.id,
        status: O.status || "not_reached",
        durationMs: Number(O.durationMs) || 0,
        resolvedInputs: O.resolvedInputs || {},
        output: O.output,
        error: O.errorMessage,
        variables: O.variables || {},
        logs: Array.isArray(O.logs) ? O.logs : [],
        screenshotUrl: O.screenshotUrl || null,
        timestamp: Number(O.timestamp) || Date.now()
      });
    } catch ($) {
      $?.name !== "AbortError" && R($?.message || "Block test failed");
    } finally {
      M.current === b && (M.current = null, D.current = null, N(!1));
    }
  }, [e.id, C, n, w, a, s]), ce = G(() => {
    M.current && Q(!1), c();
  }, [c, Q]), be = F(Q);
  be.current = Q, ae(() => () => {
    M.current && be.current(!1);
  }, []);
  const ge = F(/* @__PURE__ */ new Set());
  ae(() => {
    const g = [
      e.selector,
      e.targetSelector,
      e.value,
      e.key,
      e.varName,
      e.conditionValue,
      e.headers,
      e.body
    ], b = /\{\$([\w.]+)\}/g, S = /* @__PURE__ */ new Set();
    for (const $ of g) {
      if (!$) continue;
      b.lastIndex = 0;
      let de;
      for (; (de = b.exec($)) !== null; ) {
        const O = de[1];
        O !== "now" && O !== "block.output" && S.add(O);
      }
    }
    for (const $ of S)
      $ in s || (v?.($), ge.current.add($));
    for (const $ of ge.current)
      !S.has($) && s[$]?.autoCreated && (p?.($), ge.current.delete($));
  }, [e]);
  const A = (g, b) => /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1 block", children: g }),
    b
  ] }), V = (g) => /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all", children: g }), u = () => {
    if (bs.includes(e.type))
      return /* @__PURE__ */ t("p", { className: "text-xs text-gray-600 text-center py-4", children: "This block has no configurable options." });
    const { modifiers: g, baseKey: b } = ms(e.key), S = Object.keys(s || {}), $ = vs(e.conditionVar || ""), de = $ && s?.[$]?.type, O = e.conditionVarType || de || "string", U = _e[O] || _e.string, oe = e.conditionOp || U[0].value, T = e.method || "GET", pe = ["POST", "PUT", "PATCH", "DELETE"], me = ["type", "scroll", "foreach", "set", "merge", "solve_captcha", "upload"].includes(e.type);
    return /* @__PURE__ */ o("div", { className: me ? "grid grid-cols-1 content-start items-start gap-x-8 gap-y-10 md:grid-cols-2" : "space-y-10", children: [
      (e.type === "click" || e.type === "check" || e.type === "uncheck" || e.type === "drag_and_drop" || e.type === "select" || e.type === "type" || e.type === "hover" || e.type === "wait_selector" || e.type === "scroll" || e.type === "upload") && A(
        e.type === "scroll" ? "Selector (Optional)" : "Selector",
        /* @__PURE__ */ o("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all flex items-center gap-2", children: [
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0 flex flex-col gap-1", children: [
            /* @__PURE__ */ t(
              X,
              {
                value: e.selector || "",
                onChange: (h) => r(e.id, { selector: h }),
                onBlur: () => n(),
                variables: s,
                placeholder: e.type === "scroll" ? ".scroll-container or leave empty" : e.type === "upload" ? "input[type=file] or .drop-zone" : e.type === "drag_and_drop" ? ".draggable-item" : ".btn-primary"
              }
            ),
            i && i.length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1 mt-1", children: i.map((h, ee) => /* @__PURE__ */ t(
              "button",
              {
                onClick: () => r(e.id, { selector: h }, !0),
                className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${e.selector === h ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                children: h
              },
              ee
            )) })
          ] }),
          y && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                ce(), y(e.id);
              },
              disabled: e.disabled,
              className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
              title: "Pick Selector in Browser",
              "aria-label": "Pick Selector in Browser",
              children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
            }
          )
        ] })
      ),
      e.type === "drag_and_drop" && A(
        "Target Selector",
        /* @__PURE__ */ o("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all flex items-center gap-2", children: [
          /* @__PURE__ */ t(
            X,
            {
              value: e.targetSelector || "",
              onChange: (h) => r(e.id, { targetSelector: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: ".drop-target"
            }
          ),
          y && /* @__PURE__ */ t(
            "button",
            {
              onClick: () => {
                ce(), y(e.id, "targetSelector");
              },
              disabled: e.disabled,
              className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
              title: "Pick Target Selector in Browser",
              "aria-label": "Pick Target Selector in Browser",
              children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
            }
          )
        ] })
      ),
      e.type === "click" && A(
        "Click Type",
        V(
          /* @__PURE__ */ t(
            se,
            {
              value: e.clickType || "single",
              onChange: (h) => r(e.id, { clickType: h }, !0),
              options: gs,
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Click type"
            }
          )
        )
      ),
      e.type === "upload" && /* @__PURE__ */ o(te, { children: [
        A("Cabinet", /* @__PURE__ */ t(
          se,
          {
            value: e.cabinetId || "",
            onChange: (h) => r(e.id, { cabinetId: h }, !0),
            options: k.length ? [{ value: "", label: "Default cabinet" }, ...k.map((h) => ({ value: h.id, label: h.name, icon: "inventory_2" }))] : [{ value: "", label: "Loading cabinets…", disabled: !0 }],
            ariaLabel: "Upload cabinet"
          }
        )),
        A("Mark as uploaded", /* @__PURE__ */ o("label", { className: "flex items-center gap-2 text-xs text-white/80", children: [
          /* @__PURE__ */ t("input", { type: "checkbox", checked: !!e.markAsUploaded, onChange: (h) => r(e.id, { markAsUploaded: h.target.checked }, !0), className: "h-4 w-4" }),
          " Mark after the page accepts this item"
        ] }))
      ] }),
      e.type === "scroll" && A(
        "Scroll Speed (ms)",
        V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.key || "",
              onChange: (h) => r(e.id, { key: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "500"
            }
          )
        )
      ),
      (e.type === "navigate" || e.type === "type" || e.type === "select" || e.type === "wait" || e.type === "wait_selector" || e.type === "javascript" || e.type === "csv") && (e.type === "javascript" ? /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
          /* @__PURE__ */ o(
            "button",
            {
              onClick: () => {
                K((h) => !h), Y(null);
              },
              className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
              title: "Generate with AI",
              children: [
                /* @__PURE__ */ t(x, { name: "auto_awesome", className: "text-sm" }),
                "Generate"
              ]
            }
          )
        ] }),
        B && /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
          /* @__PURE__ */ t(
            "input",
            {
              autoFocus: !0,
              type: "text",
              value: W,
              onChange: (h) => le(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && !J && ne();
              },
              placeholder: "e.g. extract all article titles and links",
              className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
            }
          ),
          re && /* @__PURE__ */ t("p", { className: "text-xs text-red-400", children: re }),
          /* @__PURE__ */ o("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ t("button", { onClick: () => {
              K(!1), Y(null);
            }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: ne,
                disabled: J || !W.trim(),
                className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                children: [
                  J && /* @__PURE__ */ t(x, { name: "autorenew", className: "text-xs animate-spin" }),
                  J ? "Generating…" : "Generate"
                ]
              }
            )
          ] })
        ] }),
        V(
          /* @__PURE__ */ t(
            we,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              language: "javascript",
              variables: s,
              className: "min-h-[120px]",
              placeholder: "return document.title"
            }
          )
        )
      ] }) : A(
        e.type === "navigate" ? "URL" : e.type === "type" ? "Content" : e.type === "select" ? "Option Value" : e.type === "wait" ? "Seconds" : e.type === "wait_selector" ? "Timeout (Sec)" : "CSV Input",
        V(
          e.type === "csv" ? /* @__PURE__ */ t(
            we,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              language: "plain",
              variables: s,
              className: "min-h-[120px]",
              placeholder: `name,age
Ada,31`
            }
          ) : /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: e.type === "navigate" ? "https://example.com" : e.type === "type" ? "Search keywords" : e.type === "select" ? "option-value" : e.type === "wait" ? "3" : e.type === "wait_selector" ? "10" : "400"
            }
          )
        )
      )),
      e.type === "type" && A(
        "Mode",
        V(
          /* @__PURE__ */ t(
            se,
            {
              value: e.typeMode || "replace",
              onChange: (h) => r(e.id, { typeMode: h }, !0),
              options: us,
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Typing mode"
            }
          )
        )
      ),
      e.type === "screenshot" && A(
        "Label (Optional)",
        V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "checkout-step"
            }
          )
        )
      ),
      e.type === "press" && /* @__PURE__ */ o("div", { className: "space-y-5", children: [
        /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Key" }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3 text-xs text-white", children: hs.map((h) => /* @__PURE__ */ o("label", { className: "inline-flex items-center space-x-1", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              checked: g.includes(h.value),
              onChange: (ee) => {
                const ve = ee.target.checked ? [...g, h.value] : g.filter((ue) => ue !== h.value);
                r(e.id, { key: Je(ve, b) }, !0);
              },
              className: "h-3 w-3 rounded border border-white/30 bg-black/80"
            }
          ),
          /* @__PURE__ */ t("span", { className: "text-xs text-white/70", children: h.label })
        ] }, h.value)) }),
        V(
          /* @__PURE__ */ t(
            se,
            {
              value: b,
              onChange: (h) => r(e.id, { key: Je(g, h) }, !0),
              options: [{ value: "", label: "Select key" }, ...ps.map((h) => ({ value: h, label: h }))],
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Press key"
            }
          )
        )
      ] }),
      (e.type === "if" || e.type === "while") && /* @__PURE__ */ o("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Condition" }),
        /* @__PURE__ */ o("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ o("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: O === "selector" ? "Selector" : "Variable" }),
            O === "selector" ? /* @__PURE__ */ o("div", { className: "bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30 transition-all flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  value: e.selector || "",
                  onChange: (h) => r(e.id, { selector: h.target.value }),
                  onBlur: () => n(),
                  placeholder: ".verified-badge",
                  className: "flex-1 min-w-0 bg-transparent text-xs font-mono text-white focus:outline-none"
                }
              ),
              y && /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => {
                    ce(), y(e.id);
                  },
                  disabled: e.disabled,
                  className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
                  title: "Pick Selector in Browser",
                  "aria-label": "Pick Selector in Browser",
                  children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
                }
              )
            ] }) : /* @__PURE__ */ t("div", { className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30", children: /* @__PURE__ */ t(
              Gr,
              {
                value: e.conditionVar || "",
                onChange: (h) => r(e.id, { conditionVar: h }),
                options: S,
                placeholder: "variable name",
                ariaLabel: "Condition variable"
              }
            ) })
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Type" }),
            /* @__PURE__ */ t(
              se,
              {
                value: O,
                onChange: (h) => {
                  const ee = _e[h] || _e.string;
                  r(e.id, {
                    conditionVarType: h,
                    conditionOp: ee[0].value,
                    conditionValue: h === "boolean" || h === "selector" ? "" : e.conditionValue || ""
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
          /* @__PURE__ */ o("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Relation" }),
            /* @__PURE__ */ t(
              se,
              {
                value: oe,
                onChange: (h) => r(e.id, { conditionOp: h }, !0),
                options: U,
                ariaLabel: "Condition relation"
              }
            )
          ] })
        ] }),
        O !== "boolean" && O !== "selector" && /* @__PURE__ */ o("div", { className: "space-y-1", children: [
          /* @__PURE__ */ t("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Value" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: O === "number" ? "number" : "text",
              value: e.conditionValue || "",
              onChange: (h) => r(e.id, { conditionValue: h.target.value }),
              onBlur: () => n(),
              placeholder: O === "number" ? "0" : "value",
              "data-variable-insertion-target": O === "number" ? void 0 : "true",
              className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30"
            }
          )
        ] })
      ] }),
      e.type === "repeat" && A(
        "Times",
        V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "3"
            }
          )
        )
      ),
      e.type === "foreach" && /* @__PURE__ */ o(te, { children: [
        A("Selector (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.selector || "",
              onChange: (h) => r(e.id, { selector: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: ".list-item"
            }
          )
        )),
        A("Variable (Array Name)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "items"
            }
          )
        ))
      ] }),
      e.type === "set" && /* @__PURE__ */ o(te, { children: [
        A("Variable Name", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "status"
            }
          )
        )),
        A("Value", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "ready"
            }
          )
        ))
      ] }),
      e.type === "merge" && /* @__PURE__ */ o(te, { children: [
        A("Sources", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "items, extraItems, {$block.output}"
            }
          )
        )),
        A("Target Variable (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "allItems"
            }
          )
        ))
      ] }),
      e.type === "stop" && A(
        "Outcome",
        /* @__PURE__ */ t(
          se,
          {
            value: e.value || "success",
            onChange: (h) => r(e.id, { value: h }, !0),
            options: [
              { value: "success", label: "Success", icon: "check_circle", iconClassName: "text-green-400" },
              { value: "error", label: "Error", icon: "error", iconClassName: "text-red-400" }
            ],
            ariaLabel: "Stop outcome"
          }
        )
      ),
      e.type === "start" && A(
        "Task",
        /* @__PURE__ */ t(
          se,
          {
            value: e.value || "",
            onChange: (h) => r(e.id, { value: h }, !0),
            options: l.length ? [{ value: "", label: "Select task", disabled: !0 }, ...l.map((h) => ({ value: h.id || "", label: h.name || h.id || "Untitled" }))] : [{ value: "", label: "No other tasks", disabled: !0 }],
            placeholder: "Select task",
            ariaLabel: "Task to start"
          }
        )
      ),
      e.type === "wait_downloads" && A(
        "Max Wait (Sec, Optional)",
        V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.value || "",
              onChange: (h) => r(e.id, { value: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "30"
            }
          )
        )
      ),
      e.type === "http_request" && /* @__PURE__ */ o(te, { children: [
        /* @__PURE__ */ o("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Method" }),
            /* @__PURE__ */ t(
              se,
              {
                value: T,
                onChange: (h) => r(e.id, { method: h }, !0),
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
          /* @__PURE__ */ o("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "URL" }),
            V(
              /* @__PURE__ */ t(
                X,
                {
                  value: e.value || "",
                  onChange: (h) => r(e.id, { value: h }),
                  onBlur: () => n(),
                  variables: s,
                  placeholder: "https://api.example.com/data"
                }
              )
            )
          ] })
        ] }),
        A("Headers (JSON, Optional)", V(
          /* @__PURE__ */ t(
            we,
            {
              value: e.headers || "",
              onChange: (h) => r(e.id, { headers: h }),
              onBlur: () => n(),
              language: "json",
              variables: s,
              className: "min-h-[56px]",
              placeholder: '{"Authorization": "Bearer {$token}"}'
            }
          )
        )),
        pe.includes(T) && A("Body", V(
          /* @__PURE__ */ t(
            we,
            {
              value: e.body || "",
              onChange: (h) => r(e.id, { body: h }),
              onBlur: () => n(),
              language: "json",
              variables: s,
              className: "min-h-[80px]",
              placeholder: '{"key": "value"}'
            }
          )
        )),
        A("Store Response In Variable (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "apiResponse"
            }
          )
        ))
      ] }),
      e.type === "get_content" && /* @__PURE__ */ o(te, { children: [
        A("Selector (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.selector || "",
              onChange: (h) => r(e.id, { selector: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: ".article-body or leave empty for full page"
            }
          )
        )),
        A("Store In Variable (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "pageContent"
            }
          )
        ))
      ] }),
      (e.type === "solve_captcha" || e.type === "wait_captcha") && /* @__PURE__ */ o(te, { children: [
        e.type === "wait_captcha" && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Waits until the captcha control is initialized, visible, enabled, and stable. This block does not click or solve it." }),
        /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Captcha Type (Optional)" }),
          /* @__PURE__ */ t(
            se,
            {
              value: e.captchaType || "",
              onChange: (h) => r(e.id, { captchaType: h || void 0 }, !0),
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
        A("Container Selector (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.selector || "",
              onChange: (h) => r(e.id, { selector: h }),
              onBlur: () => n(),
              variables: s,
              placeholder: "#recaptcha-container or leave empty for full page"
            }
          )
        )),
        A("Timeout (Seconds)", V(
          /* @__PURE__ */ t(
            "input",
            {
              type: "number",
              min: "1",
              step: "1",
              value: Math.max(1, Math.round((e.timeout || 12e4) / 1e3)),
              onChange: (h) => r(e.id, { timeout: Math.max(1, Number(h.target.value) || 120) * 1e3 }),
              onBlur: () => n(),
              className: "w-full bg-transparent border-none px-0 py-0 text-xs text-white focus:outline-none"
            }
          )
        )),
        A("Store Result In Variable (Optional)", V(
          /* @__PURE__ */ t(
            X,
            {
              value: e.varName || "",
              onChange: (h) => r(e.id, { varName: h }),
              onBlur: () => n(),
              variables: s,
              allowVariableInsertion: !1,
              placeholder: "captchaResult"
            }
          )
        ))
      ] })
    ] });
  };
  return /* @__PURE__ */ t(He, { icon: I?.icon || "tune", title: f, onClose: ce, children: /* @__PURE__ */ t(
    cs,
    {
      configuration: /* @__PURE__ */ t(
        "div",
        {
          className: "min-w-0",
          onFocusCapture: (g) => P(g.target),
          onSelectCapture: (g) => P(g.target),
          onKeyUpCapture: (g) => P(g.target),
          onPointerUpCapture: (g) => P(g.target),
          children: u()
        }
      ),
      action: e,
      actions: a.actions,
      variables: s,
      canInsertVariable: H,
      isTesting: C,
      testError: E,
      testResult: m,
      onInsertVariable: z,
      onRunTest: he,
      onStopTest: () => Q(!0)
    }
  ) });
}, xs = (e) => {
  let a = "";
  if (e.type === "click" || e.type === "hover" || e.type === "scroll" || e.type === "wait_selector" || e.type === "check" || e.type === "uncheck")
    a = e.type === "click" && e.clickType && e.clickType !== "single" ? `${e.clickType} · ${e.selector || ""}` : e.selector || "";
  else if (e.type === "drag_and_drop")
    a = `${e.selector || ""} → ${e.targetSelector || ""}`;
  else if (e.type === "select")
    a = `${e.selector || ""} → ${e.value || ""}`;
  else if (e.type === "type" || e.type === "navigate" || e.type === "wait" || e.type === "javascript" || e.type === "repeat" || e.type === "start" || e.type === "screenshot" || e.type === "wait_downloads" || e.type === "stop" || e.type === "upload")
    a = e.value || "";
  else if (e.type === "set" || e.type === "foreach" || e.type === "merge")
    a = e.varName || "";
  else if (e.type === "press")
    a = e.key || "";
  else if (e.type === "if" || e.type === "while")
    a = e.conditionVar || "";
  else if (e.type === "http_request") {
    const s = e.method || "GET";
    a = e.value ? `[${s}] ${e.value}` : s;
  } else e.type === "get_content" ? a = e.varName ? `→ ${e.varName}` : e.selector || "" : (e.type === "solve_captcha" || e.type === "wait_captcha") && (a = e.captchaType || "Auto-detect");
  return a.trim();
}, ys = (e) => {
  const a = "text-[12px]";
  return e === "if" || e === "else" ? /* @__PURE__ */ t(x, { name: "call_split", className: `${a} text-white` }) : e === "end" ? /* @__PURE__ */ t(x, { name: "subdirectory_arrow_right", className: `${a} text-gray-500` }) : e === "while" || e === "repeat" ? /* @__PURE__ */ t(x, { name: "repeat", className: `${a} text-white` }) : e === "foreach" ? /* @__PURE__ */ t(x, { name: "list", className: `${a} text-white` }) : e === "on_error" ? /* @__PURE__ */ t(x, { name: "warning", className: `${a} text-red-400` }) : e === "set" ? /* @__PURE__ */ t(x, { name: "variable_insert", className: `${a} text-white` }) : e === "stop" ? /* @__PURE__ */ t(x, { name: "stop", className: `${a} text-white` }) : e === "click" ? /* @__PURE__ */ t(x, { name: "ads_click", className: `${a} text-white` }) : e === "check" ? /* @__PURE__ */ t(x, { name: "check_box", className: `${a} text-white` }) : e === "uncheck" ? /* @__PURE__ */ t(x, { name: "check_box_outline_blank", className: `${a} text-white` }) : e === "drag_and_drop" ? /* @__PURE__ */ t(x, { name: "drag_indicator", className: `${a} text-white` }) : e === "reload" ? /* @__PURE__ */ t(x, { name: "refresh", className: `${a} text-white` }) : e === "select" ? /* @__PURE__ */ t(x, { name: "arrow_drop_down_circle", className: `${a} text-white` }) : e === "type" ? /* @__PURE__ */ t(x, { name: "text_format", className: `${a} text-white` }) : e === "hover" ? /* @__PURE__ */ t(x, { name: "my_location", className: `${a} text-white` }) : e === "press" ? /* @__PURE__ */ t(x, { name: "keyboard", className: `${a} text-white` }) : e === "wait" ? /* @__PURE__ */ t(x, { name: "schedule", className: `${a} text-white` }) : e === "wait_selector" ? /* @__PURE__ */ t(x, { name: "schedule", className: `${a} text-white` }) : e === "scroll" ? /* @__PURE__ */ t(x, { name: "swap_vert", className: `${a} text-white` }) : e === "javascript" ? /* @__PURE__ */ t(x, { name: "javascript", className: `${a} text-white` }) : e === "csv" ? /* @__PURE__ */ t(x, { name: "csv", className: `${a} text-white` }) : e === "upload" ? /* @__PURE__ */ t(x, { name: "upload_file", className: `${a} text-white` }) : e === "finalize_uploads" ? /* @__PURE__ */ t(x, { name: "task_alt", className: `${a} text-white` }) : e === "merge" ? /* @__PURE__ */ t(x, { name: "layers", className: `${a} text-white` }) : e === "screenshot" ? /* @__PURE__ */ t(x, { name: "photo_camera", className: `${a} text-white` }) : e === "start" ? /* @__PURE__ */ t(x, { name: "play_circle", className: `${a} text-white` }) : e === "navigate" ? /* @__PURE__ */ t(x, { name: "navigation", className: `${a} text-white` }) : e === "http_request" ? /* @__PURE__ */ t(x, { name: "language", className: `${a} text-white` }) : e === "wait_downloads" ? /* @__PURE__ */ t(x, { name: "download", className: `${a} text-white` }) : e === "get_content" ? /* @__PURE__ */ t(x, { name: "article", className: `${a} text-white` }) : e === "solve_captcha" ? /* @__PURE__ */ t(x, { name: "verified_user", className: `${a} text-white` }) : e === "wait_captcha" ? /* @__PURE__ */ t(x, { name: "hourglass_top", className: `${a} text-white` }) : e === "do_nothing" ? /* @__PURE__ */ t(x, { name: "block", className: `${a} text-white/50` }) : /* @__PURE__ */ t("span", { className: "text-xs text-white/20", children: "|" });
}, ws = ["else", "end", "on_error", "do_nothing", "reload", "finalize_uploads"], Re = nt.memo(({
  action: e,
  task: a,
  index: s,
  status: l,
  isDragging: i,
  isDragOver: r,
  translateY: n,
  variables: c,
  availableTasks: y,
  onUpdate: v,
  onAutoSave: p,
  onOpenPalette: m,
  onOpenContextMenu: w,
  onPointerDown: I,
  dragTransformY: f,
  onStartInspect: C,
  onCreateVariable: N,
  onDeleteVariable: E,
  isSelected: R,
  selectorOptions: H,
  autoOpenConfig: P,
  onCloseConfigModal: z,
  testResult: M,
  onTestResult: D
}) => {
  const [L, B] = j(!1), K = F(null), W = F(null), le = l === "running" ? "border-yellow-400/60" : l === "success" ? "border-green-400/60" : l === "error" ? "border-red-400/70" : l === "skipped" ? "border-gray-500/40" : "", J = (_) => !_ || !(_ instanceof HTMLElement) ? !1 : !!_.closest('input, textarea, select, button, a, [contenteditable="true"], [data-no-drag="true"], [role="button"]'), ie = i ? `translateY(${f || 0}px)` : n ? `translateY(${n}px)` : void 0, re = xs(e), Y = !ws.includes(e.type);
  ae(() => {
    P && Y && B(!0);
  }, [P, Y]), ae(() => () => {
    W.current && (clearTimeout(W.current), W.current = null);
  }, []);
  const k = () => {
    if (W.current) {
      clearTimeout(W.current), W.current = null, Y && B(!0);
      return;
    }
    W.current = setTimeout(() => {
      W.current = null, m(e.id);
    }, 180);
  };
  return /* @__PURE__ */ o(te, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        id: `action-${e.id}`,
        "data-action-id": e.id,
        onPointerDown: (_) => {
          J(_.target) || _.button === 0 && (K.current = { x: _.clientX, y: _.clientY }, _.stopPropagation(), I(_, e.id, s));
        },
        onDoubleClick: (_) => {
          Y && (J(_.target) || (_.stopPropagation(), B(!0)));
        },
        onContextMenu: (_) => w(_, e.id),
        className: `bg-black min-w-[280px] w-full max-w-sm mx-auto border p-5 rounded-2xl group/item relative transition-[transform,box-shadow,opacity,filter,background-color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform select-none touch-none ${le || (R ? "border-blue-500 ring-2 ring-blue-500/50" : "border-white/20")} ${i ? "ring-2 ring-white/40 scale-[1.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)] opacity-85 z-20 mx-auto" : ""} ${r && !i ? "ring-2 ring-blue-400/60 bg-blue-500/5" : ""} ${e.disabled ? "opacity-40 grayscale" : ""}`,
        style: { transform: ie },
        children: /* @__PURE__ */ o("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/20 font-mono tracking-tighter shrink-0", children: (s + 1).toString().padStart(2, "0") }),
          /* @__PURE__ */ t("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: ys(e.type) }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: (_) => {
                _.stopPropagation(), k();
              },
              onDoubleClick: (_) => {
                Y && (J(_.target) || (_.preventDefault(), _.stopPropagation(), B(!0)));
              },
              className: "action-type-select text-xs font-bold tracking-[0.2em] text-white focus:outline-none cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-white/50 shrink-0",
              "aria-label": `Change action type: ${e.type}`,
              children: ze.find((_) => _.type === e.type)?.label || e.type
            }
          ),
          re && /* @__PURE__ */ t("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: re }),
          Y && /* @__PURE__ */ t(
            "button",
            {
              "data-no-drag": "true",
              onClick: (_) => {
                _.stopPropagation(), B(!0);
              },
              className: "ml-auto shrink-0 text-white/20 hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded",
              "aria-label": "Configure block",
              title: "Configure block",
              children: /* @__PURE__ */ t(x, { name: "tune", className: "text-sm" })
            }
          )
        ] })
      }
    ),
    L && /* @__PURE__ */ t(
      fs,
      {
        action: e,
        task: a,
        variables: c,
        availableTasks: y,
        selectorOptions: H,
        onUpdate: v,
        onAutoSave: p,
        onClose: () => {
          B(!1), z?.();
        },
        onStartInspect: C,
        onCreateVariable: N,
        onDeleteVariable: E,
        testResult: M,
        onTestResult: D
      }
    )
  ] });
}), ks = async (e) => {
  try {
    if (navigator.clipboard && window.isSecureContext)
      return await navigator.clipboard.writeText(e), !0;
    {
      const a = document.createElement("textarea");
      a.value = e, a.style.position = "fixed", a.style.left = "-999999px", a.style.top = "-999999px", document.body.appendChild(a), a.focus(), a.select();
      const s = document.execCommand("copy");
      return a.remove(), s;
    }
  } catch (a) {
    return console.error("Copy failed:", a), !1;
  }
}, Ns = ({
  text: e,
  label: a,
  className: s,
  iconClassName: l,
  onCopy: i,
  title: r,
  disabled: n = !1
}) => {
  const [c, y] = j(!1), v = async (f) => {
    if (f.stopPropagation(), n) return;
    await ks(e) && (y(!0), i?.(), setTimeout(() => y(!1), 2e3));
  }, p = "flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs font-bold tracking-widest disabled:opacity-50 disabled:cursor-not-allowed", m = "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50", w = s ? `${s} ${m}` : `${p} ${m}`, I = c ? w.replace("border-white/10", "border-green-400 text-green-400") : w;
  return /* @__PURE__ */ o(
    "button",
    {
      onClick: v,
      disabled: n,
      className: I,
      title: r || (c ? "Copied" : "Copy"),
      type: "button",
      "aria-label": a || r || "Copy to clipboard",
      children: [
        c ? /* @__PURE__ */ t(
          x,
          {
            name: "check",
            className: `${l || "text-sm"} text-green-400`
          }
        ) : /* @__PURE__ */ t(
          x,
          {
            name: "content_copy",
            className: l || "text-sm"
          }
        ),
        a && /* @__PURE__ */ t("span", { children: c ? "Copied" : a })
      ]
    }
  );
}, Ue = {
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
}, Ze = {
  default: "#ffffff",
  yellow: "#facc15",
  pink: "#ec4899",
  green: "#22c55e",
  purple: "#a855f7"
}, Ms = ["default", "yellow", "pink", "green", "purple"], _s = ({ note: e, canvasScale: a, isSelected: s, onUpdate: l, onDelete: i, onDuplicate: r }) => {
  const [n, c] = j(e.content === ""), [y, v] = j(e.content), [p, m] = j(null), [w, I] = j(null), [f, C] = j(null), N = F(null), E = F(null), R = F(null), H = Ue[e.color] || Ue.default;
  ae(() => {
    n && N.current && (N.current.focus(), N.current.select());
  }, [n]);
  const P = G((k, _) => {
    if (!E.current) return null;
    const ne = (k - E.current.startX) / a, Q = (_ - E.current.startY) / a;
    return {
      x: Math.round(E.current.origX + ne),
      y: Math.round(E.current.origY + Q)
    };
  }, [a]), z = G((k, _) => {
    if (!R.current) return null;
    const ne = (k - R.current.startX) / a, Q = (_ - R.current.startY) / a;
    return {
      width: Math.round(Math.max(160, R.current.origW + ne)),
      height: Math.round(Math.max(100, R.current.origH + Q))
    };
  }, [a]), M = G((k) => {
    k.stopPropagation(), k.preventDefault(), E.current = {
      startX: k.clientX,
      startY: k.clientY,
      origX: e.x,
      origY: e.y
    }, I({ x: e.x, y: e.y }), k.currentTarget.setPointerCapture(k.pointerId);
  }, [e.x, e.y]), D = G((k) => {
    k.stopPropagation();
    const _ = P(k.clientX, k.clientY);
    _ && I(_);
  }, [P]), L = G((k) => {
    k.stopPropagation();
    const _ = P(k.clientX, k.clientY) || w;
    E.current = null, I(null), _ && (_.x !== e.x || _.y !== e.y) && l(e.id, _);
  }, [w, P, e.id, e.x, e.y, l]), B = G((k) => {
    k.stopPropagation(), k.preventDefault(), R.current = {
      startX: k.clientX,
      startY: k.clientY,
      origW: e.width,
      origH: e.height
    }, C({ width: e.width, height: e.height }), k.currentTarget.setPointerCapture(k.pointerId);
  }, [e.width, e.height]), K = G((k) => {
    k.stopPropagation();
    const _ = z(k.clientX, k.clientY);
    _ && C(_);
  }, [z]), W = G((k) => {
    k.stopPropagation();
    const _ = z(k.clientX, k.clientY) || f;
    R.current = null, C(null), _ && (_.width !== e.width || _.height !== e.height) && l(e.id, _);
  }, [z, e.height, e.id, e.width, l, f]), le = G(() => {
    l(e.id, { content: y }), c(!1);
  }, [e.id, y, l]), J = w?.x ?? e.x, ie = w?.y ?? e.y, re = f?.width ?? e.width, Y = f?.height ?? e.height;
  return /* @__PURE__ */ o(te, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        "data-sticky-note-id": e.id,
        className: "absolute select-none group",
        style: {
          left: J,
          top: ie,
          width: re,
          minHeight: Y,
          zIndex: 5
        },
        onPointerDown: (k) => k.stopPropagation(),
        onContextMenu: (k) => {
          k.preventDefault(), k.stopPropagation();
          const _ = 8, ne = 200, Q = 164, he = Math.min(Math.max(k.clientX + 12, _), window.innerWidth - ne - _), ce = Math.min(Math.max(k.clientY + 12, _), window.innerHeight - Q - _);
          m({ x: he, y: ce });
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            className: "w-full min-h-full rounded-xl flex flex-col overflow-hidden",
            style: {
              background: H.bg,
              border: `1px solid ${s ? "rgba(96,165,250,0.8)" : H.border}`,
              boxShadow: s ? "0 0 0 2px rgba(59,130,246,0.4), 0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.4)"
            },
            children: [
              /* @__PURE__ */ o(
                "div",
                {
                  className: "flex items-center justify-between px-2.5 py-1.5 cursor-grab active:cursor-grabbing shrink-0 touch-none",
                  style: { background: H.header },
                  onPointerDown: M,
                  onPointerMove: D,
                  onPointerUp: L,
                  onPointerCancel: L,
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-1", style: { opacity: n ? 1 : 0, pointerEvents: n ? "auto" : "none", transition: "opacity 0.15s" }, children: Ms.map((k) => /* @__PURE__ */ t(
                      "button",
                      {
                        className: "w-3 h-3 rounded-full transition-all hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        style: {
                          background: Ze[k],
                          opacity: e.color === k ? 1 : 0.35,
                          outline: e.color === k ? `1.5px solid ${Ze[k]}` : "none",
                          outlineOffset: "1px"
                        },
                        onMouseDown: (_) => {
                          _.preventDefault(), _.stopPropagation();
                        },
                        onPointerDown: (_) => _.stopPropagation(),
                        onClick: (_) => {
                          _.stopPropagation(), l(e.id, { color: k });
                        },
                        title: `Set color to ${k}`,
                        "aria-label": `Set color to ${k}`
                      },
                      k
                    )) }),
                    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200", children: [
                      /* @__PURE__ */ t(
                        "button",
                        {
                          className: "w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          onPointerDown: (k) => k.stopPropagation(),
                          onClick: (k) => {
                            k.stopPropagation(), c(!0), v(e.content);
                          },
                          title: "Edit note",
                          "aria-label": "Edit note",
                          children: /* @__PURE__ */ t(x, { name: "edit", className: "text-[14px]" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        Ns,
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
                          onPointerDown: (k) => k.stopPropagation(),
                          onClick: (k) => {
                            k.stopPropagation(), i(e.id);
                          },
                          title: "Delete note",
                          "aria-label": "Delete note",
                          children: /* @__PURE__ */ t(x, { name: "close", className: "text-[14px]" })
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
                    n || (c(!0), v(e.content));
                  },
                  children: n ? /* @__PURE__ */ t(
                    "textarea",
                    {
                      ref: N,
                      value: y,
                      onChange: (k) => v(k.target.value),
                      onBlur: le,
                      onKeyDown: (k) => {
                        k.key === "Escape" && le(), (k.ctrlKey || k.metaKey) && k.key === "Enter" && le(), k.stopPropagation();
                      },
                      className: "w-full min-h-[120px] resize-none bg-transparent px-3 py-2 text-xs text-white/80 placeholder-white/20 focus:outline-none font-mono leading-relaxed",
                      placeholder: "Write markdown here...",
                      onClick: (k) => k.stopPropagation()
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
                  className: "absolute bottom-0 right-0 w-5 h-5 cursor-se-resize flex items-end justify-end pb-1 pr-1 touch-none",
                  onPointerDown: B,
                  onPointerMove: K,
                  onPointerUp: W,
                  onPointerCancel: W,
                  children: /* @__PURE__ */ t("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", children: /* @__PURE__ */ t("path", { d: "M7 1L1 7M7 4L4 7", stroke: "rgba(255,255,255,0.25)", strokeWidth: "1.5", strokeLinecap: "round" }) })
                }
              )
            ]
          }
        )
      }
    ),
    p && ke(
      /* @__PURE__ */ o(te, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "fixed inset-0 z-40",
            onClick: () => m(null),
            onContextMenu: (k) => {
              k.preventDefault(), m(null);
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "fixed z-50 w-[200px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
            style: { left: p.x, top: p.y },
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    r(e), m(null);
                  },
                  children: [
                    /* @__PURE__ */ t(x, { name: "copy_all", className: "text-[14px] text-white/40" }),
                    "Duplicate"
                  ]
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(e.content).catch(() => {
                    }), m(null);
                  },
                  children: [
                    /* @__PURE__ */ t(x, { name: "content_copy", className: "text-[14px] text-white/40" }),
                    "Copy"
                  ]
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(e.content).catch(() => {
                    }), i(e.id), m(null);
                  },
                  children: [
                    /* @__PURE__ */ t(x, { name: "content_cut", className: "text-[14px] text-white/40" }),
                    "Cut"
                  ]
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-red-400 flex items-center gap-2.5",
                  onClick: () => {
                    i(e.id), m(null);
                  },
                  children: [
                    /* @__PURE__ */ t(x, { name: "delete", className: "text-[14px] text-red-400/70" }),
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
}, Qe = (e) => {
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
}, et = (e, a = []) => {
  const s = (e || []).filter((n) => n.name.trim() && n.selector.trim()), l = (a || []).filter((n) => n.name.trim() && n.containerSelector.trim() && (n.fields || []).some((c) => c.name.trim() && c.selector.trim()));
  if (s.length === 0 && l.length === 0)
    return `// Add fields in Visual mode, or write a script here.
// Example: return { title: document.title };`;
  const i = s.map((n) => {
    const c = JSON.stringify(n.name), y = JSON.stringify(n.selector);
    if (n.attribute === "exists")
      return `  ${c}: document.querySelector(${y}) !== null,`;
    const v = Qe(n);
    return n.multiple ? `  ${c}: Array.from(document.querySelectorAll(${y})).map(el => ${v}),` : `  ${c}: (() => { const el = document.querySelector(${y}); return el ? ${v} : null; })(),`;
  }), r = l.map((n) => {
    const c = JSON.stringify(n.name), y = JSON.stringify(n.containerSelector), p = (n.fields || []).filter((m) => m.name.trim() && m.selector.trim()).map((m) => {
      const w = JSON.stringify(m.name), I = JSON.stringify(m.selector);
      if (m.attribute === "exists")
        return `      ${w}: container.querySelector(${I}) !== null,`;
      const f = Qe(m);
      return `      ${w}: (() => { const el = container.querySelector(${I}); return el ? ${f} : null; })(),`;
    });
    return `  ${c}: Array.from(document.querySelectorAll(${y})).map(container => ({
${p.join(`
`)}
  })),`;
  });
  return `return {
${[...i, ...r].join(`
`)}
};`;
}, Cs = "extraction_field_", Is = "extraction_group_container_", $s = "extraction_group_field_", Ce = (e) => `${Cs}${e}`, Oe = (e) => `${Is}${e}`, Ve = (e, a) => `${$s}${e}__${a}`, tt = [
  { value: "text", label: "Text", icon: "text_fields" },
  { value: "html", label: "HTML", icon: "code" },
  { value: "value", label: "Input Value", icon: "input" },
  { value: "attr", label: "Attribute", icon: "label" },
  { value: "image", label: "Image URL", icon: "image" },
  { value: "link", label: "Link URL", icon: "link" },
  { value: "exists", label: "Exists (true/false)", icon: "check_circle" }
], Ss = [
  { mode: "agent", icon: "smart_toy", label: "Agent Mode", description: "Custom action sequence with logic" },
  { mode: "scrape", icon: "api", label: "Scrape Mode", description: "Fixed data extraction flow" }
], Es = ({ task: e, onUpdate: a, onClose: s }) => {
  const { canInsertVariable: l, captureInsertionSelection: i, insertVariable: r } = Fe();
  return /* @__PURE__ */ t(He, { icon: "bolt", title: "On Execution", onClose: s, children: /* @__PURE__ */ o("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "min-w-0 space-y-8",
        onFocusCapture: (n) => i(n.target),
        onSelectCapture: (n) => i(n.target),
        onKeyUpCapture: (n) => i(n.target),
        onPointerUpCapture: (n) => i(n.target),
        children: [
          /* @__PURE__ */ o("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "URL" }),
            /* @__PURE__ */ t("div", { className: "rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm transition-colors focus-within:border-[var(--app-border-strong)]", children: /* @__PURE__ */ t(
              X,
              {
                value: e.url,
                onChange: (n) => a({ url: n }),
                onBlur: () => a({}, !0),
                variables: e.variables,
                placeholder: "https://..."
              }
            ) })
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Wait (seconds)" }),
            /* @__PURE__ */ t(
              "input",
              {
                type: "number",
                min: "0",
                value: e.wait,
                onChange: (n) => a({ wait: Number(n.target.value) || 0 }),
                onBlur: () => a({}, !0),
                className: "w-full rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm text-[var(--app-text)] transition-colors focus:border-[var(--app-border-strong)] focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Execution mode" }),
            /* @__PURE__ */ t("div", { className: "grid gap-3 sm:grid-cols-2", children: Ss.map((n) => {
              const c = e.mode === n.mode;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  onClick: () => a({ mode: n.mode }, !0),
                  "aria-pressed": c,
                  className: `flex items-start gap-3 rounded-2xl border p-4 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)] ${c ? "border-[var(--app-border-strong)] bg-[var(--app-surface-2)] ring-1 ring-[var(--app-border-strong)]" : "theme-border bg-[var(--app-surface-3)] opacity-70 hover:opacity-100"}`,
                  children: [
                    /* @__PURE__ */ t(x, { name: n.icon, className: "mt-0.5 text-lg text-[var(--app-text-muted)]" }),
                    /* @__PURE__ */ o("span", { children: [
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
    /* @__PURE__ */ t("aside", { className: "min-w-0", "aria-label": "Execution context", children: /* @__PURE__ */ t(Be, { variables: e.variables, canInsertVariable: l, onInsertVariable: r }) })
  ] }) });
}, at = ({ task: e, onUpdate: a, onAutoSave: s, onDelete: l, onStartInspect: i, onStartGroupContainerInspect: r, onStartGroupFieldInspect: n, selectorOptionsById: c }) => {
  const [y, v] = j(!1), [p, m] = j(!1), [w, I] = j(""), [f, C] = j(null), [N, E] = j(!1), [R, H] = j(null), { canInsertVariable: P, captureInsertionSelection: z, insertVariable: M } = Fe(), D = (e.extractionScript || "").split(`
`).find((u) => u.trim()) || "", L = e.extractionMode || (e.extractionScript && !(e.extractionFields && e.extractionFields.length) ? "javascript" : "visual"), B = e.extractionFields || [], K = e.extractionGroups || [], W = (u) => {
    a({ extractionFields: u, extractionScript: et(u, K) });
  }, le = () => {
    W([...B, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }]);
  }, J = (u, g) => {
    W(B.map((b) => b.id === u ? { ...b, ...g } : b));
  }, ie = (u) => {
    W(B.filter((g) => g.id !== u));
  }, re = (u) => {
    a({ extractionMode: u });
  }, Y = (u) => {
    a({ extractionGroups: u, extractionScript: et(B, u) });
  }, k = () => {
    Y([...K, { id: `group_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", containerSelector: "", fields: [] }]);
  }, _ = (u, g) => {
    Y(K.map((b) => b.id === u ? { ...b, ...g } : b));
  }, ne = (u) => {
    Y(K.filter((g) => g.id !== u));
  }, Q = (u) => {
    const g = K.find((b) => b.id === u);
    g && _(u, { fields: [...g.fields, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }] });
  }, he = (u, g, b) => {
    const S = K.find(($) => $.id === u);
    S && _(u, { fields: S.fields.map(($) => $.id === g ? { ...$, ...b } : $) });
  }, ce = (u, g) => {
    const b = K.find((S) => S.id === u);
    b && _(u, { fields: b.fields.filter((S) => S.id !== g) });
  }, be = async () => {
    if (w.trim()) {
      E(!0), H(null);
      try {
        const u = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: w.trim() })
        }), g = await u.json();
        if (!u.ok) throw new Error(g.details ? `${g.error}: ${g.details}` : g.error || "Generation failed");
        a({ extractionScript: g.script }), m(!1), I("");
      } catch (u) {
        H(u.message);
      } finally {
        E(!1);
      }
    }
  }, ge = G(() => {
    v(!1), m(!1), H(null), s();
  }, [s]), A = y ? /* @__PURE__ */ t(He, { icon: "data_object", title: "Extraction Script", onClose: ge, children: /* @__PURE__ */ o("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "min-w-0 space-y-6",
        onFocusCapture: (u) => z(u.target),
        onSelectCapture: (u) => z(u.target),
        onKeyUpCapture: (u) => z(u.target),
        onPointerUpCapture: (u) => z(u.target),
        children: [
          /* @__PURE__ */ o("div", { className: "space-y-3", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1", children: ["visual", "javascript"].map((u) => /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => re(u),
                  className: `px-2.5 py-0.5 rounded-md text-xs font-bold tracking-tight transition-all ${L === u ? "bg-white text-black" : "text-white/50 hover:text-white"}`,
                  children: u === "visual" ? "Visual" : "JavaScript"
                },
                u
              )) })
            ] }),
            L === "visual" ? /* @__PURE__ */ o("div", { className: "space-y-2", children: [
              B.length === 0 && /* @__PURE__ */ t("div", { className: "text-xs text-white/40 bg-white/[0.03] border border-dashed border-white/10 rounded-xl p-4 text-center", children: "No fields yet. Add a field, then use the target icon to pick its selector from the page." }),
              B.map((u) => /* @__PURE__ */ o("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ t(
                    "input",
                    {
                      value: u.name,
                      onChange: (g) => J(u.id, { name: g.target.value }),
                      placeholder: "fieldName",
                      className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                    }
                  ),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => ie(u.id),
                      className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                      title: "Remove field",
                      "aria-label": "Remove field",
                      children: /* @__PURE__ */ t(x, { name: "close", className: "text-base" })
                    }
                  )
                ] }),
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                    X,
                    {
                      value: u.selector,
                      onChange: (g) => J(u.id, { selector: g }),
                      variables: e.variables,
                      placeholder: ".price, h1.title, ...",
                      className: "text-xs"
                    }
                  ) }),
                  i && /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => {
                        v(!1), i(Ce(u.id));
                      },
                      className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                      title: "Pick Selector in Browser",
                      "aria-label": "Pick Selector in Browser",
                      children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
                    }
                  )
                ] }),
                c?.[Ce(u.id)] && c[Ce(u.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[Ce(u.id)].map((g, b) => /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: () => J(u.id, { selector: g }),
                    className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${u.selector === g ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                    children: g
                  },
                  b
                )) }),
                /* @__PURE__ */ o("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ t(
                    se,
                    {
                      value: u.attribute,
                      onChange: (g) => J(u.id, { attribute: g }),
                      options: tt,
                      className: "w-[170px] !min-h-8",
                      ariaLabel: `${u.name || "Field"} attribute`
                    }
                  ),
                  u.attribute === "attr" && /* @__PURE__ */ t(
                    "input",
                    {
                      value: u.attrName || "",
                      onChange: (g) => J(u.id, { attrName: g.target.value }),
                      placeholder: "href",
                      className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                    }
                  ),
                  u.attribute !== "exists" && /* @__PURE__ */ o("label", { className: "flex items-center gap-1.5 text-xs text-white/50 cursor-pointer ml-auto", children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!u.multiple,
                        onChange: (g) => J(u.id, { multiple: g.target.checked }),
                        className: "accent-current"
                      }
                    ),
                    "Multiple (list)"
                  ] })
                ] })
              ] }, u.id)),
              /* @__PURE__ */ o(
                "button",
                {
                  onClick: le,
                  className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                  children: [
                    /* @__PURE__ */ t(x, { name: "add", className: "text-base" }),
                    "Add Field"
                  ]
                }
              ),
              /* @__PURE__ */ o("div", { className: "pt-2 mt-2 border-t border-dashed border-white/10 space-y-3", children: [
                /* @__PURE__ */ o("div", { children: [
                  /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Repeating Groups" }),
                  /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-0.5", children: "One row per matched container — e.g. every product card on a search results page — with a column per sub-field. Produces a multi-row CSV." })
                ] }),
                K.map((u) => /* @__PURE__ */ o("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                  /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        value: u.name,
                        onChange: (g) => _(u.id, { name: g.target.value }),
                        placeholder: "groupName (e.g. products)",
                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                      }
                    ),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => ne(u.id),
                        className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                        title: "Remove group",
                        "aria-label": "Remove group",
                        children: /* @__PURE__ */ t(x, { name: "close", className: "text-base" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                      X,
                      {
                        value: u.containerSelector,
                        onChange: (g) => _(u.id, { containerSelector: g }),
                        variables: e.variables,
                        placeholder: "Row container, e.g. [data-component-type='s-search-result']",
                        className: "text-xs"
                      }
                    ) }),
                    r && /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => {
                          v(!1), r(u.id);
                        },
                        className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                        title: "Pick Row Container in Browser",
                        "aria-label": "Pick Row Container in Browser",
                        children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
                      }
                    )
                  ] }),
                  c?.[Oe(u.id)] && c[Oe(u.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[Oe(u.id)].map((g, b) => /* @__PURE__ */ t(
                    "button",
                    {
                      onClick: () => _(u.id, { containerSelector: g }),
                      className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${u.containerSelector === g ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                      children: g
                    },
                    b
                  )) }),
                  /* @__PURE__ */ o("div", { className: "pl-3 border-l-2 border-white/10 space-y-2", children: [
                    u.fields.length === 0 && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500", children: "No columns yet. Add one for each piece of data to pull from every row (e.g. title, price)." }),
                    u.fields.map((g) => /* @__PURE__ */ o("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ t(
                          "input",
                          {
                            value: g.name,
                            onChange: (b) => he(u.id, g.id, { name: b.target.value }),
                            placeholder: "columnName",
                            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                          }
                        ),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: () => ce(u.id, g.id),
                            className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                            title: "Remove column",
                            "aria-label": "Remove column",
                            children: /* @__PURE__ */ t(x, { name: "close", className: "text-base" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ t("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ t(
                          X,
                          {
                            value: g.selector,
                            onChange: (b) => he(u.id, g.id, { selector: b }),
                            variables: e.variables,
                            placeholder: "Selector relative to row, e.g. h2 span",
                            className: "text-xs"
                          }
                        ) }),
                        n && /* @__PURE__ */ t(
                          "button",
                          {
                            onClick: () => {
                              v(!1), n(u.id, g.id);
                            },
                            className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                            title: "Pick Selector in Browser (within row)",
                            "aria-label": "Pick Selector in Browser (within row)",
                            children: /* @__PURE__ */ t(x, { name: "my_location", className: "text-lg" })
                          }
                        )
                      ] }),
                      c?.[Ve(u.id, g.id)] && c[Ve(u.id, g.id)].length > 1 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1", children: c[Ve(u.id, g.id)].map((b, S) => /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => he(u.id, g.id, { selector: b }),
                          className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${g.selector === b ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                          children: b
                        },
                        S
                      )) }),
                      /* @__PURE__ */ o("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ t(
                          se,
                          {
                            value: g.attribute,
                            onChange: (b) => he(u.id, g.id, { attribute: b }),
                            options: tt,
                            className: "w-[170px] !min-h-8",
                            ariaLabel: `${g.name || "Group field"} attribute`
                          }
                        ),
                        g.attribute === "attr" && /* @__PURE__ */ t(
                          "input",
                          {
                            value: g.attrName || "",
                            onChange: (b) => he(u.id, g.id, { attrName: b.target.value }),
                            placeholder: "href",
                            className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                          }
                        )
                      ] })
                    ] }, g.id)),
                    /* @__PURE__ */ o(
                      "button",
                      {
                        onClick: () => Q(u.id),
                        className: "w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                        children: [
                          /* @__PURE__ */ t(x, { name: "add", className: "text-sm" }),
                          "Add Column"
                        ]
                      }
                    )
                  ] })
                ] }, u.id)),
                /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: k,
                    className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                    children: [
                      /* @__PURE__ */ t(x, { name: "add", className: "text-base" }),
                      "Add Group"
                    ]
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ o(te, { children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ o(
                "button",
                {
                  onClick: () => {
                    m((u) => !u), H(null);
                  },
                  className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
                  title: "Generate with AI",
                  children: [
                    /* @__PURE__ */ t(x, { name: "auto_awesome", className: "text-sm" }),
                    "Generate"
                  ]
                }
              ) }),
              p && /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    autoFocus: !0,
                    type: "text",
                    value: w,
                    onChange: (u) => I(u.target.value),
                    onKeyDown: (u) => {
                      u.key === "Enter" && !N && be();
                    },
                    placeholder: "e.g. extract all article titles and links",
                    className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
                  }
                ),
                R && /* @__PURE__ */ t("p", { className: "text-xs text-red-400", children: R }),
                /* @__PURE__ */ o("div", { className: "flex justify-end gap-2", children: [
                  /* @__PURE__ */ t("button", { onClick: () => {
                    m(!1), H(null);
                  }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      onClick: be,
                      disabled: N || !w.trim(),
                      className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                      children: [
                        N && /* @__PURE__ */ t(x, { name: "autorenew", className: "text-xs animate-spin" }),
                        N ? "Generating…" : "Generate"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ t(
                we,
                {
                  value: e.extractionScript || "",
                  onChange: (u) => a({ extractionScript: u }),
                  onBlur: s,
                  language: "javascript",
                  className: "min-h-[180px]",
                  placeholder: "// Example: return { title: document.title };"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ t("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Output Format" }),
            /* @__PURE__ */ t("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ t(
              se,
              {
                value: e.extractionFormat || "json",
                onChange: (u) => a({ extractionFormat: u }),
                options: [
                  { value: "json", label: "JSON", icon: "json", iconClassName: "!text-[7px] leading-none" },
                  { value: "csv", label: "CSV", icon: "csv" }
                ],
                className: "!min-h-0 !border-0 !bg-transparent !p-0",
                ariaLabel: "Extraction format"
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t("aside", { className: "min-w-0", "aria-label": "Extraction context", children: /* @__PURE__ */ t(Be, { variables: e.variables, canInsertVariable: P, onInsertVariable: M }) })
  ] }) }) : null, V = f ? ke(
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
            style: { top: f.y, left: f.x },
            onClick: (u) => u.stopPropagation(),
            children: /* @__PURE__ */ o(
              "button",
              {
                onClick: () => {
                  C(null), l();
                },
                className: "w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-white/5 transition-colors",
                children: [
                  /* @__PURE__ */ t(x, { name: "delete", className: "text-sm" }),
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
  return /* @__PURE__ */ o(te, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        onClick: () => v(!0),
        onContextMenu: (u) => {
          u.preventDefault(), C({ x: u.clientX, y: u.clientY });
        },
        "data-interactive-target": "true",
        className: "bg-black min-w-[280px] w-full max-w-sm mx-auto border border-white/20 p-5 rounded-2xl group/item relative transition-all duration-150 select-none touch-none cursor-pointer hover:border-white/40 hover:bg-white/[0.02]",
        children: /* @__PURE__ */ o("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: /* @__PURE__ */ t(x, { name: "data_object", className: "text-[12px] text-white" }) }),
          /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-white shrink-0", children: "Extraction Script" }),
          D && /* @__PURE__ */ t("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: D.trim() })
        ] })
      }
    ),
    A,
    V
  ] });
}, Ps = 760, Ie = 380, xe = 600, ye = 160, Ts = 132, Ds = () => {
  const e = F(null), [a, s] = j(0);
  ae(() => {
    const r = e.current;
    if (!r) return;
    const n = () => s(Math.round(r.getBoundingClientRect().height));
    n();
    const c = new ResizeObserver(n);
    return c.observe(r), () => c.disconnect();
  }, []);
  const l = Math.max(Ts + 48, a - 22), i = [
    `M ${Ie} 58`,
    `H ${xe - 16}`,
    `Q ${xe} 58 ${xe} 74`,
    `V ${l - 18}`,
    `Q ${xe} ${l} ${xe - 18} ${l}`,
    `H ${ye + 18}`,
    `Q ${ye} ${l} ${ye} ${l - 18}`,
    "V 76",
    `Q ${ye} 58 ${ye + 18} 58`,
    `H ${Ie}`,
    "Z"
  ].join(" ");
  return /* @__PURE__ */ t("div", { ref: e, className: "absolute inset-0 z-0 pointer-events-none", "aria-hidden": "true", children: a > 0 && /* @__PURE__ */ o(
    "svg",
    {
      className: "absolute inset-0 overflow-visible text-white/25",
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${Ps} ${a}`,
      preserveAspectRatio: "none",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ t("path", { d: `M ${Ie} 0 V 58`, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ t("path", { d: i, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ t("path", { d: `M ${Ie} ${l} V ${a}`, vectorEffect: "non-scaling-stroke" })
      ]
    }
  ) });
}, Ls = ({
  currentTask: e,
  setCurrentTask: a,
  canvasOffset: s,
  canvasScale: l,
  canvasViewportRef: i,
  onOpenCabinet: r,
  handleAutoSave: n,
  dragState: c,
  dragOverIndex: y,
  selectedActionIds: v,
  actionStatusById: p,
  availableTasks: m,
  selectorOptionsById: w,
  onStartGroupContainerInspect: I,
  onStartGroupFieldInspect: f,
  updateAction: C,
  openActionPalette: N,
  openContextMenu: E,
  handleActionPointerDown: R,
  onOpenHeadful: H,
  onPointerDown: P,
  onPointerMove: z,
  onPointerUp: M,
  onPointerCancel: D,
  selectionBox: L,
  onAddStickyNote: B,
  onUpdateStickyNote: K,
  onDeleteStickyNote: W,
  onDuplicateStickyNote: le,
  selectedNoteIds: J,
  autoOpenActionId: ie,
  onClearAutoOpenActionId: re
}) => {
  const Y = G((b, S = "selector") => {
    const $ = S === "targetSelector" ? `${b}::targetSelector` : b;
    H?.(e.url || "https://www.google.com", $, e, e.variables);
  }, [H, e.url, e.variables]), k = G((b) => {
    const S = { ...e.variables };
    if (b in S) return;
    S[b] = { type: "string", value: "", autoCreated: !0 };
    const $ = { ...e, variables: S };
    a($), n($);
  }, [e, a, n]), _ = G((b) => {
    const S = { ...e.variables };
    if (!(b in S) || !S[b].autoCreated) return;
    delete S[b];
    const $ = { ...e, variables: S };
    a($), n($);
  }, [e, a, n]), [ne, Q] = j({}), [he, ce] = j(!1), be = G((b, S = !1) => {
    const $ = { ...e, ...b };
    a($), S && n($);
  }, [e, a, n]);
  ae(() => {
    Q({});
  }, [e.id]);
  const ge = G((b) => {
    Q((S) => ({ ...S, [b.actionId]: b }));
  }, []), [A, V] = j(null), u = G((b) => {
    const S = b.target;
    if (S.closest("[data-action-id]") || S.closest("[data-sticky-note-id]") || S.closest('[data-interactive-target="true"]')) return;
    b.preventDefault();
    const $ = b.currentTarget.getBoundingClientRect(), de = Math.round((b.clientX - $.left - s.x) / l), O = Math.round((b.clientY - $.top - s.y) / l), U = 8, oe = 180, T = 48, pe = Math.min(Math.max(b.clientX + 12, U), window.innerWidth - oe - U), me = Math.min(Math.max(b.clientY + 12, U), window.innerHeight - T - U);
    V({ x: pe, y: me, worldX: de, worldY: O });
  }, [s, l]), g = (b, S, $ = 0, de = 360) => {
    const O = [];
    let U = b;
    for (; U < S; ) {
      const oe = U, T = e.actions[oe];
      if (!T) {
        U++;
        continue;
      }
      const pe = es(e.actions, oe);
      if (T.type === "if" && pe !== null && pe < S) {
        const me = U, h = pe;
        let ee = 1, ve = U + 1, ue = -1;
        for (; ve < h && ee > 0; ) {
          const fe = e.actions[ve];
          Pe(fe.type) && ee++, fe.type === "end" && ee--, fe.type === "else" && ee === 1 && (ue = ve), ve++;
        }
        const pt = me + 1, Ke = ue !== -1 ? ue : h, Te = ue !== -1 ? ue + 1 : -1, Ye = ue !== -1 ? h : -1, Ne = $ > 0, Xe = Ne ? 280 : de;
        O.push(
          /* @__PURE__ */ o("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ t("div", { className: "w-[360px]", children: /* @__PURE__ */ t(
              Re,
              {
                action: T,
                task: e,
                index: oe,
                isDragOver: y === oe && c?.id !== T.id,
                isDragging: c?.id === T.id,
                dragTransformY: c?.id === T.id ? c.currentY - c.startY : void 0,
                isSelected: v.has(T.id),
                status: p[T.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: m,
                selectorOptions: w[T.id],
                onUpdate: C,
                onAutoSave: n,
                onOpenPalette: N,
                onOpenContextMenu: E,
                onPointerDown: R,
                onStartInspect: Y,
                onCreateVariable: k,
                onDeleteVariable: _,
                autoOpenConfig: ie === T.id,
                onCloseConfigModal: re,
                testResult: ne[T.id],
                onTestResult: ge
              }
            ) }),
            /* @__PURE__ */ o("div", { className: `flex mt-4 relative ${Ne ? "gap-6 -translate-x-[132px]" : "gap-16"}`, children: [
              /* @__PURE__ */ o("div", { className: `flex flex-col items-center ${Ne ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "True" }),
                /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3", children: g(pt, Ke, $ + 1, Xe) }),
                /* @__PURE__ */ o("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": ts(T.id),
                      onClick: () => N(void 0, Ke),
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: `flex flex-col items-center ${Ne ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ t("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "Otherwise" }),
                /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3", children: Te !== -1 ? g(Te, Ye, $ + 1, Xe) : null }),
                /* @__PURE__ */ o("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": as(T.id),
                      onClick: () => {
                        if (Te !== -1)
                          N(void 0, Ye);
                        else {
                          const fe = { id: "act_" + Date.now() + "_else", type: "else", selector: "", value: "" }, De = [...e.actions];
                          De.splice(h, 0, fe), a({ ...e, actions: De }), n({ ...e, actions: De }), setTimeout(() => N(void 0, h + 1), 50);
                        }
                      },
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-col items-center mt-3", children: [
              /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(void 0, h + 1),
                  className: "w-8 h-8 border border-dashed border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action (Ctrl + K)",
                  title: "Add action (Ctrl + K)",
                  children: /* @__PURE__ */ t(x, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
                }
              ),
              /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" })
            ] })
          ] }, T.id)
        ), U = h + 1;
      } else if (Qr(T.type) && pe !== null && pe < S) {
        const me = pe, h = oe + 1, ee = me, ve = ns(T.id), ue = h === ee;
        O.push(
          /* @__PURE__ */ o("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ t("div", { className: "w-[360px]", children: /* @__PURE__ */ t(
              Re,
              {
                action: T,
                task: e,
                index: oe,
                isDragOver: y === oe && c?.id !== T.id,
                isDragging: c?.id === T.id,
                dragTransformY: c?.id === T.id ? c.currentY - c.startY : void 0,
                isSelected: v.has(T.id),
                status: p[T.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: m,
                selectorOptions: w[T.id],
                onUpdate: C,
                onAutoSave: n,
                onOpenPalette: N,
                onOpenContextMenu: E,
                onPointerDown: R,
                onStartInspect: Y,
                onCreateVariable: k,
                onDeleteVariable: _,
                autoOpenConfig: ie === T.id,
                onCloseConfigModal: re,
                testResult: ne[T.id],
                onTestResult: ge
              }
            ) }),
            /* @__PURE__ */ o("div", { className: "relative w-[760px] min-h-[260px] shrink-0 pt-[132px] pb-11", children: [
              /* @__PURE__ */ t(Ds, {}),
              ue ? /* @__PURE__ */ t(
                "button",
                {
                  "data-action-drop-scope": ve,
                  onClick: () => N(void 0, ee),
                  className: "absolute left-[576px] top-[123px] z-20 w-12 h-12 border border-dashed border-white/15 rounded-xl bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action inside loop (Ctrl + K)",
                  title: "Add action inside loop (Ctrl + K)",
                  children: /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                }
              ) : /* @__PURE__ */ o("div", { className: "relative z-10 ml-[420px] w-[360px] flex flex-col items-center", children: [
                /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-3 w-full", children: g(h, ee, $ + 1) }),
                /* @__PURE__ */ o("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ t("div", { className: "h-4 border-l border-white/20" }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      "data-action-drop-scope": ve,
                      onClick: () => N(void 0, ee),
                      className: "relative z-20 w-12 h-12 border border-dashed border-white/15 rounded-xl bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action inside loop (Ctrl + K)",
                      title: "Add action inside loop (Ctrl + K)",
                      children: /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ o("div", { className: "relative z-10 flex flex-col items-center", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(void 0, me + 1),
                  className: "relative z-20 w-8 h-8 border border-dashed border-white/10 rounded-lg bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action after loop (Ctrl + K)",
                  title: "Add action after loop (Ctrl + K)",
                  children: /* @__PURE__ */ t(x, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
                }
              ),
              /* @__PURE__ */ t("div", { className: "h-2 border-l border-white/25" })
            ] })
          ] }, T.id)
        ), U = me + 1;
      } else T.type === "end" || T.type === "else" || O.push(
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ t("div", { className: de === 280 ? "w-[280px]" : "w-[360px]", children: /* @__PURE__ */ t(
            Re,
            {
              action: T,
              task: e,
              index: oe,
              isDragOver: y === oe && c?.id !== T.id,
              isDragging: c?.id === T.id,
              dragTransformY: c?.id === T.id ? c.currentY - c.startY : void 0,
              isSelected: v.has(T.id),
              status: p[T.id],
              translateY: 0,
              variables: e.variables,
              availableTasks: m,
              selectorOptions: w[T.id],
              onUpdate: C,
              onAutoSave: n,
              onOpenPalette: N,
              onOpenContextMenu: E,
              onPointerDown: R,
              onStartInspect: Y,
              onCreateVariable: k,
              onDeleteVariable: _,
              autoOpenConfig: ie === T.id,
              onCloseConfigModal: re,
              testResult: ne[T.id],
              onTestResult: ge
            }
          ) }),
          U < S - 1 && e.actions[U + 1]?.type !== "end" && /* @__PURE__ */ o("div", { className: "flex flex-col items-center my-1", children: [
            /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => N(void 0, oe + 1),
                className: "relative z-20 w-8 h-8 border border-dashed border-white/10 rounded-lg bg-[var(--app-bg)] hover:border-white/30 hover:bg-[var(--app-surface)] transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                "aria-label": "Add action (Ctrl + K)",
                title: "Add action (Ctrl + K)",
                children: /* @__PURE__ */ t(x, { name: "add", className: "text-sm text-gray-600 group-hover:text-white transition-colors" })
              }
            ),
            /* @__PURE__ */ t("div", { className: "w-px h-2 bg-white/25" })
          ] })
        ] }, T.id)
      ), U++;
    }
    return O;
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: i,
      className: "flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing select-none",
      style: { touchAction: "none" },
      onPointerDown: P,
      onPointerMove: z,
      onPointerUp: M,
      onPointerCancel: D,
      onContextMenu: u,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "absolute inset-0 pointer-events-none z-0",
            style: {
              backgroundImage: "radial-gradient(circle, var(--app-dot) 0.8px, transparent 0)",
              backgroundSize: `${22 * l}px ${22 * l}px`,
              backgroundPosition: `${s.x}px ${s.y}px`
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "absolute origin-top-left",
            style: {
              transform: `translate(${s.x}px, ${s.y}px) scale(${l})`
            },
            children: [
              (e.stickyNotes || []).map((b) => /* @__PURE__ */ t(
                _s,
                {
                  note: b,
                  canvasScale: l,
                  isSelected: J.has(b.id),
                  onUpdate: K,
                  onDelete: W,
                  onDuplicate: le
                },
                b.id
              )),
              /* @__PURE__ */ o("div", { className: "relative z-10 flex flex-col items-center pointer-events-none", style: { paddingTop: "60px", minWidth: "500px" }, children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: "w-[360px] bg-black border border-white/15 p-5 rounded-2xl shadow-2xl shadow-black/50 select-text cursor-auto relative z-10 pointer-events-auto",
                    onDoubleClick: (b) => {
                      b.stopPropagation(), ce(!0);
                    },
                    children: [
                      /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            "aria-label": "Configure On Execution",
                            title: "Configure On Execution",
                            onClick: () => ce(!0),
                            className: "flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg pr-2 transition-all",
                            children: [
                              /* @__PURE__ */ t(x, { name: "bolt", className: "text-white/40 text-base" }),
                              /* @__PURE__ */ t("h3", { className: "text-white/60 font-bold tracking-widest text-xs", children: "On Execution" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: () => r("mode"),
                            className: "p-2 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                            title: "Open Task Settings",
                            "aria-label": "Open Task Settings",
                            children: /* @__PURE__ */ t(x, { name: "settings", className: "text-lg" })
                          }
                        )
                      ] }),
                      e.description && /* @__PURE__ */ t("p", { className: "text-xs text-gray-500 mt-2 leading-relaxed", children: e.description })
                    ]
                  }
                ),
                (e.mode === "agent" || e.mode === "scrape") && /* @__PURE__ */ t("div", { className: "w-px h-10 bg-white/25" }),
                e.mode === "scrape" && /* @__PURE__ */ t("div", { className: "w-[360px] pointer-events-auto", children: e.extractionScript !== void 0 ? /* @__PURE__ */ t(
                  at,
                  {
                    task: e,
                    onUpdate: (b) => {
                      const S = { ...e, ...b };
                      a(S), n(S);
                    },
                    onAutoSave: () => n(),
                    onDelete: () => {
                      const b = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                      a(b), n(b);
                    },
                    onStartInspect: Y,
                    onStartGroupContainerInspect: I,
                    onStartGroupFieldInspect: f,
                    selectorOptionsById: w
                  }
                ) : /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: () => {
                      const b = { ...e, extractionScript: "" };
                      a(b), n(b);
                    },
                    "data-interactive-target": "true",
                    className: "w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                    children: [
                      /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" }),
                      /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                    ]
                  }
                ) }),
                e.mode === "agent" && /* @__PURE__ */ t("div", { className: "flex flex-col items-center w-full select-text cursor-auto pointer-events-auto", children: /* @__PURE__ */ o("div", { className: "space-y-6 w-full flex flex-col items-center relative", children: [
                  g(0, e.actions.length),
                  /* @__PURE__ */ o("div", { className: "pt-2 flex flex-col items-center", children: [
                    /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/10" }),
                    /* @__PURE__ */ o(
                      "button",
                      {
                        "data-action-drop-scope": "root",
                        onClick: () => N(),
                        className: "w-[360px] bg-[#0a0a0a] border border-dashed border-white/15 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.03] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        "aria-label": "Add action (Ctrl + K)",
                        title: "Add action (Ctrl + K)",
                        children: [
                          /* @__PURE__ */ t("div", { className: "w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all flex items-center justify-center", children: /* @__PURE__ */ t(x, { name: "add", className: "text-2xl text-gray-500 group-hover:text-white transition-colors" }) }),
                          /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Action" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t("div", { className: "w-px h-6 bg-white/25" }),
                  /* @__PURE__ */ t("div", { className: "w-[360px]", children: e.extractionScript !== void 0 ? /* @__PURE__ */ t(
                    at,
                    {
                      task: e,
                      onUpdate: (b) => {
                        const S = { ...e, ...b };
                        a(S), n(S);
                      },
                      onAutoSave: () => n(),
                      onDelete: () => {
                        const b = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                        a(b), n(b);
                      },
                      onStartInspect: Y,
                      onStartGroupContainerInspect: I,
                      onStartGroupFieldInspect: f,
                      selectorOptionsById: w
                    }
                  ) : /* @__PURE__ */ o(
                    "button",
                    {
                      onClick: () => {
                        const b = { ...e, extractionScript: "" };
                        a(b), n(b);
                      },
                      "data-interactive-target": "true",
                      className: "w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      children: [
                        /* @__PURE__ */ t(x, { name: "add", className: "text-lg text-gray-500 group-hover:text-white transition-colors" }),
                        /* @__PURE__ */ t("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                      ]
                    }
                  ) })
                ] }) })
              ] })
            ]
          }
        ),
        L && /* @__PURE__ */ t("div", { className: "fixed inset-0 pointer-events-none z-20 overflow-hidden", children: /* @__PURE__ */ t(
          "div",
          {
            className: "absolute bg-blue-500/10 border border-blue-400",
            style: {
              left: Math.min(L.startX, L.currentX),
              top: Math.min(L.startY, L.currentY),
              width: Math.abs(L.currentX - L.startX),
              height: Math.abs(L.currentY - L.startY)
            }
          }
        ) }),
        he && /* @__PURE__ */ t(
          Es,
          {
            task: e,
            onUpdate: be,
            onClose: () => {
              ce(!1), n(e);
            }
          }
        ),
        A && /* @__PURE__ */ o(te, { children: [
          /* @__PURE__ */ t("div", { className: "fixed inset-0 z-40", onClick: () => V(null), onContextMenu: (b) => {
            b.preventDefault(), V(null);
          } }),
          /* @__PURE__ */ t(
            "div",
            {
              className: "fixed z-50 w-[180px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
              style: { left: A.x, top: A.y },
              children: /* @__PURE__ */ o(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2",
                  onClick: () => {
                    B(A.worldX, A.worldY), V(null);
                  },
                  children: [
                    /* @__PURE__ */ t(x, { name: "sticky_note_2", className: "text-[14px] text-white/50" }),
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
}, Z = () => {
}, As = 400, je = 20, Rs = ({ task: e, className: a = "" }) => {
  const s = F(null), l = F(null), [i, r] = j({ x: 0, y: 20 }), n = F(null);
  gt(() => {
    const p = l.current;
    if (!p) return;
    const m = () => {
      if (n.current) return;
      const I = e.stickyNotes || [], f = Math.min(0, ...I.map((H) => H.x)), N = Math.max(As, ...I.map((H) => H.x + H.width)) - f, E = Math.max(0, p.clientWidth - je * 2), R = N <= E ? (p.clientWidth - N) / 2 - f : je - f;
      r({ x: R, y: je });
    };
    m();
    const w = new ResizeObserver(m);
    return w.observe(p), () => w.disconnect();
  }, [e]), ae(() => {
    const p = s.current;
    if (!p) return;
    const m = (w) => {
      w.ctrlKey || w.metaKey || (w.preventDefault(), r((I) => ({
        x: I.x - w.deltaX,
        y: I.y - w.deltaY
      })));
    };
    return p.addEventListener("wheel", m, { passive: !1 }), () => p.removeEventListener("wheel", m);
  }, []);
  const c = (p) => {
    p.button === 0 && (n.current = {
      pointerId: p.pointerId,
      x: p.clientX,
      y: p.clientY,
      offsetX: i.x,
      offsetY: i.y
    }, p.currentTarget.setPointerCapture?.(p.pointerId));
  }, y = (p) => {
    const m = n.current;
    !m || m.pointerId !== p.pointerId || r({
      x: m.offsetX + p.clientX - m.x,
      y: m.offsetY + p.clientY - m.y
    });
  }, v = (p) => {
    n.current?.pointerId === p.pointerId && (n.current = null, p.currentTarget.releasePointerCapture?.(p.pointerId));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: s,
      className: `figranium-readonly-canvas relative flex h-full w-full select-none cursor-grab active:cursor-grabbing ${a}`.trim(),
      "aria-label": "Read-only Figranium task canvas. Drag or scroll to pan.",
      style: { "--app-dot": "rgba(255, 255, 255, 0.12)", touchAction: "none" },
      onContextMenuCapture: (p) => {
        p.preventDefault(), p.stopPropagation();
      },
      onPointerDown: c,
      onPointerMove: y,
      onPointerUp: v,
      onPointerCancel: v,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: "flex h-full w-full",
          inert: !0,
          "aria-hidden": "true",
          style: { pointerEvents: "none" },
          children: /* @__PURE__ */ t(
            Ls,
            {
              currentTask: e,
              setCurrentTask: Z,
              canvasOffset: i,
              canvasScale: 1,
              canvasViewportRef: l,
              triggerExpanded: !1,
              setTriggerExpanded: Z,
              onOpenCabinet: Z,
              handleAutoSave: Z,
              dragState: null,
              dragOverIndex: null,
              selectedActionIds: /* @__PURE__ */ new Set(),
              setSelectedActionIds: Z,
              actionStatusById: {},
              availableTasks: [],
              selectorOptionsById: {},
              updateAction: Z,
              openActionPalette: Z,
              openContextMenu: Z,
              handleActionPointerDown: Z,
              onOpenHeadful: Z,
              isHeadfulOpen: !1,
              onPointerDown: Z,
              onPointerMove: Z,
              onPointerUp: Z,
              onPointerCancel: Z,
              selectionBox: null,
              onAddStickyNote: Z,
              onUpdateStickyNote: Z,
              onDeleteStickyNote: Z,
              onDuplicateStickyNote: Z,
              selectedNoteIds: /* @__PURE__ */ new Set(),
              autoOpenActionId: null,
              onClearAutoOpenActionId: Z
            }
          )
        }
      )
    }
  );
};
function zs({
  task: e,
  className: a = "",
  height: s = 560,
  ariaLabel: l = "Figranium task preview"
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `figranium-embed ${a}`.trim(),
      style: { height: s },
      "aria-label": l,
      role: "img",
      children: /* @__PURE__ */ t("div", { className: "figranium-embed__surface", "aria-hidden": "true", children: /* @__PURE__ */ t(Rs, { task: e }) })
    }
  );
}
export {
  zs as FigraniumEmbed
};
