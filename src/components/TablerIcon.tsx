"use client";

import type { ReactNode, SVGProps } from "react";
import clsx from "clsx";

type IconDefinition = ReactNode;

const icons: Record<string, IconDefinition> = {
  login: <><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M20 12h-13l3 -3m0 6l-3 -3" /></>,
  explore: <><circle cx="12" cy="12" r="9" /><path d="M16 8l-2.5 5.5l-5.5 2.5l2.5 -5.5z" /></>,
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  add_box: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6m-3 -3v6" /></>,
  admin_panel_settings: <><path d="M12 3l7 4v5c0 5 -3.5 8 -7 9c-3.5 -1 -7 -4 -7 -9v-5z" /><path d="M9 12l2 2l4 -4" /></>,
  description: <><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v13h-14z" /><path d="M9 13h6m-6 4h6" /></>,
  article: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10m-10 4h10m-10 4h6" /></>,
  rocket_launch: <><path d="M4 13a8 8 0 0 1 7 -7a8 8 0 0 1 7 7c-2 0 -4 1 -5 3l-1 2l-1 -2c-1 -2 -3 -3 -5 -3z" /><path d="M9 19l3 2l3 -2" /><circle cx="12" cy="9" r="1" /></>,
  menu: <path d="M4 6h16m-16 6h16m-16 6h16" />,
  close: <path d="M18 6l-12 12m0 -12l12 12" />,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06 .06l-2.83 2.83l-.06 -.06a1.7 1.7 0 0 0 -1.88 -.34a1.7 1.7 0 0 0 -1.03 1.56v.07h-4v-.07a1.7 1.7 0 0 0 -1.03 -1.56a1.7 1.7 0 0 0 -1.88 .34l-.06 .06l-2.83 -2.83l.06 -.06a1.7 1.7 0 0 0 .34 -1.88a1.7 1.7 0 0 0 -1.56 -1.03h-.07v-4h.07a1.7 1.7 0 0 0 1.56 -1.03a1.7 1.7 0 0 0 -.34 -1.88l-.06 -.06l2.83 -2.83l.06 .06a1.7 1.7 0 0 0 1.88 .34a1.7 1.7 0 0 0 1.03 -1.56v-.07h4v.07a1.7 1.7 0 0 0 1.03 1.56a1.7 1.7 0 0 0 1.88 -.34l.06 -.06l2.83 2.83l-.06 .06a1.7 1.7 0 0 0 -.34 1.88a1.7 1.7 0 0 0 1.56 1.03h.07v4h-.07a1.7 1.7 0 0 0 -1.56 1.03z" /></>,
  add_circle: <><circle cx="12" cy="12" r="9" /><path d="M9 12h6m-3 -3v6" /></>,
  add: <path d="M12 5v14m-7 -7h14" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4 -4" /></>,
  logout: <><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3m0 6l3 -3" /></>,
  progress_activity: <><path d="M12 3a9 9 0 1 0 9 9" /><path d="M21 3v6h-6" /></>,
  extension: <><path d="M4 8h4v-4h4a2 2 0 1 1 4 0v4h4v4a2 2 0 1 0 0 4v4h-4v-4h-4v4h-4v-4a2 2 0 1 1 -4 0z" /></>,
  edit: <><path d="M7 20h-4v-4l12 -12a2.8 2.8 0 0 1 4 4z" /><path d="M13.5 5.5l4 4" /></>,
  delete: <><path d="M4 7h16" /><path d="M10 11v6m4 -6v6" /><path d="M6 7l1 13h10l1 -13" /><path d="M9 7v-3h6v3" /></>,
  public: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18m-9 -9a15 15 0 0 1 0 18m0 -18a15 15 0 0 0 0 18" /></>,
  download: <><path d="M12 3v12" /><path d="M7 10l5 5l5 -5" /><path d="M5 21h14" /></>,
  search_off: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4 -4m-12 -12l16 16" /></>,
  expand_more: <path d="M6 9l6 6l6 -6" />,
  expand_less: <path d="M6 15l6 -6l6 6" />,
  chevron_left: <path d="M15 6l-6 6l6 6" />,
  arrow_forward: <><path d="M5 12h14" /><path d="M15 8l4 4l-4 4" /></>,
  badge_check: <><path d="M12 3l2 2l3 -.5l.5 3l2 2l-2 2l.5 3l-3 .5l-2 2l-2 -2l-3 .5l-.5 -3l-2 -2l2 -2l-.5 -3l3 -.5z" /><path d="M9 12l2 2l4 -4" /></>,
  alert_circle: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4m0 4h.01" /></>,
  file_upload: <><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v13h-14z" /><path d="M12 17v-6m-3 3l3 -3l3 3" /></>,
  send: <><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1z" /></>,
  photo: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5 -5l-11 11" /></>,
  upload: <><path d="M12 16v-12m-4 4l4 -4l4 4" /><path d="M4 16v4h16v-4" /></>,
  terminal_2: <><path d="M4 17l6 -6l-6 -6" /><path d="M12 19h8" /></>,
  arrow_back: <><path d="M5 12h14" /><path d="M9 16l-4 -4l4 -4" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a1 1 0 0 1 -1.5 .86l-6.5 -3.86l-6.5 3.86a1 1 0 0 1 -1.5 -.86z" /><path d="M12 6v10" /></>,
  hierarchy: <><circle cx="12" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /><path d="M12 7v5m0 0h-6v5m6 -5h6v5" /></>,
  braces: <><path d="M7 3h-1a2 2 0 0 0 -2 2v5a2 2 0 0 1 -2 2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" /><path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2a2 2 0 0 0 -2 2v5a2 2 0 0 1 -2 2h-1" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  device_desktop: <><rect x="3" y="4" width="18" height="13" rx="1" /><path d="M8 21h8m-4 -4v4" /></>,
  webhook: <><path d="M6 12a3 3 0 1 1 3 -3" /><path d="M15 9a3 3 0 1 1 3 3" /><path d="M12 15a3 3 0 1 1 -3 3" /><path d="M9 9l6 0m3 3l-3 6m-6 0l-3 -6" /></>,
  robot: <><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 12h.01m6 0h.01m-6 4h6" /><path d="M12 7v-3m-2 0h4" /></>,
  bug: <><path d="M9 9h6v8a3 3 0 0 1 -6 0z" /><path d="M12 4v5m-4 -3l2 2m6 -2l-2 2m-8 4h3m6 0h3m-12 4h3m6 0h3" /></>,
  save: <><path d="M5 4h12l2 2v14h-14z" /><path d="M8 4v6h8v-6m-8 16v-6h8v6" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8v-4h-12v12h4" /></>,
  check: <path d="M5 12l5 5l9 -9" />,
  external_link: <><path d="M10 6h-5v13h13v-5" /><path d="M13 5h6v6m0 -6l-9 9" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10v-3a4 4 0 0 1 8 0v3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" /></>,
  flask: <><path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2 -3l-5 -9v-6" /><path d="M7 16h10" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2" /><path d="M16 4a3 3 0 0 1 0 6m2 10v-2a5 5 0 0 0 -3 -4.6" /></>,
  share: <><circle cx="18" cy="5" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 11l8 -5m-8 7l8 5" /></>,
  shopping_cart: <><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /><path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2 -1.6l1.4 -6.4h-13.5" /></>,
  chart: <><path d="M4 19v-6m5 6v-10m5 10v-4m5 4v-14" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7v-3h8v3m-13 5h18" /></>,
  player_play: <><circle cx="12" cy="12" r="9" /><path d="M10 8l6 4l-6 4z" /></>,
  message: <><path d="M4 5h16v12h-5l-3 3l-3 -3h-5z" /><path d="M8 9h8m-8 4h5" /></>,
  home: <><path d="M3 11l9 -8l9 8" /><path d="M5 10v10h14v-10m-9 10v-6h4v6" /></>,
  plane: <><path d="M10 14l-7 -2v-2l7 1l3 -8h2l-1 8l6 2v2l-6 -1l-3 7h-2z" /></>,
  dots: <><path d="M5 12h.01m7 0h.01m7 0h.01" /></>,
};

