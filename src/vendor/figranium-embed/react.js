import { jsx as f, jsxs as C, Fragment as Me } from "react/jsx-runtime";
import ri, { forwardRef as bl, createElement as Zt, useRef as se, useEffect as Ne, useMemo as Ft, useState as ce, useCallback as Ce, useLayoutEffect as ii } from "react";
import { createPortal as Nt } from "react-dom";
var kl = {
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
const T = (e, t, n, r) => {
  const l = bl(
    ({ color: o = "currentColor", size: i = 24, stroke: a = 2, title: c, className: s, children: d, ...u }, h) => Zt(
      "svg",
      {
        ref: h,
        ...kl[e],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${t}`, s].filter(Boolean).join(" "),
        strokeWidth: a,
        stroke: o,
        ...u
      },
      [
        c && Zt("title", { key: "svg-title" }, c),
        ...r.map(([p, m]) => Zt(p, m)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return l.displayName = `${n}`, l;
};
const vl = [["path", { d: "M3 16v-6a2 2 0 1 1 4 0v6", key: "svg-0" }], ["path", { d: "M3 13h4", key: "svg-1" }], ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1", key: "svg-2" }], ["path", { d: "M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01", key: "svg-3" }]], wl = T("outline", "abc", "Abc", vl);
const Cl = [["path", { d: "M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]], Nl = T("outline", "adjustments-horizontal", "AdjustmentsHorizontal", Cl);
const Ml = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], _l = T("outline", "alert-circle", "AlertCircle", Ml);
const Il = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Sl = T("outline", "alert-triangle", "AlertTriangle", Il);
const El = [["path", { d: "M4 13h5", key: "svg-0" }], ["path", { d: "M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3", key: "svg-1" }], ["path", { d: "M20 8v8", key: "svg-2" }], ["path", { d: "M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5", key: "svg-3" }]], Tl = T("outline", "api", "Api", El);
const Al = [["path", { d: "M5 12l14 0", key: "svg-0" }], ["path", { d: "M5 12l6 6", key: "svg-1" }], ["path", { d: "M5 12l6 -6", key: "svg-2" }]], Pl = T("outline", "arrow-left", "ArrowLeft", Al);
const Dl = [["path", { d: "M16 4l4 0l0 4", key: "svg-0" }], ["path", { d: "M14 10l6 -6", key: "svg-1" }], ["path", { d: "M8 20l-4 0l0 -4", key: "svg-2" }], ["path", { d: "M4 20l6 -6", key: "svg-3" }], ["path", { d: "M16 20l4 0l0 -4", key: "svg-4" }], ["path", { d: "M14 14l6 6", key: "svg-5" }], ["path", { d: "M8 4l-4 0l0 4", key: "svg-6" }], ["path", { d: "M4 4l6 6", key: "svg-7" }]], Ll = T("outline", "arrows-maximize", "ArrowsMaximize", Dl);
const $l = [["path", { d: "M18 9l3 3l-3 3", key: "svg-0" }], ["path", { d: "M15 12h6", key: "svg-1" }], ["path", { d: "M6 9l-3 3l3 3", key: "svg-2" }], ["path", { d: "M3 12h6", key: "svg-3" }], ["path", { d: "M9 18l3 3l3 -3", key: "svg-4" }], ["path", { d: "M12 15v6", key: "svg-5" }], ["path", { d: "M15 6l-3 -3l-3 3", key: "svg-6" }], ["path", { d: "M12 3v6", key: "svg-7" }]], Rl = T("outline", "arrows-move", "ArrowsMove", $l);
const Ol = [["path", { d: "M18 4l3 3l-3 3", key: "svg-0" }], ["path", { d: "M18 20l3 -3l-3 -3", key: "svg-1" }], ["path", { d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5", key: "svg-2" }], ["path", { d: "M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3", key: "svg-3" }]], zl = T("outline", "arrows-shuffle", "ArrowsShuffle", Ol);
const Fl = [["path", { d: "M7 3l0 18", key: "svg-0" }], ["path", { d: "M10 6l-3 -3l-3 3", key: "svg-1" }], ["path", { d: "M20 18l-3 3l-3 -3", key: "svg-2" }], ["path", { d: "M17 21l0 -18", key: "svg-3" }]], Bl = T("outline", "arrows-up-down", "ArrowsUpDown", Fl);
const jl = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M5.7 5.7l12.6 12.6", key: "svg-1" }]], Vl = T("outline", "ban", "Ban", jl);
const Hl = [["path", { d: "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11", key: "svg-0" }]], ql = T("outline", "bolt", "Bolt", Hl);
const Ul = [["path", { d: "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2", key: "svg-0" }], ["path", { d: "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2", key: "svg-1" }]], Wl = T("outline", "braces", "Braces", Ul);
const Yl = [["path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0", key: "svg-0" }], ["path", { d: "M7.5 8h3v8l-2 -1", key: "svg-1" }], ["path", { d: "M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5", key: "svg-2" }]], Xl = T("outline", "brand-javascript", "BrandJavascript", Yl);
const Kl = [["path", { d: "M4 8h8", key: "svg-0" }], ["path", { d: "M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5", key: "svg-1" }], ["path", { d: "M8 4v4", key: "svg-2" }], ["path", { d: "M16 8l5 -5", key: "svg-3" }], ["path", { d: "M21 7.5v-4.5h-4.5", key: "svg-4" }]], Gl = T("outline", "browser-maximize", "BrowserMaximize", Kl);
const Jl = [["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3", key: "svg-0" }], ["path", { d: "M16 3v4", key: "svg-1" }], ["path", { d: "M8 3v4", key: "svg-2" }], ["path", { d: "M4 11h12", key: "svg-3" }], ["path", { d: "M20 14l2 2h-3", key: "svg-4" }], ["path", { d: "M20 18l2 -2", key: "svg-5" }], ["path", { d: "M19 16a3 3 0 1 0 2 5.236", key: "svg-6" }]], Ql = T("outline", "calendar-repeat", "CalendarRepeat", Jl);
const Zl = [["path", { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]], eo = T("outline", "camera", "Camera", Zl);
const to = [["path", { d: "M4 4h6v6h-6l0 -6", key: "svg-0" }], ["path", { d: "M14 4h6v6h-6l0 -6", key: "svg-1" }], ["path", { d: "M4 14h6v6h-6l0 -6", key: "svg-2" }], ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-3" }]], no = T("outline", "category", "Category", to);
const ro = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], io = T("outline", "check", "Check", ro);
const lo = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], oo = T("outline", "chevron-down", "ChevronDown", lo);
const ao = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], so = T("outline", "circle-check", "CircleCheck", ao);
const co = [["path", { d: "M15 11l-3 3l-3 -3", key: "svg-0" }], ["path", { d: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18", key: "svg-1" }]], uo = T("outline", "circle-chevron-down", "CircleChevronDown", co);
const ho = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M10 10l4 4m0 -4l-4 4", key: "svg-1" }]], po = T("outline", "circle-x", "CircleX", ho);
const fo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]], li = T("outline", "circle", "Circle", fo);
const mo = [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]], go = T("outline", "click", "Click", mo);
const yo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 7v5l3 3", key: "svg-1" }]], xo = T("outline", "clock", "Clock", yo);
const bo = [["path", { d: "M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878", key: "svg-0" }]], ko = T("outline", "cloud", "Cloud", bo);
const vo = [["path", { d: "M7 8l-4 4l4 4", key: "svg-0" }], ["path", { d: "M17 8l4 4l-4 4", key: "svg-1" }], ["path", { d: "M14 4l-4 16", key: "svg-2" }]], wo = T("outline", "code", "Code", vo);
const Co = [["path", { d: "M13 9l3 -1l-1 3m-1 3l-6 2l2 -6", key: "svg-0" }], ["path", { d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73", key: "svg-1" }], ["path", { d: "M12 3v2", key: "svg-2" }], ["path", { d: "M12 19v2", key: "svg-3" }], ["path", { d: "M3 12h2", key: "svg-4" }], ["path", { d: "M19 12h2", key: "svg-5" }], ["path", { d: "M3 3l18 18", key: "svg-6" }]], No = T("outline", "compass-off", "CompassOff", Co);
const Mo = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }], ["path", { d: "M11 14h6", key: "svg-2" }], ["path", { d: "M14 11v6", key: "svg-3" }]], _o = T("outline", "copy-plus", "CopyPlus", Mo);
const Io = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], So = T("outline", "copy", "Copy", Io);
const Eo = [["path", { d: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4", key: "svg-0" }]], To = T("outline", "corner-down-right", "CornerDownRight", Eo);
const Ao = [["path", { d: "M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12", key: "svg-0" }], ["path", { d: "M9 9h6v6h-6l0 -6", key: "svg-1" }], ["path", { d: "M3 10h2", key: "svg-2" }], ["path", { d: "M3 14h2", key: "svg-3" }], ["path", { d: "M10 3v2", key: "svg-4" }], ["path", { d: "M14 3v2", key: "svg-5" }], ["path", { d: "M21 10h-2", key: "svg-6" }], ["path", { d: "M21 14h-2", key: "svg-7" }], ["path", { d: "M14 21v-2", key: "svg-8" }], ["path", { d: "M10 21v-2", key: "svg-9" }]], Po = T("outline", "cpu", "Cpu", Ao);
const Do = [["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }], ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }], ["path", { d: "M9.15 14.85l8.85 -10.85", key: "svg-2" }], ["path", { d: "M6 4l8.85 10.85", key: "svg-3" }]], Lo = T("outline", "cut", "Cut", Do);
const $o = [["path", { d: "M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0", key: "svg-0" }], ["path", { d: "M4 6v6a8 3 0 0 0 16 0v-6", key: "svg-1" }], ["path", { d: "M4 12v6a8 3 0 0 0 16 0v-6", key: "svg-2" }]], Ro = T("outline", "database", "Database", $o);
const Oo = [["path", { d: "M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7", key: "svg-0" }], ["path", { d: "M7 20h5", key: "svg-1" }], ["path", { d: "M9 16v4", key: "svg-2" }], ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M19.001 15.5v1.5", key: "svg-4" }], ["path", { d: "M19.001 21v1.5", key: "svg-5" }], ["path", { d: "M22.032 17.25l-1.299 .75", key: "svg-6" }], ["path", { d: "M17.27 20l-1.3 .75", key: "svg-7" }], ["path", { d: "M15.97 17.25l1.3 .75", key: "svg-8" }], ["path", { d: "M20.733 20l1.3 .75", key: "svg-9" }]], zo = T("outline", "device-desktop-cog", "DeviceDesktopCog", Oo);
const Fo = [["path", { d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10", key: "svg-0" }], ["path", { d: "M7 20h10", key: "svg-1" }], ["path", { d: "M9 16v4", key: "svg-2" }], ["path", { d: "M15 16v4", key: "svg-3" }]], Bo = T("outline", "device-desktop", "DeviceDesktop", Fo);
const jo = [["path", { d: "M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M14 4l0 4l-6 0l0 -4", key: "svg-2" }]], Vo = T("outline", "device-floppy", "DeviceFloppy", jo);
const Ho = [["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], qo = T("outline", "dots-vertical", "DotsVertical", Ho);
const Uo = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], Wo = T("outline", "download", "Download", Uo);
const Yo = [["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", key: "svg-0" }], ["path", { d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415", key: "svg-1" }], ["path", { d: "M16 5l3 3", key: "svg-2" }]], Xo = T("outline", "edit", "Edit", Yo);
const Ko = [["path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6", key: "svg-0" }], ["path", { d: "M11 13l9 -9", key: "svg-1" }], ["path", { d: "M15 4h5v5", key: "svg-2" }]], Go = T("outline", "external-link", "ExternalLink", Ko);
const Jo = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Qo = T("outline", "eye-off", "EyeOff", Jo);
const Zo = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], ea = T("outline", "eye", "Eye", Zo);
const ta = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M9 17h6", key: "svg-2" }], ["path", { d: "M9 13h6", key: "svg-3" }]], na = T("outline", "file-description", "FileDescription", ta);
const ra = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M9 9l1 0", key: "svg-2" }], ["path", { d: "M9 13l6 0", key: "svg-3" }], ["path", { d: "M9 17l6 0", key: "svg-4" }]], ia = T("outline", "file-text", "FileText", ra);
const la = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4", key: "svg-1" }], ["path", { d: "M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0", key: "svg-2" }], ["path", { d: "M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75", key: "svg-3" }], ["path", { d: "M16 15l2 6l2 -6", key: "svg-4" }]], oa = T("outline", "file-type-csv", "FileTypeCsv", la);
const aa = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M12 11v6", key: "svg-2" }], ["path", { d: "M9.5 13.5l2.5 -2.5l2.5 2.5", key: "svg-3" }]], sa = T("outline", "file-upload", "FileUpload", aa);
const ca = [["path", { d: "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1", key: "svg-0" }], ["path", { d: "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2", key: "svg-1" }], ["path", { d: "M11 5l-1 0", key: "svg-2" }], ["path", { d: "M13 7l-1 0", key: "svg-3" }], ["path", { d: "M11 9l-1 0", key: "svg-4" }], ["path", { d: "M13 11l-1 0", key: "svg-5" }], ["path", { d: "M11 13l-1 0", key: "svg-6" }], ["path", { d: "M13 15l-1 0", key: "svg-7" }]], ua = T("outline", "file-zip", "FileZip", ca);
const da = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }]], ha = T("outline", "file", "File", da);
const pa = [["path", { d: "M15 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-2" }]], fa = T("outline", "files", "Files", pa);
const ma = [["path", { d: "M9 3l6 0", key: "svg-0" }], ["path", { d: "M10 9l4 0", key: "svg-1" }], ["path", { d: "M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6", key: "svg-2" }]], ga = T("outline", "flask", "Flask", ma);
const ya = [["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", key: "svg-1" }], ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", key: "svg-2" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "svg-3" }], ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", key: "svg-4" }]], xa = T("outline", "focus-centered", "FocusCentered", ya);
const ba = [["path", { d: "M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], ka = T("outline", "folder-plus", "FolderPlus", ba);
const va = [["path", { d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2", key: "svg-0" }]], wa = T("outline", "folder", "Folder", va);
const Ca = [["path", { d: "M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", key: "svg-0" }], ["path", { d: "M17 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2", key: "svg-1" }]], Na = T("outline", "folders", "Folders", Ca);
const Ma = [["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-2" }], ["path", { d: "M7 8l0 8", key: "svg-3" }], ["path", { d: "M9 18h6a2 2 0 0 0 2 -2v-5", key: "svg-4" }], ["path", { d: "M14 14l3 -3l3 3", key: "svg-5" }]], _a = T("outline", "git-branch", "GitBranch", Ma);
const Ia = [["path", { d: "M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], Sa = T("outline", "grip-vertical", "GripVertical", Ia);
const Ea = [["path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969", key: "svg-0" }], ["path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554", key: "svg-1" }], ["path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592", key: "svg-2" }], ["path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305", key: "svg-3" }], ["path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356", key: "svg-4" }], ["path", { d: "M12 8v4l3 3", key: "svg-5" }]], Ta = T("outline", "history-toggle", "HistoryToggle", Ea);
const Aa = [["path", { d: "M12 8l0 4l2 2", key: "svg-0" }], ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]], Pa = T("outline", "history", "History", Aa);
const Da = [["path", { d: "M5 12l-2 0l9 -9l9 9l-2 0", key: "svg-0" }], ["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7", key: "svg-1" }], ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6", key: "svg-2" }]], La = T("outline", "home", "Home", Da);
const $a = [["path", { d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1", key: "svg-0" }], ["path", { d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1", key: "svg-1" }]], Ra = T("outline", "hourglass-empty", "HourglassEmpty", $a);
const Oa = [["path", { d: "M6.5 7h11", key: "svg-0" }], ["path", { d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1", key: "svg-1" }], ["path", { d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1", key: "svg-2" }]], za = T("outline", "hourglass-high", "HourglassHigh", Oa);
const Fa = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]], Ba = T("outline", "info-circle", "InfoCircle", Fa);
const ja = [["path", { d: "M20 16v-8l3 8v-8", key: "svg-0" }], ["path", { d: "M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2", key: "svg-1" }], ["path", { d: "M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5", key: "svg-2" }], ["path", { d: "M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1", key: "svg-3" }]], Va = T("outline", "json", "Json", ja);
const Ha = [["path", { d: "M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0", key: "svg-0" }], ["path", { d: "M15 9h.01", key: "svg-1" }]], qa = T("outline", "key", "Key", Ha);
const Ua = [["path", { d: "M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8", key: "svg-0" }], ["path", { d: "M6 10l0 .01", key: "svg-1" }], ["path", { d: "M10 10l0 .01", key: "svg-2" }], ["path", { d: "M14 10l0 .01", key: "svg-3" }], ["path", { d: "M18 10l0 .01", key: "svg-4" }], ["path", { d: "M6 14l0 .01", key: "svg-5" }], ["path", { d: "M18 14l0 .01", key: "svg-6" }], ["path", { d: "M10 14l4 .01", key: "svg-7" }]], Wa = T("outline", "keyboard", "Keyboard", Ua);
const Ya = [["path", { d: "M9 6.371c0 4.418 -2.239 6.629 -5 6.629", key: "svg-0" }], ["path", { d: "M4 6.371h7", key: "svg-1" }], ["path", { d: "M5 9c0 2.144 2.252 3.908 6 4", key: "svg-2" }], ["path", { d: "M12 20l4 -9l4 9", key: "svg-3" }], ["path", { d: "M19.1 18h-6.2", key: "svg-4" }], ["path", { d: "M6.694 3l.793 .582", key: "svg-5" }]], Xa = T("outline", "language", "Language", Ya);
const Ka = [["path", { d: "M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3", key: "svg-0" }], ["path", { d: "M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3", key: "svg-1" }]], Ga = T("outline", "layers-linked", "LayersLinked", Ka);
const Ja = [["path", { d: "M9 15l6 -6", key: "svg-0" }], ["path", { d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464", key: "svg-1" }], ["path", { d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463", key: "svg-2" }]], Qa = T("outline", "link", "Link", Ja);
const Za = [["path", { d: "M11 6h9", key: "svg-0" }], ["path", { d: "M11 12h9", key: "svg-1" }], ["path", { d: "M12 18h8", key: "svg-2" }], ["path", { d: "M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4", key: "svg-3" }], ["path", { d: "M6 10v-6l-2 2", key: "svg-4" }]], es = T("outline", "list-numbers", "ListNumbers", Za);
const ts = [["path", { d: "M9 6l11 0", key: "svg-0" }], ["path", { d: "M9 12l11 0", key: "svg-1" }], ["path", { d: "M9 18l11 0", key: "svg-2" }], ["path", { d: "M5 6l0 .01", key: "svg-3" }], ["path", { d: "M5 12l0 .01", key: "svg-4" }], ["path", { d: "M5 18l0 .01", key: "svg-5" }]], ns = T("outline", "list", "List", ts);
const rs = [["path", { d: "M12 3a9 9 0 1 0 9 9", key: "svg-0" }]], is = T("outline", "loader-2", "Loader2", rs);
const ls = [["path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5", key: "svg-0" }]], os = T("outline", "location", "Location", ls);
const as = [["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", key: "svg-0" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }], ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]], ss = T("outline", "lock", "Lock", as);
const cs = [["path", { d: "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M21 12h-13l3 -3", key: "svg-1" }], ["path", { d: "M11 15l-3 -3", key: "svg-2" }]], us = T("outline", "login", "Login", cs);
const ds = [["path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M9 12h12l-3 -3", key: "svg-1" }], ["path", { d: "M18 15l3 -3", key: "svg-2" }]], hs = T("outline", "logout", "Logout", ds);
const ps = [["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", key: "svg-0" }], ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", key: "svg-1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "svg-2" }], ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", key: "svg-3" }]], fs = T("outline", "maximize", "Maximize", ps);
const ms = [["path", { d: "M6 7a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4l0 -10", key: "svg-0" }], ["path", { d: "M12 7l0 4", key: "svg-1" }]], gs = T("outline", "mouse", "Mouse", ms);
const ys = [["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M8 4l0 16", key: "svg-1" }], ["path", { d: "M16 4l0 16", key: "svg-2" }], ["path", { d: "M4 8l4 0", key: "svg-3" }], ["path", { d: "M4 16l4 0", key: "svg-4" }], ["path", { d: "M4 12l16 0", key: "svg-5" }], ["path", { d: "M16 8l4 0", key: "svg-6" }], ["path", { d: "M16 16l4 0", key: "svg-7" }]], xs = T("outline", "movie", "Movie", ys);
const bs = [["path", { d: "M12 18.5l7.265 2.463c.196 .077 .42 .032 .57 -.116a.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463", key: "svg-0" }]], ks = T("outline", "navigation", "Navigation", bs);
const vs = [["path", { d: "M13 20l7 -7", key: "svg-0" }], ["path", { d: "M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7", key: "svg-1" }]], ws = T("outline", "note", "Note", vs);
const Cs = [["path", { d: "M8 10v-7l-2 2", key: "svg-0" }], ["path", { d: "M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4", key: "svg-1" }], ["path", { d: "M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2", key: "svg-2" }], ["path", { d: "M6.5 10h3", key: "svg-3" }]], Ns = T("outline", "numbers", "Numbers", Cs);
const Ms = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], _s = T("outline", "package", "Package", Ms);
const Is = [["path", { d: "M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25", key: "svg-0" }], ["path", { d: "M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }]], Ss = T("outline", "palette", "Palette", Is);
const Es = [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", key: "svg-2" }], ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", key: "svg-3" }]], Ts = T("outline", "photo", "Photo", Es);
const As = [["path", { d: "M7 4v16l13 -8l-13 -8", key: "svg-0" }]], Ps = T("outline", "player-play", "PlayerPlay", As);
const Ds = [["path", { d: "M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }]], Ls = T("outline", "player-stop", "PlayerStop", Ds);
const $s = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]], Rs = T("outline", "plus", "Plus", $s);
const Os = [["path", { d: "M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1", key: "svg-0" }]], zs = T("outline", "puzzle", "Puzzle", Os);
const Fs = [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]], Bs = T("outline", "refresh", "Refresh", Fs);
const js = [["path", { d: "M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3", key: "svg-0" }], ["path", { d: "M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3", key: "svg-1" }]], Vs = T("outline", "repeat", "Repeat", js);
const Hs = [["path", { d: "M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3", key: "svg-0" }], ["path", { d: "M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3", key: "svg-1" }], ["path", { d: "M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], qs = T("outline", "rocket", "Rocket", Hs);
const Us = [["path", { d: "M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057", key: "svg-0" }], ["path", { d: "M3 3l18 18", key: "svg-1" }]], Ws = T("outline", "search-off", "SearchOff", Us);
const Ys = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Xs = T("outline", "search", "Search", Ys);
const Ks = [["path", { d: "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2", key: "svg-0" }], ["path", { d: "M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2", key: "svg-1" }], ["path", { d: "M7 8l0 .01", key: "svg-2" }], ["path", { d: "M7 16l0 .01", key: "svg-3" }]], Gs = T("outline", "server", "Server", Ks);
const Js = [["path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065", key: "svg-0" }], ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]], Qs = T("outline", "settings", "Settings", Js);
const Zs = [["path", { d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06", key: "svg-0" }], ["path", { d: "M15 19l2 2l4 -4", key: "svg-1" }]], ec = T("outline", "shield-check", "ShieldCheck", Zs);
const tc = [["path", { d: "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3", key: "svg-0" }]], nc = T("outline", "shield", "Shield", tc);
const rc = [["path", { d: "M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4", key: "svg-0" }], ["path", { d: "M19 21h-4l4 -7h-4", key: "svg-1" }], ["path", { d: "M4 15l3 3l3 -3", key: "svg-2" }], ["path", { d: "M7 6v12", key: "svg-3" }]], ic = T("outline", "sort-ascending-letters", "SortAscendingLetters", rc);
const lc = [["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], oc = T("outline", "square-check", "SquareCheck", lc);
const ac = [["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14", key: "svg-0" }]], sc = T("outline", "square", "Square", ac);
const cc = [["path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245", key: "svg-0" }]], uc = T("outline", "star", "Star", cc);
const dc = [["path", { d: "M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3", key: "svg-1" }]], hc = T("outline", "tag", "Tag", dc);
const pc = [["path", { d: "M8 9l3 3l-3 3", key: "svg-0" }], ["path", { d: "M13 15l3 0", key: "svg-1" }], ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12", key: "svg-2" }]], fc = T("outline", "terminal-2", "Terminal2", pc);
const mc = [["path", { d: "M3 7v-2h13v2", key: "svg-0" }], ["path", { d: "M10 5v14", key: "svg-1" }], ["path", { d: "M12 19h-4", key: "svg-2" }], ["path", { d: "M15 13v-1h6v1", key: "svg-3" }], ["path", { d: "M18 12v7", key: "svg-4" }], ["path", { d: "M17 19h2", key: "svg-5" }]], gc = T("outline", "text-size", "TextSize", mc);
const yc = [["path", { d: "M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6", key: "svg-1" }]], xc = T("outline", "toggle-right", "ToggleRight", yc);
const bc = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], kc = T("outline", "trash-x", "TrashX", bc);
const vc = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], wc = T("outline", "trash", "Trash", vc);
const Cc = [["path", { d: "M4 20l3 0", key: "svg-0" }], ["path", { d: "M14 20l7 0", key: "svg-1" }], ["path", { d: "M6.9 15l6.9 0", key: "svg-2" }], ["path", { d: "M10.2 6.3l5.8 13.7", key: "svg-3" }], ["path", { d: "M5 20l6 -16l2 0l7 16", key: "svg-4" }]], Nc = T("outline", "typography", "Typography", Cc);
const Mc = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], _c = T("outline", "upload", "Upload", Mc);
const Ic = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h1.5", key: "svg-1" }], ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-2" }], ["path", { d: "M20.2 20.2l1.8 1.8", key: "svg-3" }]], Sc = T("outline", "user-search", "UserSearch", Ic);
const Ec = [["path", { d: "M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1", key: "svg-0" }], ["path", { d: "M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5", key: "svg-1" }]], Tc = T("outline", "variable", "Variable", Ec);
const Ac = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946", key: "svg-1" }], ["path", { d: "M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1", key: "svg-2" }]], Pc = T("outline", "video-off", "VideoOff", Ac);
const Dc = [["path", { d: "M6 21l15 -15l-3 -3l-15 15l3 3", key: "svg-0" }], ["path", { d: "M15 6l3 3", key: "svg-1" }], ["path", { d: "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2", key: "svg-2" }], ["path", { d: "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2", key: "svg-3" }]], Lc = T("outline", "wand", "Wand", Dc);
const $c = [["path", { d: "M12 18l.01 0", key: "svg-0" }], ["path", { d: "M9.172 15.172a4 4 0 0 1 5.656 0", key: "svg-1" }], ["path", { d: "M6.343 12.343a8 8 0 0 1 11.314 0", key: "svg-2" }], ["path", { d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0", key: "svg-3" }]], Rc = T("outline", "wifi", "Wifi", $c);
const Oc = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M3.6 9h16.8", key: "svg-1" }], ["path", { d: "M3.6 15h16.8", key: "svg-2" }], ["path", { d: "M11.5 3a17 17 0 0 0 0 18", key: "svg-3" }], ["path", { d: "M12.5 3a17 17 0 0 1 0 18", key: "svg-4" }]], zc = T("outline", "world", "World", Oc);
const Fc = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Bc = T("outline", "x", "X", Fc), jc = {
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
}, Vc = {
  IconGitBranch: _a,
  IconPlus: Rs,
  IconClick: go,
  IconApi: Tl,
  IconArrowLeft: Pl,
  IconCircleChevronDown: uo,
  IconFileText: ia,
  IconWand: Lc,
  IconTrash: wc,
  IconRefresh: Bs,
  IconBan: Vl,
  IconBolt: ql,
  IconCircleX: po,
  IconCategory: no,
  IconFocusCentered: xa,
  IconCheck: io,
  IconSquareCheck: oc,
  IconSquare: sc,
  IconCircleCheck: so,
  IconCircle: li,
  IconX: Bc,
  IconCode: wo,
  IconDeviceDesktop: Bo,
  IconCopy: So,
  IconCut: Lo,
  IconCopyPlus: _o,
  IconFolderPlus: ka,
  IconFileTypeCsv: oa,
  IconBraces: Wl,
  IconDatabase: Ro,
  IconTrashX: kc,
  IconFileDescription: na,
  IconServer: Gs,
  IconDownload: Wo,
  IconArrowsMove: Rl,
  IconGripVertical: Sa,
  IconEdit: Xo,
  IconAlertCircle: _l,
  IconCalendarRepeat: Ql,
  IconChevronDown: oo,
  IconCompassOff: No,
  IconFile: ha,
  IconMaximize: fs,
  IconFolder: wa,
  IconFolders: Na,
  IconFileZip: ua,
  IconListNumbers: es,
  IconHistory: Pa,
  IconHistoryToggle: Ta,
  IconHourglassEmpty: Ra,
  IconHourglassHigh: za,
  IconPhoto: Ts,
  IconLogin: us,
  IconPackage: _s,
  IconBrandJavascript: Xl,
  IconJson: Va,
  IconKeyboard: Wa,
  IconKey: qa,
  IconWorld: zc,
  IconLayersLinked: Ga,
  IconList: ns,
  IconLogout: hs,
  IconDotsVertical: qo,
  IconMouse: gs,
  IconMovie: xs,
  IconLocation: os,
  IconNavigation: ks,
  IconNumbers: Ns,
  IconBrowserMaximize: Gl,
  IconExternalLink: Go,
  IconPalette: Ss,
  IconUserSearch: Sc,
  IconCamera: eo,
  IconPlayerPlay: Ps,
  IconLoader2: is,
  IconRepeat: Vs,
  IconRocket: qs,
  IconDeviceFloppy: Vo,
  IconClock: xo,
  IconFlask: ga,
  IconSearch: Xs,
  IconSearchOff: Ws,
  IconShield: nc,
  IconSettings: Qs,
  IconArrowsShuffle: zl,
  IconCpu: Po,
  IconSortAscendingLetters: ic,
  IconAbc: wl,
  IconStar: uc,
  IconPlayerStop: Ls,
  IconCornerDownRight: To,
  IconArrowsUpDown: Bl,
  IconTerminal2: fc,
  IconTypography: Nc,
  IconTextSize: gc,
  IconToggleRight: xc,
  IconLanguage: Xa,
  IconAdjustmentsHorizontal: Nl,
  IconArrowsMaximize: Ll,
  IconUpload: _c,
  IconFileUpload: sa,
  IconVariable: Tc,
  IconShieldCheck: ec,
  IconVideoOff: Pc,
  IconEye: ea,
  IconEyeOff: Qo,
  IconLock: ss,
  IconAlertTriangle: Sl,
  IconWifi: Rc,
  IconNote: ws,
  IconInfoCircle: Ba,
  IconLink: Qa,
  IconTag: hc,
  IconHome: La,
  IconFiles: fa,
  IconCloud: ko,
  IconDeviceDesktopCog: zo,
  IconPuzzle: zs
}, Hc = li, R = ri.memo(({ name: e, className: t = "", fill: n = !1 }) => {
  const r = jc[e] || e, l = Vc[r] || Hc;
  return /* @__PURE__ */ f(l, { size: "1.1em", className: `inline-block shrink-0 ${t}`, stroke: 1.8, fill: n ? "currentColor" : "none", "aria-hidden": "true" });
}), oi = {
  name: "block.output",
  label: "Block output",
  description: "Output from the previous block",
  icon: "output"
}, ai = [
  { name: "now", label: "Current time", description: "Current ISO-8601 timestamp", icon: "schedule", hasValue: !0 },
  { name: "loop.index", label: "Loop index", description: "Zero-based index in a foreach loop", icon: "format_list_numbered" },
  { name: "loop.count", label: "Loop count", description: "Number of items in the current foreach loop", icon: "tag" },
  { name: "loop.item", label: "Loop item", description: "Current foreach item", icon: "data_object" },
  { name: "loop.text", label: "Loop text", description: "Text of the current foreach item", icon: "text_fields" },
  { name: "loop.html", label: "Loop HTML", description: "HTML of the current foreach item", icon: "code" }
], qc = [oi, ...ai], nr = (e) => qc.find((t) => t.name === e), Uc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ke = (e) => /[&<>"']/.test(e) ? e.replace(/[&<>"']/g, (t) => Uc[t]) : e, Wc = /* @__PURE__ */ new Set([
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
]), Bt = (e, t) => {
  if (!e.includes("{$")) return ke(e);
  const n = /\{\$([\w.]+)\}/g;
  let r = "", l = 0, o;
  const i = (c) => !!nr(c) || !!t && c in t, a = (c) => {
    const s = nr(c);
    if (s) return !!s.hasValue;
    const d = t ? t[c] : void 0;
    return d && d.value !== "" && d.value !== void 0 && d.value !== null;
  };
  for (; (o = n.exec(e)) !== null; ) {
    o.index > l && (r += ke(e.substring(l, o.index)));
    const c = o[1], s = i(c), d = a(c);
    r += `<span class="${s ? d ? "var-highlight-default" : "var-highlight" : "var-highlight-undefined"}">${ke(o[0])}</span>`, l = n.lastIndex;
  }
  return r += ke(e.substring(l)), r;
}, Yc = (e) => {
  const t = /("(?:\\.|[^"\\])*")|(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|\b(true|false|null)\b/g;
  let n = "", r = 0, l;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > r && (n += ke(e.substring(r, l.index)));
    const o = l[0];
    if (l[1]) {
      let i = !1, a = l.index + o.length;
      for (; a < e.length && /\s/.test(e[a]); ) a += 1;
      e[a] === ":" && (i = !0), n += `<span class="${i ? "code-token-key" : "code-token-string"}">${ke(o)}</span>`;
    } else l[2] ? n += `<span class="code-token-number">${ke(o)}</span>` : n += `<span class="code-token-boolean">${ke(o)}</span>`;
    r = t.lastIndex;
  }
  return n += ke(e.substring(r)), n;
}, Xc = (e, t) => {
  const n = /(\{\$[\w.]+\})|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b|\bundefined\b)|(\b[A-Za-z_]\w*\b)/g;
  let r = "", l = 0, o;
  for (; (o = n.exec(e)) !== null; ) {
    o.index > l && (r += ke(e.substring(l, o.index)));
    const i = o[0];
    if (o[1])
      r += Bt(i, t);
    else if (o[2])
      r += `<span class="code-token-comment">${ke(i)}</span>`;
    else if (o[3])
      r += `<span class="code-token-string">${ke(i)}</span>`;
    else if (o[4])
      r += `<span class="code-token-number">${ke(i)}</span>`;
    else if (o[5])
      r += `<span class="code-token-boolean">${ke(i)}</span>`;
    else if (o[6]) {
      const a = Wc.has(i) ? "code-token-keyword" : "code-token-identifier";
      r += `<span class="${a}">${ke(i)}</span>`;
    } else
      r += ke(i);
    l = n.lastIndex;
  }
  return r += ke(e.substring(l)), r;
}, Kc = (e, t) => {
  const n = /<\/?[^>]+>/g;
  let r = "", l = 0, o;
  for (; (o = n.exec(e)) !== null; ) {
    o.index > l && (r += Bt(e.substring(l, o.index), t));
    const a = o[0], c = a.match(/^<(\/?[A-Za-z0-9-]+)([\s\S]*?)>$/);
    if (c) {
      const s = c[1], d = c[2];
      let u = ke(s);
      u.startsWith("/") ? u = `/<span class="code-token-tag">${u.substring(1)}</span>` : u = `<span class="code-token-tag">${u}</span>`;
      let h = ke(d);
      h = h.replace(/(\s)([A-Za-z0-9-:]+)(=)/g, '$1<span class="code-token-attr">$2</span>$3'), h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="code-token-string">$1</span>'), r += `<span class="code-token-punct">&lt;${u}${h}&gt;</span>`;
    } else
      r += `<span class="code-token-punct">${ke(a)}</span>`;
    l = n.lastIndex;
  }
  const i = e.substring(l);
  return i && (r += Bt(i, t)), r;
}, si = (e, t, n) => t === "javascript" ? Xc(e, n) : t === "json" ? Yc(e) : t === "html" ? Kc(e, n) : Bt(e, n), ci = "application/x-figranium-variable", jt = (e) => Array.from(e.types).includes(ci), ui = (e) => e.getData(ci) || e.getData("text/plain"), rr = (e, t, n) => {
  const r = document;
  let l = null;
  const o = r.caretPositionFromPoint?.(t, n);
  o ? (l = document.createRange(), l.setStart(o.offsetNode, o.offset), l.collapse(!0)) : l = r.caretRangeFromPoint?.(t, n) || null, (!l || !e.contains(l.startContainer)) && (l = document.createRange(), l.selectNodeContents(e), l.collapse(!1));
  const i = window.getSelection();
  return i?.removeAllRanges(), i?.addRange(l), l;
}, en = (e, t) => e.measureText(t).width, Gc = (e, t, n) => {
  let r = 0, l = t.length;
  for (; r < l; ) {
    const a = Math.ceil((r + l) / 2);
    en(e, t.slice(0, a)) <= n ? r = a : l = a - 1;
  }
  if (r >= t.length) return t.length;
  const o = en(e, t.slice(0, r)), i = en(e, t.slice(0, r + 1));
  return n - o < i - n ? r : r + 1;
}, ir = (e, t, n) => {
  const r = window.getComputedStyle(e), o = document.createElement("canvas").getContext("2d");
  if (!o) return e.selectionStart ?? e.value.length;
  o.font = r.font;
  const i = e.getBoundingClientRect(), a = Number.parseFloat(r.paddingLeft) || 0, c = Number.parseFloat(r.paddingTop) || 0, s = Math.max(0, t - i.left - a + e.scrollLeft), d = e.value.split(`
`);
  let u = 0;
  if (e instanceof HTMLTextAreaElement) {
    const v = Number.parseFloat(r.fontSize) || 16, b = Number.parseFloat(r.lineHeight) || v * 1.5;
    u = Math.max(0, Math.min(d.length - 1, Math.floor((n - i.top - c + e.scrollTop) / b)));
  }
  const h = Gc(o, d[u] || "", s), m = d.slice(0, u).reduce((v, b) => v + b.length + 1, 0) + h;
  return e.focus({ preventScroll: !0 }), e.setSelectionRange(m, m), m;
}, me = ({ value: e, onChange: t, onBlur: n, placeholder: r, variables: l, className: o, syntax: i = "plain", allowVariableInsertion: a = !0 }) => {
  const c = se(null);
  return Ne(() => {
    if (c.current) {
      const s = c.current.innerHTML, d = si(e, i, l);
      if (s !== d) {
        const u = window.getSelection();
        let h = 0;
        if (u && u.rangeCount > 0) {
          const p = u.getRangeAt(0), m = p.cloneRange();
          m.selectNodeContents(c.current), m.setEnd(p.endContainer, p.endOffset), h = m.toString().length;
        }
        if (c.current.innerHTML = d, h > 0) {
          const p = document.createTreeWalker(c.current, NodeFilter.SHOW_TEXT);
          let m = 0, v = p.nextNode();
          for (; v; ) {
            const b = v.textContent?.length || 0;
            if (m + b >= h) {
              const k = document.createRange();
              k.setStart(v, h - m), k.collapse(!0), u?.removeAllRanges(), u?.addRange(k);
              break;
            }
            m += b, v = p.nextNode();
          }
        }
      }
    }
  }, [e, l]), /* @__PURE__ */ f(
    "div",
    {
      ref: c,
      contentEditable: !0,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": r || "Text input",
      "data-variable-insertion-target": a ? "true" : void 0,
      className: `rich-input-content w-full bg-transparent focus:outline-none theme-text min-h-[1.5rem] ${o}`,
      "data-placeholder": r,
      onInput: (s) => t(s.currentTarget.textContent || ""),
      onDragOver: (s) => {
        !a || !jt(s.dataTransfer) || (s.preventDefault(), s.dataTransfer.dropEffect = "copy", s.currentTarget.focus({ preventScroll: !0 }), rr(s.currentTarget, s.clientX, s.clientY));
      },
      onDrop: (s) => {
        if (!a || !jt(s.dataTransfer)) return;
        s.preventDefault(), s.stopPropagation();
        const d = ui(s.dataTransfer);
        if (!d) return;
        const u = rr(s.currentTarget, s.clientX, s.clientY);
        u.deleteContents();
        const h = document.createTextNode(d);
        u.insertNode(h), u.setStartAfter(h), u.collapse(!0);
        const p = window.getSelection();
        p?.removeAllRanges(), p?.addRange(u), t(s.currentTarget.textContent || "");
      },
      onBlur: (s) => {
        const d = s.currentTarget.textContent || "";
        t(d), n?.(d);
      }
    }
  );
}, yt = ({ value: e, onChange: t, onBlur: n, language: r, placeholder: l, className: o, readOnly: i, variables: a, allowVariableInsertion: c = !0 }) => {
  const s = se(null), d = se(null), u = e || l || "", h = !e && !!l, p = Ft(() => si(u, r, a), [u, r, a]);
  return Ne(() => {
    const m = s.current, v = d.current;
    if (!m || !v) return;
    const b = () => {
      v.scrollTop = m.scrollTop, v.scrollLeft = m.scrollLeft;
    };
    return m.addEventListener("scroll", b), () => {
      m.removeEventListener("scroll", b);
    };
  }, []), /* @__PURE__ */ C(
    "div",
    {
      className: `code-editor ${o || ""}`,
      onWheel: (m) => {
        const v = s.current;
        v && (v.scrollHeight <= v.clientHeight || (v.scrollTop += m.deltaY, v.scrollLeft += m.deltaX, v.focus(), m.preventDefault()));
      },
      children: [
        /* @__PURE__ */ f(
          "pre",
          {
            ref: d,
            className: `code-editor-pre ${h ? "code-editor-placeholder" : ""}`,
            "aria-hidden": !0,
            dangerouslySetInnerHTML: { __html: p }
          }
        ),
        /* @__PURE__ */ f(
          "textarea",
          {
            ref: s,
            value: e,
            onChange: (m) => t?.(m.target.value),
            onBlur: (m) => n?.(m.target.value),
            spellCheck: !1,
            wrap: "off",
            readOnly: i,
            className: `code-editor-textarea ${i ? "code-editor-textarea-readonly" : ""}`,
            "aria-label": "Code editor",
            "data-variable-insertion-target": !i && c ? "true" : void 0,
            tabIndex: i ? -1 : 0,
            onDragOver: (m) => {
              i || !c || !jt(m.dataTransfer) || (m.preventDefault(), m.dataTransfer.dropEffect = "copy", ir(m.currentTarget, m.clientX, m.clientY));
            },
            onDrop: (m) => {
              if (i || !c || !jt(m.dataTransfer)) return;
              m.preventDefault(), m.stopPropagation();
              const v = ui(m.dataTransfer);
              if (!v) return;
              const b = ir(m.currentTarget, m.clientX, m.clientY), k = `${e.slice(0, b)}${v}${e.slice(b)}`;
              t?.(k), requestAnimationFrame(() => {
                const A = b + v.length;
                s.current?.focus({ preventScroll: !0 }), s.current?.setSelectionRange(A, A);
              });
            }
          }
        )
      ]
    }
  );
}, Ln = [
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
], Jc = /* @__PURE__ */ new Set(["else", "end"]);
Ln.filter(
  (e) => !Jc.has(e.type)
);
const di = (e) => {
  const t = e.getBoundingClientRect(), n = 6, r = 12, l = 280, o = window.innerHeight - t.bottom - r, i = t.top - r, a = o < 180 && i > o, c = Math.max(120, Math.min(l, (a ? i : o) - n)), s = Math.min(Math.max(t.width, 160), window.innerWidth - r * 2), d = Math.max(r, Math.min(t.left, window.innerWidth - s - r));
  return a ? { left: d, bottom: window.innerHeight - t.top + n, width: s, maxHeight: c } : { left: d, top: t.bottom + n, width: s, maxHeight: c };
};
function Le({
  value: e,
  options: t,
  onChange: n,
  placeholder: r = "Select…",
  disabled: l = !1,
  ariaLabel: o,
  className: i = ""
}) {
  const a = se(null), c = se(null), s = se(""), d = se(null), [u, h] = ce(null), p = t.findIndex((x) => x.value === e), [m, v] = ce(Math.max(0, p)), b = p >= 0 ? t[p] : null, k = (x = !1) => {
    h(null), x && requestAnimationFrame(() => a.current?.focus());
  }, A = () => {
    l || !a.current || (v(p >= 0 ? p : Math.max(0, t.findIndex((x) => !x.disabled))), h(di(a.current)));
  };
  Ne(() => {
    if (!u) return;
    const x = (q) => {
      const w = q.target;
      !a.current?.contains(w) && !c.current?.contains(w) && k();
    }, B = () => k(), V = (q) => {
      c.current?.contains(q.target) || k();
    };
    return document.addEventListener("mousedown", x), window.addEventListener("resize", B), window.addEventListener("scroll", V, !0), requestAnimationFrame(() => c.current?.focus()), () => {
      document.removeEventListener("mousedown", x), window.removeEventListener("resize", B), window.removeEventListener("scroll", V, !0);
    };
  }, [u]), Ne(() => () => {
    d.current && clearTimeout(d.current);
  }, []);
  const _ = (x) => {
    if (!t.length) return;
    let B = m;
    for (let V = 0; V < t.length; V += 1)
      if (B = (B + x + t.length) % t.length, !t[B].disabled) {
        v(B), requestAnimationFrame(() => c.current?.querySelector(`[data-option-index="${B}"]`)?.scrollIntoView({ block: "nearest" }));
        return;
      }
  }, O = (x) => {
    x.disabled || (n(x.value), k(!0));
  }, j = (x) => {
    if (!u && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(x.key)) {
      x.preventDefault(), A();
      return;
    }
    if (u) {
      if (x.key === "Escape" || x.key === "Tab")
        x.key === "Escape" && x.preventDefault(), k(x.key === "Escape");
      else if (x.key === "ArrowDown" || x.key === "ArrowUp")
        x.preventDefault(), _(x.key === "ArrowDown" ? 1 : -1);
      else if (x.key === "Home" || x.key === "End") {
        x.preventDefault();
        const B = t.map((q, w) => ({ option: q, index: w })).filter(({ option: q }) => !q.disabled), V = x.key === "Home" ? B[0]?.index : B[B.length - 1]?.index;
        V !== void 0 && v(V);
      } else if (x.key === "Enter" || x.key === " ")
        x.preventDefault(), t[m] && O(t[m]);
      else if (x.key.length === 1 && !x.ctrlKey && !x.metaKey && !x.altKey) {
        s.current += x.key.toLowerCase();
        const B = t.findIndex((V) => !V.disabled && V.label.toLowerCase().startsWith(s.current));
        B >= 0 && v(B), d.current && clearTimeout(d.current), d.current = setTimeout(() => {
          s.current = "";
        }, 600);
      }
    }
  };
  return /* @__PURE__ */ C(Me, { children: [
    /* @__PURE__ */ C(
      "button",
      {
        ref: a,
        type: "button",
        role: "combobox",
        "aria-label": o,
        "aria-expanded": !!u,
        "aria-haspopup": "listbox",
        disabled: l,
        onClick: () => u ? k() : A(),
        onKeyDown: j,
        className: `custom-dropdown-trigger ${i}`,
        children: [
          /* @__PURE__ */ C("span", { className: "flex items-center gap-2 min-w-0", children: [
            b?.iconUrl ? /* @__PURE__ */ f("img", { src: b.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${b.iconImageClassName || ""}` }) : null,
            !b?.iconUrl && b?.icon ? /* @__PURE__ */ f(R, { name: b.icon, className: `text-base shrink-0 ${b.iconClassName || "theme-text-faint"}` }) : null,
            /* @__PURE__ */ f("span", { className: `truncate ${b ? "" : "theme-text-faint"}`, children: b?.label || r })
          ] }),
          /* @__PURE__ */ f(R, { name: "expand_more", className: `text-base shrink-0 transition-transform ${u ? "rotate-180" : ""}` })
        ]
      }
    ),
    u ? Nt(
      /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          role: "listbox",
          "aria-label": o,
          tabIndex: -1,
          onKeyDown: j,
          className: "custom-dropdown-menu custom-scrollbar",
          style: { left: u.left, top: u.top, bottom: u.bottom, width: u.width, maxHeight: u.maxHeight },
          children: t.map((x, B) => /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": x.value === e,
              disabled: x.disabled,
              "data-option-index": B,
              onMouseEnter: () => !x.disabled && v(B),
              onClick: () => O(x),
              className: `custom-dropdown-option ${m === B ? "custom-dropdown-option-active" : ""}`,
              children: [
                /* @__PURE__ */ C("span", { className: "flex items-center gap-2 min-w-0", children: [
                  x.iconUrl ? /* @__PURE__ */ f("img", { src: x.iconUrl, alt: "", className: `w-4 h-4 object-contain shrink-0 ${x.iconImageClassName || ""}` }) : null,
                  !x.iconUrl && x.icon ? /* @__PURE__ */ f(R, { name: x.icon, className: `text-base shrink-0 ${x.iconClassName || "theme-text-faint"}` }) : null,
                  /* @__PURE__ */ f("span", { className: "truncate", children: x.label })
                ] }),
                x.value === e ? /* @__PURE__ */ f(R, { name: "check", className: "text-sm shrink-0" }) : null
              ]
            },
            `${String(x.value)}-${B}`
          ))
        }
      ),
      document.body
    ) : null
  ] });
}
function Qc({ value: e, options: t, onChange: n, ariaLabel: r, placeholder: l, disabled: o, className: i = "", autoFocus: a, onEnter: c, onEscape: s }) {
  const d = se(null), u = se(null), [h, p] = ce(null), [m, v] = ce(0), b = Ft(() => {
    const O = e.trim().toLowerCase();
    return t.filter((j) => !O || j.toLowerCase().includes(O)).slice(0, 30);
  }, [t, e]), k = () => {
    !o && d.current && b.length && p(di(d.current));
  }, A = () => p(null);
  Ne(() => {
    if (!h) return;
    const O = (B) => {
      const V = B.target;
      !d.current?.contains(V) && !u.current?.contains(V) && A();
    }, j = () => A(), x = (B) => {
      u.current?.contains(B.target) || A();
    };
    return document.addEventListener("mousedown", O), window.addEventListener("resize", j), window.addEventListener("scroll", x, !0), () => {
      document.removeEventListener("mousedown", O), window.removeEventListener("resize", j), window.removeEventListener("scroll", x, !0);
    };
  }, [h]);
  const _ = (O) => {
    n(O), A(), d.current?.focus();
  };
  return /* @__PURE__ */ C(Me, { children: [
    /* @__PURE__ */ C("div", { className: `relative ${i}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          ref: d,
          value: e,
          onChange: (O) => {
            n(O.target.value), v(0), requestAnimationFrame(k);
          },
          onFocus: k,
          onKeyDown: (O) => {
            O.key === "ArrowDown" && b.length ? (O.preventDefault(), h ? v((j) => (j + 1) % b.length) : k()) : O.key === "ArrowUp" && b.length ? (O.preventDefault(), h ? v((j) => (j - 1 + b.length) % b.length) : k()) : O.key === "Enter" ? (O.preventDefault(), h && b[m] ? _(b[m]) : c?.()) : O.key === "Escape" && (h ? A() : s?.());
          },
          placeholder: l,
          disabled: o,
          "aria-label": r,
          role: "combobox",
          "aria-expanded": !!h,
          "aria-autocomplete": "list",
          className: "w-full bg-transparent text-xs theme-text font-mono focus:outline-none",
          autoFocus: a
        }
      ),
      /* @__PURE__ */ f("button", { type: "button", onClick: () => h ? A() : k(), className: "absolute right-0 top-1/2 -translate-y-1/2 theme-text-faint", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ f(R, { name: "expand_more", className: "text-base" }) })
    ] }),
    h && b.length ? Nt(
      /* @__PURE__ */ f("div", { ref: u, role: "listbox", "aria-label": `${r} suggestions`, className: "custom-dropdown-menu custom-scrollbar", style: { left: h.left, top: h.top, bottom: h.bottom, width: h.width, maxHeight: h.maxHeight }, children: b.map((O, j) => /* @__PURE__ */ C("button", { type: "button", role: "option", "aria-selected": O === e, onMouseEnter: () => v(j), onClick: () => _(O), className: `custom-dropdown-option ${m === j ? "custom-dropdown-option-active" : ""}`, children: [
        /* @__PURE__ */ f("span", { className: "truncate font-mono normal-case tracking-normal", children: O }),
        O === e ? /* @__PURE__ */ f(R, { name: "check", className: "text-sm" }) : null
      ] }, O)) }),
      document.body
    ) : null
  ] });
}
const Zc = {
  string: "text_fields",
  number: "numbers",
  boolean: "toggle_on",
  selector: "ads_click"
}, eu = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, $n = ({
  variables: e,
  canInsertVariable: t = !1,
  loopVariablesAvailable: n = !1,
  onInsertVariable: r
}) => {
  const l = Object.entries(e || {}), [o, i] = ce("variables"), a = (s, d = !1) => ({
    draggable: !d,
    disabled: d,
    "aria-disabled": d || !t,
    onClick: () => {
      t && !d && r?.(s);
    },
    onDragStart: (u) => {
      if (d) {
        u.preventDefault();
        return;
      }
      const h = `{$${s}}`;
      u.dataTransfer.effectAllowed = "copy", u.dataTransfer.setData("text/plain", h), u.dataTransfer.setData("application/x-figranium-variable", h);
    }
  }), c = (s) => {
    const d = s.name.startsWith("loop.") && !n;
    return /* @__PURE__ */ C("div", { className: `flex w-full items-start gap-3 ${d ? "opacity-35" : ""}`, children: [
      /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          ...a(s.name, d),
          className: `inline-flex max-w-[58%] shrink-0 overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left ${d ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing"} ${t ? "" : "opacity-75"}`,
          title: d ? "Available only inside a For Each loop" : t ? `Insert {$${s.name}}` : `Drag {$${s.name}} into a field`,
          children: [
            /* @__PURE__ */ f("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ f(R, { name: s.icon, className: "text-sm" }) }),
            /* @__PURE__ */ f("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: s.name })
          ]
        }
      ),
      /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: s.description })
    ] }, s.name);
  };
  return /* @__PURE__ */ C("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
    /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ C("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
        /* @__PURE__ */ f(R, { name: "variables", className: "text-sm" }),
        "Variables"
      ] }),
      /* @__PURE__ */ f("span", { className: "text-[10px] text-[var(--app-text-faint)]", children: l.length })
    ] }),
    /* @__PURE__ */ C("div", { className: "mt-3 flex gap-1 border-b theme-border", role: "tablist", "aria-label": "Variable categories", children: [
      /* @__PURE__ */ f("button", { type: "button", role: "tab", "aria-selected": o === "variables", onClick: () => i("variables"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${o === "variables" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "Variables" }),
      /* @__PURE__ */ f("button", { type: "button", role: "tab", "aria-selected": o === "more", onClick: () => i("more"), className: `border-b-2 px-2 py-1.5 text-[10px] font-bold tracking-wider ${o === "more" ? "border-blue-500 text-blue-500" : "border-transparent text-[var(--app-text-faint)]"}`, children: "More" })
    ] }),
    /* @__PURE__ */ f("p", { className: "mt-2 text-[10px] text-[var(--app-text-faint)]", children: t ? "Click or drag a variable into a field." : "Drag a variable, or focus a field before clicking." }),
    /* @__PURE__ */ C("div", { className: "mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1 custom-scrollbar", children: [
      o === "variables" && l.map(([s, d]) => /* @__PURE__ */ C("div", { className: "flex w-full items-start gap-3", children: [
        /* @__PURE__ */ C(
          "button",
          {
            type: "button",
            ...a(s),
            className: `inline-flex max-w-[58%] shrink-0 cursor-grab overflow-hidden rounded-lg border theme-border bg-[var(--app-input)] text-left active:cursor-grabbing ${t ? "" : "opacity-75"}`,
            title: t ? `Insert {$${s}}` : `Drag {$${s}} into a field`,
            children: [
              /* @__PURE__ */ f("span", { className: "flex w-8 shrink-0 items-center justify-center border-r theme-border text-[var(--app-text-muted)]", children: /* @__PURE__ */ f(R, { name: Zc[d.type], className: "text-sm" }) }),
              /* @__PURE__ */ f("span", { className: "truncate px-3 py-2 font-mono text-xs text-[var(--app-text)]", children: s })
            ]
          }
        ),
        /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 whitespace-pre-wrap break-words pt-1.5 text-xs leading-5 text-[var(--app-text-muted)]", children: eu(d.value) })
      ] }, s)),
      o === "variables" && c(oi),
      o === "variables" && l.length === 0 && /* @__PURE__ */ f("p", { className: "py-4 text-center text-xs text-[var(--app-text-faint)]", children: "No task variables defined" }),
      o === "more" && ai.map(c)
    ] })
  ] });
}, tu = /* @__PURE__ */ new Set(["while", "repeat", "foreach"]), nu = /* @__PURE__ */ new Set([
  "if",
  "while",
  "repeat",
  "foreach",
  "on_error"
]), ru = (e) => tu.has(e), Vt = (e) => nu.has(e), iu = (e, t) => {
  const n = e[t];
  if (!n || !Vt(n.type)) return null;
  let r = 1;
  for (let l = t + 1; l < e.length; l += 1) {
    const o = e[l];
    if (Vt(o.type) && (r += 1), o.type === "end" && (r -= 1), r === 0) return l;
  }
  return null;
}, lu = (e) => `if:${e}:true`, ou = (e) => `if:${e}:false`, au = (e) => `loop:${e}:body`, hi = {
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
}, su = Object.keys(hi), cu = (e, t) => typeof e != "string" || !e.includes("{$") ? e : e.replace(/\{\$([\w.]+)\}/g, (n, r) => {
  if (r === "now") return (/* @__PURE__ */ new Date()).toISOString();
  const l = t[r]?.value;
  if (l == null) return "";
  if (typeof l == "object")
    try {
      return JSON.stringify(l);
    } catch {
      return String(l);
    }
  return String(l);
}), uu = (e, t) => {
  const n = [];
  for (const r of su) {
    const l = e[r];
    l == null || l === "" || n.push({ key: r, label: hi[r] || r, raw: l, resolved: cu(l, t) });
  }
  return n;
}, du = (e) => {
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
}, Et = (e) => {
  if (e === void 0) return "No value";
  if (typeof e == "string") return e || "Empty string";
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}, hu = {
  success: "text-green-500",
  error: "text-red-500",
  skipped: "text-amber-500",
  stopped: "text-amber-500",
  not_reached: "text-[var(--app-text-muted)]"
}, pu = ({
  configuration: e,
  action: t,
  actions: n,
  variables: r,
  canInsertVariable: l,
  isTesting: o,
  testError: i,
  testResult: a,
  onInsertVariable: c,
  onRunTest: s,
  onStopTest: d
}) => {
  const u = uu(t, r), h = Ft(() => {
    const m = n.findIndex((b) => b.id === t.id);
    if (m < 1) return !1;
    const v = [];
    for (let b = 0; b < m; b++) {
      const k = n[b].type;
      Vt(k) ? v.push(k) : k === "end" && v.pop();
    }
    return v.includes("foreach");
  }, [t.id, n]), p = Ft(() => a ? Object.entries(a.variables || {}).filter(([m, v]) => m !== "block.output" && !Object.is(r[m]?.value, v)) : [], [a, r]);
  return /* @__PURE__ */ C("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ C("div", { className: "min-w-0 space-y-6", children: [
      e,
      /* @__PURE__ */ C("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", children: [
        /* @__PURE__ */ C("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
          /* @__PURE__ */ f(R, { name: "input", className: "text-sm" }),
          " Inputs"
        ] }),
        /* @__PURE__ */ C("div", { className: "mt-3 space-y-2", children: [
          u.map((m) => {
            const b = !!a && Object.prototype.hasOwnProperty.call(a?.resolvedInputs || {}, m.key) ? a?.resolvedInputs[m.key] : m.resolved;
            return /* @__PURE__ */ C("div", { className: "rounded-xl bg-[var(--app-input)] px-3 py-2", children: [
              /* @__PURE__ */ f("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: m.label }),
              /* @__PURE__ */ f("pre", { className: "mt-1 whitespace-pre-wrap break-words font-mono text-[11px] text-[var(--app-text)]", children: Et(b) }),
              !Object.is(m.raw, b) && /* @__PURE__ */ C("div", { className: "mt-1 truncate font-mono text-[10px] text-[var(--app-text-faint)]", children: [
                "Raw: ",
                Et(m.raw)
              ] })
            ] }, m.key);
          }),
          u.length === 0 && /* @__PURE__ */ f("p", { className: "text-xs text-[var(--app-text-faint)]", children: "No configurable inputs." })
        ] }),
        /* @__PURE__ */ C("div", { className: "mt-4 border-t theme-border pt-4", children: [
          /* @__PURE__ */ C("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ f(R, { name: "output", className: "text-sm" }),
            " Output"
          ] }),
          /* @__PURE__ */ f("p", { className: "mt-2 text-xs leading-5 text-[var(--app-text-muted)]", children: du(t) }),
          t.varName && /* @__PURE__ */ C("p", { className: "mt-2 font-mono text-[11px] text-blue-500", children: [
            "Stores in ",
            t.varName
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ C("aside", { className: "min-w-0 space-y-5", "aria-label": "Block context", children: [
      /* @__PURE__ */ f($n, { variables: r, canInsertVariable: l, loopVariablesAvailable: h, onInsertVariable: c }),
      /* @__PURE__ */ C("section", { className: "rounded-2xl border theme-border bg-[var(--app-surface-2)] p-4", "aria-live": "polite", children: [
        /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ C("div", { className: "flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ f(R, { name: "science", className: "text-sm" }),
            " Test block"
          ] }),
          a && /* @__PURE__ */ f("span", { className: `text-[10px] font-bold tracking-wider ${hu[a.status]}`, children: a.status.replace("_", " ") })
        ] }),
        /* @__PURE__ */ f("p", { className: "mt-2 text-[10px] leading-4 text-[var(--app-text-faint)]", children: "Runs preceding blocks in a temporary browser. Actions may affect the target site." }),
        /* @__PURE__ */ C(
          "button",
          {
            type: "button",
            onClick: o ? d : s,
            "aria-busy": o,
            className: `mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${o ? "border border-red-400/30 bg-red-500/10 text-red-500 hover:bg-red-500/15" : "theme-accent-bg hover:opacity-90"}`,
            children: [
              /* @__PURE__ */ f(R, { name: o ? "stop" : "play_arrow", className: o ? "text-sm" : "text-base" }),
              o ? "Stop test" : "Run through block"
            ]
          }
        ),
        i && /* @__PURE__ */ f("p", { className: "mt-3 text-xs leading-5 text-red-500", children: i }),
        a?.status === "error" && a.error && /* @__PURE__ */ f("p", { className: "mt-3 rounded-xl border border-red-400/20 bg-red-500/[0.08] px-3 py-2 text-xs leading-5 text-red-500", children: a.error }),
        a && /* @__PURE__ */ C("div", { className: "mt-4 space-y-3 border-t theme-border pt-4", children: [
          /* @__PURE__ */ C("div", { className: "flex items-center justify-between text-[10px] text-[var(--app-text-faint)]", children: [
            /* @__PURE__ */ f("span", { children: "Latest result" }),
            /* @__PURE__ */ C("span", { children: [
              a.durationMs,
              "ms"
            ] })
          ] }),
          /* @__PURE__ */ f("pre", { className: "max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[11px] leading-5 text-[var(--app-code-text)] custom-scrollbar", children: Et(a.output) }),
          p.length > 0 && /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ f("div", { className: "text-[10px] tracking-wider text-[var(--app-text-faint)]", children: "Changed variables" }),
            /* @__PURE__ */ f("div", { className: "mt-2 space-y-1", children: p.map(([m, v]) => /* @__PURE__ */ C("div", { className: "flex gap-2 font-mono text-[10px] text-[var(--app-text-muted)]", children: [
              /* @__PURE__ */ f("span", { className: "text-blue-500", children: m }),
              /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 truncate text-right", children: Et(v) })
            ] }, m)) })
          ] }),
          a.screenshotUrl && /* @__PURE__ */ f("img", { src: a.screenshotUrl, alt: "Page after the block test", className: "w-full rounded-xl border theme-border object-cover" }),
          a.logs.length > 0 && /* @__PURE__ */ C("details", { className: "text-xs text-[var(--app-text-muted)]", children: [
            /* @__PURE__ */ f("summary", { className: "cursor-pointer select-none", children: "Execution logs" }),
            /* @__PURE__ */ f("pre", { className: "mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-xl bg-[var(--app-code-bg)] p-3 font-mono text-[10px] leading-4 custom-scrollbar", children: a.logs.join(`
`) })
          ] })
        ] })
      ] })
    ] })
  ] });
}, Rn = ({ icon: e, title: t, children: n, onClose: r }) => (Ne(() => {
  const l = (o) => {
    o.key === "Escape" && r();
  };
  return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
}, [r]), Nt(
  /* @__PURE__ */ f(
    "div",
    {
      className: "theme-modal-backdrop fixed inset-0 z-[190] flex items-center justify-center p-3 backdrop-blur-lg sm:p-6 lg:p-10",
      onPointerDown: (l) => l.stopPropagation(),
      onPointerUp: (l) => l.stopPropagation(),
      onMouseDown: (l) => l.stopPropagation(),
      onMouseUp: (l) => l.stopPropagation(),
      onClick: (l) => l.stopPropagation(),
      children: /* @__PURE__ */ C(
        "section",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "config-modal-title",
          className: "theme-modal-elevation theme-surface theme-text flex max-h-[calc(100vh-1.5rem)] min-h-[min(540px,calc(100vh-1.5rem))] w-full max-w-[1200px] flex-col gap-6 rounded-[28px] border theme-border-strong p-5 animate-in fade-in zoom-in-95 duration-200 sm:max-h-[90vh] sm:w-[92vw] sm:p-8 lg:p-10",
          onClick: (l) => l.stopPropagation(),
          children: [
            /* @__PURE__ */ C("header", { className: "flex shrink-0 items-center justify-between gap-4", children: [
              /* @__PURE__ */ C("div", { className: "flex min-w-0 items-center gap-3", children: [
                /* @__PURE__ */ f(R, { name: e, className: "shrink-0 text-base text-[var(--app-text-muted)]" }),
                /* @__PURE__ */ f("h2", { id: "config-modal-title", className: "truncate text-base font-semibold normal-case tracking-normal text-[var(--app-text)]", children: t })
              ] }),
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: r,
                  className: "rounded-md p-1 text-[var(--app-text-faint)] transition-colors hover:text-[var(--app-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)]",
                  "aria-label": "Close",
                  title: "Close",
                  children: /* @__PURE__ */ f(R, { name: "close", className: "text-[12px]" })
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "min-h-0 flex-1 overflow-y-auto pr-1 custom-scrollbar sm:pr-3", children: n })
          ]
        }
      )
    }
  ),
  document.body
)), fu = (e) => e instanceof HTMLElement && e.dataset.variableInsertionTarget === "true", On = () => {
  const [e, t] = ce(!1), n = se(null), r = Ce((o) => {
    if (fu(o)) {
      if (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement)
        n.current = {
          target: o,
          start: o.selectionStart ?? o.value.length,
          end: o.selectionEnd ?? o.value.length
        };
      else {
        const i = window.getSelection(), a = i && i.rangeCount > 0 ? i.getRangeAt(0) : null;
        n.current = {
          target: o,
          range: a && o.contains(a.commonAncestorContainer) ? a.cloneRange() : void 0
        };
      }
      t(!0);
    }
  }, []), l = Ce((o) => {
    const i = n.current;
    if (!i) return;
    const a = `{$${o}}`, { target: c } = i;
    if (c.focus(), c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) {
      const h = i.start ?? c.value.length, p = i.end ?? h;
      c.setRangeText(a, h, p, "end"), c.dispatchEvent(new Event("input", { bubbles: !0 }));
      const m = h + a.length;
      c.setSelectionRange(m, m), n.current = { target: c, start: m, end: m };
      return;
    }
    const s = window.getSelection(), d = i.range || document.createRange();
    i.range || (d.selectNodeContents(c), d.collapse(!1)), s?.removeAllRanges(), s?.addRange(d), d.deleteContents();
    const u = document.createTextNode(a);
    d.insertNode(u), d.setStartAfter(u), d.collapse(!0), s?.removeAllRanges(), s?.addRange(d), n.current = { target: c, range: d.cloneRange() }, c.dispatchEvent(new Event("input", { bubbles: !0 }));
  }, []);
  return { canInsertVariable: e, captureInsertionSelection: r, insertVariable: l };
}, mu = [
  { value: "Control", label: "Ctrl" },
  { value: "Shift", label: "Shift" },
  { value: "Alt", label: "Alt" },
  { value: "Meta", label: "Meta" }
], gu = [
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
].concat([...Array(10)].map((e, t) => `${t}`)).concat(Array.from({ length: 26 }, (e, t) => String.fromCharCode(65 + t))), yu = [
  { value: "replace", label: "Replace Text" },
  { value: "append", label: "Append Text" }
], xu = [
  { value: "single", label: "Single Click" },
  { value: "double", label: "Double Click" },
  { value: "right", label: "Right Click" }
], bu = (e) => {
  if (!e) return { modifiers: [], baseKey: "" };
  const t = e.split("+"), n = t.pop() || "";
  return { modifiers: t, baseKey: n };
}, lr = (e, t) => [...e.filter(Boolean), t].filter(Boolean).join("+"), ku = (e) => {
  const t = (e || "").trim(), n = t.match(/^\{\$([\w.]+)\}$/);
  return n ? n[1] : t;
}, Tt = {
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
}, vu = ["else", "end", "on_error", "do_nothing", "reload", "finalize_uploads"], wu = ({
  action: e,
  task: t,
  variables: n,
  availableTasks: r,
  selectorOptions: l,
  onUpdate: o,
  onAutoSave: i,
  onClose: a,
  onStartInspect: c,
  onCreateVariable: s,
  onDeleteVariable: d,
  testResult: u,
  onTestResult: h
}) => {
  const p = Ln.find((S) => S.type === e.type), m = p?.label || e.type, [v, b] = ce(!1), [k, A] = ce(null), { canInsertVariable: _, captureInsertionSelection: O, insertVariable: j } = On(), x = se(null), B = se(null), V = se(0), [q, w] = ce(!1), [N, L] = ce(""), [H, F] = ce(!1), [$, U] = ce(null), [G, K] = ce([]);
  Ne(() => {
    e.type === "upload" && fetch("/api/cabinets").then((S) => S.ok ? S.json() : null).then((S) => {
      S?.cabinets && K(S.cabinets);
    }).catch(() => {
    });
  }, [e.type]);
  const ye = async () => {
    if (N.trim()) {
      F(!0), U(null);
      try {
        const S = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: N.trim() })
        }), P = await S.json();
        if (!S.ok) throw new Error(P.details ? `${P.error}: ${P.details}` : P.error || "Generation failed");
        o(e.id, { value: P.script }), w(!1), L("");
      } catch (S) {
        U(S.message);
      } finally {
        F(!1);
      }
    }
  }, g = Ce((S = !0) => {
    const P = B.current;
    P && fetch("/api/executions/stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ runId: P })
    }).catch(() => {
    }), x.current?.abort(), x.current = null, B.current = null, b(!1), S && V.current && h({
      actionId: e.id,
      status: "stopped",
      durationMs: Date.now() - V.current,
      resolvedInputs: {},
      variables: Object.fromEntries(Object.entries(n).map(([Y, W]) => [Y, W.value])),
      logs: ["Block test stopped by user."],
      screenshotUrl: null,
      timestamp: Date.now()
    });
  }, [e.id, h, n]), fe = Ce(async () => {
    if (v) return;
    const S = `block_test_${Date.now()}_${Math.floor(Math.random() * 1e3)}`, P = new AbortController(), Y = Object.fromEntries(
      Object.entries(n).map(([W, ge]) => [W, ge.value])
    );
    x.current = P, B.current = S, V.current = Date.now(), b(!0), A(null), i();
    try {
      const W = await fetch("/api/tasks/test-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskSnapshot: t, targetActionId: e.id, variables: Y, runId: S }),
        signal: P.signal
      });
      if (W.redirected && new URL(W.url).pathname === "/login")
        throw new Error("Your session expired. Sign in again, then retry the block test.");
      if (!W.headers.get("content-type")?.includes("application/json"))
        throw W.status === 404 ? new Error("The block-test endpoint is unavailable. Restart the backend and refresh this page.") : new Error(`The block-test endpoint returned an unexpected response (${W.status}).`);
      const ne = await W.json();
      if (!W.ok) throw new Error(ne.details || ne.error || "Block test failed");
      h({
        actionId: e.id,
        status: ne.status || "not_reached",
        durationMs: Number(ne.durationMs) || 0,
        resolvedInputs: ne.resolvedInputs || {},
        output: ne.output,
        error: ne.errorMessage,
        variables: ne.variables || {},
        logs: Array.isArray(ne.logs) ? ne.logs : [],
        screenshotUrl: ne.screenshotUrl || null,
        timestamp: Number(ne.timestamp) || Date.now()
      });
    } catch (W) {
      W?.name !== "AbortError" && A(W?.message || "Block test failed");
    } finally {
      x.current === P && (x.current = null, B.current = null, b(!1));
    }
  }, [e.id, v, i, h, t, n]), ae = Ce(() => {
    x.current && g(!1), a();
  }, [a, g]), y = se(g);
  y.current = g, Ne(() => () => {
    x.current && y.current(!1);
  }, []);
  const pe = se(/* @__PURE__ */ new Set());
  Ne(() => {
    const S = [
      e.selector,
      e.targetSelector,
      e.value,
      e.key,
      e.varName,
      e.conditionValue,
      e.headers,
      e.body
    ], P = /\{\$([\w.]+)\}/g, Y = /* @__PURE__ */ new Set();
    for (const W of S) {
      if (!W) continue;
      P.lastIndex = 0;
      let ge;
      for (; (ge = P.exec(W)) !== null; ) {
        const ne = ge[1];
        ne !== "now" && ne !== "block.output" && Y.add(ne);
      }
    }
    for (const W of Y)
      W in n || (s?.(W), pe.current.add(W));
    for (const W of pe.current)
      !Y.has(W) && n[W]?.autoCreated && (d?.(W), pe.current.delete(W));
  }, [e]);
  const te = (S, P) => /* @__PURE__ */ C("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1 block", children: S }),
    P
  ] }), X = (S) => /* @__PURE__ */ f("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all", children: S }), M = () => {
    if (vu.includes(e.type))
      return /* @__PURE__ */ f("p", { className: "text-xs text-gray-600 text-center py-4", children: "This block has no configurable options." });
    const { modifiers: S, baseKey: P } = bu(e.key), Y = Object.keys(n || {}), W = ku(e.conditionVar || ""), ge = W && n?.[W]?.type, ne = e.conditionVarType || ge || "string", ue = Tt[ne] || Tt.string, xe = e.conditionOp || ue[0].value, Q = e.method || "GET", Ae = ["POST", "PUT", "PATCH", "DELETE"], ze = ["type", "scroll", "foreach", "set", "merge", "solve_captcha", "upload"].includes(e.type);
    return /* @__PURE__ */ C("div", { className: ze ? "grid grid-cols-1 content-start items-start gap-x-8 gap-y-10 md:grid-cols-2" : "space-y-10", children: [
      (e.type === "click" || e.type === "check" || e.type === "uncheck" || e.type === "drag_and_drop" || e.type === "select" || e.type === "type" || e.type === "hover" || e.type === "wait_selector" || e.type === "scroll" || e.type === "upload") && te(
        e.type === "scroll" ? "Selector (Optional)" : "Selector",
        /* @__PURE__ */ C("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all flex items-center gap-2", children: [
          /* @__PURE__ */ C("div", { className: "flex-1 min-w-0 flex flex-col gap-1", children: [
            /* @__PURE__ */ f(
              me,
              {
                value: e.selector || "",
                onChange: (E) => o(e.id, { selector: E }),
                onBlur: () => i(),
                variables: n,
                placeholder: e.type === "scroll" ? ".scroll-container or leave empty" : e.type === "upload" ? "input[type=file] or .drop-zone" : e.type === "drag_and_drop" ? ".draggable-item" : ".btn-primary"
              }
            ),
            l && l.length > 1 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1 mt-1", children: l.map((E, we) => /* @__PURE__ */ f(
              "button",
              {
                onClick: () => o(e.id, { selector: E }, !0),
                className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${e.selector === E ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                children: E
              },
              we
            )) })
          ] }),
          c && /* @__PURE__ */ f(
            "button",
            {
              onClick: () => {
                ae(), c(e.id);
              },
              disabled: e.disabled,
              className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
              title: "Pick Selector in Browser",
              "aria-label": "Pick Selector in Browser",
              children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
            }
          )
        ] })
      ),
      e.type === "drag_and_drop" && te(
        "Target Selector",
        /* @__PURE__ */ C("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 text-xs focus-within:border-white/20 transition-all flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            me,
            {
              value: e.targetSelector || "",
              onChange: (E) => o(e.id, { targetSelector: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: ".drop-target"
            }
          ),
          c && /* @__PURE__ */ f(
            "button",
            {
              onClick: () => {
                ae(), c(e.id, "targetSelector");
              },
              disabled: e.disabled,
              className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
              title: "Pick Target Selector in Browser",
              "aria-label": "Pick Target Selector in Browser",
              children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
            }
          )
        ] })
      ),
      e.type === "click" && te(
        "Click Type",
        X(
          /* @__PURE__ */ f(
            Le,
            {
              value: e.clickType || "single",
              onChange: (E) => o(e.id, { clickType: E }, !0),
              options: xu,
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Click type"
            }
          )
        )
      ),
      e.type === "upload" && /* @__PURE__ */ C(Me, { children: [
        te("Cabinet", /* @__PURE__ */ f(
          Le,
          {
            value: e.cabinetId || "",
            onChange: (E) => o(e.id, { cabinetId: E }, !0),
            options: G.length ? [{ value: "", label: "Default cabinet" }, ...G.map((E) => ({ value: E.id, label: E.name, icon: "inventory_2" }))] : [{ value: "", label: "Loading cabinets…", disabled: !0 }],
            ariaLabel: "Upload cabinet"
          }
        )),
        te("Mark as uploaded", /* @__PURE__ */ C("label", { className: "flex items-center gap-2 text-xs text-white/80", children: [
          /* @__PURE__ */ f("input", { type: "checkbox", checked: !!e.markAsUploaded, onChange: (E) => o(e.id, { markAsUploaded: E.target.checked }, !0), className: "h-4 w-4" }),
          " Mark after the page accepts this item"
        ] }))
      ] }),
      e.type === "scroll" && te(
        "Scroll Speed (ms)",
        X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.key || "",
              onChange: (E) => o(e.id, { key: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "500"
            }
          )
        )
      ),
      (e.type === "navigate" || e.type === "type" || e.type === "select" || e.type === "wait" || e.type === "wait_selector" || e.type === "javascript" || e.type === "csv") && (e.type === "javascript" ? /* @__PURE__ */ C("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
          /* @__PURE__ */ C(
            "button",
            {
              onClick: () => {
                w((E) => !E), U(null);
              },
              className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
              title: "Generate with AI",
              children: [
                /* @__PURE__ */ f(R, { name: "auto_awesome", className: "text-sm" }),
                "Generate"
              ]
            }
          )
        ] }),
        q && /* @__PURE__ */ C("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
          /* @__PURE__ */ f(
            "input",
            {
              autoFocus: !0,
              type: "text",
              value: N,
              onChange: (E) => L(E.target.value),
              onKeyDown: (E) => {
                E.key === "Enter" && !H && ye();
              },
              placeholder: "e.g. extract all article titles and links",
              className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
            }
          ),
          $ && /* @__PURE__ */ f("p", { className: "text-xs text-red-400", children: $ }),
          /* @__PURE__ */ C("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ f("button", { onClick: () => {
              w(!1), U(null);
            }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
            /* @__PURE__ */ C(
              "button",
              {
                onClick: ye,
                disabled: H || !N.trim(),
                className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                children: [
                  H && /* @__PURE__ */ f(R, { name: "autorenew", className: "text-xs animate-spin" }),
                  H ? "Generating…" : "Generate"
                ]
              }
            )
          ] })
        ] }),
        X(
          /* @__PURE__ */ f(
            yt,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              language: "javascript",
              variables: n,
              className: "min-h-[120px]",
              placeholder: "return document.title"
            }
          )
        )
      ] }) : te(
        e.type === "navigate" ? "URL" : e.type === "type" ? "Content" : e.type === "select" ? "Option Value" : e.type === "wait" ? "Seconds" : e.type === "wait_selector" ? "Timeout (Sec)" : "CSV Input",
        X(
          e.type === "csv" ? /* @__PURE__ */ f(
            yt,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              language: "plain",
              variables: n,
              className: "min-h-[120px]",
              placeholder: `name,age
Ada,31`
            }
          ) : /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: e.type === "navigate" ? "https://example.com" : e.type === "type" ? "Search keywords" : e.type === "select" ? "option-value" : e.type === "wait" ? "3" : e.type === "wait_selector" ? "10" : "400"
            }
          )
        )
      )),
      e.type === "type" && te(
        "Mode",
        X(
          /* @__PURE__ */ f(
            Le,
            {
              value: e.typeMode || "replace",
              onChange: (E) => o(e.id, { typeMode: E }, !0),
              options: yu,
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Typing mode"
            }
          )
        )
      ),
      e.type === "screenshot" && te(
        "Label (Optional)",
        X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "checkout-step"
            }
          )
        )
      ),
      e.type === "press" && /* @__PURE__ */ C("div", { className: "space-y-5", children: [
        /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Key" }),
        /* @__PURE__ */ f("div", { className: "grid grid-cols-2 gap-3 text-xs text-white", children: mu.map((E) => /* @__PURE__ */ C("label", { className: "inline-flex items-center space-x-1", children: [
          /* @__PURE__ */ f(
            "input",
            {
              type: "checkbox",
              checked: S.includes(E.value),
              onChange: (we) => {
                const Fe = we.target.checked ? [...S, E.value] : S.filter((Re) => Re !== E.value);
                o(e.id, { key: lr(Fe, P) }, !0);
              },
              className: "h-3 w-3 rounded border border-white/30 bg-black/80"
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-xs text-white/70", children: E.label })
        ] }, E.value)) }),
        X(
          /* @__PURE__ */ f(
            Le,
            {
              value: P,
              onChange: (E) => o(e.id, { key: lr(S, E) }, !0),
              options: [{ value: "", label: "Select key" }, ...gu.map((E) => ({ value: E, label: E }))],
              className: "!min-h-0 !border-0 !bg-transparent !p-0",
              ariaLabel: "Press key"
            }
          )
        )
      ] }),
      (e.type === "if" || e.type === "while") && /* @__PURE__ */ C("div", { className: "space-y-2", children: [
        /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Condition" }),
        /* @__PURE__ */ C("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ C("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: ne === "selector" ? "Selector" : "Variable" }),
            ne === "selector" ? /* @__PURE__ */ C("div", { className: "bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30 transition-all flex items-center gap-2", children: [
              /* @__PURE__ */ f(
                "input",
                {
                  type: "text",
                  value: e.selector || "",
                  onChange: (E) => o(e.id, { selector: E.target.value }),
                  onBlur: () => i(),
                  placeholder: ".verified-badge",
                  className: "flex-1 min-w-0 bg-transparent text-xs font-mono text-white focus:outline-none"
                }
              ),
              c && /* @__PURE__ */ f(
                "button",
                {
                  onClick: () => {
                    ae(), c(e.id);
                  },
                  disabled: e.disabled,
                  className: "text-white opacity-50 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0 disabled:opacity-20 disabled:cursor-not-allowed rounded",
                  title: "Pick Selector in Browser",
                  "aria-label": "Pick Selector in Browser",
                  children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
                }
              )
            ] }) : /* @__PURE__ */ f("div", { className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 focus-within:border-white/30", children: /* @__PURE__ */ f(
              Qc,
              {
                value: e.conditionVar || "",
                onChange: (E) => o(e.id, { conditionVar: E }),
                options: Y,
                placeholder: "variable name",
                ariaLabel: "Condition variable"
              }
            ) })
          ] }),
          /* @__PURE__ */ C("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Type" }),
            /* @__PURE__ */ f(
              Le,
              {
                value: ne,
                onChange: (E) => {
                  const we = Tt[E] || Tt.string;
                  o(e.id, {
                    conditionVarType: E,
                    conditionOp: we[0].value,
                    conditionValue: E === "boolean" || E === "selector" ? "" : e.conditionValue || ""
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
          /* @__PURE__ */ C("div", { className: "space-y-1", children: [
            /* @__PURE__ */ f("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Relation" }),
            /* @__PURE__ */ f(
              Le,
              {
                value: xe,
                onChange: (E) => o(e.id, { conditionOp: E }, !0),
                options: ue,
                ariaLabel: "Condition relation"
              }
            )
          ] })
        ] }),
        ne !== "boolean" && ne !== "selector" && /* @__PURE__ */ C("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-bold text-gray-500 tracking-widest pl-1", children: "Value" }),
          /* @__PURE__ */ f(
            "input",
            {
              type: ne === "number" ? "number" : "text",
              value: e.conditionValue || "",
              onChange: (E) => o(e.id, { conditionValue: E.target.value }),
              onBlur: () => i(),
              placeholder: ne === "number" ? "0" : "value",
              "data-variable-insertion-target": ne === "number" ? void 0 : "true",
              className: "w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30"
            }
          )
        ] })
      ] }),
      e.type === "repeat" && te(
        "Times",
        X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "3"
            }
          )
        )
      ),
      e.type === "foreach" && /* @__PURE__ */ C(Me, { children: [
        te("Selector (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.selector || "",
              onChange: (E) => o(e.id, { selector: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: ".list-item"
            }
          )
        )),
        te("Variable (Array Name)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "items"
            }
          )
        ))
      ] }),
      e.type === "set" && /* @__PURE__ */ C(Me, { children: [
        te("Variable Name", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "status"
            }
          )
        )),
        te("Value", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "ready"
            }
          )
        ))
      ] }),
      e.type === "merge" && /* @__PURE__ */ C(Me, { children: [
        te("Sources", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "items, extraItems, {$block.output}"
            }
          )
        )),
        te("Target Variable (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "allItems"
            }
          )
        ))
      ] }),
      e.type === "stop" && te(
        "Outcome",
        /* @__PURE__ */ f(
          Le,
          {
            value: e.value || "success",
            onChange: (E) => o(e.id, { value: E }, !0),
            options: [
              { value: "success", label: "Success", icon: "check_circle", iconClassName: "text-green-400" },
              { value: "error", label: "Error", icon: "error", iconClassName: "text-red-400" }
            ],
            ariaLabel: "Stop outcome"
          }
        )
      ),
      e.type === "start" && te(
        "Task",
        /* @__PURE__ */ f(
          Le,
          {
            value: e.value || "",
            onChange: (E) => o(e.id, { value: E }, !0),
            options: r.length ? [{ value: "", label: "Select task", disabled: !0 }, ...r.map((E) => ({ value: E.id || "", label: E.name || E.id || "Untitled" }))] : [{ value: "", label: "No other tasks", disabled: !0 }],
            placeholder: "Select task",
            ariaLabel: "Task to start"
          }
        )
      ),
      e.type === "wait_downloads" && te(
        "Max Wait (Sec, Optional)",
        X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.value || "",
              onChange: (E) => o(e.id, { value: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "30"
            }
          )
        )
      ),
      e.type === "http_request" && /* @__PURE__ */ C(Me, { children: [
        /* @__PURE__ */ C("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ C("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Method" }),
            /* @__PURE__ */ f(
              Le,
              {
                value: Q,
                onChange: (E) => o(e.id, { method: E }, !0),
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
          /* @__PURE__ */ C("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "URL" }),
            X(
              /* @__PURE__ */ f(
                me,
                {
                  value: e.value || "",
                  onChange: (E) => o(e.id, { value: E }),
                  onBlur: () => i(),
                  variables: n,
                  placeholder: "https://api.example.com/data"
                }
              )
            )
          ] })
        ] }),
        te("Headers (JSON, Optional)", X(
          /* @__PURE__ */ f(
            yt,
            {
              value: e.headers || "",
              onChange: (E) => o(e.id, { headers: E }),
              onBlur: () => i(),
              language: "json",
              variables: n,
              className: "min-h-[56px]",
              placeholder: '{"Authorization": "Bearer {$token}"}'
            }
          )
        )),
        Ae.includes(Q) && te("Body", X(
          /* @__PURE__ */ f(
            yt,
            {
              value: e.body || "",
              onChange: (E) => o(e.id, { body: E }),
              onBlur: () => i(),
              language: "json",
              variables: n,
              className: "min-h-[80px]",
              placeholder: '{"key": "value"}'
            }
          )
        )),
        te("Store Response In Variable (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "apiResponse"
            }
          )
        ))
      ] }),
      e.type === "get_content" && /* @__PURE__ */ C(Me, { children: [
        te("Selector (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.selector || "",
              onChange: (E) => o(e.id, { selector: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: ".article-body or leave empty for full page"
            }
          )
        )),
        te("Store In Variable (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "pageContent"
            }
          )
        ))
      ] }),
      (e.type === "solve_captcha" || e.type === "wait_captcha") && /* @__PURE__ */ C(Me, { children: [
        e.type === "wait_captcha" && /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Waits until the captcha control is initialized, visible, enabled, and stable. This block does not click or solve it." }),
        /* @__PURE__ */ C("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Captcha Type (Optional)" }),
          /* @__PURE__ */ f(
            Le,
            {
              value: e.captchaType || "",
              onChange: (E) => o(e.id, { captchaType: E || void 0 }, !0),
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
        te("Container Selector (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.selector || "",
              onChange: (E) => o(e.id, { selector: E }),
              onBlur: () => i(),
              variables: n,
              placeholder: "#recaptcha-container or leave empty for full page"
            }
          )
        )),
        te("Timeout (Seconds)", X(
          /* @__PURE__ */ f(
            "input",
            {
              type: "number",
              min: "1",
              step: "1",
              value: Math.max(1, Math.round((e.timeout || 12e4) / 1e3)),
              onChange: (E) => o(e.id, { timeout: Math.max(1, Number(E.target.value) || 120) * 1e3 }),
              onBlur: () => i(),
              className: "w-full bg-transparent border-none px-0 py-0 text-xs text-white focus:outline-none"
            }
          )
        )),
        te("Store Result In Variable (Optional)", X(
          /* @__PURE__ */ f(
            me,
            {
              value: e.varName || "",
              onChange: (E) => o(e.id, { varName: E }),
              onBlur: () => i(),
              variables: n,
              allowVariableInsertion: !1,
              placeholder: "captchaResult"
            }
          )
        ))
      ] })
    ] });
  };
  return /* @__PURE__ */ f(Rn, { icon: p?.icon || "tune", title: m, onClose: ae, children: /* @__PURE__ */ f(
    pu,
    {
      configuration: /* @__PURE__ */ f(
        "div",
        {
          className: "min-w-0",
          onFocusCapture: (S) => O(S.target),
          onSelectCapture: (S) => O(S.target),
          onKeyUpCapture: (S) => O(S.target),
          onPointerUpCapture: (S) => O(S.target),
          children: M()
        }
      ),
      action: e,
      actions: t.actions,
      variables: n,
      canInsertVariable: _,
      isTesting: v,
      testError: k,
      testResult: u,
      onInsertVariable: j,
      onRunTest: fe,
      onStopTest: () => g(!0)
    }
  ) });
}, Cu = (e) => {
  let t = "";
  if (e.type === "click" || e.type === "hover" || e.type === "scroll" || e.type === "wait_selector" || e.type === "check" || e.type === "uncheck")
    t = e.type === "click" && e.clickType && e.clickType !== "single" ? `${e.clickType} · ${e.selector || ""}` : e.selector || "";
  else if (e.type === "drag_and_drop")
    t = `${e.selector || ""} → ${e.targetSelector || ""}`;
  else if (e.type === "select")
    t = `${e.selector || ""} → ${e.value || ""}`;
  else if (e.type === "type" || e.type === "navigate" || e.type === "wait" || e.type === "javascript" || e.type === "repeat" || e.type === "start" || e.type === "screenshot" || e.type === "wait_downloads" || e.type === "stop" || e.type === "upload")
    t = e.value || "";
  else if (e.type === "set" || e.type === "foreach" || e.type === "merge")
    t = e.varName || "";
  else if (e.type === "press")
    t = e.key || "";
  else if (e.type === "if" || e.type === "while")
    t = e.conditionVar || "";
  else if (e.type === "http_request") {
    const n = e.method || "GET";
    t = e.value ? `[${n}] ${e.value}` : n;
  } else e.type === "get_content" ? t = e.varName ? `→ ${e.varName}` : e.selector || "" : (e.type === "solve_captcha" || e.type === "wait_captcha") && (t = e.captchaType || "Auto-detect");
  return t.trim();
}, Nu = (e) => {
  const t = "text-[12px]";
  return e === "if" || e === "else" ? /* @__PURE__ */ f(R, { name: "call_split", className: `${t} text-white` }) : e === "end" ? /* @__PURE__ */ f(R, { name: "subdirectory_arrow_right", className: `${t} text-gray-500` }) : e === "while" || e === "repeat" ? /* @__PURE__ */ f(R, { name: "repeat", className: `${t} text-white` }) : e === "foreach" ? /* @__PURE__ */ f(R, { name: "list", className: `${t} text-white` }) : e === "on_error" ? /* @__PURE__ */ f(R, { name: "warning", className: `${t} text-red-400` }) : e === "set" ? /* @__PURE__ */ f(R, { name: "variable_insert", className: `${t} text-white` }) : e === "stop" ? /* @__PURE__ */ f(R, { name: "stop", className: `${t} text-white` }) : e === "click" ? /* @__PURE__ */ f(R, { name: "ads_click", className: `${t} text-white` }) : e === "check" ? /* @__PURE__ */ f(R, { name: "check_box", className: `${t} text-white` }) : e === "uncheck" ? /* @__PURE__ */ f(R, { name: "check_box_outline_blank", className: `${t} text-white` }) : e === "drag_and_drop" ? /* @__PURE__ */ f(R, { name: "drag_indicator", className: `${t} text-white` }) : e === "reload" ? /* @__PURE__ */ f(R, { name: "refresh", className: `${t} text-white` }) : e === "select" ? /* @__PURE__ */ f(R, { name: "arrow_drop_down_circle", className: `${t} text-white` }) : e === "type" ? /* @__PURE__ */ f(R, { name: "text_format", className: `${t} text-white` }) : e === "hover" ? /* @__PURE__ */ f(R, { name: "my_location", className: `${t} text-white` }) : e === "press" ? /* @__PURE__ */ f(R, { name: "keyboard", className: `${t} text-white` }) : e === "wait" ? /* @__PURE__ */ f(R, { name: "schedule", className: `${t} text-white` }) : e === "wait_selector" ? /* @__PURE__ */ f(R, { name: "schedule", className: `${t} text-white` }) : e === "scroll" ? /* @__PURE__ */ f(R, { name: "swap_vert", className: `${t} text-white` }) : e === "javascript" ? /* @__PURE__ */ f(R, { name: "javascript", className: `${t} text-white` }) : e === "csv" ? /* @__PURE__ */ f(R, { name: "csv", className: `${t} text-white` }) : e === "upload" ? /* @__PURE__ */ f(R, { name: "upload_file", className: `${t} text-white` }) : e === "finalize_uploads" ? /* @__PURE__ */ f(R, { name: "task_alt", className: `${t} text-white` }) : e === "merge" ? /* @__PURE__ */ f(R, { name: "layers", className: `${t} text-white` }) : e === "screenshot" ? /* @__PURE__ */ f(R, { name: "photo_camera", className: `${t} text-white` }) : e === "start" ? /* @__PURE__ */ f(R, { name: "play_circle", className: `${t} text-white` }) : e === "navigate" ? /* @__PURE__ */ f(R, { name: "navigation", className: `${t} text-white` }) : e === "http_request" ? /* @__PURE__ */ f(R, { name: "language", className: `${t} text-white` }) : e === "wait_downloads" ? /* @__PURE__ */ f(R, { name: "download", className: `${t} text-white` }) : e === "get_content" ? /* @__PURE__ */ f(R, { name: "article", className: `${t} text-white` }) : e === "solve_captcha" ? /* @__PURE__ */ f(R, { name: "verified_user", className: `${t} text-white` }) : e === "wait_captcha" ? /* @__PURE__ */ f(R, { name: "hourglass_top", className: `${t} text-white` }) : e === "do_nothing" ? /* @__PURE__ */ f(R, { name: "block", className: `${t} text-white/50` }) : /* @__PURE__ */ f("span", { className: "text-xs text-white/20", children: "|" });
}, Mu = ["else", "end", "on_error", "do_nothing", "reload", "finalize_uploads"], tn = ri.memo(({
  action: e,
  task: t,
  index: n,
  status: r,
  isDragging: l,
  isDragOver: o,
  translateY: i,
  variables: a,
  availableTasks: c,
  onUpdate: s,
  onAutoSave: d,
  onOpenPalette: u,
  onOpenContextMenu: h,
  onPointerDown: p,
  dragTransformY: m,
  onStartInspect: v,
  onCreateVariable: b,
  onDeleteVariable: k,
  isSelected: A,
  selectorOptions: _,
  autoOpenConfig: O,
  onCloseConfigModal: j,
  testResult: x,
  onTestResult: B
}) => {
  const [V, q] = ce(!1), w = se(null), N = se(null), L = r === "running" ? "border-yellow-400/60" : r === "success" ? "border-green-400/60" : r === "error" ? "border-red-400/70" : r === "skipped" ? "border-gray-500/40" : "", H = (K) => !K || !(K instanceof HTMLElement) ? !1 : !!K.closest('input, textarea, select, button, a, [contenteditable="true"], [data-no-drag="true"], [role="button"]'), F = l ? `translateY(${m || 0}px)` : i ? `translateY(${i}px)` : void 0, $ = Cu(e), U = !Mu.includes(e.type);
  Ne(() => {
    O && U && q(!0);
  }, [O, U]), Ne(() => () => {
    N.current && (clearTimeout(N.current), N.current = null);
  }, []);
  const G = () => {
    if (N.current) {
      clearTimeout(N.current), N.current = null, U && q(!0);
      return;
    }
    N.current = setTimeout(() => {
      N.current = null, u(e.id);
    }, 180);
  };
  return /* @__PURE__ */ C(Me, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        id: `action-${e.id}`,
        "data-action-id": e.id,
        onPointerDown: (K) => {
          H(K.target) || K.button === 0 && (w.current = { x: K.clientX, y: K.clientY }, K.stopPropagation(), p(K, e.id, n));
        },
        onDoubleClick: (K) => {
          U && (H(K.target) || (K.stopPropagation(), q(!0)));
        },
        onContextMenu: (K) => h(K, e.id),
        className: `bg-black min-w-[280px] w-full max-w-sm mx-auto border p-5 rounded-2xl group/item relative transition-[transform,box-shadow,opacity,filter,background-color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform select-none touch-none ${L || (A ? "border-blue-500 ring-2 ring-blue-500/50" : "border-white/20")} ${l ? "ring-2 ring-white/40 scale-[1.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)] opacity-85 z-20 mx-auto" : ""} ${o && !l ? "ring-2 ring-blue-400/60 bg-blue-500/5" : ""} ${e.disabled ? "opacity-40 grayscale" : ""}`,
        style: { transform: F },
        children: /* @__PURE__ */ C("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ f("div", { className: "text-xs font-bold text-white/20 font-mono tracking-tighter shrink-0", children: (n + 1).toString().padStart(2, "0") }),
          /* @__PURE__ */ f("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: Nu(e.type) }),
          /* @__PURE__ */ f(
            "button",
            {
              onClick: (K) => {
                K.stopPropagation(), G();
              },
              onDoubleClick: (K) => {
                U && (H(K.target) || (K.preventDefault(), K.stopPropagation(), q(!0)));
              },
              className: "action-type-select text-xs font-bold tracking-[0.2em] text-white focus:outline-none cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-white/50 shrink-0",
              "aria-label": `Change action type: ${e.type}`,
              children: Ln.find((K) => K.type === e.type)?.label || e.type
            }
          ),
          $ && /* @__PURE__ */ f("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: $ }),
          U && /* @__PURE__ */ f(
            "button",
            {
              "data-no-drag": "true",
              onClick: (K) => {
                K.stopPropagation(), q(!0);
              },
              className: "ml-auto shrink-0 text-white/20 hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded",
              "aria-label": "Configure block",
              title: "Configure block",
              children: /* @__PURE__ */ f(R, { name: "tune", className: "text-sm" })
            }
          )
        ] })
      }
    ),
    V && /* @__PURE__ */ f(
      wu,
      {
        action: e,
        task: t,
        variables: a,
        availableTasks: c,
        selectorOptions: _,
        onUpdate: s,
        onAutoSave: d,
        onClose: () => {
          q(!1), j?.();
        },
        onStartInspect: v,
        onCreateVariable: b,
        onDeleteVariable: k,
        testResult: x,
        onTestResult: B
      }
    )
  ] });
});
function _u(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Iu = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Su = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Eu = {};
function or(e, t) {
  return (Eu.jsx ? Su : Iu).test(e);
}
const Tu = /[ \t\n\f\r]/g;
function Au(e) {
  return typeof e == "object" ? e.type === "text" ? ar(e.value) : !1 : ar(e);
}
function ar(e) {
  return e.replace(Tu, "") === "";
}
class Mt {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
Mt.prototype.normal = {};
Mt.prototype.property = {};
Mt.prototype.space = void 0;
function pi(e, t) {
  const n = {}, r = {};
  for (const l of e)
    Object.assign(n, l.property), Object.assign(r, l.normal);
  return new Mt(n, r, t);
}
function Cn(e) {
  return e.toLowerCase();
}
class Te {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
Te.prototype.attribute = "";
Te.prototype.booleanish = !1;
Te.prototype.boolean = !1;
Te.prototype.commaOrSpaceSeparated = !1;
Te.prototype.commaSeparated = !1;
Te.prototype.defined = !1;
Te.prototype.mustUseProperty = !1;
Te.prototype.number = !1;
Te.prototype.overloadedBoolean = !1;
Te.prototype.property = "";
Te.prototype.spaceSeparated = !1;
Te.prototype.space = void 0;
let Pu = 0;
const ee = et(), be = et(), Nn = et(), D = et(), de = et(), Qe = et(), De = et();
function et() {
  return 2 ** ++Pu;
}
const Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ee,
  booleanish: be,
  commaOrSpaceSeparated: De,
  commaSeparated: Qe,
  number: D,
  overloadedBoolean: Nn,
  spaceSeparated: de
}, Symbol.toStringTag, { value: "Module" })), nn = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Mn)
);
class zn extends Te {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, l) {
    let o = -1;
    if (super(t, n), sr(this, "space", l), typeof r == "number")
      for (; ++o < nn.length; ) {
        const i = nn[o];
        sr(this, nn[o], (r & Mn[i]) === Mn[i]);
      }
  }
}
zn.prototype.defined = !0;
function sr(e, t, n) {
  n && (e[t] = n);
}
function ot(e) {
  const t = {}, n = {};
  for (const [r, l] of Object.entries(e.properties)) {
    const o = new zn(
      r,
      e.transform(e.attributes || {}, r),
      l,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Cn(r)] = r, n[Cn(o.attribute)] = r;
  }
  return new Mt(t, n, e.space);
}
const fi = ot({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: be,
    ariaAutoComplete: null,
    ariaBusy: be,
    ariaChecked: be,
    ariaColCount: D,
    ariaColIndex: D,
    ariaColSpan: D,
    ariaControls: de,
    ariaCurrent: null,
    ariaDescribedBy: de,
    ariaDetails: null,
    ariaDisabled: be,
    ariaDropEffect: de,
    ariaErrorMessage: null,
    ariaExpanded: be,
    ariaFlowTo: de,
    ariaGrabbed: be,
    ariaHasPopup: null,
    ariaHidden: be,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: de,
    ariaLevel: D,
    ariaLive: null,
    ariaModal: be,
    ariaMultiLine: be,
    ariaMultiSelectable: be,
    ariaOrientation: null,
    ariaOwns: de,
    ariaPlaceholder: null,
    ariaPosInSet: D,
    ariaPressed: be,
    ariaReadOnly: be,
    ariaRelevant: null,
    ariaRequired: be,
    ariaRoleDescription: de,
    ariaRowCount: D,
    ariaRowIndex: D,
    ariaRowSpan: D,
    ariaSelected: be,
    ariaSetSize: D,
    ariaSort: null,
    ariaValueMax: D,
    ariaValueMin: D,
    ariaValueNow: D,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function mi(e, t) {
  return t in e ? e[t] : t;
}
function gi(e, t) {
  return mi(e, t.toLowerCase());
}
const Du = ot({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Qe,
    acceptCharset: de,
    accessKey: de,
    action: null,
    allow: null,
    allowFullScreen: ee,
    allowPaymentRequest: ee,
    allowUserMedia: ee,
    alpha: ee,
    alt: null,
    as: null,
    async: ee,
    autoCapitalize: null,
    autoComplete: de,
    autoFocus: ee,
    autoPlay: ee,
    blocking: de,
    capture: null,
    charSet: null,
    checked: ee,
    cite: null,
    className: de,
    closedBy: null,
    colorSpace: null,
    cols: D,
    colSpan: D,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: be,
    controls: ee,
    controlsList: de,
    coords: D | Qe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ee,
    defer: ee,
    dir: null,
    dirName: null,
    disabled: ee,
    download: Nn,
    draggable: be,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ee,
    formTarget: null,
    headers: de,
    height: D,
    hidden: Nn,
    high: D,
    href: null,
    hrefLang: null,
    htmlFor: de,
    httpEquiv: de,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ee,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ee,
    itemId: null,
    itemProp: de,
    itemRef: de,
    itemScope: ee,
    itemType: de,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ee,
    low: D,
    manifest: null,
    max: null,
    maxLength: D,
    media: null,
    method: null,
    min: null,
    minLength: D,
    multiple: ee,
    muted: ee,
    name: null,
    nonce: null,
    noModule: ee,
    noValidate: ee,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ee,
    optimum: D,
    pattern: null,
    ping: de,
    placeholder: null,
    playsInline: ee,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ee,
    referrerPolicy: null,
    rel: de,
    required: ee,
    reversed: ee,
    rows: D,
    rowSpan: D,
    sandbox: de,
    scope: null,
    scoped: ee,
    seamless: ee,
    selected: ee,
    shadowRootClonable: ee,
    shadowRootCustomElementRegistry: ee,
    shadowRootDelegatesFocus: ee,
    shadowRootMode: null,
    shadowRootSerializable: ee,
    shape: null,
    size: D,
    sizes: null,
    slot: null,
    span: D,
    spellCheck: be,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: D,
    step: null,
    style: null,
    tabIndex: D,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ee,
    useMap: null,
    value: be,
    width: D,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: de,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: D,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: D,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ee,
    // Lists. Use CSS to reduce space between items instead
    declare: ee,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: D,
    // `<img>` and `<object>`
    leftMargin: D,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: D,
    // `<body>`
    marginWidth: D,
    // `<body>`
    noResize: ee,
    // `<frame>`
    noHref: ee,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ee,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ee,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: D,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: be,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: D,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: D,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: ee,
    disablePictureInPicture: ee,
    disableRemotePlayback: ee,
    exportParts: Qe,
    part: de,
    prefix: null,
    property: null,
    results: D,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: gi
}), Lu = ot({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: De,
    accentHeight: D,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: D,
    amplitude: D,
    arabicForm: null,
    ascent: D,
    attributeName: null,
    attributeType: null,
    azimuth: D,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: D,
    by: null,
    calcMode: null,
    capHeight: D,
    className: de,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: D,
    diffuseConstant: D,
    direction: null,
    display: null,
    dur: null,
    divisor: D,
    dominantBaseline: null,
    download: ee,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: D,
    enableBackground: null,
    end: null,
    event: null,
    exponent: D,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: D,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Qe,
    g2: Qe,
    glyphName: Qe,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: D,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: D,
    horizOriginX: D,
    horizOriginY: D,
    id: null,
    ideographic: D,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: D,
    k: D,
    k1: D,
    k2: D,
    k3: D,
    k4: D,
    kernelMatrix: De,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: D,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: D,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: D,
    overlineThickness: D,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: D,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: de,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: D,
    pointsAtY: D,
    pointsAtZ: D,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: De,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: De,
    rev: De,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: De,
    requiredFeatures: De,
    requiredFonts: De,
    requiredFormats: De,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: D,
    specularExponent: D,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: D,
    strikethroughThickness: D,
    string: null,
    stroke: null,
    strokeDashArray: De,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: D,
    strokeOpacity: D,
    strokeWidth: null,
    style: null,
    surfaceScale: D,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: De,
    tabIndex: D,
    tableValues: null,
    target: null,
    targetX: D,
    targetY: D,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: De,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: D,
    underlineThickness: D,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: D,
    values: null,
    vAlphabetic: D,
    vMathematical: D,
    vectorEffect: null,
    vHanging: D,
    vIdeographic: D,
    version: null,
    vertAdvY: D,
    vertOriginX: D,
    vertOriginY: D,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: D,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: mi
}), yi = ot({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), xi = ot({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: gi
}), bi = ot({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), $u = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Ru = /[A-Z]/g, cr = /-[a-z]/g, Ou = /^data[-\w.:]+$/i;
function zu(e, t) {
  const n = Cn(t);
  let r = t, l = Te;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ou.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(cr, Bu);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!cr.test(o)) {
        let i = o.replace(Ru, Fu);
        i.charAt(0) !== "-" && (i = "-" + i), t = "data" + i;
      }
    }
    l = zn;
  }
  return new l(r, t);
}
function Fu(e) {
  return "-" + e.toLowerCase();
}
function Bu(e) {
  return e.charAt(1).toUpperCase();
}
const ju = pi([fi, Du, yi, xi, bi], "html"), Fn = pi([fi, Lu, yi, xi, bi], "svg");
function Vu(e) {
  return e.join(" ").trim();
}
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nt = {}, rn, ur;
function Hu() {
  if (ur) return rn;
  ur = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, l = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, i = /^[;\s]*/, a = /^\s+|\s+$/g, c = `
`, s = "/", d = "*", u = "", h = "comment", p = "declaration";
  function m(b, k) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    k = k || {};
    var A = 1, _ = 1;
    function O(F) {
      var $ = F.match(t);
      $ && (A += $.length);
      var U = F.lastIndexOf(c);
      _ = ~U ? F.length - U : _ + F.length;
    }
    function j() {
      var F = { line: A, column: _ };
      return function($) {
        return $.position = new x(F), q(), $;
      };
    }
    function x(F) {
      this.start = F, this.end = { line: A, column: _ }, this.source = k.source;
    }
    x.prototype.content = b;
    function B(F) {
      var $ = new Error(
        k.source + ":" + A + ":" + _ + ": " + F
      );
      if ($.reason = F, $.filename = k.source, $.line = A, $.column = _, $.source = b, !k.silent) throw $;
    }
    function V(F) {
      var $ = F.exec(b);
      if ($) {
        var U = $[0];
        return O(U), b = b.slice(U.length), $;
      }
    }
    function q() {
      V(n);
    }
    function w(F) {
      var $;
      for (F = F || []; $ = N(); )
        $ !== !1 && F.push($);
      return F;
    }
    function N() {
      var F = j();
      if (!(s != b.charAt(0) || d != b.charAt(1))) {
        for (var $ = 2; u != b.charAt($) && (d != b.charAt($) || s != b.charAt($ + 1)); )
          ++$;
        if ($ += 2, u === b.charAt($ - 1))
          return B("End of comment missing");
        var U = b.slice(2, $ - 2);
        return _ += 2, O(U), b = b.slice($), _ += 2, F({
          type: h,
          comment: U
        });
      }
    }
    function L() {
      var F = j(), $ = V(r);
      if ($) {
        if (N(), !V(l)) return B("property missing ':'");
        var U = V(o), G = F({
          type: p,
          property: v($[0].replace(e, u)),
          value: U ? v(U[0].replace(e, u)) : u
        });
        return V(i), G;
      }
    }
    function H() {
      var F = [];
      w(F);
      for (var $; $ = L(); )
        $ !== !1 && (F.push($), w(F));
      return F;
    }
    return q(), H();
  }
  function v(b) {
    return b ? b.replace(a, u) : u;
  }
  return rn = m, rn;
}
var dr;
function qu() {
  if (dr) return nt;
  dr = 1;
  var e = nt && nt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(nt, "__esModule", { value: !0 }), nt.default = n;
  const t = e(Hu());
  function n(r, l) {
    let o = null;
    if (!r || typeof r != "string")
      return o;
    const i = (0, t.default)(r), a = typeof l == "function";
    return i.forEach((c) => {
      if (c.type !== "declaration")
        return;
      const { property: s, value: d } = c;
      a ? l(s, d, c) : d && (o = o || {}, o[s] = d);
    }), o;
  }
  return nt;
}
var dt = {}, hr;
function Uu() {
  if (hr) return dt;
  hr = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(s) {
    return !s || n.test(s) || e.test(s);
  }, i = function(s, d) {
    return d.toUpperCase();
  }, a = function(s, d) {
    return "".concat(d, "-");
  }, c = function(s, d) {
    return d === void 0 && (d = {}), o(s) ? s : (s = s.toLowerCase(), d.reactCompat ? s = s.replace(l, a) : s = s.replace(r, a), s.replace(t, i));
  };
  return dt.camelCase = c, dt;
}
var ht, pr;
function Wu() {
  if (pr) return ht;
  pr = 1;
  var e = ht && ht.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  }, t = e(qu()), n = Uu();
  function r(l, o) {
    var i = {};
    return !l || typeof l != "string" || (0, t.default)(l, function(a, c) {
      a && c && (i[(0, n.camelCase)(a, o)] = c);
    }), i;
  }
  return r.default = r, ht = r, ht;
}
var Yu = Wu();
const Xu = /* @__PURE__ */ ki(Yu), vi = wi("end"), Bn = wi("start");
function wi(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Ku(e) {
  const t = Bn(e), n = vi(e);
  if (t && n)
    return { start: t, end: n };
}
function xt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? fr(e.position) : "start" in e || "end" in e ? fr(e) : "line" in e || "column" in e ? _n(e) : "";
}
function _n(e) {
  return mr(e && e.line) + ":" + mr(e && e.column);
}
function fr(e) {
  return _n(e && e.start) + "-" + _n(e && e.end);
}
function mr(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ie extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let l = "", o = {}, i = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? l = t : !o.cause && t && (i = !0, l = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const c = r.indexOf(":");
      c === -1 ? o.ruleId = r : (o.source = r.slice(0, c), o.ruleId = r.slice(c + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const c = o.ancestors[o.ancestors.length - 1];
      c && (o.place = c.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = l, this.line = a ? a.line : void 0, this.name = xt(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = i && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ie.prototype.file = "";
Ie.prototype.name = "";
Ie.prototype.reason = "";
Ie.prototype.message = "";
Ie.prototype.stack = "";
Ie.prototype.column = void 0;
Ie.prototype.line = void 0;
Ie.prototype.ancestors = void 0;
Ie.prototype.cause = void 0;
Ie.prototype.fatal = void 0;
Ie.prototype.place = void 0;
Ie.prototype.ruleId = void 0;
Ie.prototype.source = void 0;
const jn = {}.hasOwnProperty, Gu = /* @__PURE__ */ new Map(), Ju = /[A-Z]/g, Qu = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Zu = /* @__PURE__ */ new Set(["td", "th"]), Ci = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ed(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = sd(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ad(n, t.jsx, t.jsxs);
  }
  const l = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Fn : ju,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = Ni(l, e, void 0);
  return o && typeof o != "string" ? o : l.create(
    e,
    l.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Ni(e, t, n) {
  if (t.type === "element")
    return td(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return nd(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return id(e, t, n);
  if (t.type === "mdxjsEsm")
    return rd(e, t);
  if (t.type === "root")
    return ld(e, t, n);
  if (t.type === "text")
    return od(e, t);
}
function td(e, t, n) {
  const r = e.schema;
  let l = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (l = Fn, e.schema = l), e.ancestors.push(t);
  const o = _i(e, t.tagName, !1), i = cd(e, t);
  let a = Hn(e, t);
  return Qu.has(t.tagName) && (a = a.filter(function(c) {
    return typeof c == "string" ? !Au(c) : !0;
  })), Mi(e, i, o, t), Vn(i, a), e.ancestors.pop(), e.schema = r, e.create(t, o, i, n);
}
function nd(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  wt(e, t.position);
}
function rd(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  wt(e, t.position);
}
function id(e, t, n) {
  const r = e.schema;
  let l = r;
  t.name === "svg" && r.space === "html" && (l = Fn, e.schema = l), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : _i(e, t.name, !0), i = ud(e, t), a = Hn(e, t);
  return Mi(e, i, o, t), Vn(i, a), e.ancestors.pop(), e.schema = r, e.create(t, o, i, n);
}
function ld(e, t, n) {
  const r = {};
  return Vn(r, Hn(e, t)), e.create(t, e.Fragment, r, n);
}
function od(e, t) {
  return t.value;
}
function Mi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Vn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function ad(e, t, n) {
  return r;
  function r(l, o, i, a) {
    const s = Array.isArray(i.children) ? n : t;
    return a ? s(o, i, a) : s(o, i);
  }
}
function sd(e, t) {
  return n;
  function n(r, l, o, i) {
    const a = Array.isArray(o.children), c = Bn(r);
    return t(
      l,
      o,
      i,
      a,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      },
      void 0
    );
  }
}
function cd(e, t) {
  const n = {};
  let r, l;
  for (l in t.properties)
    if (l !== "children" && jn.call(t.properties, l)) {
      const o = dd(e, l, t.properties[l]);
      if (o) {
        const [i, a] = o;
        e.tableCellAlignToStyle && i === "align" && typeof a == "string" && Zu.has(t.tagName) ? r = a : n[i] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function ud(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const i = o.expression;
        i.type;
        const a = i.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        wt(e, t.position);
    else {
      const l = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          wt(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[l] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function Hn(e, t) {
  const n = [];
  let r = -1;
  const l = e.passKeys ? /* @__PURE__ */ new Map() : Gu;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let i;
    if (e.passKeys) {
      const c = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (c) {
        const s = l.get(c) || 0;
        i = c + "-" + s, l.set(c, s + 1);
      }
    }
    const a = Ni(e, o, i);
    a !== void 0 && n.push(a);
  }
  return n;
}
function dd(e, t, n) {
  const r = zu(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? _u(n) : Vu(n)), r.property === "style") {
      let l = typeof n == "object" ? n : hd(e, String(n));
      return e.stylePropertyNameCase === "css" && (l = pd(l)), ["style", l];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? $u[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function hd(e, t) {
  try {
    return Xu(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), l = new Ie("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw l.file = e.filePath || void 0, l.url = Ci + "#cannot-parse-style-attribute", l;
  }
}
function _i(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const l = t.split(".");
    let o = -1, i;
    for (; ++o < l.length; ) {
      const a = or(l[o]) ? { type: "Identifier", name: l[o] } : { type: "Literal", value: l[o] };
      i = i ? {
        type: "MemberExpression",
        object: i,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = i;
  } else
    r = or(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const l = (
      /** @type {string | number} */
      r.value
    );
    return jn.call(e.components, l) ? e.components[l] : l;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  wt(e);
}
function wt(e, t) {
  const n = new Ie(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ci + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function pd(e) {
  const t = {};
  let n;
  for (n in e)
    jn.call(e, n) && (t[fd(n)] = e[n]);
  return t;
}
function fd(e) {
  let t = e.replace(Ju, md);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function md(e) {
  return "-" + e.toLowerCase();
}
const ln = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, gd = {};
function qn(e, t) {
  const n = gd, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, l = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ii(e, r, l);
}
function Ii(e, t, n) {
  if (yd(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return gr(e.children, t, n);
  }
  return Array.isArray(e) ? gr(e, t, n) : "";
}
function gr(e, t, n) {
  const r = [];
  let l = -1;
  for (; ++l < e.length; )
    r[l] = Ii(e[l], t, n);
  return r.join("");
}
function yd(e) {
  return !!(e && typeof e == "object");
}
const yr = document.createElement("i");
function Un(e) {
  const t = "&" + e + ";";
  yr.innerHTML = t;
  const n = yr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function $e(e, t, n, r) {
  const l = e.length;
  let o = 0, i;
  if (t < 0 ? t = -t > l ? 0 : l + t : t = t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4)
    i = Array.from(r), i.unshift(t, n), e.splice(...i);
  else
    for (n && e.splice(t, n); o < r.length; )
      i = r.slice(o, o + 1e4), i.unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function Oe(e, t) {
  return e.length > 0 ? ($e(e, e.length, 0, t), e) : t;
}
const xr = {}.hasOwnProperty;
function Si(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    xd(t, e[n]);
  return t;
}
function xd(e, t) {
  let n;
  for (n in t) {
    const l = (xr.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let i;
    if (o)
      for (i in o) {
        xr.call(l, i) || (l[i] = []);
        const a = o[i];
        bd(
          // @ts-expect-error Looks like a list.
          l[i],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function bd(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  $e(e, 0, 0, r);
}
function Ei(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function je(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Se = Xe(/[A-Za-z]/), _e = Xe(/[\dA-Za-z]/), kd = Xe(/[#-'*+\--9=?A-Z^-~]/);
function Ht(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const In = Xe(/\d/), vd = Xe(/[\dA-Fa-f]/), wd = Xe(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function he(e) {
  return e !== null && (e < 0 || e === 32);
}
function ie(e) {
  return e === -2 || e === -1 || e === 32;
}
const Yt = Xe(new RegExp("\\p{P}|\\p{S}", "u")), Ze = Xe(/\s/);
function Xe(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function at(e) {
  const t = [];
  let n = -1, r = 0, l = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let i = "";
    if (o === 37 && _e(e.charCodeAt(n + 1)) && _e(e.charCodeAt(n + 2)))
      l = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (i = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (i = String.fromCharCode(o, a), l = 1) : i = "�";
    } else
      i = String.fromCharCode(o);
    i && (t.push(e.slice(r, n), encodeURIComponent(i)), r = n + l + 1, i = ""), l && (n += l, l = 0);
  }
  return t.join("") + e.slice(r);
}
function le(e, t, n, r) {
  const l = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return i;
  function i(c) {
    return ie(c) ? (e.enter(n), a(c)) : t(c);
  }
  function a(c) {
    return ie(c) && o++ < l ? (e.consume(c), a) : (e.exit(n), t(c));
  }
}
const Cd = {
  tokenize: Nd
};
function Nd(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, l);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), le(e, t, "linePrefix");
  }
  function l(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const c = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = c), n = c, i(a);
  }
  function i(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return J(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), i);
  }
}
const Md = {
  tokenize: _d
}, br = {
  tokenize: Id
};
function _d(e) {
  const t = this, n = [];
  let r = 0, l, o, i;
  return a;
  function a(_) {
    if (r < n.length) {
      const O = n[r];
      return t.containerState = O[1], e.attempt(O[0].continuation, c, s)(_);
    }
    return s(_);
  }
  function c(_) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, l && A();
      const O = t.events.length;
      let j = O, x;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          x = t.events[j][1].end;
          break;
        }
      k(r);
      let B = O;
      for (; B < t.events.length; )
        t.events[B][1].end = {
          ...x
        }, B++;
      return $e(t.events, j + 1, 0, t.events.slice(O)), t.events.length = B, s(_);
    }
    return a(_);
  }
  function s(_) {
    if (r === n.length) {
      if (!l)
        return h(_);
      if (l.currentConstruct && l.currentConstruct.concrete)
        return m(_);
      t.interrupt = !!(l.currentConstruct && !l._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(br, d, u)(_);
  }
  function d(_) {
    return l && A(), k(r), h(_);
  }
  function u(_) {
    return t.parser.lazy[t.now().line] = r !== n.length, i = t.now().offset, m(_);
  }
  function h(_) {
    return t.containerState = {}, e.attempt(br, p, m)(_);
  }
  function p(_) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(_);
  }
  function m(_) {
    if (_ === null) {
      l && A(), k(0), e.consume(_);
      return;
    }
    return l = l || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: l,
      contentType: "flow",
      previous: o
    }), v(_);
  }
  function v(_) {
    if (_ === null) {
      b(e.exit("chunkFlow"), !0), k(0), e.consume(_);
      return;
    }
    return J(_) ? (e.consume(_), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(_), v);
  }
  function b(_, O) {
    const j = t.sliceStream(_);
    if (O && j.push(null), _.previous = o, o && (o.next = _), o = _, l.defineSkip(_.start), l.write(j), t.parser.lazy[_.start.line]) {
      let x = l.events.length;
      for (; x--; )
        if (
          // The token starts before the line ending…
          l.events[x][1].start.offset < i && // …and either is not ended yet…
          (!l.events[x][1].end || // …or ends after it.
          l.events[x][1].end.offset > i)
        )
          return;
      const B = t.events.length;
      let V = B, q, w;
      for (; V--; )
        if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
          if (q) {
            w = t.events[V][1].end;
            break;
          }
          q = !0;
        }
      for (k(r), x = B; x < t.events.length; )
        t.events[x][1].end = {
          ...w
        }, x++;
      $e(t.events, V + 1, 0, t.events.slice(B)), t.events.length = x;
    }
  }
  function k(_) {
    let O = n.length;
    for (; O-- > _; ) {
      const j = n[O];
      t.containerState = j[1], j[0].exit.call(t, e);
    }
    n.length = _;
  }
  function A() {
    l.write([null]), o = void 0, l = void 0, t.containerState._closeFlow = void 0;
  }
}
function Id(e, t, n) {
  return le(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function lt(e) {
  if (e === null || he(e) || Ze(e))
    return 1;
  if (Yt(e))
    return 2;
}
function Xt(e, t, n) {
  const r = [];
  let l = -1;
  for (; ++l < e.length; ) {
    const o = e[l].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Sn = {
  name: "attention",
  resolveAll: Sd,
  tokenize: Ed
};
function Sd(e, t) {
  let n = -1, r, l, o, i, a, c, s, d;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const u = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          kr(u, -c), kr(h, c), i = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: u,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, o = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, l = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...i.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...i.start
          }, e[n][1].start = {
            ...a.end
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = Oe(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = Oe(s, [["enter", l, t], ["enter", i, t], ["exit", i, t], ["enter", o, t]]), s = Oe(s, Xt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = Oe(s, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", l, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, s = Oe(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, $e(e, r - 1, n - r + 3, s), n = r + s.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Ed(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, l = lt(r);
  let o;
  return i;
  function i(c) {
    return o = c, e.enter("attentionSequence"), a(c);
  }
  function a(c) {
    if (c === o)
      return e.consume(c), a;
    const s = e.exit("attentionSequence"), d = lt(c), u = !d || d === 2 && l || n.includes(c), h = !l || l === 2 && d || n.includes(r);
    return s._open = !!(o === 42 ? u : u && (l || !h)), s._close = !!(o === 42 ? h : h && (d || !u)), t(c);
  }
}
function kr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Td = {
  name: "autolink",
  tokenize: Ad
};
function Ad(e, t, n) {
  let r = 0;
  return l;
  function l(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Se(p) ? (e.consume(p), i) : p === 64 ? n(p) : s(p);
  }
  function i(p) {
    return p === 43 || p === 45 || p === 46 || _e(p) ? (r = 1, a(p)) : s(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, c) : (p === 43 || p === 45 || p === 46 || _e(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, s(p));
  }
  function c(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Ht(p) ? n(p) : (e.consume(p), c);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), d) : kd(p) ? (e.consume(p), s) : n(p);
  }
  function d(p) {
    return _e(p) ? u(p) : n(p);
  }
  function u(p) {
    return p === 46 ? (e.consume(p), r = 0, d) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(p);
  }
  function h(p) {
    if ((p === 45 || _e(p)) && r++ < 63) {
      const m = p === 45 ? h : u;
      return e.consume(p), m;
    }
    return n(p);
  }
}
const _t = {
  partial: !0,
  tokenize: Pd
};
function Pd(e, t, n) {
  return r;
  function r(o) {
    return ie(o) ? le(e, l, "linePrefix")(o) : l(o);
  }
  function l(o) {
    return o === null || J(o) ? t(o) : n(o);
  }
}
const Ti = {
  continuation: {
    tokenize: Ld
  },
  exit: $d,
  name: "blockQuote",
  tokenize: Dd
};
function Dd(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    if (i === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(i), e.exit("blockQuoteMarker"), o;
    }
    return n(i);
  }
  function o(i) {
    return ie(i) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(i), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(i));
  }
}
function Ld(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return ie(i) ? le(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i) : o(i);
  }
  function o(i) {
    return e.attempt(Ti, t, n)(i);
  }
}
function $d(e) {
  e.exit("blockQuote");
}
const Ai = {
  name: "characterEscape",
  tokenize: Rd
};
function Rd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), l;
  }
  function l(o) {
    return wd(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Pi = {
  name: "characterReference",
  tokenize: Od
};
function Od(e, t, n) {
  const r = this;
  let l = 0, o, i;
  return a;
  function a(u) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), c;
  }
  function c(u) {
    return u === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(u), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, i = _e, d(u));
  }
  function s(u) {
    return u === 88 || u === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(u), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, i = vd, d) : (e.enter("characterReferenceValue"), o = 7, i = In, d(u));
  }
  function d(u) {
    if (u === 59 && l) {
      const h = e.exit("characterReferenceValue");
      return i === _e && !Un(r.sliceSerialize(h)) ? n(u) : (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return i(u) && l++ < o ? (e.consume(u), d) : n(u);
  }
}
const vr = {
  partial: !0,
  tokenize: Fd
}, wr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: zd
};
function zd(e, t, n) {
  const r = this, l = {
    partial: !0,
    tokenize: j
  };
  let o = 0, i = 0, a;
  return c;
  function c(x) {
    return s(x);
  }
  function s(x) {
    const B = r.events[r.events.length - 1];
    return o = B && B[1].type === "linePrefix" ? B[2].sliceSerialize(B[1], !0).length : 0, a = x, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(x);
  }
  function d(x) {
    return x === a ? (i++, e.consume(x), d) : i < 3 ? n(x) : (e.exit("codeFencedFenceSequence"), ie(x) ? le(e, u, "whitespace")(x) : u(x));
  }
  function u(x) {
    return x === null || J(x) ? (e.exit("codeFencedFence"), r.interrupt ? t(x) : e.check(vr, v, O)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(x));
  }
  function h(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(x)) : ie(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), le(e, p, "whitespace")(x)) : x === 96 && x === a ? n(x) : (e.consume(x), h);
  }
  function p(x) {
    return x === null || J(x) ? u(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(x));
  }
  function m(x) {
    return x === null || J(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(x)) : x === 96 && x === a ? n(x) : (e.consume(x), m);
  }
  function v(x) {
    return e.attempt(l, O, b)(x);
  }
  function b(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), k;
  }
  function k(x) {
    return o > 0 && ie(x) ? le(e, A, "linePrefix", o + 1)(x) : A(x);
  }
  function A(x) {
    return x === null || J(x) ? e.check(vr, v, O)(x) : (e.enter("codeFlowValue"), _(x));
  }
  function _(x) {
    return x === null || J(x) ? (e.exit("codeFlowValue"), A(x)) : (e.consume(x), _);
  }
  function O(x) {
    return e.exit("codeFenced"), t(x);
  }
  function j(x, B, V) {
    let q = 0;
    return w;
    function w($) {
      return x.enter("lineEnding"), x.consume($), x.exit("lineEnding"), N;
    }
    function N($) {
      return x.enter("codeFencedFence"), ie($) ? le(x, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)($) : L($);
    }
    function L($) {
      return $ === a ? (x.enter("codeFencedFenceSequence"), H($)) : V($);
    }
    function H($) {
      return $ === a ? (q++, x.consume($), H) : q >= i ? (x.exit("codeFencedFenceSequence"), ie($) ? le(x, F, "whitespace")($) : F($)) : V($);
    }
    function F($) {
      return $ === null || J($) ? (x.exit("codeFencedFence"), B($)) : V($);
    }
  }
}
function Fd(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return i === null ? n(i) : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), o);
  }
  function o(i) {
    return r.parser.lazy[r.now().line] ? n(i) : t(i);
  }
}
const on = {
  name: "codeIndented",
  tokenize: jd
}, Bd = {
  partial: !0,
  tokenize: Vd
};
function jd(e, t, n) {
  const r = this;
  return l;
  function l(s) {
    return e.enter("codeIndented"), le(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? i(s) : n(s);
  }
  function i(s) {
    return s === null ? c(s) : J(s) ? e.attempt(Bd, i, c)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || J(s) ? (e.exit("codeFlowValue"), i(s)) : (e.consume(s), a);
  }
  function c(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Vd(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return r.parser.lazy[r.now().line] ? n(i) : J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), l) : le(e, o, "linePrefix", 5)(i);
  }
  function o(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : J(i) ? l(i) : n(i);
  }
}
const Hd = {
  name: "codeText",
  previous: Ud,
  resolve: qd,
  tokenize: Wd
};
function qd(e) {
  let t = e.length - 4, n = 3, r, l;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    l === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (l = r) : (r === t || e[r][1].type === "lineEnding") && (e[l][1].type = "codeTextData", r !== l + 2 && (e[l][1].end = e[r - 1][1].end, e.splice(l + 2, r - l - 2), t -= r - l - 2, r = l + 2), l = void 0);
  return e;
}
function Ud(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Wd(e, t, n) {
  let r = 0, l, o;
  return i;
  function i(u) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(u);
  }
  function a(u) {
    return u === 96 ? (e.consume(u), r++, a) : (e.exit("codeTextSequence"), c(u));
  }
  function c(u) {
    return u === null ? n(u) : u === 32 ? (e.enter("space"), e.consume(u), e.exit("space"), c) : u === 96 ? (o = e.enter("codeTextSequence"), l = 0, d(u)) : J(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), c) : (e.enter("codeTextData"), s(u));
  }
  function s(u) {
    return u === null || u === 32 || u === 96 || J(u) ? (e.exit("codeTextData"), c(u)) : (e.consume(u), s);
  }
  function d(u) {
    return u === 96 ? (e.consume(u), l++, d) : l === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(u)) : (o.type = "codeTextData", s(u));
  }
}
class Yd {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const l = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - l, Number.POSITIVE_INFINITY);
    return r && pt(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), pt(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), pt(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        pt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        pt(this.left, n.reverse());
      }
  }
}
function pt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Di(e) {
  const t = {};
  let n = -1, r, l, o, i, a, c, s;
  const d = new Yd(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, o = 0, o < c.length && c[o][1].type === "lineEndingBlank" && (o += 2), o < c.length && c[o][1].type === "content"))
      for (; ++o < c.length && c[o][1].type !== "content"; )
        c[o][1].type === "chunkText" && (c[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Xd(d, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, l = void 0; o--; )
        if (i = d.get(o), i[1].type === "lineEnding" || i[1].type === "lineEndingBlank")
          i[0] === "enter" && (l && (d.get(l)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", l = o);
        else if (!(i[1].type === "linePrefix" || i[1].type === "listItemIndent")) break;
      l && (r[1].end = {
        ...d.get(l)[1].start
      }, a = d.slice(l, n), a.unshift(r), d.splice(l, n - l + 1, a));
    }
  }
  return $e(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !s;
}
function Xd(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let l = t - 1;
  const o = [];
  let i = n._tokenizer;
  i || (i = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (i._contentTypeTextTrailing = !0));
  const a = i.events, c = [], s = {};
  let d, u, h = -1, p = n, m = 0, v = 0;
  const b = [v];
  for (; p; ) {
    for (; e.get(++l)[1] !== p; )
      ;
    o.push(l), p._tokenizer || (d = r.sliceStream(p), p.next || d.push(null), u && i.defineSkip(p.start), p._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = !0), i.write(d), p._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = void 0)), u = p, p = p.next;
  }
  for (p = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (v = h + 1, b.push(v), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (i.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : b.pop(), h = b.length; h--; ) {
    const k = a.slice(b[h], b[h + 1]), A = o.pop();
    c.push([A, A + k.length - 1]), e.splice(A, 2, k);
  }
  for (c.reverse(), h = -1; ++h < c.length; )
    s[m + c[h][0]] = m + c[h][1], m += c[h][1] - c[h][0] - 1;
  return s;
}
const Kd = {
  resolve: Jd,
  tokenize: Qd
}, Gd = {
  partial: !0,
  tokenize: Zd
};
function Jd(e) {
  return Di(e), e;
}
function Qd(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), l(a);
  }
  function l(a) {
    return a === null ? o(a) : J(a) ? e.check(Gd, i, o)(a) : (e.consume(a), l);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function i(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, l;
  }
}
function Zd(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), le(e, o, "linePrefix");
  }
  function o(i) {
    if (i === null || J(i))
      return n(i);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
  }
}
function Li(e, t, n, r, l, o, i, a, c) {
  const s = c || Number.POSITIVE_INFINITY;
  let d = 0;
  return u;
  function u(k) {
    return k === 60 ? (e.enter(r), e.enter(l), e.enter(o), e.consume(k), e.exit(o), h) : k === null || k === 32 || k === 41 || Ht(k) ? n(k) : (e.enter(r), e.enter(i), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(k));
  }
  function h(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(l), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), h(k)) : k === null || k === 60 || J(k) ? n(k) : (e.consume(k), k === 92 ? m : p);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function v(k) {
    return !d && (k === null || k === 41 || he(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(i), e.exit(r), t(k)) : d < s && k === 40 ? (e.consume(k), d++, v) : k === 41 ? (e.consume(k), d--, v) : k === null || k === 32 || k === 40 || Ht(k) ? n(k) : (e.consume(k), k === 92 ? b : v);
  }
  function b(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), v) : v(k);
  }
}
function $i(e, t, n, r, l, o) {
  const i = this;
  let a = 0, c;
  return s;
  function s(p) {
    return e.enter(r), e.enter(l), e.consume(p), e.exit(l), e.enter(o), d;
  }
  function d(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !c || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in i.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(l), e.consume(p), e.exit(l), e.exit(r), t) : J(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), u(p));
  }
  function u(p) {
    return p === null || p === 91 || p === 93 || J(p) || a++ > 999 ? (e.exit("chunkString"), d(p)) : (e.consume(p), c || (c = !ie(p)), p === 92 ? h : u);
  }
  function h(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, u) : u(p);
  }
}
function Ri(e, t, n, r, l, o) {
  let i;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(l), e.consume(h), e.exit(l), i = h === 40 ? 41 : h, c) : n(h);
  }
  function c(h) {
    return h === i ? (e.enter(l), e.consume(h), e.exit(l), e.exit(r), t) : (e.enter(o), s(h));
  }
  function s(h) {
    return h === i ? (e.exit(o), c(i)) : h === null ? n(h) : J(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), le(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === i || h === null || J(h) ? (e.exit("chunkString"), s(h)) : (e.consume(h), h === 92 ? u : d);
  }
  function u(h) {
    return h === i || h === 92 ? (e.consume(h), d) : d(h);
  }
}
function bt(e, t) {
  let n;
  return r;
  function r(l) {
    return J(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n = !0, r) : ie(l) ? le(e, r, n ? "linePrefix" : "lineSuffix")(l) : t(l);
  }
}
const eh = {
  name: "definition",
  tokenize: nh
}, th = {
  partial: !0,
  tokenize: rh
};
function nh(e, t, n) {
  const r = this;
  let l;
  return o;
  function o(p) {
    return e.enter("definition"), i(p);
  }
  function i(p) {
    return $i.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return l = je(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), c) : n(p);
  }
  function c(p) {
    return he(p) ? bt(e, s)(p) : s(p);
  }
  function s(p) {
    return Li(
      e,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function d(p) {
    return e.attempt(th, u, u)(p);
  }
  function u(p) {
    return ie(p) ? le(e, h, "whitespace")(p) : h(p);
  }
  function h(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(l), t(p)) : n(p);
  }
}
function rh(e, t, n) {
  return r;
  function r(a) {
    return he(a) ? bt(e, l)(a) : n(a);
  }
  function l(a) {
    return Ri(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return ie(a) ? le(e, i, "whitespace")(a) : i(a);
  }
  function i(a) {
    return a === null || J(a) ? t(a) : n(a);
  }
}
const ih = {
  name: "hardBreakEscape",
  tokenize: lh
};
function lh(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), l;
  }
  function l(o) {
    return J(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const oh = {
  name: "headingAtx",
  resolve: ah,
  tokenize: sh
};
function ah(e, t) {
  let n = e.length - 2, r = 3, l, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (l = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, $e(e, r, n - r + 1, [["enter", l, t], ["enter", o, t], ["exit", o, t], ["exit", l, t]])), e;
}
function sh(e, t, n) {
  let r = 0;
  return l;
  function l(d) {
    return e.enter("atxHeading"), o(d);
  }
  function o(d) {
    return e.enter("atxHeadingSequence"), i(d);
  }
  function i(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), i) : d === null || he(d) ? (e.exit("atxHeadingSequence"), a(d)) : n(d);
  }
  function a(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), c(d)) : d === null || J(d) ? (e.exit("atxHeading"), t(d)) : ie(d) ? le(e, a, "whitespace")(d) : (e.enter("atxHeadingText"), s(d));
  }
  function c(d) {
    return d === 35 ? (e.consume(d), c) : (e.exit("atxHeadingSequence"), a(d));
  }
  function s(d) {
    return d === null || d === 35 || he(d) ? (e.exit("atxHeadingText"), a(d)) : (e.consume(d), s);
  }
}
const ch = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Cr = ["pre", "script", "style", "textarea"], uh = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ph,
  tokenize: fh
}, dh = {
  partial: !0,
  tokenize: gh
}, hh = {
  partial: !0,
  tokenize: mh
};
function ph(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function fh(e, t, n) {
  const r = this;
  let l, o, i, a, c;
  return s;
  function s(y) {
    return d(y);
  }
  function d(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), u;
  }
  function u(y) {
    return y === 33 ? (e.consume(y), h) : y === 47 ? (e.consume(y), o = !0, v) : y === 63 ? (e.consume(y), l = 3, r.interrupt ? t : g) : Se(y) ? (e.consume(y), i = String.fromCharCode(y), b) : n(y);
  }
  function h(y) {
    return y === 45 ? (e.consume(y), l = 2, p) : y === 91 ? (e.consume(y), l = 5, a = 0, m) : Se(y) ? (e.consume(y), l = 4, r.interrupt ? t : g) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : g) : n(y);
  }
  function m(y) {
    const pe = "CDATA[";
    return y === pe.charCodeAt(a++) ? (e.consume(y), a === pe.length ? r.interrupt ? t : L : m) : n(y);
  }
  function v(y) {
    return Se(y) ? (e.consume(y), i = String.fromCharCode(y), b) : n(y);
  }
  function b(y) {
    if (y === null || y === 47 || y === 62 || he(y)) {
      const pe = y === 47, te = i.toLowerCase();
      return !pe && !o && Cr.includes(te) ? (l = 1, r.interrupt ? t(y) : L(y)) : ch.includes(i.toLowerCase()) ? (l = 6, pe ? (e.consume(y), k) : r.interrupt ? t(y) : L(y)) : (l = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? A(y) : _(y));
    }
    return y === 45 || _e(y) ? (e.consume(y), i += String.fromCharCode(y), b) : n(y);
  }
  function k(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : L) : n(y);
  }
  function A(y) {
    return ie(y) ? (e.consume(y), A) : w(y);
  }
  function _(y) {
    return y === 47 ? (e.consume(y), w) : y === 58 || y === 95 || Se(y) ? (e.consume(y), O) : ie(y) ? (e.consume(y), _) : w(y);
  }
  function O(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || _e(y) ? (e.consume(y), O) : j(y);
  }
  function j(y) {
    return y === 61 ? (e.consume(y), x) : ie(y) ? (e.consume(y), j) : _(y);
  }
  function x(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), c = y, B) : ie(y) ? (e.consume(y), x) : V(y);
  }
  function B(y) {
    return y === c ? (e.consume(y), c = null, q) : y === null || J(y) ? n(y) : (e.consume(y), B);
  }
  function V(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || he(y) ? j(y) : (e.consume(y), V);
  }
  function q(y) {
    return y === 47 || y === 62 || ie(y) ? _(y) : n(y);
  }
  function w(y) {
    return y === 62 ? (e.consume(y), N) : n(y);
  }
  function N(y) {
    return y === null || J(y) ? L(y) : ie(y) ? (e.consume(y), N) : n(y);
  }
  function L(y) {
    return y === 45 && l === 2 ? (e.consume(y), U) : y === 60 && l === 1 ? (e.consume(y), G) : y === 62 && l === 4 ? (e.consume(y), fe) : y === 63 && l === 3 ? (e.consume(y), g) : y === 93 && l === 5 ? (e.consume(y), ye) : J(y) && (l === 6 || l === 7) ? (e.exit("htmlFlowData"), e.check(dh, ae, H)(y)) : y === null || J(y) ? (e.exit("htmlFlowData"), H(y)) : (e.consume(y), L);
  }
  function H(y) {
    return e.check(hh, F, ae)(y);
  }
  function F(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), $;
  }
  function $(y) {
    return y === null || J(y) ? H(y) : (e.enter("htmlFlowData"), L(y));
  }
  function U(y) {
    return y === 45 ? (e.consume(y), g) : L(y);
  }
  function G(y) {
    return y === 47 ? (e.consume(y), i = "", K) : L(y);
  }
  function K(y) {
    if (y === 62) {
      const pe = i.toLowerCase();
      return Cr.includes(pe) ? (e.consume(y), fe) : L(y);
    }
    return Se(y) && i.length < 8 ? (e.consume(y), i += String.fromCharCode(y), K) : L(y);
  }
  function ye(y) {
    return y === 93 ? (e.consume(y), g) : L(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), fe) : y === 45 && l === 2 ? (e.consume(y), g) : L(y);
  }
  function fe(y) {
    return y === null || J(y) ? (e.exit("htmlFlowData"), ae(y)) : (e.consume(y), fe);
  }
  function ae(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function mh(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), o) : n(i);
  }
  function o(i) {
    return r.parser.lazy[r.now().line] ? n(i) : t(i);
  }
}
function gh(e, t, n) {
  return r;
  function r(l) {
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), e.attempt(_t, t, n);
  }
}
const yh = {
  name: "htmlText",
  tokenize: xh
};
function xh(e, t, n) {
  const r = this;
  let l, o, i;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), s) : g === 47 ? (e.consume(g), j) : g === 63 ? (e.consume(g), _) : Se(g) ? (e.consume(g), V) : n(g);
  }
  function s(g) {
    return g === 45 ? (e.consume(g), d) : g === 91 ? (e.consume(g), o = 0, m) : Se(g) ? (e.consume(g), A) : n(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), p) : n(g);
  }
  function u(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), h) : J(g) ? (i = u, G(g)) : (e.consume(g), u);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), p) : u(g);
  }
  function p(g) {
    return g === 62 ? U(g) : g === 45 ? h(g) : u(g);
  }
  function m(g) {
    const fe = "CDATA[";
    return g === fe.charCodeAt(o++) ? (e.consume(g), o === fe.length ? v : m) : n(g);
  }
  function v(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), b) : J(g) ? (i = v, G(g)) : (e.consume(g), v);
  }
  function b(g) {
    return g === 93 ? (e.consume(g), k) : v(g);
  }
  function k(g) {
    return g === 62 ? U(g) : g === 93 ? (e.consume(g), k) : v(g);
  }
  function A(g) {
    return g === null || g === 62 ? U(g) : J(g) ? (i = A, G(g)) : (e.consume(g), A);
  }
  function _(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), O) : J(g) ? (i = _, G(g)) : (e.consume(g), _);
  }
  function O(g) {
    return g === 62 ? U(g) : _(g);
  }
  function j(g) {
    return Se(g) ? (e.consume(g), x) : n(g);
  }
  function x(g) {
    return g === 45 || _e(g) ? (e.consume(g), x) : B(g);
  }
  function B(g) {
    return J(g) ? (i = B, G(g)) : ie(g) ? (e.consume(g), B) : U(g);
  }
  function V(g) {
    return g === 45 || _e(g) ? (e.consume(g), V) : g === 47 || g === 62 || he(g) ? q(g) : n(g);
  }
  function q(g) {
    return g === 47 ? (e.consume(g), U) : g === 58 || g === 95 || Se(g) ? (e.consume(g), w) : J(g) ? (i = q, G(g)) : ie(g) ? (e.consume(g), q) : U(g);
  }
  function w(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || _e(g) ? (e.consume(g), w) : N(g);
  }
  function N(g) {
    return g === 61 ? (e.consume(g), L) : J(g) ? (i = N, G(g)) : ie(g) ? (e.consume(g), N) : q(g);
  }
  function L(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), l = g, H) : J(g) ? (i = L, G(g)) : ie(g) ? (e.consume(g), L) : (e.consume(g), F);
  }
  function H(g) {
    return g === l ? (e.consume(g), l = void 0, $) : g === null ? n(g) : J(g) ? (i = H, G(g)) : (e.consume(g), H);
  }
  function F(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || he(g) ? q(g) : (e.consume(g), F);
  }
  function $(g) {
    return g === 47 || g === 62 || he(g) ? q(g) : n(g);
  }
  function U(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function G(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), K;
  }
  function K(g) {
    return ie(g) ? le(e, ye, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ye(g);
  }
  function ye(g) {
    return e.enter("htmlTextData"), i(g);
  }
}
const Wn = {
  name: "labelEnd",
  resolveAll: wh,
  resolveTo: Ch,
  tokenize: Nh
}, bh = {
  tokenize: Mh
}, kh = {
  tokenize: _h
}, vh = {
  tokenize: Ih
};
function wh(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const l = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += l;
    }
  }
  return e.length !== n.length && $e(e, 0, e.length, n), e;
}
function Ch(e, t) {
  let n = e.length, r = 0, l, o, i, a;
  for (; n--; )
    if (l = e[n][1], o) {
      if (l.type === "link" || l.type === "labelLink" && l._inactive)
        break;
      e[n][0] === "enter" && l.type === "labelLink" && (l._inactive = !0);
    } else if (i) {
      if (e[n][0] === "enter" && (l.type === "labelImage" || l.type === "labelLink") && !l._balanced && (o = n, l.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else l.type === "labelEnd" && (i = n);
  const c = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, s = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[i][1].end
    }
  }, d = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[i - 2][1].start
    }
  };
  return a = [["enter", c, t], ["enter", s, t]], a = Oe(a, e.slice(o + 1, o + r + 3)), a = Oe(a, [["enter", d, t]]), a = Oe(a, Xt(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, i - 3), t)), a = Oe(a, [["exit", d, t], e[i - 2], e[i - 1], ["exit", s, t]]), a = Oe(a, e.slice(i + 1)), a = Oe(a, [["exit", c, t]]), $e(e, o, e.length, a), e;
}
function Nh(e, t, n) {
  const r = this;
  let l = r.events.length, o, i;
  for (; l--; )
    if ((r.events[l][1].type === "labelImage" || r.events[l][1].type === "labelLink") && !r.events[l][1]._balanced) {
      o = r.events[l][1];
      break;
    }
  return a;
  function a(h) {
    return o ? o._inactive ? u(h) : (i = r.parser.defined.includes(je(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(h);
  }
  function c(h) {
    return h === 40 ? e.attempt(bh, d, i ? d : u)(h) : h === 91 ? e.attempt(kh, d, i ? s : u)(h) : i ? d(h) : u(h);
  }
  function s(h) {
    return e.attempt(vh, d, u)(h);
  }
  function d(h) {
    return t(h);
  }
  function u(h) {
    return o._balanced = !0, n(h);
  }
}
function Mh(e, t, n) {
  return r;
  function r(u) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), l;
  }
  function l(u) {
    return he(u) ? bt(e, o)(u) : o(u);
  }
  function o(u) {
    return u === 41 ? d(u) : Li(e, i, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(u);
  }
  function i(u) {
    return he(u) ? bt(e, c)(u) : d(u);
  }
  function a(u) {
    return n(u);
  }
  function c(u) {
    return u === 34 || u === 39 || u === 40 ? Ri(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(u) : d(u);
  }
  function s(u) {
    return he(u) ? bt(e, d)(u) : d(u);
  }
  function d(u) {
    return u === 41 ? (e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), e.exit("resource"), t) : n(u);
  }
}
function _h(e, t, n) {
  const r = this;
  return l;
  function l(a) {
    return $i.call(r, e, o, i, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(je(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function i(a) {
    return n(a);
  }
}
function Ih(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), l;
  }
  function l(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Sh = {
  name: "labelStartImage",
  resolveAll: Wn.resolveAll,
  tokenize: Eh
};
function Eh(e, t, n) {
  const r = this;
  return l;
  function l(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), i) : n(a);
  }
  function i(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Th = {
  name: "labelStartLink",
  resolveAll: Wn.resolveAll,
  tokenize: Ah
};
function Ah(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(i), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(i) {
    return i === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(i) : t(i);
  }
}
const an = {
  name: "lineEnding",
  tokenize: Ph
};
function Ph(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), le(e, t, "linePrefix");
  }
}
const zt = {
  name: "thematicBreak",
  tokenize: Dh
};
function Dh(e, t, n) {
  let r = 0, l;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), i(s);
  }
  function i(s) {
    return l = s, a(s);
  }
  function a(s) {
    return s === l ? (e.enter("thematicBreakSequence"), c(s)) : r >= 3 && (s === null || J(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function c(s) {
    return s === l ? (e.consume(s), r++, c) : (e.exit("thematicBreakSequence"), ie(s) ? le(e, a, "whitespace")(s) : a(s));
  }
}
const Ee = {
  continuation: {
    tokenize: Oh
  },
  exit: Fh,
  name: "list",
  tokenize: Rh
}, Lh = {
  partial: !0,
  tokenize: Bh
}, $h = {
  partial: !0,
  tokenize: zh
};
function Rh(e, t, n) {
  const r = this, l = r.events[r.events.length - 1];
  let o = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0, i = 0;
  return a;
  function a(p) {
    const m = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : In(p)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(zt, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), c(p);
    }
    return n(p);
  }
  function c(p) {
    return In(p) && ++i < 10 ? (e.consume(p), c) : (!r.interrupt || i < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      _t,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(Lh, h, u)
    );
  }
  function d(p) {
    return r.containerState.initialBlankLine = !0, o++, h(p);
  }
  function u(p) {
    return ie(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), h) : n(p);
  }
  function h(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Oh(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(_t, l, o);
  function l(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, le(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !ie(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt($h, t, i)(a));
  }
  function i(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, le(e, e.attempt(Ee, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function zh(e, t, n) {
  const r = this;
  return le(e, l, "listItemIndent", r.containerState.size + 1);
  function l(o) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Fh(e) {
  e.exit(this.containerState.type);
}
function Bh(e, t, n) {
  const r = this;
  return le(e, l, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function l(o) {
    const i = r.events[r.events.length - 1];
    return !ie(o) && i && i[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Nr = {
  name: "setextUnderline",
  resolveTo: jh,
  tokenize: Vh
};
function jh(e, t) {
  let n = e.length, r, l, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (l = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const i = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[l][1].type = "setextHeadingText", o ? (e.splice(l, 0, ["enter", i, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = i, e.push(["exit", i, t]), e;
}
function Vh(e, t, n) {
  const r = this;
  let l;
  return o;
  function o(s) {
    let d = r.events.length, u;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        u = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || u) ? (e.enter("setextHeadingLine"), l = s, i(s)) : n(s);
  }
  function i(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === l ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), ie(s) ? le(e, c, "lineSuffix")(s) : c(s));
  }
  function c(s) {
    return s === null || J(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Hh = {
  tokenize: qh
};
function qh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    _t,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, l, le(e, e.attempt(this.parser.constructs.flow, l, e.attempt(Kd, l)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function l(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Uh = {
  resolveAll: zi()
}, Wh = Oi("string"), Yh = Oi("text");
function Oi(e) {
  return {
    resolveAll: zi(e === "text" ? Xh : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, l = this.parser.constructs[e], o = n.attempt(l, i, a);
    return i;
    function i(d) {
      return s(d) ? o(d) : a(d);
    }
    function a(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return n.enter("data"), n.consume(d), c;
    }
    function c(d) {
      return s(d) ? (n.exit("data"), o(d)) : (n.consume(d), c);
    }
    function s(d) {
      if (d === null)
        return !0;
      const u = l[d];
      let h = -1;
      if (u)
        for (; ++h < u.length; ) {
          const p = u[h];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function zi(e) {
  return t;
  function t(n, r) {
    let l = -1, o;
    for (; ++l <= n.length; )
      o === void 0 ? n[l] && n[l][1].type === "data" && (o = l, l++) : (!n[l] || n[l][1].type !== "data") && (l !== o + 2 && (n[o][1].end = n[l - 1][1].end, n.splice(o + 2, l - o - 2), l = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Xh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], l = t.sliceStream(r);
      let o = l.length, i = -1, a = 0, c;
      for (; o--; ) {
        const s = l[o];
        if (typeof s == "string") {
          for (i = s.length; s.charCodeAt(i - 1) === 32; )
            a++, i--;
          if (i) break;
          i = -1;
        } else if (s === -2)
          c = !0, a++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const s = {
          type: n === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? i : r.start._bufferIndex + i,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...s.start
        }, r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Kh = {
  42: Ee,
  43: Ee,
  45: Ee,
  48: Ee,
  49: Ee,
  50: Ee,
  51: Ee,
  52: Ee,
  53: Ee,
  54: Ee,
  55: Ee,
  56: Ee,
  57: Ee,
  62: Ti
}, Gh = {
  91: eh
}, Jh = {
  [-2]: on,
  [-1]: on,
  32: on
}, Qh = {
  35: oh,
  42: zt,
  45: [Nr, zt],
  60: uh,
  61: Nr,
  95: zt,
  96: wr,
  126: wr
}, Zh = {
  38: Pi,
  92: Ai
}, ep = {
  [-5]: an,
  [-4]: an,
  [-3]: an,
  33: Sh,
  38: Pi,
  42: Sn,
  60: [Td, yh],
  91: Th,
  92: [ih, Ai],
  93: Wn,
  95: Sn,
  96: Hd
}, tp = {
  null: [Sn, Uh]
}, np = {
  null: [42, 95]
}, rp = {
  null: []
}, ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: np,
  contentInitial: Gh,
  disable: rp,
  document: Kh,
  flow: Qh,
  flowInitial: Jh,
  insideSpan: tp,
  string: Zh,
  text: ep
}, Symbol.toStringTag, { value: "Module" }));
function lp(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const l = {}, o = [];
  let i = [], a = [];
  const c = {
    attempt: B(j),
    check: B(x),
    consume: A,
    enter: _,
    exit: O,
    interrupt: B(x, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: p,
    write: u
  };
  let d = t.tokenize.call(s, c);
  return t.resolveAll && o.push(t), s;
  function u(N) {
    return i = Oe(i, N), b(), i[i.length - 1] !== null ? [] : (V(t, 0), s.events = Xt(o, s.events, s), s.events);
  }
  function h(N, L) {
    return ap(p(N), L);
  }
  function p(N) {
    return op(i, N);
  }
  function m() {
    const {
      _bufferIndex: N,
      _index: L,
      line: H,
      column: F,
      offset: $
    } = r;
    return {
      _bufferIndex: N,
      _index: L,
      line: H,
      column: F,
      offset: $
    };
  }
  function v(N) {
    l[N.line] = N.column, w();
  }
  function b() {
    let N;
    for (; r._index < i.length; ) {
      const L = i[r._index];
      if (typeof L == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(N) {
    d = d(N);
  }
  function A(N) {
    J(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, w()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    i[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = N;
  }
  function _(N, L) {
    const H = L || {};
    return H.type = N, H.start = m(), s.events.push(["enter", H, s]), a.push(H), H;
  }
  function O(N) {
    const L = a.pop();
    return L.end = m(), s.events.push(["exit", L, s]), L;
  }
  function j(N, L) {
    V(N, L.from);
  }
  function x(N, L) {
    L.restore();
  }
  function B(N, L) {
    return H;
    function H(F, $, U) {
      let G, K, ye, g;
      return Array.isArray(F) ? (
        /* c8 ignore next 1 */
        ae(F)
      ) : "tokenize" in F ? (
        // Looks like a construct.
        ae([
          /** @type {Construct} */
          F
        ])
      ) : fe(F);
      function fe(X) {
        return M;
        function M(S) {
          const P = S !== null && X[S], Y = S !== null && X.null, W = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(P) ? P : P ? [P] : [],
            ...Array.isArray(Y) ? Y : Y ? [Y] : []
          ];
          return ae(W)(S);
        }
      }
      function ae(X) {
        return G = X, K = 0, X.length === 0 ? U : y(X[K]);
      }
      function y(X) {
        return M;
        function M(S) {
          return g = q(), ye = X, X.partial || (s.currentConstruct = X), X.name && s.parser.constructs.disable.null.includes(X.name) ? te() : X.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(s), L) : s,
            c,
            pe,
            te
          )(S);
        }
      }
      function pe(X) {
        return N(ye, g), $;
      }
      function te(X) {
        return g.restore(), ++K < G.length ? y(G[K]) : U;
      }
    }
  }
  function V(N, L) {
    N.resolveAll && !o.includes(N) && o.push(N), N.resolve && $e(s.events, L, s.events.length - L, N.resolve(s.events.slice(L), s)), N.resolveTo && (s.events = N.resolveTo(s.events, s));
  }
  function q() {
    const N = m(), L = s.previous, H = s.currentConstruct, F = s.events.length, $ = Array.from(a);
    return {
      from: F,
      restore: U
    };
    function U() {
      r = N, s.previous = L, s.currentConstruct = H, s.events.length = F, a = $, w();
    }
  }
  function w() {
    r.line in l && r.column < 2 && (r.column = l[r.line], r.offset += l[r.line] - 1);
  }
}
function op(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, l = t.end._index, o = t.end._bufferIndex;
  let i;
  if (n === l)
    i = [e[n].slice(r, o)];
  else {
    if (i = e.slice(n, l), r > -1) {
      const a = i[0];
      typeof a == "string" ? i[0] = a.slice(r) : i.shift();
    }
    o > 0 && i.push(e[l].slice(0, o));
  }
  return i;
}
function ap(e, t) {
  let n = -1;
  const r = [];
  let l;
  for (; ++n < e.length; ) {
    const o = e[n];
    let i;
    if (typeof o == "string")
      i = o;
    else switch (o) {
      case -5: {
        i = "\r";
        break;
      }
      case -4: {
        i = `
`;
        break;
      }
      case -3: {
        i = `\r
`;
        break;
      }
      case -2: {
        i = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && l) continue;
        i = " ";
        break;
      }
      default:
        i = String.fromCharCode(o);
    }
    l = o === -2, r.push(i);
  }
  return r.join("");
}
function sp(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Si([ip, ...(e || {}).extensions || []])
    ),
    content: l(Cd),
    defined: [],
    document: l(Md),
    flow: l(Hh),
    lazy: {},
    string: l(Wh),
    text: l(Yh)
  };
  return r;
  function l(o) {
    return i;
    function i(a) {
      return lp(r, o, a);
    }
  }
}
function cp(e) {
  for (; !Di(e); )
    ;
  return e;
}
const Mr = /[\0\t\n\r]/g;
function up() {
  let e = 1, t = "", n = !0, r;
  return l;
  function l(o, i, a) {
    const c = [];
    let s, d, u, h, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(i || void 0).decode(o)), u = 0, t = "", n && (o.charCodeAt(0) === 65279 && u++, n = void 0); u < o.length; ) {
      if (Mr.lastIndex = u, s = Mr.exec(o), h = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(h), !s) {
        t = o.slice(u);
        break;
      }
      if (p === 10 && u === h && r)
        c.push(-3), r = void 0;
      else
        switch (r && (c.push(-5), r = void 0), u < h && (c.push(o.slice(u, h)), e += h - u), p) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, c.push(-2); e++ < d; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      u = h + 1;
    }
    return a && (r && c.push(-5), t && c.push(t), c.push(null)), c;
  }
}
const dp = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function hp(e) {
  return e.replace(dp, pp);
}
function pp(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const l = n.charCodeAt(1), o = l === 120 || l === 88;
    return Ei(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Un(n) || e;
}
const Fi = {}.hasOwnProperty;
function fp(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), mp(n)(cp(sp(n).document().write(up()(e, t, !0))));
}
function mp(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(E),
      autolinkProtocol: q,
      autolinkEmail: q,
      atxHeading: o(xe),
      blockQuote: o(Y),
      characterEscape: q,
      characterReference: q,
      codeFenced: o(W),
      codeFencedFenceInfo: i,
      codeFencedFenceMeta: i,
      codeIndented: o(W, i),
      codeText: o(ge, i),
      codeTextData: q,
      data: q,
      codeFlowValue: q,
      definition: o(ne),
      definitionDestinationString: i,
      definitionLabelString: i,
      definitionTitleString: i,
      emphasis: o(ue),
      hardBreakEscape: o(Q),
      hardBreakTrailing: o(Q),
      htmlFlow: o(Ae, i),
      htmlFlowData: q,
      htmlText: o(Ae, i),
      htmlTextData: q,
      image: o(ze),
      label: i,
      link: o(E),
      listItem: o(Fe),
      listItemValue: h,
      listOrdered: o(we, u),
      listUnordered: o(we),
      paragraph: o(Re),
      reference: y,
      referenceString: i,
      resourceDestinationString: i,
      resourceTitleString: i,
      setextHeading: o(xe),
      strong: o(Qt),
      thematicBreak: o(st)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: j,
      autolink: c(),
      autolinkEmail: P,
      autolinkProtocol: S,
      blockQuote: c(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: te,
      characterReferenceMarkerNumeric: te,
      characterReferenceValue: X,
      characterReference: M,
      codeFenced: c(b),
      codeFencedFence: v,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: w,
      codeIndented: c(k),
      codeText: c($),
      codeTextData: w,
      data: w,
      definition: c(),
      definitionDestinationString: O,
      definitionLabelString: A,
      definitionTitleString: _,
      emphasis: c(),
      hardBreakEscape: c(L),
      hardBreakTrailing: c(L),
      htmlFlow: c(H),
      htmlFlowData: w,
      htmlText: c(F),
      htmlTextData: w,
      image: c(G),
      label: ye,
      labelText: K,
      lineEnding: N,
      link: c(U),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: pe,
      resourceDestinationString: g,
      resourceTitleString: fe,
      resource: ae,
      setextHeading: c(V),
      setextHeadingLineSequence: B,
      setextHeadingText: x,
      strong: c(),
      thematicBreak: c()
    }
  };
  Bi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(I) {
    let z = {
      type: "root",
      children: []
    };
    const Z = {
      stack: [z],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: i,
      resume: d,
      data: n
    }, re = [];
    let oe = -1;
    for (; ++oe < I.length; )
      if (I[oe][1].type === "listOrdered" || I[oe][1].type === "listUnordered")
        if (I[oe][0] === "enter")
          re.push(oe);
        else {
          const Be = re.pop();
          oe = l(I, Be, oe);
        }
    for (oe = -1; ++oe < I.length; ) {
      const Be = t[I[oe][0]];
      Fi.call(Be, I[oe][1].type) && Be[I[oe][1].type].call(Object.assign({
        sliceSerialize: I[oe][2].sliceSerialize
      }, Z), I[oe][1]);
    }
    if (Z.tokenStack.length > 0) {
      const Be = Z.tokenStack[Z.tokenStack.length - 1];
      (Be[1] || _r).call(Z, void 0, Be[0]);
    }
    for (z.position = {
      start: Ye(I.length > 0 ? I[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Ye(I.length > 0 ? I[I.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, oe = -1; ++oe < t.transforms.length; )
      z = t.transforms[oe](z) || z;
    return z;
  }
  function l(I, z, Z) {
    let re = z - 1, oe = -1, Be = !1, Ke, qe, ct, ut;
    for (; ++re <= Z; ) {
      const Pe = I[re];
      switch (Pe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Pe[0] === "enter" ? oe++ : oe--, ut = void 0;
          break;
        }
        case "lineEndingBlank": {
          Pe[0] === "enter" && (Ke && !ut && !oe && !ct && (ct = re), ut = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ut = void 0;
      }
      if (!oe && Pe[0] === "enter" && Pe[1].type === "listItemPrefix" || oe === -1 && Pe[0] === "exit" && (Pe[1].type === "listUnordered" || Pe[1].type === "listOrdered")) {
        if (Ke) {
          let tt = re;
          for (qe = void 0; tt--; ) {
            const Ue = I[tt];
            if (Ue[1].type === "lineEnding" || Ue[1].type === "lineEndingBlank") {
              if (Ue[0] === "exit") continue;
              qe && (I[qe][1].type = "lineEndingBlank", Be = !0), Ue[1].type = "lineEnding", qe = tt;
            } else if (!(Ue[1].type === "linePrefix" || Ue[1].type === "blockQuotePrefix" || Ue[1].type === "blockQuotePrefixWhitespace" || Ue[1].type === "blockQuoteMarker" || Ue[1].type === "listItemIndent")) break;
          }
          ct && (!qe || ct < qe) && (Ke._spread = !0), Ke.end = Object.assign({}, qe ? I[qe][1].start : Pe[1].end), I.splice(qe || re, 0, ["exit", Ke, Pe[2]]), re++, Z++;
        }
        if (Pe[1].type === "listItemPrefix") {
          const tt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Pe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ke = tt, I.splice(re, 0, ["enter", tt, Pe[2]]), re++, Z++, ct = void 0, ut = !0;
        }
      }
    }
    return I[z][1]._spread = Be, Z;
  }
  function o(I, z) {
    return Z;
    function Z(re) {
      a.call(this, I(re), re), z && z.call(this, re);
    }
  }
  function i() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(I, z, Z) {
    this.stack[this.stack.length - 1].children.push(I), this.stack.push(I), this.tokenStack.push([z, Z || void 0]), I.position = {
      start: Ye(z.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function c(I) {
    return z;
    function z(Z) {
      I && I.call(this, Z), s.call(this, Z);
    }
  }
  function s(I, z) {
    const Z = this.stack.pop(), re = this.tokenStack.pop();
    if (re)
      re[0].type !== I.type && (z ? z.call(this, I, re[0]) : (re[1] || _r).call(this, I, re[0]));
    else throw new Error("Cannot close `" + I.type + "` (" + xt({
      start: I.start,
      end: I.end
    }) + "): it’s not open");
    Z.position.end = Ye(I.end);
  }
  function d() {
    return qn(this.stack.pop());
  }
  function u() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(I) {
    if (this.data.expectingFirstListItemValue) {
      const z = this.stack[this.stack.length - 2];
      z.start = Number.parseInt(this.sliceSerialize(I), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.lang = I;
  }
  function m() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.meta = I;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function b() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.value = I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.value = I.replace(/(\r?\n|\r)$/g, "");
  }
  function A(I) {
    const z = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.label = z, Z.identifier = je(this.sliceSerialize(I)).toLowerCase();
  }
  function _() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.title = I;
  }
  function O() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.url = I;
  }
  function j(I) {
    const z = this.stack[this.stack.length - 1];
    if (!z.depth) {
      const Z = this.sliceSerialize(I).length;
      z.depth = Z;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function B(I) {
    const z = this.stack[this.stack.length - 1];
    z.depth = this.sliceSerialize(I).codePointAt(0) === 61 ? 1 : 2;
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function q(I) {
    const Z = this.stack[this.stack.length - 1].children;
    let re = Z[Z.length - 1];
    (!re || re.type !== "text") && (re = St(), re.position = {
      start: Ye(I.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Z.push(re)), this.stack.push(re);
  }
  function w(I) {
    const z = this.stack.pop();
    z.value += this.sliceSerialize(I), z.position.end = Ye(I.end);
  }
  function N(I) {
    const z = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Z = z.children[z.children.length - 1];
      Z.position.end = Ye(I.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(z.type) && (q.call(this, I), w.call(this, I));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function H() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.value = I;
  }
  function F() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.value = I;
  }
  function $() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.value = I;
  }
  function U() {
    const I = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const z = this.data.referenceType || "shortcut";
      I.type += "Reference", I.referenceType = z, delete I.url, delete I.title;
    } else
      delete I.identifier, delete I.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const I = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const z = this.data.referenceType || "shortcut";
      I.type += "Reference", I.referenceType = z, delete I.url, delete I.title;
    } else
      delete I.identifier, delete I.label;
    this.data.referenceType = void 0;
  }
  function K(I) {
    const z = this.sliceSerialize(I), Z = this.stack[this.stack.length - 2];
    Z.label = hp(z), Z.identifier = je(z).toLowerCase();
  }
  function ye() {
    const I = this.stack[this.stack.length - 1], z = this.resume(), Z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Z.type === "link") {
      const re = I.children;
      Z.children = re;
    } else
      Z.alt = z;
  }
  function g() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.url = I;
  }
  function fe() {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.title = I;
  }
  function ae() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function pe(I) {
    const z = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.label = z, Z.identifier = je(this.sliceSerialize(I)).toLowerCase(), this.data.referenceType = "full";
  }
  function te(I) {
    this.data.characterReferenceType = I.type;
  }
  function X(I) {
    const z = this.sliceSerialize(I), Z = this.data.characterReferenceType;
    let re;
    Z ? (re = Ei(z, Z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : re = Un(z);
    const oe = this.stack[this.stack.length - 1];
    oe.value += re;
  }
  function M(I) {
    const z = this.stack.pop();
    z.position.end = Ye(I.end);
  }
  function S(I) {
    w.call(this, I);
    const z = this.stack[this.stack.length - 1];
    z.url = this.sliceSerialize(I);
  }
  function P(I) {
    w.call(this, I);
    const z = this.stack[this.stack.length - 1];
    z.url = "mailto:" + this.sliceSerialize(I);
  }
  function Y() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function W() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ge() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ne() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ue() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function xe() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Q() {
    return {
      type: "break"
    };
  }
  function Ae() {
    return {
      type: "html",
      value: ""
    };
  }
  function ze() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function E() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function we(I) {
    return {
      type: "list",
      ordered: I.type === "listOrdered",
      start: null,
      spread: I._spread,
      children: []
    };
  }
  function Fe(I) {
    return {
      type: "listItem",
      spread: I._spread,
      checked: null,
      children: []
    };
  }
  function Re() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Qt() {
    return {
      type: "strong",
      children: []
    };
  }
  function St() {
    return {
      type: "text",
      value: ""
    };
  }
  function st() {
    return {
      type: "thematicBreak"
    };
  }
}
function Ye(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Bi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Bi(e, r) : gp(e, r);
  }
}
function gp(e, t) {
  let n;
  for (n in t)
    if (Fi.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function _r(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + xt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + xt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + xt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function yp(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return fp(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function xp(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bp(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function kp(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, l = t.lang ? t.lang.split(/\s+/) : [];
  l.length > 0 && (r.className = ["language-" + l[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function vp(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function wp(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Cp(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), l = at(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let i, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), i = e.footnoteOrder.length) : i = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + l,
      id: n + "fnref-" + l + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(i) }]
  };
  e.patch(t, c);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [c]
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Np(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mp(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function ji(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const l = e.all(t), o = l[0];
  o && o.type === "text" ? o.value = "[" + o.value : l.unshift({ type: "text", value: "[" });
  const i = l[l.length - 1];
  return i && i.type === "text" ? i.value += r : l.push({ type: "text", value: r }), l;
}
function _p(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ji(e, t);
  const l = { src: at(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (l.title = r.title);
  const o = { type: "element", tagName: "img", properties: l, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Ip(e, t) {
  const n = { src: at(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Sp(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ep(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ji(e, t);
  const l = { href: at(r.url || "") };
  r.title !== null && r.title !== void 0 && (l.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: l,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Tp(e, t) {
  const n = { href: at(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ap(e, t, n) {
  const r = e.all(t), l = n ? Pp(n) : Vi(t), o = {}, i = [];
  if (typeof t.checked == "boolean") {
    const d = r[0];
    let u;
    d && d.type === "element" && d.tagName === "p" ? u = d : (u = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(u)), u.children.length > 0 && u.children.unshift({ type: "text", value: " " }), u.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const d = r[a];
    (l || a !== 0 || d.type !== "element" || d.tagName !== "p") && i.push({ type: "text", value: `
` }), d.type === "element" && d.tagName === "p" && !l ? i.push(...d.children) : i.push(d);
  }
  const c = r[r.length - 1];
  c && (l || c.type !== "element" || c.tagName !== "p") && i.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: i };
  return e.patch(t, s), e.applyData(t, s);
}
function Pp(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Vi(n[r]);
  }
  return t;
}
function Vi(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Dp(e, t) {
  const n = {}, r = e.all(t);
  let l = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++l < r.length; ) {
    const i = r[l];
    if (i.type === "element" && i.tagName === "li" && i.properties && Array.isArray(i.properties.className) && i.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Lp(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function $p(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Rp(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Op(e, t) {
  const n = e.all(t), r = n.shift(), l = [];
  if (r) {
    const i = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], i), l.push(i);
  }
  if (n.length > 0) {
    const i = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = Bn(t.children[1]), c = vi(t.children[t.children.length - 1]);
    a && c && (i.position = { start: a, end: c }), l.push(i);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function zp(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", i = n && n.type === "table" ? n.align : void 0, a = i ? i.length : t.children.length;
  let c = -1;
  const s = [];
  for (; ++c < a; ) {
    const u = t.children[c], h = {}, p = i ? i[c] : void 0;
    p && (h.align = p);
    let m = { type: "element", tagName: o, properties: h, children: [] };
    u && (m.children = e.all(u), e.patch(u, m), m = e.applyData(u, m)), s.push(m);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function Fp(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ir = 9, Sr = 32;
function Bp(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), l = 0;
  const o = [];
  for (; r; )
    o.push(
      Er(t.slice(l, r.index), l > 0, !0),
      r[0]
    ), l = r.index + r[0].length, r = n.exec(t);
  return o.push(Er(t.slice(l), l > 0, !1)), o.join("");
}
function Er(e, t, n) {
  let r = 0, l = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Ir || o === Sr; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(l - 1);
    for (; o === Ir || o === Sr; )
      l--, o = e.codePointAt(l - 1);
  }
  return l > r ? e.slice(r, l) : "";
}
function jp(e, t) {
  const n = { type: "text", value: Bp(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Vp(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Hp = {
  blockquote: xp,
  break: bp,
  code: kp,
  delete: vp,
  emphasis: wp,
  footnoteReference: Cp,
  heading: Np,
  html: Mp,
  imageReference: _p,
  image: Ip,
  inlineCode: Sp,
  linkReference: Ep,
  link: Tp,
  listItem: Ap,
  list: Dp,
  paragraph: Lp,
  // @ts-expect-error: root is different, but hard to type.
  root: $p,
  strong: Rp,
  table: Op,
  tableCell: Fp,
  tableRow: zp,
  text: jp,
  thematicBreak: Vp,
  toml: At,
  yaml: At,
  definition: At,
  footnoteDefinition: At
};
function At() {
}
const Hi = -1, Kt = 0, kt = 1, qt = 2, Yn = 3, Xn = 4, Kn = 5, Gn = 6, qi = 7, Ui = 8, { defineProperty: qp } = Object, Wi = typeof self == "object" ? self : globalThis, Tr = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Wi[e](t);
}, Up = (e, t) => {
  const n = (l, o) => (e.set(o, l), l), r = (l) => {
    if (e.has(l))
      return e.get(l);
    const [o, i] = t[l];
    switch (o) {
      case Kt:
      case Hi:
        return n(i, l);
      case kt: {
        const a = n([], l);
        for (const c of i)
          a.push(r(c));
        return a;
      }
      case qt: {
        const a = n({}, l);
        for (const [c, s] of i) {
          const d = r(c), u = r(s);
          d === "__proto__" ? qp(a, d, {
            value: u,
            configurable: !0,
            enumerable: !0,
            writable: !0
          }) : a[d] = u;
        }
        return a;
      }
      case Yn:
        return n(new Date(i), l);
      case Xn: {
        const { source: a, flags: c } = i;
        return n(new RegExp(a, c), l);
      }
      case Kn: {
        const a = n(/* @__PURE__ */ new Map(), l);
        for (const [c, s] of i)
          a.set(r(c), r(s));
        return a;
      }
      case Gn: {
        const a = n(/* @__PURE__ */ new Set(), l);
        for (const c of i)
          a.add(r(c));
        return a;
      }
      case qi: {
        const { name: a, message: c } = i;
        return n(
          typeof Wi[a] == "function" ? Tr(a, c) : new Error(c),
          l
        );
      }
      case Ui:
        return n(BigInt(i), l);
      case "BigInt":
        return n(Object(BigInt(i)), l);
      case "ArrayBuffer":
        return n(new Uint8Array(i).buffer, i);
      case "DataView": {
        const { buffer: a } = new Uint8Array(i);
        return n(new DataView(a), i);
      }
      case "-0":
        return -0;
    }
    return n(Tr(o, i), l);
  };
  return r;
}, Ar = (e) => Up(/* @__PURE__ */ new Map(), e)(0), Je = "", { toString: Wp } = {}, { keys: Yp, is: Xp } = Object, ft = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Kt, t];
  const n = Wp.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [kt, Je];
    case "Object":
      return [qt, Je];
    case "Date":
      return [Yn, Je];
    case "RegExp":
      return [Xn, Je];
    case "Map":
      return [Kn, Je];
    case "Set":
      return [Gn, Je];
    case "DataView":
      return [kt, n];
  }
  return n.includes("Array") ? [kt, n] : e instanceof Error ? [qi, e.name || "Error"] : [qt, n];
}, Pt = ([e, t]) => e === Kt && (t === "function" || t === "symbol"), Kp = (e, t, n, r) => {
  const l = (i, a) => {
    const c = r.push(i) - 1;
    return n.set(a, c), c;
  }, o = (i) => {
    if (n.has(i))
      return n.get(i);
    let [a, c] = ft(i);
    switch (a) {
      case Kt: {
        let d = i;
        switch (c) {
          case "bigint":
            a = Ui, d = i.toString();
            break;
          case "number":
            if (!i && Xp(i, -0))
              return r.push(["-0"]) - 1;
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + c);
            d = null;
            break;
          case "undefined":
            return l([Hi], i);
        }
        return l([a, d], i);
      }
      case kt: {
        if (c) {
          let h = i;
          return c === "DataView" ? h = new Uint8Array(i.buffer) : c === "ArrayBuffer" && (h = new Uint8Array(i)), l([c, [...h]], i);
        }
        const d = [], u = l([a, d], i);
        for (const h of i)
          d.push(o(h));
        return u;
      }
      case qt: {
        if (c)
          switch (c) {
            case "BigInt":
              return l([c, i.toString()], i);
            case "Boolean":
            case "Number":
            case "String":
              return l([c, i.valueOf()], i);
          }
        if (t && "toJSON" in i)
          return o(i.toJSON());
        const d = [], u = l([a, d], i);
        for (const h of Yp(i))
          (e || !Pt(ft(i[h]))) && d.push([o(h), o(i[h])]);
        return u;
      }
      case Yn:
        return l([a, isNaN(i.getTime()) ? Je : i.toISOString()], i);
      case Xn: {
        const { source: d, flags: u } = i;
        return l([a, { source: d, flags: u }], i);
      }
      case Kn: {
        const d = [], u = l([a, d], i);
        for (const [h, p] of i)
          (e || !(Pt(ft(h)) || Pt(ft(p)))) && d.push([o(h), o(p)]);
        return u;
      }
      case Gn: {
        const d = [], u = l([a, d], i);
        for (const h of i)
          (e || !Pt(ft(h))) && d.push(o(h));
        return u;
      }
    }
    const { message: s } = i;
    return l([a, { name: c, message: s }], i);
  };
  return o;
}, Pr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Kp(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Ut = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ar(Pr(e, t)) : structuredClone(e)
) : (e, t) => Ar(Pr(e, t));
function Gp(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Jp(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Qp(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Gp, r = e.options.footnoteBackLabel || Jp, l = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", i = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[c]
    );
    if (!s)
      continue;
    const d = e.all(s), u = String(s.identifier).toUpperCase(), h = at(u.toLowerCase());
    let p = 0;
    const m = [], v = e.footnoteCounts.get(u);
    for (; v !== void 0 && ++p <= v; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(c, p);
      typeof A == "string" && (A = { type: "text", value: A }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(c, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const b = d[d.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const A = b.children[b.children.length - 1];
      A && A.type === "text" ? A.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...m);
    } else
      d.push(...m);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(d, !0)
    };
    e.patch(s, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Ut(i),
            id: "footnote-label"
          },
          children: [{ type: "text", value: l }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Gt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(e) {
    if (e == null)
      return nf;
    if (typeof e == "function")
      return Jt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Zp(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        ef(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return tf(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function Zp(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Gt(e[n]);
  return Jt(r);
  function r(...l) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, l)) return !0;
    return !1;
  }
}
function ef(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Jt(n);
  function n(r) {
    const l = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (l[o] !== t[o]) return !1;
    return !0;
  }
}
function tf(e) {
  return Jt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Jt(e) {
  return t;
  function t(n, r, l) {
    return !!(rf(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      l || void 0
    ));
  }
}
function nf() {
  return !0;
}
function rf(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Yi = [], lf = !0, En = !1, of = "skip";
function Xi(e, t, n, r) {
  let l;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : l = t;
  const o = Gt(l), i = r ? -1 : 1;
  a(e, void 0, [])();
  function a(c, s, d) {
    const u = (
      /** @type {Record<string, unknown>} */
      c && typeof c == "object" ? c : {}
    );
    if (typeof u.type == "string") {
      const p = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (c.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let p = Yi, m, v, b;
      if ((!t || o(c, s, d[d.length - 1] || void 0)) && (p = af(n(c, d)), p[0] === En))
        return p;
      if ("children" in c && c.children) {
        const k = (
          /** @type {UnistParent} */
          c
        );
        if (k.children && p[0] !== of)
          for (v = (r ? k.children.length : -1) + i, b = d.concat(k); v > -1 && v < k.children.length; ) {
            const A = k.children[v];
            if (m = a(A, v, b)(), m[0] === En)
              return m;
            v = typeof m[1] == "number" ? m[1] : v + i;
          }
      }
      return p;
    }
  }
}
function af(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [lf, e] : e == null ? Yi : [e];
}
function Jn(e, t, n, r) {
  let l, o, i;
  typeof t == "function" && typeof n != "function" ? (o = void 0, i = t, l = n) : (o = t, i = n, l = r), Xi(e, o, a, l);
  function a(c, s) {
    const d = s[s.length - 1], u = d ? d.children.indexOf(c) : void 0;
    return i(c, u, d);
  }
}
const Tn = {}.hasOwnProperty, sf = {};
function cf(e, t) {
  const n = t || sf, r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = { ...Hp, ...n.handlers }, a = {
    all: s,
    applyData: df,
    definitionById: r,
    footnoteById: l,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: i,
    one: c,
    options: n,
    patch: uf,
    wrap: pf
  };
  return Jn(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const u = d.type === "definition" ? r : l, h = String(d.identifier).toUpperCase();
      u.has(h) || u.set(h, d);
    }
  }), a;
  function c(d, u) {
    const h = d.type, p = a.handlers[h];
    if (Tn.call(a.handlers, h) && p)
      return p(a, d, u);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in d) {
        const { children: v, ...b } = d, k = Ut(b);
        return k.children = a.all(d), k;
      }
      return Ut(d);
    }
    return (a.options.unknownHandler || hf)(a, d, u);
  }
  function s(d) {
    const u = [];
    if ("children" in d) {
      const h = d.children;
      let p = -1;
      for (; ++p < h.length; ) {
        const m = a.one(h[p], d);
        if (m) {
          if (p && h[p - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = Dr(m.value)), !Array.isArray(m) && m.type === "element")) {
            const v = m.children[0];
            v && v.type === "text" && (v.value = Dr(v.value));
          }
          Array.isArray(m) ? u.push(...m) : u.push(m);
        }
      }
    }
    return u;
  }
}
function uf(e, t) {
  e.position && (t.position = Ku(e));
}
function df(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, l = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const i = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: i };
      }
    n.type === "element" && o && Object.assign(n.properties, Ut(o)), "children" in n && n.children && l !== null && l !== void 0 && (n.children = l);
  }
  return n;
}
function hf(e, t) {
  const n = t.data || {}, r = "value" in t && !(Tn.call(n, "hProperties") || Tn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function pf(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Dr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Lr(e, t) {
  const n = cf(e, t), r = n.one(e, void 0), l = Qp(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return l && o.children.push({ type: "text", value: `
` }, l), o;
}
function ff(e, t) {
  return e && "run" in e ? async function(n, r) {
    const l = (
      /** @type {HastRoot} */
      Lr(n, { file: r, ...t })
    );
    await e.run(l, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Lr(n, { file: r, ...e || t })
    );
  };
}
function $r(e) {
  if (e)
    throw e;
}
var sn, Rr;
function mf() {
  if (Rr) return sn;
  Rr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, l = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, o = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var d = e.call(s, "constructor"), u = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !d && !u)
      return !1;
    var h;
    for (h in s)
      ;
    return typeof h > "u" || e.call(s, h);
  }, i = function(s, d) {
    n && d.name === "__proto__" ? n(s, d.name, {
      enumerable: !0,
      configurable: !0,
      value: d.newValue,
      writable: !0
    }) : s[d.name] = d.newValue;
  }, a = function(s, d) {
    if (d === "__proto__")
      if (e.call(s, d)) {
        if (r)
          return r(s, d).value;
      } else return;
    return s[d];
  };
  return sn = function c() {
    var s, d, u, h, p, m, v = arguments[0], b = 1, k = arguments.length, A = !1;
    for (typeof v == "boolean" && (A = v, v = arguments[1] || {}, b = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); b < k; ++b)
      if (s = arguments[b], s != null)
        for (d in s)
          u = a(v, d), h = a(s, d), v !== h && (A && h && (o(h) || (p = l(h))) ? (p ? (p = !1, m = u && l(u) ? u : []) : m = u && o(u) ? u : {}, i(v, { name: d, newValue: c(A, m, h) })) : typeof h < "u" && i(v, { name: d, newValue: h }));
    return v;
  }, sn;
}
var gf = mf();
const cn = /* @__PURE__ */ ki(gf);
function An(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yf() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...l) {
    let o = -1;
    const i = l.pop();
    if (typeof i != "function")
      throw new TypeError("Expected function as last argument, not " + i);
    a(null, ...l);
    function a(c, ...s) {
      const d = e[++o];
      let u = -1;
      if (c) {
        i(c);
        return;
      }
      for (; ++u < l.length; )
        (s[u] === null || s[u] === void 0) && (s[u] = l[u]);
      l = s, d ? xf(d, a)(...s) : i(null, ...s);
    }
  }
  function r(l) {
    if (typeof l != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + l
      );
    return e.push(l), t;
  }
}
function xf(e, t) {
  let n;
  return r;
  function r(...i) {
    const a = e.length > i.length;
    let c;
    a && i.push(l);
    try {
      c = e.apply(this, i);
    } catch (s) {
      const d = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw d;
      return l(d);
    }
    a || (c && c.then && typeof c.then == "function" ? c.then(o, l) : c instanceof Error ? l(c) : o(c));
  }
  function l(i, ...a) {
    n || (n = !0, t(i, ...a));
  }
  function o(i) {
    l(null, i);
  }
}
const Ve = { basename: bf, dirname: kf, extname: vf, join: wf, sep: "/" };
function bf(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  It(e);
  let n = 0, r = -1, l = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; l--; )
      if (e.codePointAt(l) === 47) {
        if (o) {
          n = l + 1;
          break;
        }
      } else r < 0 && (o = !0, r = l + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let i = -1, a = t.length - 1;
  for (; l--; )
    if (e.codePointAt(l) === 47) {
      if (o) {
        n = l + 1;
        break;
      }
    } else
      i < 0 && (o = !0, i = l + 1), a > -1 && (e.codePointAt(l) === t.codePointAt(a--) ? a < 0 && (r = l) : (a = -1, r = i));
  return n === r ? r = i : r < 0 && (r = e.length), e.slice(n, r);
}
function kf(e) {
  if (It(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function vf(e) {
  It(e);
  let t = e.length, n = -1, r = 0, l = -1, o = 0, i;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (i) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (i = !0, n = t + 1), a === 46 ? l < 0 ? l = t : o !== 1 && (o = 1) : l > -1 && (o = -1);
  }
  return l < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && l === n - 1 && l === r + 1 ? "" : e.slice(l, n);
}
function wf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    It(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Cf(n);
}
function Cf(e) {
  It(e);
  const t = e.codePointAt(0) === 47;
  let n = Nf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Nf(e, t) {
  let n = "", r = 0, l = -1, o = 0, i = -1, a, c;
  for (; ++i <= e.length; ) {
    if (i < e.length)
      a = e.codePointAt(i);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(l === i - 1 || o === 1)) if (l !== i - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (c = n.lastIndexOf("/"), c !== n.length - 1) {
              c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), l = i, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, l = i, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(l + 1, i) : n = e.slice(l + 1, i), r = i - l - 1;
      l = i, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function It(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Mf = { cwd: _f };
function _f() {
  return "/";
}
function Pn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function If(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Pn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Sf(e);
}
function Sf(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const l = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw l.code = "ERR_INVALID_FILE_URL_PATH", l;
      }
    }
  return decodeURIComponent(t);
}
const un = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Ki {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Pn(t) ? n = { path: t } : typeof t == "string" || Ef(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Mf.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < un.length; ) {
      const o = un[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let l;
    for (l in n)
      un.includes(l) || (this[l] = n[l]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ve.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    hn(t, "basename"), dn(t, "basename"), this.path = Ve.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ve.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Or(this.basename, "dirname"), this.path = Ve.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ve.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (dn(t, "extname"), Or(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ve.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Pn(t) && (t = If(t)), hn(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ve.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    hn(t, "stem"), dn(t, "stem"), this.path = Ve.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const l = this.message(t, n, r);
    throw l.fatal = !0, l;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const l = this.message(t, n, r);
    return l.fatal = void 0, l;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const l = new Ie(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (l.name = this.path + ":" + l.name, l.file = this.path), l.fatal = !1, this.messages.push(l), l;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function dn(e, t) {
  if (e && e.includes(Ve.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ve.sep + "`"
    );
}
function hn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Or(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Ef(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Tf = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), l = r[e], o = function() {
      return l.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  })
), Af = {}.hasOwnProperty;
class Qn extends Tf {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = yf();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Qn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(cn(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (mn("data", this.frozen), this.namespace[t] = n, this) : Af.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (mn("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const l = n.call(t, ...r);
      typeof l == "function" && this.transformers.use(l);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Dt(t), r = this.parser || this.Parser;
    return pn("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), pn("process", this.parser || this.Parser), fn("process", this.compiler || this.Compiler), n ? l(void 0, n) : new Promise(l);
    function l(o, i) {
      const a = Dt(t), c = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(c, a, function(d, u, h) {
        if (d || !u || !h)
          return s(d);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          u
        ), m = r.stringify(p, h);
        Lf(m) ? h.value = m : h.result = m, s(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function s(d, u) {
        d || !u ? i(d) : o ? o(u) : n(void 0, u);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), pn("processSync", this.parser || this.Parser), fn("processSync", this.compiler || this.Compiler), this.process(t, l), Fr("processSync", "process", n), r;
    function l(o, i) {
      n = !0, $r(o), r = i;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    zr(t), this.freeze();
    const l = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(i, a) {
      const c = Dt(n);
      l.run(t, c, s);
      function s(d, u, h) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          u || t
        );
        d ? a(d) : i ? i(p) : r(void 0, p, h);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, l;
    return this.run(t, n, o), Fr("runSync", "run", r), l;
    function o(i, a) {
      $r(i), l = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Dt(n), l = this.compiler || this.Compiler;
    return fn("stringify", l), zr(t), l(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, l = this.namespace;
    if (mn("use", this.frozen), t != null) if (typeof t == "function")
      c(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : i(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(s) {
      if (typeof s == "function")
        c(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [d, ...u] = (
            /** @type {PluginTuple<Array<unknown>>} */
            s
          );
          c(d, u);
        } else
          i(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function i(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (l.settings = cn(!0, l.settings, s.settings));
    }
    function a(s) {
      let d = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++d < s.length; ) {
          const u = s[d];
          o(u);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function c(s, d) {
      let u = -1, h = -1;
      for (; ++u < r.length; )
        if (r[u][0] === s) {
          h = u;
          break;
        }
      if (h === -1)
        r.push([s, ...d]);
      else if (d.length > 0) {
        let [p, ...m] = d;
        const v = r[h][1];
        An(v) && An(p) && (p = cn(!0, v, p)), r[h] = [s, p, ...m];
      }
    }
  }
}
const Pf = new Qn().freeze();
function pn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function fn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function mn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function zr(e) {
  if (!An(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Fr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Dt(e) {
  return Df(e) ? e : new Ki(e);
}
function Df(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Lf(e) {
  return typeof e == "string" || $f(e);
}
function $f(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Rf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Br = [], jr = { allowDangerousHtml: !0 }, Of = /^(https?|ircs?|mailto|xmpp)$/i, zf = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Ff(e) {
  const t = Bf(e), n = jf(e);
  return Vf(t.runSync(t.parse(n), n), e);
}
function Bf(e) {
  const t = e.rehypePlugins || Br, n = e.remarkPlugins || Br, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...jr } : jr;
  return Pf().use(yp).use(n).use(ff, r).use(t);
}
function jf(e) {
  const t = e.children || "", n = new Ki();
  return typeof t == "string" && (n.value = t), n;
}
function Vf(e, t) {
  const n = t.allowedElements, r = t.allowElement, l = t.components, o = t.disallowedElements, i = t.skipHtml, a = t.unwrapDisallowed, c = t.urlTransform || Hf;
  for (const d of zf)
    Object.hasOwn(t, d.from) && ("" + d.from + (d.to ? "use `" + d.to + "` instead" : "remove it") + Rf + d.id, void 0);
  return Jn(e, s), ed(e, {
    Fragment: Me,
    components: l,
    ignoreInvalidStyle: !0,
    jsx: f,
    jsxs: C,
    passKeys: !0,
    passNode: !0
  });
  function s(d, u, h) {
    if (d.type === "raw" && h && typeof u == "number")
      return i ? h.children.splice(u, 1) : h.children[u] = { type: "text", value: d.value }, u;
    if (d.type === "element") {
      let p;
      for (p in ln)
        if (Object.hasOwn(ln, p) && Object.hasOwn(d.properties, p)) {
          const m = d.properties[p], v = ln[p];
          (v === null || v.includes(d.tagName)) && (d.properties[p] = c(String(m || ""), p, d));
        }
    }
    if (d.type === "element") {
      let p = n ? !n.includes(d.tagName) : o ? o.includes(d.tagName) : !1;
      if (!p && r && typeof u == "number" && (p = !r(d, u, h)), p && h && typeof u == "number")
        return a && d.children ? h.children.splice(u, 1, ...d.children) : h.children.splice(u, 1), u;
    }
  }
}
function Hf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), l = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    l !== -1 && t > l || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Of.test(e.slice(0, t)) ? e : ""
  );
}
function Vr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, l = n.indexOf(t);
  for (; l !== -1; )
    r++, l = n.indexOf(t, l + t.length);
  return r;
}
function qf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Uf(e, t, n) {
  const l = Gt((n || {}).ignore || []), o = Wf(t);
  let i = -1;
  for (; ++i < o.length; )
    Xi(e, "text", a);
  function a(s, d) {
    let u = -1, h;
    for (; ++u < d.length; ) {
      const p = d[u], m = h ? h.children : void 0;
      if (l(
        p,
        m ? m.indexOf(p) : void 0,
        h
      ))
        return;
      h = p;
    }
    if (h)
      return c(s, d);
  }
  function c(s, d) {
    const u = d[d.length - 1], h = o[i][0], p = o[i][1];
    let m = 0;
    const b = u.children.indexOf(s);
    let k = !1, A = [];
    h.lastIndex = 0;
    let _ = h.exec(s.value);
    for (; _; ) {
      const O = _.index, j = {
        index: _.index,
        input: _.input,
        stack: [...d, s]
      };
      let x = p(..._, j);
      if (typeof x == "string" && (x = x.length > 0 ? { type: "text", value: x } : void 0), x === !1 ? h.lastIndex = O + 1 : (m !== O && A.push({
        type: "text",
        value: s.value.slice(m, O)
      }), Array.isArray(x) ? A.push(...x) : x && A.push(x), m = O + _[0].length, k = !0), !h.global)
        break;
      _ = h.exec(s.value);
    }
    return k ? (m < s.value.length && A.push({ type: "text", value: s.value.slice(m) }), u.children.splice(b, 1, ...A)) : A = [s], b + A.length;
  }
}
function Wf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const l = n[r];
    t.push([Yf(l[0]), Xf(l[1])]);
  }
  return t;
}
function Yf(e) {
  return typeof e == "string" ? new RegExp(qf(e), "g") : e;
}
function Xf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const gn = "phrasing", yn = ["autolink", "link", "image", "label"];
function Kf() {
  return {
    transforms: [nm],
    enter: {
      literalAutolink: Jf,
      literalAutolinkEmail: xn,
      literalAutolinkHttp: xn,
      literalAutolinkWww: xn
    },
    exit: {
      literalAutolink: tm,
      literalAutolinkEmail: em,
      literalAutolinkHttp: Qf,
      literalAutolinkWww: Zf
    }
  };
}
function Gf() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: gn,
        notInConstruct: yn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: gn,
        notInConstruct: yn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: gn,
        notInConstruct: yn
      }
    ]
  };
}
function Jf(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function xn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Qf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Zf(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function em(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function tm(e) {
  this.exit(e);
}
function nm(e) {
  Uf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rm],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), im]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function rm(e, t, n, r, l) {
  let o = "";
  if (!Gi(l) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !lm(n)))
    return !1;
  const i = om(n + r);
  if (!i[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + i[0],
    children: [{ type: "text", value: t + i[0] }]
  };
  return i[1] ? [a, { type: "text", value: i[1] }] : a;
}
function im(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Gi(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function lm(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function om(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const l = Vr(e, "(");
  let o = Vr(e, ")");
  for (; r !== -1 && l > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Gi(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ze(n) || Yt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Ji.peek = mm;
function am() {
  this.buffer();
}
function sm(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function cm() {
  this.buffer();
}
function um(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function dm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = je(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function hm(e) {
  this.exit(e);
}
function pm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = je(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function fm(e) {
  this.exit(e);
}
function mm() {
  return "[";
}
function Ji(e, t, n, r) {
  const l = n.createTracker(r);
  let o = l.move("[^");
  const i = n.enter("footnoteReference"), a = n.enter("reference");
  return o += l.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), a(), i(), o += l.move("]"), o;
}
function gm() {
  return {
    enter: {
      gfmFootnoteCallString: am,
      gfmFootnoteCall: sm,
      gfmFootnoteDefinitionLabelString: cm,
      gfmFootnoteDefinition: um
    },
    exit: {
      gfmFootnoteCallString: dm,
      gfmFootnoteCall: hm,
      gfmFootnoteDefinitionLabelString: pm,
      gfmFootnoteDefinition: fm
    }
  };
}
function ym(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Ji },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, l, o, i) {
    const a = o.createTracker(i);
    let c = a.move("[^");
    const s = o.enter("footnoteDefinition"), d = o.enter("label");
    return c += a.move(
      o.safe(o.associationId(r), { before: c, after: "]" })
    ), d(), c += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), c += a.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        t ? Qi : xm
      )
    )), s(), c;
  }
}
function xm(e, t, n) {
  return t === 0 ? e : Qi(e, t, n);
}
function Qi(e, t, n) {
  return (n ? "" : "    ") + e;
}
const bm = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Zi.peek = Nm;
function km() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: wm },
    exit: { strikethrough: Cm }
  };
}
function vm() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: bm
      }
    ],
    handlers: { delete: Zi }
  };
}
function wm(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Cm(e) {
  this.exit(e);
}
function Zi(e, t, n, r) {
  const l = n.createTracker(r), o = n.enter("strikethrough");
  let i = l.move("~~");
  return i += n.containerPhrasing(e, {
    ...l.current(),
    before: i,
    after: "~"
  }), i += l.move("~~"), o(), i;
}
function Nm() {
  return "~";
}
function Mm(e) {
  return e.length;
}
function _m(e, t) {
  const n = t || {}, r = (n.align || []).concat(), l = n.stringLength || Mm, o = [], i = [], a = [], c = [];
  let s = 0, d = -1;
  for (; ++d < e.length; ) {
    const v = [], b = [];
    let k = -1;
    for (e[d].length > s && (s = e[d].length); ++k < e[d].length; ) {
      const A = Im(e[d][k]);
      if (n.alignDelimiters !== !1) {
        const _ = l(A);
        b[k] = _, (c[k] === void 0 || _ > c[k]) && (c[k] = _);
      }
      v.push(A);
    }
    i[d] = v, a[d] = b;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < s; )
      o[u] = Hr(r[u]);
  else {
    const v = Hr(r);
    for (; ++u < s; )
      o[u] = v;
  }
  u = -1;
  const h = [], p = [];
  for (; ++u < s; ) {
    const v = o[u];
    let b = "", k = "";
    v === 99 ? (b = ":", k = ":") : v === 108 ? b = ":" : v === 114 && (k = ":");
    let A = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      c[u] - b.length - k.length
    );
    const _ = b + "-".repeat(A) + k;
    n.alignDelimiters !== !1 && (A = b.length + A + k.length, A > c[u] && (c[u] = A), p[u] = A), h[u] = _;
  }
  i.splice(1, 0, h), a.splice(1, 0, p), d = -1;
  const m = [];
  for (; ++d < i.length; ) {
    const v = i[d], b = a[d];
    u = -1;
    const k = [];
    for (; ++u < s; ) {
      const A = v[u] || "";
      let _ = "", O = "";
      if (n.alignDelimiters !== !1) {
        const j = c[u] - (b[u] || 0), x = o[u];
        x === 114 ? _ = " ".repeat(j) : x === 99 ? j % 2 ? (_ = " ".repeat(j / 2 + 0.5), O = " ".repeat(j / 2 - 0.5)) : (_ = " ".repeat(j / 2), O = _) : O = " ".repeat(j);
      }
      n.delimiterStart !== !1 && !u && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && A === "") && (n.delimiterStart !== !1 || u) && k.push(" "), n.alignDelimiters !== !1 && k.push(_), k.push(A), n.alignDelimiters !== !1 && k.push(O), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || u !== s - 1) && k.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function Im(e) {
  return e == null ? "" : String(e);
}
function Hr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Sm(e, t, n, r) {
  const l = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const i = n.indentLines(
    n.containerFlow(e, o.current()),
    Em
  );
  return l(), i;
}
function Em(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Tm(e, t) {
  return qr(e, t.inConstruct, !0) && !qr(e, t.notInConstruct, !1);
}
function qr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Ur(e, t, n, r) {
  let l = -1;
  for (; ++l < n.unsafe.length; )
    if (n.unsafe[l].character === `
` && Tm(n.stack, n.unsafe[l]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Am(e, t) {
  const n = String(e);
  let r = n.indexOf(t), l = r, o = 0, i = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === l ? ++o > i && (i = o) : o = 1, l = r + t.length, r = n.indexOf(t, l);
  return i;
}
function Pm(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Dm(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Lm(e, t, n, r) {
  const l = Dm(n), o = e.value || "", i = l === "`" ? "GraveAccent" : "Tilde";
  if (Pm(e, n)) {
    const u = n.enter("codeIndented"), h = n.indentLines(o, $m);
    return u(), h;
  }
  const a = n.createTracker(r), c = l.repeat(Math.max(Am(o, l) + 1, 3)), s = n.enter("codeFenced");
  let d = a.move(c);
  if (e.lang) {
    const u = n.enter(`codeFencedLang${i}`);
    d += a.move(
      n.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  if (e.lang && e.meta) {
    const u = n.enter(`codeFencedMeta${i}`);
    d += a.move(" "), d += a.move(
      n.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  return d += a.move(`
`), o && (d += a.move(o + `
`)), d += a.move(c), s(), d;
}
function $m(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Zn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Rm(e, t, n, r) {
  const l = Zn(n), o = l === '"' ? "Quote" : "Apostrophe", i = n.enter("definition");
  let a = n.enter("label");
  const c = n.createTracker(r);
  let s = c.move("[");
  return s += c.move(
    n.safe(n.associationId(e), {
      before: s,
      after: "]",
      ...c.current()
    })
  ), s += c.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += c.move("<"), s += c.move(
    n.safe(e.url, { before: s, after: ">", ...c.current() })
  ), s += c.move(">")) : (a = n.enter("destinationRaw"), s += c.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : `
`,
      ...c.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), s += c.move(" " + l), s += c.move(
    n.safe(e.title, {
      before: s,
      after: l,
      ...c.current()
    })
  ), s += c.move(l), a()), i(), s;
}
function Om(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Ct(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Wt(e, t, n) {
  const r = lt(e), l = lt(t);
  return r === void 0 ? l === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : l === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? l === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : l === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : l === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : l === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
el.peek = zm;
function el(e, t, n, r) {
  const l = Om(n), o = n.enter("emphasis"), i = n.createTracker(r), a = i.move(l);
  let c = i.move(
    n.containerPhrasing(e, {
      after: l,
      before: a,
      ...i.current()
    })
  );
  const s = c.charCodeAt(0), d = Wt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    l
  );
  d.inside && (c = Ct(s) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = Wt(r.after.charCodeAt(0), u, l);
  h.inside && (c = c.slice(0, -1) + Ct(u));
  const p = i.move(l);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + c + p;
}
function zm(e, t, n) {
  return n.options.emphasis || "*";
}
function Fm(e, t) {
  let n = !1;
  return Jn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, En;
  }), !!((!e.depth || e.depth < 3) && qn(e) && (t.options.setext || n));
}
function Bm(e, t, n, r) {
  const l = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Fm(e, n)) {
    const d = n.enter("headingSetext"), u = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return u(), d(), h + `
` + (l === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const i = "#".repeat(l), a = n.enter("headingAtx"), c = n.enter("phrasing");
  o.move(i + " ");
  let s = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(s) && (s = Ct(s.charCodeAt(0)) + s.slice(1)), s = s ? i + " " + s : i, n.options.closeAtx && (s += " " + i), c(), a(), s;
}
tl.peek = jm;
function tl(e) {
  return e.value || "";
}
function jm() {
  return "<";
}
nl.peek = Vm;
function nl(e, t, n, r) {
  const l = Zn(n), o = l === '"' ? "Quote" : "Apostrophe", i = n.enter("image");
  let a = n.enter("label");
  const c = n.createTracker(r);
  let s = c.move("![");
  return s += c.move(
    n.safe(e.alt, { before: s, after: "]", ...c.current() })
  ), s += c.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += c.move("<"), s += c.move(
    n.safe(e.url, { before: s, after: ">", ...c.current() })
  ), s += c.move(">")) : (a = n.enter("destinationRaw"), s += c.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...c.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), s += c.move(" " + l), s += c.move(
    n.safe(e.title, {
      before: s,
      after: l,
      ...c.current()
    })
  ), s += c.move(l), a()), s += c.move(")"), i(), s;
}
function Vm() {
  return "!";
}
rl.peek = Hm;
function rl(e, t, n, r) {
  const l = e.referenceType, o = n.enter("imageReference");
  let i = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("![");
  const s = n.safe(e.alt, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(s + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: c,
    after: "]",
    ...a.current()
  });
  return i(), n.stack = d, o(), l === "full" || !s || s !== u ? c += a.move(u + "]") : l === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Hm() {
  return "!";
}
il.peek = qm;
function il(e, t, n) {
  let r = e.value || "", l = "`", o = -1;
  for (; new RegExp("(^|[^`])" + l + "([^`]|$)").test(r); )
    l += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const i = n.unsafe[o], a = n.compilePattern(i);
    let c;
    if (i.atBreak)
      for (; c = a.exec(r); ) {
        let s = c.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(c.index + 1);
      }
  }
  return l + r + l;
}
function qm() {
  return "`";
}
function ll(e, t) {
  const n = qn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
ol.peek = Um;
function ol(e, t, n, r) {
  const l = Zn(n), o = l === '"' ? "Quote" : "Apostrophe", i = n.createTracker(r);
  let a, c;
  if (ll(e, n)) {
    const d = n.stack;
    n.stack = [], a = n.enter("autolink");
    let u = i.move("<");
    return u += i.move(
      n.containerPhrasing(e, {
        before: u,
        after: ">",
        ...i.current()
      })
    ), u += i.move(">"), a(), n.stack = d, u;
  }
  a = n.enter("link"), c = n.enter("label");
  let s = i.move("[");
  return s += i.move(
    n.containerPhrasing(e, {
      before: s,
      after: "](",
      ...i.current()
    })
  ), s += i.move("]("), c(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), s += i.move("<"), s += i.move(
    n.safe(e.url, { before: s, after: ">", ...i.current() })
  ), s += i.move(">")) : (c = n.enter("destinationRaw"), s += i.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...i.current()
    })
  )), c(), e.title && (c = n.enter(`title${o}`), s += i.move(" " + l), s += i.move(
    n.safe(e.title, {
      before: s,
      after: l,
      ...i.current()
    })
  ), s += i.move(l), c()), s += i.move(")"), a(), s;
}
function Um(e, t, n) {
  return ll(e, n) ? "<" : "[";
}
al.peek = Wm;
function al(e, t, n, r) {
  const l = e.referenceType, o = n.enter("linkReference");
  let i = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("[");
  const s = n.containerPhrasing(e, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(s + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: c,
    after: "]",
    ...a.current()
  });
  return i(), n.stack = d, o(), l === "full" || !s || s !== u ? c += a.move(u + "]") : l === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Wm() {
  return "[";
}
function er(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Ym(e) {
  const t = er(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Xm(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function sl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Km(e, t, n, r) {
  const l = n.enter("list"), o = n.bulletCurrent;
  let i = e.ordered ? Xm(n) : er(n);
  const a = e.ordered ? i === "." ? ")" : "." : Ym(n);
  let c = t && n.bulletLastUsed ? i === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (i === "*" || i === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), sl(n) === i && d
    ) {
      let u = -1;
      for (; ++u < e.children.length; ) {
        const h = e.children[u];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          c = !0;
          break;
        }
      }
    }
  }
  c && (i = a), n.bulletCurrent = i;
  const s = n.containerFlow(e, r);
  return n.bulletLastUsed = i, n.bulletCurrent = o, l(), s;
}
function Gm(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Jm(e, t, n, r) {
  const l = Gm(n);
  let o = n.bulletCurrent || er(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let i = o.length + 1;
  (l === "tab" || l === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (i = Math.ceil(i / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(i - o.length)), a.shift(i);
  const c = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, a.current()),
    d
  );
  return c(), s;
  function d(u, h, p) {
    return h ? (p ? "" : " ".repeat(i)) + u : (p ? o : o + " ".repeat(i - o.length)) + u;
  }
}
function Qm(e, t, n, r) {
  const l = n.enter("paragraph"), o = n.enter("phrasing"), i = n.containerPhrasing(e, r);
  return o(), l(), i;
}
const Zm = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Gt([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function eg(e, t, n, r) {
  return (e.children.some(function(i) {
    return Zm(i);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function tg(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
cl.peek = ng;
function cl(e, t, n, r) {
  const l = tg(n), o = n.enter("strong"), i = n.createTracker(r), a = i.move(l + l);
  let c = i.move(
    n.containerPhrasing(e, {
      after: l,
      before: a,
      ...i.current()
    })
  );
  const s = c.charCodeAt(0), d = Wt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    l
  );
  d.inside && (c = Ct(s) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = Wt(r.after.charCodeAt(0), u, l);
  h.inside && (c = c.slice(0, -1) + Ct(u));
  const p = i.move(l + l);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + c + p;
}
function ng(e, t, n) {
  return n.options.strong || "*";
}
function rg(e, t, n, r) {
  return n.safe(e.value, r);
}
function ig(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function lg(e, t, n) {
  const r = (sl(n) + (n.options.ruleSpaces ? " " : "")).repeat(ig(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const ul = {
  blockquote: Sm,
  break: Ur,
  code: Lm,
  definition: Rm,
  emphasis: el,
  hardBreak: Ur,
  heading: Bm,
  html: tl,
  image: nl,
  imageReference: rl,
  inlineCode: il,
  link: ol,
  linkReference: al,
  list: Km,
  listItem: Jm,
  paragraph: Qm,
  root: eg,
  strong: cl,
  text: rg,
  thematicBreak: lg
};
function og() {
  return {
    enter: {
      table: ag,
      tableData: Wr,
      tableHeader: Wr,
      tableRow: cg
    },
    exit: {
      codeText: ug,
      table: sg,
      tableData: bn,
      tableHeader: bn,
      tableRow: bn
    }
  };
}
function ag(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function sg(e) {
  this.exit(e), this.data.inTable = void 0;
}
function cg(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function bn(e) {
  this.exit(e);
}
function Wr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function ug(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, dg));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function dg(e, t) {
  return t === "|" ? t : e;
}
function hg(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, l = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: h,
      table: i,
      tableCell: c,
      tableRow: a
    }
  };
  function i(p, m, v, b) {
    return s(d(p, v, b), p.align);
  }
  function a(p, m, v, b) {
    const k = u(p, v, b), A = s([k]);
    return A.slice(0, A.indexOf(`
`));
  }
  function c(p, m, v, b) {
    const k = v.enter("tableCell"), A = v.enter("phrasing"), _ = v.containerPhrasing(p, {
      ...b,
      before: o,
      after: o
    });
    return A(), k(), _;
  }
  function s(p, m) {
    return _m(p, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: l
    });
  }
  function d(p, m, v) {
    const b = p.children;
    let k = -1;
    const A = [], _ = m.enter("table");
    for (; ++k < b.length; )
      A[k] = u(b[k], m, v);
    return _(), A;
  }
  function u(p, m, v) {
    const b = p.children;
    let k = -1;
    const A = [], _ = m.enter("tableRow");
    for (; ++k < b.length; )
      A[k] = c(b[k], p, m, v);
    return _(), A;
  }
  function h(p, m, v) {
    let b = ul.inlineCode(p, m, v);
    return v.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function pg() {
  return {
    exit: {
      taskListCheckValueChecked: Yr,
      taskListCheckValueUnchecked: Yr,
      paragraph: mg
    }
  };
}
function fg() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: gg }
  };
}
function Yr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function mg(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const l = t.children;
      let o = -1, i;
      for (; ++o < l.length; ) {
        const a = l[o];
        if (a.type === "paragraph") {
          i = a;
          break;
        }
      }
      i === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function gg(e, t, n, r) {
  const l = e.children[0], o = typeof e.checked == "boolean" && l && l.type === "paragraph", i = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(i);
  let c = ul.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), c;
  function s(d) {
    return d + i;
  }
}
function yg() {
  return [
    Kf(),
    gm(),
    km(),
    og(),
    pg()
  ];
}
function xg(e) {
  return {
    extensions: [
      Gf(),
      ym(e),
      vm(),
      hg(e),
      fg()
    ]
  };
}
const bg = {
  tokenize: Mg,
  partial: !0
}, dl = {
  tokenize: _g,
  partial: !0
}, hl = {
  tokenize: Ig,
  partial: !0
}, pl = {
  tokenize: Sg,
  partial: !0
}, kg = {
  tokenize: Eg,
  partial: !0
}, fl = {
  name: "wwwAutolink",
  tokenize: Cg,
  previous: gl
}, ml = {
  name: "protocolAutolink",
  tokenize: Ng,
  previous: yl
}, We = {
  name: "emailAutolink",
  tokenize: wg,
  previous: xl
}, He = {};
function vg() {
  return {
    text: He
  };
}
let Ge = 48;
for (; Ge < 123; )
  He[Ge] = We, Ge++, Ge === 58 ? Ge = 65 : Ge === 91 && (Ge = 97);
He[43] = We;
He[45] = We;
He[46] = We;
He[95] = We;
He[72] = [We, ml];
He[104] = [We, ml];
He[87] = [We, fl];
He[119] = [We, fl];
function wg(e, t, n) {
  const r = this;
  let l, o;
  return i;
  function i(u) {
    return !Dn(u) || !xl.call(r, r.previous) || tr(r.events) ? n(u) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(u));
  }
  function a(u) {
    return Dn(u) ? (e.consume(u), a) : u === 64 ? (e.consume(u), c) : n(u);
  }
  function c(u) {
    return u === 46 ? e.check(kg, d, s)(u) : u === 45 || u === 95 || _e(u) ? (o = !0, e.consume(u), c) : d(u);
  }
  function s(u) {
    return e.consume(u), l = !0, c;
  }
  function d(u) {
    return o && l && Se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(u)) : n(u);
  }
}
function Cg(e, t, n) {
  const r = this;
  return l;
  function l(i) {
    return i !== 87 && i !== 119 || !gl.call(r, r.previous) || tr(r.events) ? n(i) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(bg, e.attempt(dl, e.attempt(hl, o), n), n)(i));
  }
  function o(i) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(i);
  }
}
function Ng(e, t, n) {
  const r = this;
  let l = "", o = !1;
  return i;
  function i(u) {
    return (u === 72 || u === 104) && yl.call(r, r.previous) && !tr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), l += String.fromCodePoint(u), e.consume(u), a) : n(u);
  }
  function a(u) {
    if (Se(u) && l.length < 5)
      return l += String.fromCodePoint(u), e.consume(u), a;
    if (u === 58) {
      const h = l.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(u), c;
    }
    return n(u);
  }
  function c(u) {
    return u === 47 ? (e.consume(u), o ? s : (o = !0, c)) : n(u);
  }
  function s(u) {
    return u === null || Ht(u) || he(u) || Ze(u) || Yt(u) ? n(u) : e.attempt(dl, e.attempt(hl, d), n)(u);
  }
  function d(u) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(u);
  }
}
function Mg(e, t, n) {
  let r = 0;
  return l;
  function l(i) {
    return (i === 87 || i === 119) && r < 3 ? (r++, e.consume(i), l) : i === 46 && r === 3 ? (e.consume(i), o) : n(i);
  }
  function o(i) {
    return i === null ? n(i) : t(i);
  }
}
function _g(e, t, n) {
  let r, l, o;
  return i;
  function i(s) {
    return s === 46 || s === 95 ? e.check(pl, c, a)(s) : s === null || he(s) || Ze(s) || s !== 45 && Yt(s) ? c(s) : (o = !0, e.consume(s), i);
  }
  function a(s) {
    return s === 95 ? r = !0 : (l = r, r = void 0), e.consume(s), i;
  }
  function c(s) {
    return l || r || !o ? n(s) : t(s);
  }
}
function Ig(e, t) {
  let n = 0, r = 0;
  return l;
  function l(i) {
    return i === 40 ? (n++, e.consume(i), l) : i === 41 && r < n ? o(i) : i === 33 || i === 34 || i === 38 || i === 39 || i === 41 || i === 42 || i === 44 || i === 46 || i === 58 || i === 59 || i === 60 || i === 63 || i === 93 || i === 95 || i === 126 ? e.check(pl, t, o)(i) : i === null || he(i) || Ze(i) ? t(i) : (e.consume(i), l);
  }
  function o(i) {
    return i === 41 && r++, e.consume(i), l;
  }
}
function Sg(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), l) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || he(a) || Ze(a) ? t(a) : n(a)
    );
  }
  function l(a) {
    return a === null || a === 40 || a === 91 || he(a) || Ze(a) ? t(a) : r(a);
  }
  function o(a) {
    return Se(a) ? i(a) : n(a);
  }
  function i(a) {
    return a === 59 ? (e.consume(a), r) : Se(a) ? (e.consume(a), i) : n(a);
  }
}
function Eg(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), l;
  }
  function l(o) {
    return _e(o) ? n(o) : t(o);
  }
}
function gl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || he(e);
}
function yl(e) {
  return !Se(e);
}
function xl(e) {
  return !(e === 47 || Dn(e));
}
function Dn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || _e(e);
}
function tr(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Tg = {
  tokenize: zg,
  partial: !0
};
function Ag() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: $g,
        continuation: {
          tokenize: Rg
        },
        exit: Og
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Lg
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Pg,
        resolveTo: Dg
      }
    }
  };
}
function Pg(e, t, n) {
  const r = this;
  let l = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; l--; ) {
    const c = r.events[l][1];
    if (c.type === "labelImage") {
      i = c;
      break;
    }
    if (c.type === "gfmFootnoteCall" || c.type === "labelLink" || c.type === "label" || c.type === "image" || c.type === "link")
      break;
  }
  return a;
  function a(c) {
    if (!i || !i._balanced)
      return n(c);
    const s = je(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? n(c) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), t(c));
  }
}
function Dg(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, l = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  l.end.column++, l.end.offset++, l.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, l.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, i = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", l, t],
    ["exit", l, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function Lg(e, t, n) {
  const r = this, l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, i;
  return a;
  function a(u) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), c;
  }
  function c(u) {
    return u !== 94 ? n(u) : (e.enter("gfmFootnoteCallMarker"), e.consume(u), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
  }
  function s(u) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      u === 93 && !i || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || he(u)
    )
      return n(u);
    if (u === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return l.includes(je(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(u);
    }
    return he(u) || (i = !0), o++, e.consume(u), u === 92 ? d : s;
  }
  function d(u) {
    return u === 91 || u === 92 || u === 93 ? (e.consume(u), o++, s) : s(u);
  }
}
function $g(e, t, n) {
  const r = this, l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, i = 0, a;
  return c;
  function c(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(m);
  }
  function d(m) {
    if (
      // Too long.
      i > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || he(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return o = je(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return he(m) || (a = !0), i++, e.consume(m), m === 92 ? u : d;
  }
  function u(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), i++, d) : d(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), l.includes(o) || l.push(o), le(e, p, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function p(m) {
    return t(m);
  }
}
function Rg(e, t, n) {
  return e.check(_t, t, e.attempt(Tg, t, n));
}
function Og(e) {
  e.exit("gfmFootnoteDefinition");
}
function zg(e, t, n) {
  const r = this;
  return le(e, l, "gfmFootnoteDefinitionIndent", 5);
  function l(o) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Fg(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: l
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function l(i, a) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c][0] === "enter" && i[c][1].type === "strikethroughSequenceTemporary" && i[c][1]._close) {
        let s = c;
        for (; s--; )
          if (i[s][0] === "exit" && i[s][1].type === "strikethroughSequenceTemporary" && i[s][1]._open && // If the sizes are the same:
          i[c][1].end.offset - i[c][1].start.offset === i[s][1].end.offset - i[s][1].start.offset) {
            i[c][1].type = "strikethroughSequence", i[s][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, i[s][1].start),
              end: Object.assign({}, i[c][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, i[s][1].end),
              end: Object.assign({}, i[c][1].start)
            }, h = [["enter", d, a], ["enter", i[s][1], a], ["exit", i[s][1], a], ["enter", u, a]], p = a.parser.constructs.insideSpan.null;
            p && $e(h, h.length, 0, Xt(p, i.slice(s + 1, c), a)), $e(h, h.length, 0, [["exit", u, a], ["enter", i[c][1], a], ["exit", i[c][1], a], ["exit", d, a]]), $e(i, s - 1, c - s + 3, h), c = s + h.length - 2;
            break;
          }
      }
    for (c = -1; ++c < i.length; )
      i[c][1].type === "strikethroughSequenceTemporary" && (i[c][1].type = "data");
    return i;
  }
  function o(i, a, c) {
    const s = this.previous, d = this.events;
    let u = 0;
    return h;
    function h(m) {
      return s === 126 && d[d.length - 1][1].type !== "characterEscape" ? c(m) : (i.enter("strikethroughSequenceTemporary"), p(m));
    }
    function p(m) {
      const v = lt(s);
      if (m === 126)
        return u > 1 ? c(m) : (i.consume(m), u++, p);
      if (u < 2 && !n) return c(m);
      const b = i.exit("strikethroughSequenceTemporary"), k = lt(m);
      return b._open = !k || k === 2 && !!v, b._close = !v || v === 2 && !!k, a(m);
    }
  }
}
class Bg {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [], this.index = /* @__PURE__ */ new Map();
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  add(t, n, r) {
    jg(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */
  consume(t) {
    if (this.map.sort(function(o, i) {
      return o[0] - i[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let l = r.pop();
    for (; l; ) {
      for (const o of l)
        t.push(o);
      l = r.pop();
    }
    this.map.length = 0, this.index.clear();
  }
}
function jg(e, t, n, r) {
  if (n === 0 && r.length === 0)
    return;
  const l = e.index.get(t);
  if (l) {
    l[1] += n, l[2].push(...r);
    return;
  }
  const o = [t, n, r];
  e.map.push(o), e.index.set(t, o);
}
function Vg(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const l = e[t];
    if (n) {
      if (l[0] === "enter")
        l[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (l[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (l[1].type === "tableDelimiterRow")
        break;
    } else l[0] === "enter" && l[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Hg() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: qg,
        resolveAll: Ug
      }
    }
  };
}
function qg(e, t, n) {
  const r = this;
  let l = 0, o = 0, i;
  return a;
  function a(w) {
    let N = r.events.length - 1;
    for (; N > -1; ) {
      const {
        type: F
      } = r.events[N][1];
      if (F === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      F === "linePrefix")
        N--;
      else
        break;
    }
    const L = N > -1 ? r.events[N][1].type : null, H = L === "tableHead" || L === "tableRow" ? x : c;
    return H === x && r.parser.lazy[r.now().line] ? n(w) : H(w);
  }
  function c(w) {
    return e.enter("tableHead"), e.enter("tableRow"), s(w);
  }
  function s(w) {
    return w === 124 || (i = !0, o += 1), d(w);
  }
  function d(w) {
    return w === null ? n(w) : J(w) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), p) : n(w) : ie(w) ? le(e, d, "whitespace")(w) : (o += 1, i && (i = !1, l += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), i = !0, d) : (e.enter("data"), u(w)));
  }
  function u(w) {
    return w === null || w === 124 || he(w) ? (e.exit("data"), d(w)) : (e.consume(w), w === 92 ? h : u);
  }
  function h(w) {
    return w === 92 || w === 124 ? (e.consume(w), u) : u(w);
  }
  function p(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), i = !1, ie(w) ? le(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : m(w));
  }
  function m(w) {
    return w === 45 || w === 58 ? b(w) : w === 124 ? (i = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), v) : j(w);
  }
  function v(w) {
    return ie(w) ? le(e, b, "whitespace")(w) : b(w);
  }
  function b(w) {
    return w === 58 ? (o += 1, i = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), k) : w === 45 ? (o += 1, k(w)) : w === null || J(w) ? O(w) : j(w);
  }
  function k(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), A(w)) : j(w);
  }
  function A(w) {
    return w === 45 ? (e.consume(w), A) : w === 58 ? (i = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), _) : (e.exit("tableDelimiterFiller"), _(w));
  }
  function _(w) {
    return ie(w) ? le(e, O, "whitespace")(w) : O(w);
  }
  function O(w) {
    return w === 124 ? m(w) : w === null || J(w) ? !i || l !== o ? j(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : j(w);
  }
  function j(w) {
    return n(w);
  }
  function x(w) {
    return e.enter("tableRow"), B(w);
  }
  function B(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), B) : w === null || J(w) ? (e.exit("tableRow"), t(w)) : ie(w) ? le(e, B, "whitespace")(w) : (e.enter("data"), V(w));
  }
  function V(w) {
    return w === null || w === 124 || he(w) ? (e.exit("data"), B(w)) : (e.consume(w), w === 92 ? q : V);
  }
  function q(w) {
    return w === 92 || w === 124 ? (e.consume(w), V) : V(w);
  }
}
function Ug(e, t) {
  let n = -1, r = !0, l = 0, o = [0, 0, 0, 0], i = [0, 0, 0, 0], a = !1, c = 0, s, d, u;
  const h = new Bg();
  for (; ++n < e.length; ) {
    const p = e[n], m = p[1];
    p[0] === "enter" ? m.type === "tableHead" ? (a = !1, c !== 0 && (Xr(h, t, c, s, d), d = void 0, c = 0), s = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", s, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, u = void 0, o = [0, 0, 0, 0], i = [0, n + 1, 0, 0], a && (a = !1, d = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", d, t]])), l = m.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : l && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, i[2] === 0 && (o[1] !== 0 && (i[0] = i[1], u = Lt(h, t, o, l, void 0, u), o = [0, 0, 0, 0]), i[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (i[0] = i[1], u = Lt(h, t, o, l, void 0, u)), o = i, i = [o[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, o[1] !== 0 ? (i[0] = i[1], u = Lt(h, t, o, l, n, u)) : i[1] !== 0 && (u = Lt(h, t, i, l, n, u)), l = 0) : l && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (i[3] = n);
  }
  for (c !== 0 && Xr(h, t, c, s, d), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Vg(t.events, n));
  }
  return e;
}
function Lt(e, t, n, r, l, o) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, rt(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const c = rt(t.events, n[1]);
  if (o = {
    type: i,
    start: Object.assign({}, c),
    // Note: correct end is set later.
    end: Object.assign({}, c)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const s = rt(t.events, n[2]), d = rt(t.events, n[3]), u = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", u, t]]), r !== 2) {
      const h = t.events[n[2]], p = t.events[n[3]];
      if (h[1].end = Object.assign({}, p[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(m, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", u, t]]);
  }
  return l !== void 0 && (o.end = Object.assign({}, rt(t.events, l)), e.add(l, 0, [["exit", o, t]]), o = void 0), o;
}
function Xr(e, t, n, r, l) {
  const o = [], i = rt(t.events, n);
  l && (l.end = Object.assign({}, i), o.push(["exit", l, t])), r.end = Object.assign({}, i), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function rt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Wg = {
  name: "tasklistCheck",
  tokenize: Xg
};
function Yg() {
  return {
    text: {
      91: Wg
    }
  };
}
function Xg(e, t, n) {
  const r = this;
  return l;
  function l(c) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(c) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(c), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(c) {
    return he(c) ? (e.enter("taskListCheckValueUnchecked"), e.consume(c), e.exit("taskListCheckValueUnchecked"), i) : c === 88 || c === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(c), e.exit("taskListCheckValueChecked"), i) : n(c);
  }
  function i(c) {
    return c === 93 ? (e.enter("taskListCheckMarker"), e.consume(c), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(c);
  }
  function a(c) {
    return J(c) ? t(c) : ie(c) ? e.check({
      tokenize: Kg
    }, t, n)(c) : n(c);
  }
}
function Kg(e, t, n) {
  return le(e, r, "whitespace");
  function r(l) {
    return l === null ? n(l) : t(l);
  }
}
function Gg(e) {
  return Si([
    vg(),
    Ag(),
    Fg(e),
    Hg(),
    Yg()
  ]);
}
const Jg = {};
function Qg(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Jg, r = t.data(), l = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  l.push(Gg(n)), o.push(yg()), i.push(xg(n));
}
const Zg = async (e) => {
  try {
    if (navigator.clipboard && window.isSecureContext)
      return await navigator.clipboard.writeText(e), !0;
    {
      const t = document.createElement("textarea");
      t.value = e, t.style.position = "fixed", t.style.left = "-999999px", t.style.top = "-999999px", document.body.appendChild(t), t.focus(), t.select();
      const n = document.execCommand("copy");
      return t.remove(), n;
    }
  } catch (t) {
    return console.error("Copy failed:", t), !1;
  }
}, e1 = ({
  text: e,
  label: t,
  className: n,
  iconClassName: r,
  onCopy: l,
  title: o,
  disabled: i = !1
}) => {
  const [a, c] = ce(!1), s = async (m) => {
    if (m.stopPropagation(), i) return;
    await Zg(e) && (c(!0), l?.(), setTimeout(() => c(!1), 2e3));
  }, d = "flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs font-bold tracking-widest disabled:opacity-50 disabled:cursor-not-allowed", u = "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50", h = n ? `${n} ${u}` : `${d} ${u}`, p = a ? h.replace("border-white/10", "border-green-400 text-green-400") : h;
  return /* @__PURE__ */ C(
    "button",
    {
      onClick: s,
      disabled: i,
      className: p,
      title: o || (a ? "Copied" : "Copy"),
      type: "button",
      "aria-label": t || o || "Copy to clipboard",
      children: [
        a ? /* @__PURE__ */ f(
          R,
          {
            name: "check",
            className: `${r || "text-sm"} text-green-400`
          }
        ) : /* @__PURE__ */ f(
          R,
          {
            name: "content_copy",
            className: r || "text-sm"
          }
        ),
        t && /* @__PURE__ */ f("span", { children: a ? "Copied" : t })
      ]
    }
  );
};
function Kr(e) {
  let t = e.replace(/\r\n?/g, `
`);
  return t.includes("\\n") && (t = t.replace(/\\n/g, `
`)), !t.includes(`
`) && /(?:^|:\s*)1\.\s+[\s\S]*\s2\.\s+/.test(t) && (t = t.replace(/:\s+(?=1\.\s)/, `:
`), t = t.replace(/\s+(?=(?:[2-9]\d*)\.\s)/g, `
`)), t;
}
const Gr = {
  default: {
    bg: "var(--app-sticky-default-bg)",
    border: "var(--app-sticky-default-border)",
    header: "var(--app-sticky-default-header)"
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
}, Jr = {
  default: "var(--app-sticky-default-dot)",
  yellow: "#facc15",
  pink: "#ec4899",
  green: "#22c55e",
  purple: "#a855f7"
}, t1 = ["default", "yellow", "pink", "green", "purple"], n1 = ({ note: e, canvasScale: t, isSelected: n, onUpdate: r, onDelete: l, onDuplicate: o }) => {
  const i = Kr(e.content), [a, c] = ce(i === ""), [s, d] = ce(i), [u, h] = ce(null), [p, m] = ce(null), v = se(null), b = se(null), k = Gr[e.color] || Gr.default;
  Ne(() => {
    a && v.current && (v.current.focus(), v.current.select());
  }, [a]), ii(() => {
    if (!a || !v.current) return;
    const N = v.current;
    N.style.height = "auto", N.style.height = `${Math.max(120, N.scrollHeight)}px`;
  }, [s, a]);
  const A = Ce((N, L) => {
    if (!b.current) return null;
    const H = (N - b.current.startX) / t, F = (L - b.current.startY) / t;
    return {
      x: Math.round(b.current.origX + H),
      y: Math.round(b.current.origY + F)
    };
  }, [t]), _ = Ce((N) => {
    N.stopPropagation(), N.preventDefault(), b.current = {
      startX: N.clientX,
      startY: N.clientY,
      origX: e.x,
      origY: e.y
    }, m({ x: e.x, y: e.y }), N.currentTarget.setPointerCapture(N.pointerId);
  }, [e.x, e.y]), O = Ce((N) => {
    N.stopPropagation();
    const L = A(N.clientX, N.clientY);
    L && m(L);
  }, [A]), j = Ce((N) => {
    N.stopPropagation();
    const L = A(N.clientX, N.clientY) || p;
    b.current = null, m(null), L && (L.x !== e.x || L.y !== e.y) && r(e.id, L);
  }, [p, A, e.id, e.x, e.y, r]), x = Ce(() => {
    r(e.id, { content: Kr(s) }), c(!1);
  }, [e.id, s, r]), B = p?.x ?? e.x, V = p?.y ?? e.y, q = e.width, w = e.height;
  return /* @__PURE__ */ C(Me, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        "data-sticky-note-id": e.id,
        className: "absolute select-none group",
        style: {
          left: B,
          top: V,
          width: q,
          minHeight: w,
          zIndex: 5
        },
        onPointerDown: (N) => N.stopPropagation(),
        onContextMenu: (N) => {
          N.preventDefault(), N.stopPropagation();
          const L = 8, H = 200, F = 164, $ = Math.min(Math.max(N.clientX + 12, L), window.innerWidth - H - L), U = Math.min(Math.max(N.clientY + 12, L), window.innerHeight - F - L);
          h({ x: $, y: U });
        },
        children: /* @__PURE__ */ C(
          "div",
          {
            className: "w-full min-h-full rounded-xl flex flex-col overflow-hidden",
            style: {
              background: k.bg,
              border: `1px solid ${n ? "rgba(96,165,250,0.8)" : k.border}`,
              boxShadow: n ? "0 0 0 2px rgba(59,130,246,0.4), var(--app-shadow-sticky)" : "var(--app-shadow-sticky)",
              color: "var(--app-sticky-text)"
            },
            children: [
              /* @__PURE__ */ C(
                "div",
                {
                  className: `sticky-note-toolbar flex items-center justify-between px-2.5 cursor-grab active:cursor-grabbing shrink-0 touch-none ${a ? "sticky-note-toolbar--visible" : ""}`,
                  style: { background: k.header, pointerEvents: a ? "auto" : "none" },
                  "aria-hidden": !a,
                  onMouseDown: (N) => N.preventDefault(),
                  onPointerDown: _,
                  onPointerMove: O,
                  onPointerUp: j,
                  onPointerCancel: j,
                  children: [
                    /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: t1.map((N) => /* @__PURE__ */ f(
                      "button",
                      {
                        className: "w-3 h-3 rounded-full transition-all hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        style: {
                          background: Jr[N],
                          opacity: e.color === N ? 1 : 0.35,
                          outline: e.color === N ? `1.5px solid ${Jr[N]}` : "none",
                          outlineOffset: "1px"
                        },
                        onMouseDown: (L) => {
                          L.preventDefault(), L.stopPropagation();
                        },
                        onPointerDown: (L) => L.stopPropagation(),
                        onClick: (L) => {
                          L.stopPropagation(), r(e.id, { color: N });
                        },
                        title: `Set color to ${N}`,
                        "aria-label": `Set color to ${N}`
                      },
                      N
                    )) }),
                    /* @__PURE__ */ C("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ f(
                        e1,
                        {
                          text: i,
                          title: "Copy note",
                          className: "sticky-note-control w-6 h-6 rounded flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          iconClassName: "text-[14px]"
                        }
                      ),
                      /* @__PURE__ */ f(
                        "button",
                        {
                          className: "sticky-note-control w-6 h-6 rounded flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                          onPointerDown: (N) => N.stopPropagation(),
                          onClick: (N) => {
                            N.stopPropagation(), l(e.id);
                          },
                          title: "Delete note",
                          "aria-label": "Delete note",
                          children: /* @__PURE__ */ f(R, { name: "delete", className: "text-[14px]" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ f(
                "div",
                {
                  className: "flex-1 min-h-0 custom-scrollbar",
                  onDoubleClick: () => {
                    a || (c(!0), d(i));
                  },
                  children: a ? /* @__PURE__ */ f(
                    "textarea",
                    {
                      ref: v,
                      value: s,
                      onChange: (N) => d(N.target.value),
                      onBlur: x,
                      onKeyDown: (N) => {
                        N.key === "Escape" && x(), (N.ctrlKey || N.metaKey) && N.key === "Enter" && x(), N.stopPropagation();
                      },
                      className: "sticky-note-textarea w-full min-h-[120px] resize-none overflow-hidden bg-transparent px-3 py-2 text-xs focus:outline-none font-mono leading-relaxed",
                      style: { color: "var(--app-sticky-text)" },
                      placeholder: "Write markdown here...",
                      onClick: (N) => N.stopPropagation()
                    }
                  ) : /* @__PURE__ */ f(
                    "div",
                    {
                      className: "sticky-note-markdown px-3 py-2 text-xs leading-relaxed cursor-text custom-scrollbar font-sans",
                      style: { color: "var(--app-sticky-text-muted)" },
                      children: i ? /* @__PURE__ */ f(Ff, { remarkPlugins: [Qg], children: i }) : /* @__PURE__ */ f("span", { style: { color: "var(--app-sticky-text-faint)" }, className: "italic", children: "Double-click to edit..." })
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ),
    u && Nt(
      /* @__PURE__ */ C(Me, { children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "fixed inset-0 z-40",
            onClick: () => h(null),
            onContextMenu: (N) => {
              N.preventDefault(), h(null);
            }
          }
        ),
        /* @__PURE__ */ C(
          "div",
          {
            className: "fixed z-50 w-[200px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
            style: { left: u.x, top: u.y },
            children: [
              /* @__PURE__ */ C(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    o(e), h(null);
                  },
                  children: [
                    /* @__PURE__ */ f(R, { name: "copy_all", className: "text-[14px] text-white/40" }),
                    "Duplicate"
                  ]
                }
              ),
              /* @__PURE__ */ C(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(i).catch(() => {
                    }), h(null);
                  },
                  children: [
                    /* @__PURE__ */ f(R, { name: "content_copy", className: "text-[14px] text-white/40" }),
                    "Copy"
                  ]
                }
              ),
              /* @__PURE__ */ C(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2.5",
                  onClick: () => {
                    navigator.clipboard.writeText(i).catch(() => {
                    }), l(e.id), h(null);
                  },
                  children: [
                    /* @__PURE__ */ f(R, { name: "content_cut", className: "text-[14px] text-white/40" }),
                    "Cut"
                  ]
                }
              ),
              /* @__PURE__ */ C(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-red-400 flex items-center gap-2.5",
                  onClick: () => {
                    l(e.id), h(null);
                  },
                  children: [
                    /* @__PURE__ */ f(R, { name: "delete", className: "text-[14px] text-red-400/70" }),
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
}, r1 = 22, vt = 0.8, i1 = 2.2, it = 48, l1 = 1.55, Qr = Math.PI * 2, $t = (e, t, n) => {
  const r = e + t / 2;
  return r + Math.ceil((n - r) / t) * t;
}, o1 = (e, t = 1) => {
  if (e >= it || t <= 0) return vt;
  const n = 1 - e / it, r = n * n * (3 - 2 * n);
  return vt + (i1 - vt) * r * t;
}, a1 = ({ canvasOffset: e, canvasScale: t, viewportRef: n, selectionBox: r }) => {
  const l = se(null), o = se({ canvasOffset: e, canvasScale: t }), i = se({ x: 0, y: 0, active: !1 }), a = se({ x: 0, y: 0, strength: 0 }), c = se(null), s = se(null), d = se(() => {
  });
  return Ne(() => {
    o.current = { canvasOffset: e, canvasScale: t, selectionBox: r }, d.current();
  }, [e, t, r]), Ne(() => {
    const u = l.current, h = n.current;
    if (!u || !h) return;
    const p = window.matchMedia("(prefers-reduced-motion: reduce)");
    let m = 0, v = 0, b = 1, k = "";
    const A = () => {
      const H = u.getContext("2d");
      H && (H.setTransform(1, 0, 0, 1, 0, 0), H.clearRect(0, 0, u.width, u.height));
    }, _ = () => {
      const H = h.getBoundingClientRect();
      m = H.width, v = H.height, b = Math.min(window.devicePixelRatio || 1, 2), u.width = Math.max(1, Math.round(m * b)), u.height = Math.max(1, Math.round(v * b)), u.style.width = `${m}px`, u.style.height = `${v}px`;
    }, O = () => {
      k = getComputedStyle(h).getPropertyValue("--app-dot").trim();
    }, j = (H) => {
      c.current = null;
      const F = u.getContext("2d");
      if (!F) return;
      if (p.matches || !m || !v) {
        A(), s.current = H;
        return;
      }
      const $ = Math.min(64, Math.max(0, H - (s.current ?? H)));
      s.current = H;
      const U = i.current, G = a.current, K = 1 - Math.exp(-$ / 42), ye = 1 - Math.exp(-$ / (U.active ? 40 : 45));
      U.active && G.strength === 0 ? (G.x = U.x, G.y = U.y) : (G.x += (U.x - G.x) * K, G.y += (U.y - G.y) * K), G.strength += ((U.active ? 1 : 0) - G.strength) * ye, F.setTransform(b, 0, 0, b, 0, 0), F.clearRect(0, 0, m, v);
      const { canvasOffset: g, canvasScale: fe, selectionBox: ae } = o.current, y = r1 * fe, pe = (X, M, S) => {
        F.beginPath(), F.arc(X, M, S, 0, Qr), F.arc(X, M, vt, 0, Qr, !0), F.fill("evenodd");
      };
      if (y > 0 && k) {
        if (F.fillStyle = k, ae) {
          const X = h.getBoundingClientRect(), M = Math.max(0, Math.min(ae.startX, ae.currentX) - X.left), S = Math.min(m, Math.max(ae.startX, ae.currentX) - X.left), P = Math.max(0, Math.min(ae.startY, ae.currentY) - X.top), Y = Math.min(v, Math.max(ae.startY, ae.currentY) - X.top);
          if (S > M && Y > P) {
            const W = $t(g.x, y, M), ge = $t(g.y, y, P);
            for (let ne = W; ne <= S; ne += y)
              for (let ue = ge; ue <= Y; ue += y)
                pe(ne, ue, l1);
          }
        }
        if (G.strength > 0.01) {
          const X = G.x - it, M = G.x + it, S = G.y - it, P = G.y + it, Y = $t(g.x, y, X), W = $t(g.y, y, S);
          for (let ge = Y; ge <= M; ge += y)
            for (let ne = W; ne <= P; ne += y) {
              const ue = Math.hypot(ge - G.x, ne - G.y), xe = o1(ue, G.strength);
              xe <= vt || pe(ge, ne, xe);
            }
        }
      }
      (U.active ? Math.abs(U.x - G.x) > 0.1 || Math.abs(U.y - G.y) > 0.1 || G.strength < 0.99 : G.strength > 0.01) && d.current();
    }, x = () => {
      c.current === null && (c.current = window.requestAnimationFrame(j));
    };
    d.current = x;
    const B = (H) => {
      const F = h.getBoundingClientRect(), $ = H.clientX >= F.left && H.clientX <= F.right && H.clientY >= F.top && H.clientY <= F.bottom;
      i.current = {
        x: H.clientX - F.left,
        y: H.clientY - F.top,
        active: $
      }, x();
    }, V = () => {
      i.current.active = !1, x();
    }, q = () => {
      p.matches && (i.current.active = !1, a.current.strength = 0, A());
    }, w = () => {
      document.hidden && V();
    };
    _(), O();
    const N = new ResizeObserver(() => {
      _(), O(), x();
    }), L = new MutationObserver(() => {
      O(), x();
    });
    return N.observe(h), L.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["data-theme", "style"]
    }), window.addEventListener("pointermove", B, { passive: !0 }), window.addEventListener("blur", V), document.addEventListener("visibilitychange", w), p.addEventListener("change", q), () => {
      N.disconnect(), L.disconnect(), window.removeEventListener("pointermove", B), window.removeEventListener("blur", V), document.removeEventListener("visibilitychange", w), p.removeEventListener("change", q), c.current !== null && window.cancelAnimationFrame(c.current), c.current = null, d.current = () => {
      };
    };
  }, [n]), /* @__PURE__ */ f("canvas", { ref: l, className: "absolute inset-0 pointer-events-none z-0", "aria-hidden": "true" });
}, Zr = (e) => {
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
}, ei = (e, t = []) => {
  const n = (e || []).filter((i) => i.name.trim() && i.selector.trim()), r = (t || []).filter((i) => i.name.trim() && i.containerSelector.trim() && (i.fields || []).some((a) => a.name.trim() && a.selector.trim()));
  if (n.length === 0 && r.length === 0)
    return `// Add fields in Visual mode, or write a script here.
// Example: return { title: document.title };`;
  const l = n.map((i) => {
    const a = JSON.stringify(i.name), c = JSON.stringify(i.selector);
    if (i.attribute === "exists")
      return `  ${a}: document.querySelector(${c}) !== null,`;
    const s = Zr(i);
    return i.multiple ? `  ${a}: Array.from(document.querySelectorAll(${c})).map(el => ${s}),` : `  ${a}: (() => { const el = document.querySelector(${c}); return el ? ${s} : null; })(),`;
  }), o = r.map((i) => {
    const a = JSON.stringify(i.name), c = JSON.stringify(i.containerSelector), d = (i.fields || []).filter((u) => u.name.trim() && u.selector.trim()).map((u) => {
      const h = JSON.stringify(u.name), p = JSON.stringify(u.selector);
      if (u.attribute === "exists")
        return `      ${h}: container.querySelector(${p}) !== null,`;
      const m = Zr(u);
      return `      ${h}: (() => { const el = container.querySelector(${p}); return el ? ${m} : null; })(),`;
    });
    return `  ${a}: Array.from(document.querySelectorAll(${c})).map(container => ({
${d.join(`
`)}
  })),`;
  });
  return `return {
${[...l, ...o].join(`
`)}
};`;
}, s1 = "extraction_field_", c1 = "extraction_group_container_", u1 = "extraction_group_field_", Rt = (e) => `${s1}${e}`, kn = (e) => `${c1}${e}`, vn = (e, t) => `${u1}${e}__${t}`, ti = [
  { value: "text", label: "Text", icon: "text_fields" },
  { value: "html", label: "HTML", icon: "code" },
  { value: "value", label: "Input Value", icon: "input" },
  { value: "attr", label: "Attribute", icon: "label" },
  { value: "image", label: "Image URL", icon: "image" },
  { value: "link", label: "Link URL", icon: "link" },
  { value: "exists", label: "Exists (true/false)", icon: "check_circle" }
], d1 = [
  { mode: "agent", icon: "smart_toy", label: "Agent Mode", description: "Custom action sequence with logic" },
  { mode: "scrape", icon: "api", label: "Scrape Mode", description: "Fixed data extraction flow" }
], h1 = ({ task: e, onUpdate: t, onClose: n }) => {
  const { canInsertVariable: r, captureInsertionSelection: l, insertVariable: o } = On();
  return /* @__PURE__ */ f(Rn, { icon: "bolt", title: "On Execution", onClose: n, children: /* @__PURE__ */ C("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: "min-w-0 space-y-8",
        onFocusCapture: (i) => l(i.target),
        onSelectCapture: (i) => l(i.target),
        onKeyUpCapture: (i) => l(i.target),
        onPointerUpCapture: (i) => l(i.target),
        children: [
          /* @__PURE__ */ C("div", { className: "space-y-2", children: [
            /* @__PURE__ */ f("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "URL" }),
            /* @__PURE__ */ f("div", { className: "rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm transition-colors focus-within:border-[var(--app-border-strong)]", children: /* @__PURE__ */ f(
              me,
              {
                value: e.url,
                onChange: (i) => t({ url: i }),
                onBlur: () => t({}, !0),
                variables: e.variables,
                placeholder: "https://..."
              }
            ) })
          ] }),
          /* @__PURE__ */ C("div", { className: "space-y-2", children: [
            /* @__PURE__ */ f("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Wait (seconds)" }),
            /* @__PURE__ */ f(
              "input",
              {
                type: "number",
                min: "0",
                value: e.wait,
                onChange: (i) => t({ wait: Number(i.target.value) || 0 }),
                onBlur: () => t({}, !0),
                className: "w-full rounded-xl border theme-border bg-[var(--app-input)] px-4 py-3 text-sm text-[var(--app-text)] transition-colors focus:border-[var(--app-border-strong)] focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ C("div", { className: "space-y-3", children: [
            /* @__PURE__ */ f("label", { className: "block text-xs font-bold tracking-[0.16em] text-[var(--app-text-muted)]", children: "Execution mode" }),
            /* @__PURE__ */ f("div", { className: "grid gap-3 sm:grid-cols-2", children: d1.map((i) => {
              const a = e.mode === i.mode;
              return /* @__PURE__ */ C(
                "button",
                {
                  type: "button",
                  onClick: () => t({ mode: i.mode }, !0),
                  "aria-pressed": a,
                  className: `flex items-start gap-3 rounded-2xl border p-4 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-border-strong)] ${a ? "border-[var(--app-border-strong)] bg-[var(--app-surface-2)] ring-1 ring-[var(--app-border-strong)]" : "theme-border bg-[var(--app-surface-3)] opacity-70 hover:opacity-100"}`,
                  children: [
                    /* @__PURE__ */ f(R, { name: i.icon, className: "mt-0.5 text-lg text-[var(--app-text-muted)]" }),
                    /* @__PURE__ */ C("span", { children: [
                      /* @__PURE__ */ f("span", { className: "block text-xs font-bold text-[var(--app-text)]", children: i.label }),
                      /* @__PURE__ */ f("span", { className: "mt-1 block text-xs leading-5 text-[var(--app-text-faint)]", children: i.description })
                    ] })
                  ]
                },
                i.mode
              );
            }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f("aside", { className: "min-w-0", "aria-label": "Execution context", children: /* @__PURE__ */ f($n, { variables: e.variables, canInsertVariable: r, onInsertVariable: o }) })
  ] }) });
}, ni = ({ task: e, onUpdate: t, onAutoSave: n, onDelete: r, onStartInspect: l, onStartGroupContainerInspect: o, onStartGroupFieldInspect: i, selectorOptionsById: a }) => {
  const [c, s] = ce(!1), [d, u] = ce(!1), [h, p] = ce(""), [m, v] = ce(null), [b, k] = ce(!1), [A, _] = ce(null), { canInsertVariable: O, captureInsertionSelection: j, insertVariable: x } = On(), B = (e.extractionScript || "").split(`
`).find((M) => M.trim()) || "", V = e.extractionMode || (e.extractionScript && !(e.extractionFields && e.extractionFields.length) ? "javascript" : "visual"), q = e.extractionFields || [], w = e.extractionGroups || [], N = (M) => {
    t({ extractionFields: M, extractionScript: ei(M, w) });
  }, L = () => {
    N([...q, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }]);
  }, H = (M, S) => {
    N(q.map((P) => P.id === M ? { ...P, ...S } : P));
  }, F = (M) => {
    N(q.filter((S) => S.id !== M));
  }, $ = (M) => {
    t({ extractionMode: M });
  }, U = (M) => {
    t({ extractionGroups: M, extractionScript: ei(q, M) });
  }, G = () => {
    U([...w, { id: `group_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", containerSelector: "", fields: [] }]);
  }, K = (M, S) => {
    U(w.map((P) => P.id === M ? { ...P, ...S } : P));
  }, ye = (M) => {
    U(w.filter((S) => S.id !== M));
  }, g = (M) => {
    const S = w.find((P) => P.id === M);
    S && K(M, { fields: [...S.fields, { id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: "", selector: "", attribute: "text" }] });
  }, fe = (M, S, P) => {
    const Y = w.find((W) => W.id === M);
    Y && K(M, { fields: Y.fields.map((W) => W.id === S ? { ...W, ...P } : W) });
  }, ae = (M, S) => {
    const P = w.find((Y) => Y.id === M);
    P && K(M, { fields: P.fields.filter((Y) => Y.id !== S) });
  }, y = async () => {
    if (h.trim()) {
      k(!0), _(null);
      try {
        const M = await fetch("/api/tasks/generate-script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: h.trim() })
        }), S = await M.json();
        if (!M.ok) throw new Error(S.details ? `${S.error}: ${S.details}` : S.error || "Generation failed");
        t({ extractionScript: S.script }), u(!1), p("");
      } catch (M) {
        _(M.message);
      } finally {
        k(!1);
      }
    }
  }, pe = Ce(() => {
    s(!1), u(!1), _(null), n();
  }, [n]), te = c ? /* @__PURE__ */ f(Rn, { icon: "data_object", title: "Extraction Script", onClose: pe, children: /* @__PURE__ */ C("div", { className: "grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] lg:gap-8", children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: "min-w-0 space-y-6",
        onFocusCapture: (M) => j(M.target),
        onSelectCapture: (M) => j(M.target),
        onKeyUpCapture: (M) => j(M.target),
        onPointerUpCapture: (M) => j(M.target),
        children: [
          /* @__PURE__ */ C("div", { className: "space-y-3", children: [
            /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Script" }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1", children: ["visual", "javascript"].map((M) => /* @__PURE__ */ f(
                "button",
                {
                  onClick: () => $(M),
                  className: `px-2.5 py-0.5 rounded-md text-xs font-bold tracking-tight transition-all ${V === M ? "bg-white text-black" : "text-white/50 hover:text-white"}`,
                  children: M === "visual" ? "Visual" : "JavaScript"
                },
                M
              )) })
            ] }),
            V === "visual" ? /* @__PURE__ */ C("div", { className: "space-y-2", children: [
              q.length === 0 && /* @__PURE__ */ f("div", { className: "text-xs text-white/40 bg-white/[0.03] border border-dashed border-white/10 rounded-xl p-4 text-center", children: "No fields yet. Add a field, then use the target icon to pick its selector from the page." }),
              q.map((M) => /* @__PURE__ */ C("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ f(
                    "input",
                    {
                      value: M.name,
                      onChange: (S) => H(M.id, { name: S.target.value }),
                      placeholder: "fieldName",
                      className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                    }
                  ),
                  /* @__PURE__ */ f(
                    "button",
                    {
                      onClick: () => F(M.id),
                      className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                      title: "Remove field",
                      "aria-label": "Remove field",
                      children: /* @__PURE__ */ f(R, { name: "close", className: "text-base" })
                    }
                  )
                ] }),
                /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ f("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ f(
                    me,
                    {
                      value: M.selector,
                      onChange: (S) => H(M.id, { selector: S }),
                      variables: e.variables,
                      placeholder: ".price, h1.title, ...",
                      className: "text-xs"
                    }
                  ) }),
                  l && /* @__PURE__ */ f(
                    "button",
                    {
                      onClick: () => {
                        s(!1), l(Rt(M.id));
                      },
                      className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                      title: "Pick Selector in Browser",
                      "aria-label": "Pick Selector in Browser",
                      children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
                    }
                  )
                ] }),
                a?.[Rt(M.id)] && a[Rt(M.id)].length > 1 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: a[Rt(M.id)].map((S, P) => /* @__PURE__ */ f(
                  "button",
                  {
                    onClick: () => H(M.id, { selector: S }),
                    className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${M.selector === S ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                    children: S
                  },
                  P
                )) }),
                /* @__PURE__ */ C("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ f(
                    Le,
                    {
                      value: M.attribute,
                      onChange: (S) => H(M.id, { attribute: S }),
                      options: ti,
                      className: "w-[170px] !min-h-8",
                      ariaLabel: `${M.name || "Field"} attribute`
                    }
                  ),
                  M.attribute === "attr" && /* @__PURE__ */ f(
                    "input",
                    {
                      value: M.attrName || "",
                      onChange: (S) => H(M.id, { attrName: S.target.value }),
                      placeholder: "href",
                      className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                    }
                  ),
                  M.attribute !== "exists" && /* @__PURE__ */ C("label", { className: "flex items-center gap-1.5 text-xs text-white/50 cursor-pointer ml-auto", children: [
                    /* @__PURE__ */ f(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!M.multiple,
                        onChange: (S) => H(M.id, { multiple: S.target.checked }),
                        className: "accent-current"
                      }
                    ),
                    "Multiple (list)"
                  ] })
                ] })
              ] }, M.id)),
              /* @__PURE__ */ C(
                "button",
                {
                  onClick: L,
                  className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                  children: [
                    /* @__PURE__ */ f(R, { name: "add", className: "text-base" }),
                    "Add Field"
                  ]
                }
              ),
              /* @__PURE__ */ C("div", { className: "pt-2 mt-2 border-t border-dashed border-white/10 space-y-3", children: [
                /* @__PURE__ */ C("div", { children: [
                  /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Repeating Groups" }),
                  /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mt-0.5", children: "One row per matched container — e.g. every product card on a search results page — with a column per sub-field. Produces a multi-row CSV." })
                ] }),
                w.map((M) => /* @__PURE__ */ C("div", { className: "bg-white/[0.03] border border-white/10 rounded-xl p-3 space-y-2", children: [
                  /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ f(
                      "input",
                      {
                        value: M.name,
                        onChange: (S) => K(M.id, { name: S.target.value }),
                        placeholder: "groupName (e.g. products)",
                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                      }
                    ),
                    /* @__PURE__ */ f(
                      "button",
                      {
                        onClick: () => ye(M.id),
                        className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                        title: "Remove group",
                        "aria-label": "Remove group",
                        children: /* @__PURE__ */ f(R, { name: "close", className: "text-base" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ f("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ f(
                      me,
                      {
                        value: M.containerSelector,
                        onChange: (S) => K(M.id, { containerSelector: S }),
                        variables: e.variables,
                        placeholder: "Row container, e.g. [data-component-type='s-search-result']",
                        className: "text-xs"
                      }
                    ) }),
                    o && /* @__PURE__ */ f(
                      "button",
                      {
                        onClick: () => {
                          s(!1), o(M.id);
                        },
                        className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                        title: "Pick Row Container in Browser",
                        "aria-label": "Pick Row Container in Browser",
                        children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
                      }
                    )
                  ] }),
                  a?.[kn(M.id)] && a[kn(M.id)].length > 1 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: a[kn(M.id)].map((S, P) => /* @__PURE__ */ f(
                    "button",
                    {
                      onClick: () => K(M.id, { containerSelector: S }),
                      className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${M.containerSelector === S ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                      children: S
                    },
                    P
                  )) }),
                  /* @__PURE__ */ C("div", { className: "pl-3 border-l-2 border-white/10 space-y-2", children: [
                    M.fields.length === 0 && /* @__PURE__ */ f("p", { className: "text-xs text-gray-500", children: "No columns yet. Add one for each piece of data to pull from every row (e.g. title, price)." }),
                    M.fields.map((S) => /* @__PURE__ */ C("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ f(
                          "input",
                          {
                            value: S.name,
                            onChange: (P) => fe(M.id, S.id, { name: P.target.value }),
                            placeholder: "columnName",
                            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-white/25"
                          }
                        ),
                        /* @__PURE__ */ f(
                          "button",
                          {
                            onClick: () => ae(M.id, S.id),
                            className: "text-white/40 hover:text-red-400 transition-colors shrink-0",
                            title: "Remove column",
                            "aria-label": "Remove column",
                            children: /* @__PURE__ */ f(R, { name: "close", className: "text-base" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ f("div", { className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus-within:border-white/25", children: /* @__PURE__ */ f(
                          me,
                          {
                            value: S.selector,
                            onChange: (P) => fe(M.id, S.id, { selector: P }),
                            variables: e.variables,
                            placeholder: "Selector relative to row, e.g. h2 span",
                            className: "text-xs"
                          }
                        ) }),
                        i && /* @__PURE__ */ f(
                          "button",
                          {
                            onClick: () => {
                              s(!1), i(M.id, S.id);
                            },
                            className: "text-white opacity-50 hover:opacity-100 transition-colors shrink-0",
                            title: "Pick Selector in Browser (within row)",
                            "aria-label": "Pick Selector in Browser (within row)",
                            children: /* @__PURE__ */ f(R, { name: "my_location", className: "text-lg" })
                          }
                        )
                      ] }),
                      a?.[vn(M.id, S.id)] && a[vn(M.id, S.id)].length > 1 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: a[vn(M.id, S.id)].map((P, Y) => /* @__PURE__ */ f(
                        "button",
                        {
                          onClick: () => fe(M.id, S.id, { selector: P }),
                          className: `text-xs px-1.5 py-0.5 rounded border transition-colors ${S.selector === P ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.05]"}`,
                          children: P
                        },
                        Y
                      )) }),
                      /* @__PURE__ */ C("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ f(
                          Le,
                          {
                            value: S.attribute,
                            onChange: (P) => fe(M.id, S.id, { attribute: P }),
                            options: ti,
                            className: "w-[170px] !min-h-8",
                            ariaLabel: `${S.name || "Group field"} attribute`
                          }
                        ),
                        S.attribute === "attr" && /* @__PURE__ */ f(
                          "input",
                          {
                            value: S.attrName || "",
                            onChange: (P) => fe(M.id, S.id, { attrName: P.target.value }),
                            placeholder: "href",
                            className: "w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-white"
                          }
                        )
                      ] })
                    ] }, S.id)),
                    /* @__PURE__ */ C(
                      "button",
                      {
                        onClick: () => g(M.id),
                        className: "w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                        children: [
                          /* @__PURE__ */ f(R, { name: "add", className: "text-sm" }),
                          "Add Column"
                        ]
                      }
                    )
                  ] })
                ] }, M.id)),
                /* @__PURE__ */ C(
                  "button",
                  {
                    onClick: G,
                    className: "w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-white/10 text-xs font-bold tracking-tight text-white/50 hover:text-white hover:border-white/25 transition-colors",
                    children: [
                      /* @__PURE__ */ f(R, { name: "add", className: "text-base" }),
                      "Add Group"
                    ]
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ C(Me, { children: [
              /* @__PURE__ */ f("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ C(
                "button",
                {
                  onClick: () => {
                    u((M) => !M), _(null);
                  },
                  className: "flex items-center gap-1 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors",
                  title: "Generate with AI",
                  children: [
                    /* @__PURE__ */ f(R, { name: "auto_awesome", className: "text-sm" }),
                    "Generate"
                  ]
                }
              ) }),
              d && /* @__PURE__ */ C("div", { className: "flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10", children: [
                /* @__PURE__ */ f(
                  "input",
                  {
                    autoFocus: !0,
                    type: "text",
                    value: h,
                    onChange: (M) => p(M.target.value),
                    onKeyDown: (M) => {
                      M.key === "Enter" && !b && y();
                    },
                    placeholder: "e.g. extract all article titles and links",
                    className: "bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none"
                  }
                ),
                A && /* @__PURE__ */ f("p", { className: "text-xs text-red-400", children: A }),
                /* @__PURE__ */ C("div", { className: "flex justify-end gap-2", children: [
                  /* @__PURE__ */ f("button", { onClick: () => {
                    u(!1), _(null);
                  }, className: "text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors", children: "Cancel" }),
                  /* @__PURE__ */ C(
                    "button",
                    {
                      onClick: y,
                      disabled: b || !h.trim(),
                      className: "px-3 py-1 rounded-lg bg-white text-black text-xs font-bold tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                      children: [
                        b && /* @__PURE__ */ f(R, { name: "autorenew", className: "text-xs animate-spin" }),
                        b ? "Generating…" : "Generate"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ f(
                yt,
                {
                  value: e.extractionScript || "",
                  onChange: (M) => t({ extractionScript: M }),
                  onBlur: n,
                  language: "javascript",
                  className: "min-h-[180px]",
                  placeholder: "// Example: return { title: document.title };"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ C("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ f("label", { className: "text-xs font-bold text-gray-600 tracking-widest pl-1", children: "Output Format" }),
            /* @__PURE__ */ f("div", { className: "bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus-within:border-white/20 transition-all", children: /* @__PURE__ */ f(
              Le,
              {
                value: e.extractionFormat || "json",
                onChange: (M) => t({ extractionFormat: M }),
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
    /* @__PURE__ */ f("aside", { className: "min-w-0", "aria-label": "Extraction context", children: /* @__PURE__ */ f($n, { variables: e.variables, canInsertVariable: O, onInsertVariable: x }) })
  ] }) }) : null, X = m ? Nt(
    /* @__PURE__ */ f(
      "div",
      {
        className: "fixed inset-0 z-[200]",
        onClick: () => v(null),
        onContextMenu: (M) => {
          M.preventDefault(), v(null);
        },
        children: /* @__PURE__ */ f(
          "div",
          {
            className: "absolute bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl py-1 min-w-[140px]",
            style: { top: m.y, left: m.x },
            onClick: (M) => M.stopPropagation(),
            children: /* @__PURE__ */ C(
              "button",
              {
                onClick: () => {
                  v(null), r();
                },
                className: "w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-white/5 transition-colors",
                children: [
                  /* @__PURE__ */ f(R, { name: "delete", className: "text-sm" }),
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
  return /* @__PURE__ */ C(Me, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        onClick: () => s(!0),
        onContextMenu: (M) => {
          M.preventDefault(), v({ x: M.clientX, y: M.clientY });
        },
        "data-interactive-target": "true",
        className: "bg-black min-w-[280px] w-full max-w-sm mx-auto border border-white/20 p-5 rounded-2xl group/item relative transition-all duration-150 select-none touch-none cursor-pointer hover:border-white/40 hover:bg-white/[0.02]",
        children: /* @__PURE__ */ C("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ f("div", { className: "w-4 h-4 flex items-center justify-center shrink-0", children: /* @__PURE__ */ f(R, { name: "data_object", className: "text-[12px] text-white" }) }),
          /* @__PURE__ */ f("span", { className: "text-xs font-bold tracking-[0.2em] text-white shrink-0", children: "Extraction Script" }),
          B && /* @__PURE__ */ f("span", { className: "text-white/40 text-xs font-mono truncate min-w-0 pointer-events-none", children: B.trim() })
        ] })
      }
    ),
    te,
    X
  ] });
}, p1 = 760, Ot = 380, mt = 600, gt = 160, f1 = 132, m1 = () => {
  const e = se(null), [t, n] = ce(0);
  Ne(() => {
    const o = e.current;
    if (!o) return;
    const i = () => n(Math.round(o.getBoundingClientRect().height));
    i();
    const a = new ResizeObserver(i);
    return a.observe(o), () => a.disconnect();
  }, []);
  const r = Math.max(f1 + 48, t - 22), l = [
    `M ${Ot} 58`,
    `H ${mt - 16}`,
    `Q ${mt} 58 ${mt} 74`,
    `V ${r - 18}`,
    `Q ${mt} ${r} ${mt - 18} ${r}`,
    `H ${gt + 18}`,
    `Q ${gt} ${r} ${gt} ${r - 18}`,
    "V 76",
    `Q ${gt} 58 ${gt + 18} 58`,
    `H ${Ot}`,
    "Z"
  ].join(" ");
  return /* @__PURE__ */ f("div", { ref: e, className: "absolute inset-0 z-0 pointer-events-none", "aria-hidden": "true", children: t > 0 && /* @__PURE__ */ C(
    "svg",
    {
      className: "absolute inset-0 overflow-visible text-white/25",
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${p1} ${t}`,
      preserveAspectRatio: "none",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ f("path", { d: `M ${Ot} 0 V 58`, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ f("path", { d: l, vectorEffect: "non-scaling-stroke" }),
        /* @__PURE__ */ f("path", { d: `M ${Ot} ${r} V ${t}`, vectorEffect: "non-scaling-stroke" })
      ]
    }
  ) });
}, g1 = ({
  currentTask: e,
  setCurrentTask: t,
  canvasOffset: n,
  canvasScale: r,
  canvasViewportRef: l,
  onOpenCabinet: o,
  handleAutoSave: i,
  dragState: a,
  dragOverIndex: c,
  selectedActionIds: s,
  actionStatusById: d,
  availableTasks: u,
  selectorOptionsById: h,
  onStartGroupContainerInspect: p,
  onStartGroupFieldInspect: m,
  updateAction: v,
  openActionPalette: b,
  openContextMenu: k,
  handleActionPointerDown: A,
  onOpenHeadful: _,
  onPointerDown: O,
  onPointerMove: j,
  onPointerUp: x,
  onPointerCancel: B,
  selectionBox: V,
  onAddStickyNote: q,
  onUpdateStickyNote: w,
  onDeleteStickyNote: N,
  onDuplicateStickyNote: L,
  selectedNoteIds: H,
  autoOpenActionId: F,
  onClearAutoOpenActionId: $
}) => {
  const U = Ce((P, Y = "selector") => {
    const W = Y === "targetSelector" ? `${P}::targetSelector` : P;
    _?.(e.url || "https://www.google.com", W, e, e.variables);
  }, [_, e.url, e.variables]), G = Ce((P) => {
    const Y = { ...e.variables };
    if (P in Y) return;
    Y[P] = { type: "string", value: "", autoCreated: !0 };
    const W = { ...e, variables: Y };
    t(W), i(W);
  }, [e, t, i]), K = Ce((P) => {
    const Y = { ...e.variables };
    if (!(P in Y) || !Y[P].autoCreated) return;
    delete Y[P];
    const W = { ...e, variables: Y };
    t(W), i(W);
  }, [e, t, i]), [ye, g] = ce({}), [fe, ae] = ce(!1), y = Ce((P, Y = !1) => {
    const W = { ...e, ...P };
    t(W), Y && i(W);
  }, [e, t, i]);
  Ne(() => {
    g({});
  }, [e.id]);
  const pe = Ce((P) => {
    g((Y) => ({ ...Y, [P.actionId]: P }));
  }, []), [te, X] = ce(null), M = Ce((P) => {
    const Y = P.target;
    if (Y.closest("[data-action-id]") || Y.closest("[data-sticky-note-id]") || Y.closest('[data-interactive-target="true"]')) return;
    P.preventDefault();
    const W = P.currentTarget.getBoundingClientRect(), ge = Math.round((P.clientX - W.left - n.x) / r), ne = Math.round((P.clientY - W.top - n.y) / r), ue = 8, xe = 180, Q = 48, Ae = Math.min(Math.max(P.clientX + 12, ue), window.innerWidth - xe - ue), ze = Math.min(Math.max(P.clientY + 12, ue), window.innerHeight - Q - ue);
    X({ x: Ae, y: ze, worldX: ge, worldY: ne });
  }, [n, r]), S = (P, Y, W = 0, ge = 360) => {
    const ne = [];
    let ue = P;
    for (; ue < Y; ) {
      const xe = ue, Q = e.actions[xe];
      if (!Q) {
        ue++;
        continue;
      }
      const Ae = iu(e.actions, xe);
      if (Q.type === "if" && Ae !== null && Ae < Y) {
        const ze = ue, E = Ae;
        let we = 1, Fe = ue + 1, Re = -1;
        for (; Fe < E && we > 0; ) {
          const re = e.actions[Fe];
          Vt(re.type) && we++, re.type === "end" && we--, re.type === "else" && we === 1 && (Re = Fe), Fe++;
        }
        const Qt = ze + 1, St = Re !== -1 ? Re : E, st = Re !== -1 ? Re + 1 : -1, I = Re !== -1 ? E : -1, z = W > 0, Z = z ? 280 : ge;
        ne.push(
          /* @__PURE__ */ C("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ f("div", { className: "w-[360px]", children: /* @__PURE__ */ f(
              tn,
              {
                action: Q,
                task: e,
                index: xe,
                isDragOver: c === xe && a?.id !== Q.id,
                isDragging: a?.id === Q.id,
                dragTransformY: a?.id === Q.id ? a.currentY - a.startY : void 0,
                isSelected: s.has(Q.id),
                status: d[Q.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: u,
                selectorOptions: h[Q.id],
                onUpdate: v,
                onAutoSave: i,
                onOpenPalette: b,
                onOpenContextMenu: k,
                onPointerDown: A,
                onStartInspect: U,
                onCreateVariable: G,
                onDeleteVariable: K,
                autoOpenConfig: F === Q.id,
                onCloseConfigModal: $,
                testResult: ye[Q.id],
                onTestResult: pe
              }
            ) }),
            /* @__PURE__ */ C("div", { className: `flex mt-4 relative ${z ? "gap-6 -translate-x-[132px]" : "gap-16"}`, children: [
              /* @__PURE__ */ C("div", { className: `flex flex-col items-center ${z ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ f("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "True" }),
                /* @__PURE__ */ f("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-3", children: S(Qt, St, W + 1, Z) }),
                /* @__PURE__ */ C("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ f("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ f(
                    "button",
                    {
                      "data-action-drop-scope": lu(Q.id),
                      onClick: () => b(void 0, St),
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ C("div", { className: `flex flex-col items-center ${z ? "w-[280px]" : "min-w-[200px]"}`, children: [
                /* @__PURE__ */ f("div", { className: "text-xs font-bold text-white/60 tracking-widest mb-2", children: "Otherwise" }),
                /* @__PURE__ */ f("div", { className: "w-px h-6 bg-white/25" }),
                /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-3", children: st !== -1 ? S(st, I, W + 1, Z) : null }),
                /* @__PURE__ */ C("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ f("div", { className: "w-px h-4 bg-white/20" }),
                  /* @__PURE__ */ f(
                    "button",
                    {
                      "data-action-drop-scope": ou(Q.id),
                      onClick: () => {
                        if (st !== -1)
                          b(void 0, I);
                        else {
                          const re = { id: "act_" + Date.now() + "_else", type: "else", selector: "", value: "" }, oe = [...e.actions];
                          oe.splice(E, 0, re), t({ ...e, actions: oe }), i({ ...e, actions: oe }), setTimeout(() => b(void 0, E + 1), 50);
                        }
                      },
                      className: "w-12 h-12 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "aria-label": "Add action (Ctrl + K)",
                      title: "Add action (Ctrl + K)",
                      children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ C("div", { className: "flex flex-col items-center mt-3", children: [
              /* @__PURE__ */ f("div", { className: "w-px h-2 bg-white/25" }),
              /* @__PURE__ */ f(
                "button",
                {
                  onClick: () => b(void 0, E + 1),
                  className: "w-8 h-8 border border-dashed border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  "aria-label": "Add action (Ctrl + K)",
                  title: "Add action (Ctrl + K)",
                  children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-sm transition-colors" })
                }
              ),
              /* @__PURE__ */ f("div", { className: "w-px h-2 bg-white/25" })
            ] })
          ] }, Q.id)
        ), ue = E + 1;
      } else if (ru(Q.type) && Ae !== null && Ae < Y) {
        const ze = Ae, E = xe + 1, we = ze, Fe = au(Q.id), Re = E === we;
        ne.push(
          /* @__PURE__ */ C("div", { className: "flex flex-col items-center w-full", children: [
            /* @__PURE__ */ f("div", { className: "w-[360px]", children: /* @__PURE__ */ f(
              tn,
              {
                action: Q,
                task: e,
                index: xe,
                isDragOver: c === xe && a?.id !== Q.id,
                isDragging: a?.id === Q.id,
                dragTransformY: a?.id === Q.id ? a.currentY - a.startY : void 0,
                isSelected: s.has(Q.id),
                status: d[Q.id],
                translateY: 0,
                variables: e.variables,
                availableTasks: u,
                selectorOptions: h[Q.id],
                onUpdate: v,
                onAutoSave: i,
                onOpenPalette: b,
                onOpenContextMenu: k,
                onPointerDown: A,
                onStartInspect: U,
                onCreateVariable: G,
                onDeleteVariable: K,
                autoOpenConfig: F === Q.id,
                onCloseConfigModal: $,
                testResult: ye[Q.id],
                onTestResult: pe
              }
            ) }),
            /* @__PURE__ */ C("div", { className: "relative w-[760px] min-h-[260px] shrink-0 pt-[132px] pb-11", children: [
              /* @__PURE__ */ f(m1, {}),
              Re ? /* @__PURE__ */ f(
                "button",
                {
                  "data-action-drop-scope": Fe,
                  onClick: () => b(void 0, we),
                  className: "absolute left-[576px] top-[123px] z-20 w-12 h-12 canvas-insert-button border border-dashed rounded-xl transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2",
                  "aria-label": "Add action inside loop (Ctrl + K)",
                  title: "Add action inside loop (Ctrl + K)",
                  children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" })
                }
              ) : /* @__PURE__ */ C("div", { className: "relative z-10 ml-[420px] w-[360px] flex flex-col items-center", children: [
                /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-3 w-full", children: S(E, we, W + 1) }),
                /* @__PURE__ */ C("div", { className: "mt-2 flex flex-col items-center", children: [
                  /* @__PURE__ */ f("div", { className: "h-4 border-l border-white/20" }),
                  /* @__PURE__ */ f(
                    "button",
                    {
                      "data-action-drop-scope": Fe,
                      onClick: () => b(void 0, we),
                      className: "relative z-20 w-12 h-12 canvas-insert-button border border-dashed rounded-xl transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2",
                      "aria-label": "Add action inside loop (Ctrl + K)",
                      title: "Add action inside loop (Ctrl + K)",
                      children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ C("div", { className: "relative z-10 flex flex-col items-center", children: [
              /* @__PURE__ */ f(
                "button",
                {
                  onClick: () => b(void 0, ze + 1),
                  className: "relative z-20 w-8 h-8 canvas-insert-button border border-dashed rounded-lg transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2",
                  "aria-label": "Add action after loop (Ctrl + K)",
                  title: "Add action after loop (Ctrl + K)",
                  children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-sm transition-colors" })
                }
              ),
              /* @__PURE__ */ f("div", { className: "h-2 border-l border-white/25" })
            ] })
          ] }, Q.id)
        ), ue = ze + 1;
      } else Q.type === "end" || Q.type === "else" || ne.push(
        /* @__PURE__ */ C("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ f("div", { className: ge === 280 ? "w-[280px]" : "w-[360px]", children: /* @__PURE__ */ f(
            tn,
            {
              action: Q,
              task: e,
              index: xe,
              isDragOver: c === xe && a?.id !== Q.id,
              isDragging: a?.id === Q.id,
              dragTransformY: a?.id === Q.id ? a.currentY - a.startY : void 0,
              isSelected: s.has(Q.id),
              status: d[Q.id],
              translateY: 0,
              variables: e.variables,
              availableTasks: u,
              selectorOptions: h[Q.id],
              onUpdate: v,
              onAutoSave: i,
              onOpenPalette: b,
              onOpenContextMenu: k,
              onPointerDown: A,
              onStartInspect: U,
              onCreateVariable: G,
              onDeleteVariable: K,
              autoOpenConfig: F === Q.id,
              onCloseConfigModal: $,
              testResult: ye[Q.id],
              onTestResult: pe
            }
          ) }),
          ue < Y - 1 && e.actions[ue + 1]?.type !== "end" && /* @__PURE__ */ C("div", { className: "flex flex-col items-center my-1", children: [
            /* @__PURE__ */ f("div", { className: "w-px h-2 bg-white/25" }),
            /* @__PURE__ */ f(
              "button",
              {
                onClick: () => b(void 0, xe + 1),
                className: "relative z-20 w-8 h-8 canvas-insert-button border border-dashed rounded-lg transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2",
                "aria-label": "Add action (Ctrl + K)",
                title: "Add action (Ctrl + K)",
                children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-sm transition-colors" })
              }
            ),
            /* @__PURE__ */ f("div", { className: "w-px h-2 bg-white/25" })
          ] })
        ] }, Q.id)
      ), ue++;
    }
    return ne;
  };
  return /* @__PURE__ */ C(
    "div",
    {
      ref: l,
      className: "canvas-workflow flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing select-none",
      style: { touchAction: "none" },
      onPointerDown: O,
      onPointerMove: j,
      onPointerUp: x,
      onPointerCancel: B,
      onContextMenu: M,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "absolute inset-0 pointer-events-none z-0",
            style: {
              backgroundImage: "radial-gradient(circle, var(--app-dot) 0.8px, transparent 0)",
              backgroundSize: `${22 * r}px ${22 * r}px`,
              backgroundPosition: `${n.x}px ${n.y}px`
            }
          }
        ),
        /* @__PURE__ */ f(
          a1,
          {
            canvasOffset: n,
            canvasScale: r,
            viewportRef: l,
            selectionBox: V
          }
        ),
        /* @__PURE__ */ C(
          "div",
          {
            className: "absolute origin-top-left",
            style: {
              transform: `translate(${n.x}px, ${n.y}px) scale(${r})`
            },
            children: [
              (e.stickyNotes || []).map((P) => /* @__PURE__ */ f(
                n1,
                {
                  note: P,
                  canvasScale: r,
                  isSelected: H.has(P.id),
                  onUpdate: w,
                  onDelete: N,
                  onDuplicate: L
                },
                P.id
              )),
              /* @__PURE__ */ C("div", { className: "relative z-10 flex flex-col items-center pointer-events-none", style: { paddingTop: "60px", minWidth: "500px" }, children: [
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: "canvas-execution-card w-[360px] bg-black border border-white/15 p-5 rounded-2xl select-text cursor-auto relative z-10 pointer-events-auto",
                    onDoubleClick: (P) => {
                      P.stopPropagation(), ae(!0);
                    },
                    children: [
                      /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ C(
                          "button",
                          {
                            type: "button",
                            "aria-label": "Configure On Execution",
                            title: "Configure On Execution",
                            onClick: () => ae(!0),
                            className: "flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg pr-2 transition-all",
                            children: [
                              /* @__PURE__ */ f(R, { name: "bolt", className: "text-white/40 text-base" }),
                              /* @__PURE__ */ f("h3", { className: "text-white/60 font-bold tracking-widest text-xs", children: "On Execution" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ f(
                          "button",
                          {
                            type: "button",
                            onClick: () => o("mode"),
                            className: "p-2 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                            title: "Open Task Settings",
                            "aria-label": "Open Task Settings",
                            children: /* @__PURE__ */ f(R, { name: "settings", className: "text-lg" })
                          }
                        )
                      ] }),
                      e.description && /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mt-2 leading-relaxed", children: e.description })
                    ]
                  }
                ),
                e.mode === "scrape" && /* @__PURE__ */ f("div", { className: "canvas-connector w-px h-10 bg-white/25" }),
                e.mode === "agent" && /* @__PURE__ */ C("div", { className: "flex flex-col items-center pointer-events-auto", children: [
                  /* @__PURE__ */ f("div", { className: "canvas-connector w-px h-2 bg-white/25" }),
                  /* @__PURE__ */ f(
                    "button",
                    {
                      "data-action-drop-scope": "root",
                      onClick: () => b(void 0, 0),
                      className: "relative z-20 w-8 h-8 canvas-insert-button border border-dashed rounded-lg transition-all flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2",
                      "aria-label": "Add action before first block (Ctrl + K)",
                      title: "Add action before first block (Ctrl + K)",
                      children: /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-sm transition-colors" })
                    }
                  ),
                  /* @__PURE__ */ f("div", { className: "canvas-connector w-px h-2 bg-white/25" })
                ] }),
                e.mode === "scrape" && /* @__PURE__ */ f("div", { className: "w-[360px] pointer-events-auto", children: e.extractionScript !== void 0 ? /* @__PURE__ */ f(
                  ni,
                  {
                    task: e,
                    onUpdate: (P) => {
                      const Y = { ...e, ...P };
                      t(Y), i(Y);
                    },
                    onAutoSave: () => i(),
                    onDelete: () => {
                      const P = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                      t(P), i(P);
                    },
                    onStartInspect: U,
                    onStartGroupContainerInspect: p,
                    onStartGroupFieldInspect: m,
                    selectorOptionsById: h
                  }
                ) : /* @__PURE__ */ C(
                  "button",
                  {
                    onClick: () => {
                      const P = { ...e, extractionScript: "" };
                      t(P), i(P);
                    },
                    "data-interactive-target": "true",
                    className: "canvas-add-action w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                    children: [
                      /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" }),
                      /* @__PURE__ */ f("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                    ]
                  }
                ) }),
                e.mode === "agent" && /* @__PURE__ */ f("div", { className: "flex flex-col items-center w-full select-text cursor-auto pointer-events-auto", children: /* @__PURE__ */ C("div", { className: "space-y-6 w-full flex flex-col items-center relative", children: [
                  S(0, e.actions.length),
                  /* @__PURE__ */ C("div", { className: "pt-2 flex flex-col items-center", children: [
                    /* @__PURE__ */ f("div", { className: "canvas-connector w-px h-6 bg-white/10" }),
                    /* @__PURE__ */ C(
                      "button",
                      {
                        "data-action-drop-scope": "root",
                        onClick: () => b(),
                        className: "canvas-add-action w-[360px] bg-[#0a0a0a] border border-dashed border-white/15 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.03] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        "aria-label": "Add action (Ctrl + K)",
                        title: "Add action (Ctrl + K)",
                        children: [
                          /* @__PURE__ */ f("div", { className: "w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all flex items-center justify-center", children: /* @__PURE__ */ f(R, { name: "add", className: "text-2xl text-gray-500 group-hover:text-white transition-colors" }) }),
                          /* @__PURE__ */ f("span", { className: "canvas-secondary-text text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Action" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f("div", { className: "canvas-connector w-px h-6 bg-white/25" }),
                  /* @__PURE__ */ f("div", { className: "w-[360px]", children: e.extractionScript !== void 0 ? /* @__PURE__ */ f(
                    ni,
                    {
                      task: e,
                      onUpdate: (P) => {
                        const Y = { ...e, ...P };
                        t(Y), i(Y);
                      },
                      onAutoSave: () => i(),
                      onDelete: () => {
                        const P = { ...e, extractionScript: void 0, extractionFormat: void 0 };
                        t(P), i(P);
                      },
                      onStartInspect: U,
                      onStartGroupContainerInspect: p,
                      onStartGroupFieldInspect: m,
                      selectorOptionsById: h
                    }
                  ) : /* @__PURE__ */ C(
                    "button",
                    {
                      onClick: () => {
                        const P = { ...e, extractionScript: "" };
                        t(P), i(P);
                      },
                      "data-interactive-target": "true",
                      className: "canvas-add-action w-full border border-dashed border-white/15 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      children: [
                        /* @__PURE__ */ f(R, { name: "add", className: "canvas-insert-icon text-lg transition-colors" }),
                        /* @__PURE__ */ f("span", { className: "text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors", children: "Add Extraction Script" })
                      ]
                    }
                  ) })
                ] }) })
              ] })
            ]
          }
        ),
        V && /* @__PURE__ */ f("div", { className: "fixed inset-0 pointer-events-none z-20 overflow-hidden", children: /* @__PURE__ */ f(
          "div",
          {
            className: "absolute bg-blue-500/10 border border-blue-400",
            style: {
              left: Math.min(V.startX, V.currentX),
              top: Math.min(V.startY, V.currentY),
              width: Math.abs(V.currentX - V.startX),
              height: Math.abs(V.currentY - V.startY)
            }
          }
        ) }),
        fe && /* @__PURE__ */ f(
          h1,
          {
            task: e,
            onUpdate: y,
            onClose: () => {
              ae(!1), i(e);
            }
          }
        ),
        te && /* @__PURE__ */ C(Me, { children: [
          /* @__PURE__ */ f("div", { className: "fixed inset-0 z-40", onClick: () => X(null), onContextMenu: (P) => {
            P.preventDefault(), X(null);
          } }),
          /* @__PURE__ */ f(
            "div",
            {
              className: "fixed z-50 w-[180px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-2xl p-2 text-xs font-bold tracking-widest text-white/80",
              style: { left: te.x, top: te.y },
              children: /* @__PURE__ */ C(
                "button",
                {
                  className: "w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2",
                  onClick: () => {
                    q(te.worldX, te.worldY), X(null);
                  },
                  children: [
                    /* @__PURE__ */ f(R, { name: "sticky_note_2", className: "text-[14px] text-white/50" }),
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
}, ve = () => {
}, y1 = 400, wn = 20, x1 = ({ task: e, className: t = "" }) => {
  const n = se(null), r = se(null), [l, o] = ce({ x: 0, y: 20 }), i = se(null);
  ii(() => {
    const d = r.current;
    if (!d) return;
    const u = () => {
      if (i.current) return;
      const p = e.stickyNotes || [], m = Math.min(0, ...p.map((_) => _.x)), b = Math.max(y1, ...p.map((_) => _.x + _.width)) - m, k = Math.max(0, d.clientWidth - wn * 2), A = b <= k ? (d.clientWidth - b) / 2 - m : wn - m;
      o({ x: A, y: wn });
    };
    u();
    const h = new ResizeObserver(u);
    return h.observe(d), () => h.disconnect();
  }, [e]), Ne(() => {
    const d = n.current;
    if (!d) return;
    const u = (h) => {
      h.ctrlKey || h.metaKey || (h.preventDefault(), o((p) => ({
        x: p.x - h.deltaX,
        y: p.y - h.deltaY
      })));
    };
    return d.addEventListener("wheel", u, { passive: !1 }), () => d.removeEventListener("wheel", u);
  }, []);
  const a = (d) => {
    d.button === 0 && (i.current = {
      pointerId: d.pointerId,
      x: d.clientX,
      y: d.clientY,
      offsetX: l.x,
      offsetY: l.y
    }, d.currentTarget.setPointerCapture?.(d.pointerId));
  }, c = (d) => {
    const u = i.current;
    !u || u.pointerId !== d.pointerId || o({
      x: u.offsetX + d.clientX - u.x,
      y: u.offsetY + d.clientY - u.y
    });
  }, s = (d) => {
    i.current?.pointerId === d.pointerId && (i.current = null, d.currentTarget.releasePointerCapture?.(d.pointerId));
  };
  return /* @__PURE__ */ f(
    "div",
    {
      ref: n,
      className: `figranium-readonly-canvas relative flex h-full w-full select-none cursor-grab active:cursor-grabbing ${t}`.trim(),
      "aria-label": "Read-only Figranium task canvas. Drag or scroll to pan.",
      style: { "--app-dot": "rgba(255, 255, 255, 0.12)", touchAction: "none" },
      onContextMenuCapture: (d) => {
        d.preventDefault(), d.stopPropagation();
      },
      onPointerDown: a,
      onPointerMove: c,
      onPointerUp: s,
      onPointerCancel: s,
      children: /* @__PURE__ */ f(
        "div",
        {
          className: "flex h-full w-full",
          inert: !0,
          "aria-hidden": "true",
          style: { pointerEvents: "none" },
          children: /* @__PURE__ */ f(
            g1,
            {
              currentTask: e,
              setCurrentTask: ve,
              canvasOffset: l,
              canvasScale: 1,
              canvasViewportRef: r,
              triggerExpanded: !1,
              setTriggerExpanded: ve,
              onOpenCabinet: ve,
              handleAutoSave: ve,
              dragState: null,
              dragOverIndex: null,
              selectedActionIds: /* @__PURE__ */ new Set(),
              setSelectedActionIds: ve,
              actionStatusById: {},
              availableTasks: [],
              selectorOptionsById: {},
              updateAction: ve,
              openActionPalette: ve,
              openContextMenu: ve,
              handleActionPointerDown: ve,
              onOpenHeadful: ve,
              isHeadfulOpen: !1,
              onPointerDown: ve,
              onPointerMove: ve,
              onPointerUp: ve,
              onPointerCancel: ve,
              selectionBox: null,
              onAddStickyNote: ve,
              onUpdateStickyNote: ve,
              onDeleteStickyNote: ve,
              onDuplicateStickyNote: ve,
              selectedNoteIds: /* @__PURE__ */ new Set(),
              autoOpenActionId: null,
              onClearAutoOpenActionId: ve
            }
          )
        }
      )
    }
  );
};
function w1({
  task: e,
  className: t = "",
  height: n = 560,
  ariaLabel: r = "Figranium task preview"
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: `figranium-embed ${t}`.trim(),
      style: { height: n },
      "aria-label": r,
      role: "img",
      children: /* @__PURE__ */ f("div", { className: "figranium-embed__surface", "aria-hidden": "true", children: /* @__PURE__ */ f(x1, { task: e }) })
    }
  );
}
export {
  w1 as FigraniumEmbed
};
