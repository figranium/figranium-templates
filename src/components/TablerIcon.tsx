"use client";

import type { SVGProps } from "react";
import clsx from "clsx";

type IconDefinition = React.ReactNode;

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
  chevron_left: <path d="M15 6l-6 6l6 6" />,
  badge_check: <><path d="M12 3l2 2l3 -.5l.5 3l2 2l-2 2l.5 3l-3 .5l-2 2l-2 -2l-3 .5l-.5 -3l-2 -2l2 -2l-.5 -3l3 -.5z" /><path d="M9 12l2 2l4 -4" /></>,
};

const aliases: Record<string, string> = {
  compass: "explore",
  layout_dashboard: "dashboard",
  square_plus: "add_box",
  shield_check: "admin_panel_settings",
  file_description: "description",
  file_text: "article",
  rocket: "rocket_launch",
  x: "close",
  circle_plus: "add_circle",
  plus: "add",
  loader: "progress_activity",
  puzzle: "extension",
  pencil: "edit",
  trash: "delete",
  world: "public",
  chevron_down: "expand_more",
};

interface TablerIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export default function TablerIcon({ name, className, ...props }: TablerIconProps) {
  const key = aliases[name] || name;
  const content = icons[key] || icons.extension;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("inline-block h-[1em] w-[1em] shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {content}
    </svg>
  );
}
