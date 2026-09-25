import { useCallback, useState } from 'react';
import type { MouseEvent } from 'react';

const PANEL_WIDTH = 420;
const PANEL_HEIGHT = 300;
const VIEWPORT_MARGIN = 16;
const CURSOR_OFFSET_X = 34;

interface PanelPosition {
  left: number;
  top: number;
}

function clampToViewport(x: number, y: number): PanelPosition {
  const rawLeft = x + CURSOR_OFFSET_X;
  const rawTop = y - PANEL_HEIGHT / 2;
  const maxLeft = window.innerWidth - PANEL_WIDTH - VIEWPORT_MARGIN;
  const maxTop = window.innerHeight - PANEL_HEIGHT - VIEWPORT_MARGIN;
  return {
    left: Math.min(Math.max(rawLeft, VIEWPORT_MARGIN), Math.max(maxLeft, VIEWPORT_MARGIN)),
    top: Math.min(Math.max(rawTop, VIEWPORT_MARGIN), Math.max(maxTop, VIEWPORT_MARGIN)),
  };
}

export function useHoverPreview() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [position, setPosition] = useState<PanelPosition>({ left: 0, top: 0 });

  const onRowEnter = useCallback((id: string, e: MouseEvent) => {
    setActiveId(id);
    setPosition(clampToViewport(e.clientX, e.clientY));
  }, []);

  const onRowMove = useCallback((e: MouseEvent) => {
    setPosition(clampToViewport(e.clientX, e.clientY));
  }, []);

  const onRowLeave = useCallback(() => {
    setActiveId(null);
  }, []);

  return { activeId, position, onRowEnter, onRowMove, onRowLeave };
}
