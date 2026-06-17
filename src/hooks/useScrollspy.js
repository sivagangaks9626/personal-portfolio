import { useEffect, useState } from 'react';

/**
 * Tracks which section ID is currently in the viewport.
 * @param {string[]} ids - Array of section element IDs to observe.
 * @param {number} threshold - Intersection threshold (0–1).
 * @returns {string | null} The currently active section ID.
 */
export function useScrollspy(ids = [], threshold = 0.5) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, threshold]);

  return activeId;
}
