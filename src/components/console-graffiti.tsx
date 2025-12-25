"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    showSecret?: () => void;
  }
}

export function ConsoleGraffiti() {
  useEffect(() => {
    console.log(
      "%cBuilt with ❤️ by Manuj",
      "color: #22d3ee; font-size: 16px; font-weight: bold;",
    );

    console.log(
      "%c💡 Psst... try typing %cshowSecret()%c to unlock something special!",
      "color: #94a3b8; font-size: 13px;",
      "color: #22d3ee; font-weight: bold; background: #1e293b; padding: 2px 6px;",
      "color: #94a3b8; font-size: 13px;",
    );

    // Easter egg function
    window.showSecret = () => {
      console.clear();
      console.log(
        "%c🎉 You found it!",
        "color: #22d3ee; font-size: 24px; font-weight: bold;",
      );
      console.log(
        '%c"Code is like humor. When you have to explain it, it\'s bad."',
        "color: #a855f7; font-size: 14px; font-style: italic;",
      );
    };
  }, []);

  return null;
}