const aliases: Record<string, string> = {
  compass: "explore", layout_dashboard: "dashboard", square_plus: "add_box", shield_check: "admin_panel_settings",
  file_description: "description", file_text: "article", rocket: "rocket_launch", x: "close", circle_plus: "add_circle",
  plus: "add", loader: "progress_activity", puzzle: "extension", pencil: "edit", trash: "delete", world: "public",
  language: "public", chevron_down: "expand_more", error: "alert_circle", upload_file: "file_upload", publish: "send",
  image: "photo", output: "terminal_2", menu_book: "book", account_tree: "hierarchy", data_object: "braces",
  my_location: "target", table_chart: "braces", monitor: "device_desktop", smart_toy: "robot", bug_report: "bug",
  content_copy: "copy", open_in_new: "external_link", sync: "progress_activity", grid_view: "dashboard", science: "flask",
  group: "users", insights: "chart", work: "briefcase", play_circle: "player_play", rate_review: "message", code: "terminal_2",
  real_estate_agent: "home", flight: "plane", more_horiz: "dots",
};

interface TablerIconProps extends SVGProps<SVGSVGElement> { name: string; }

export default function TablerIcon({ name, className, ...props }: TablerIconProps) {
  const key = aliases[name] || name;
  const content = icons[key] || icons.extension;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={clsx("inline-block h-[1em] w-[1em] shrink-0", className)} aria-hidden="true" {...props}>
      {content}
    </svg>
  );
}
