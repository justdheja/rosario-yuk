import { useEffect, useState } from 'react';

interface BeadRingProps {
  count: number;
  current: number;
  /**
   * The measured element itself, tracked with a callback ref. A plain ref object
   * is not enough: AnimatePresence mode="wait" unmounts and remounts the card on
   * every step, and a ref object's identity never changes, so observers would
   * stay bound to a node that no longer exists.
   */
  targetEl: HTMLElement | null;
  gap?: number;
  /** Per-step flags: true renders a bigger bead (Our Father beads on a real rosary). */
  large?: boolean[];
}

interface Size {
  w: number;
  h: number;
}

export default function BeadRing({
  count,
  current,
  targetEl,
  gap = 12,
  large = [],
}: BeadRingProps) {
  const [size, setSize] = useState<Size>({ w: 0, h: 0 });

  useEffect(() => {
    if (!targetEl) return;

    const measure = () => {
      const rect = targetEl.getBoundingClientRect();
      // A detached element reports 0x0. Storing that would unmount the ring,
      // so ignore empty measurements and keep the last good size.
      if (rect.width === 0 || rect.height === 0) return;
      setSize({ w: rect.width + gap * 2, h: rect.height + gap * 2 });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [targetEl, gap]);

  if (!size.w || !size.h || count === 0) return null;

  const w = size.w;
  const h = size.h;
  const r = Math.min(28, w / 2, h / 2);
  const straightTop = Math.max(0, w - 2 * r);
  const straightSide = Math.max(0, h - 2 * r);
  const arc = (Math.PI / 2) * r;
  const perimeter = 2 * straightTop + 2 * straightSide + 4 * arc;

  const pointAt = (t: number) => {
    let d = ((t % 1) + 1) % 1 * perimeter;
    const quarter = Math.PI / 2;

    if (d <= straightTop) return { x: r + d, y: 0 };
    d -= straightTop;

    if (d <= arc) {
      const a = (d / arc) * quarter;
      return { x: w - r + Math.sin(a) * r, y: r - Math.cos(a) * r };
    }
    d -= arc;

    if (d <= straightSide) return { x: w, y: r + d };
    d -= straightSide;

    if (d <= arc) {
      const a = (d / arc) * quarter;
      return { x: w - r + Math.cos(a) * r, y: h - r + Math.sin(a) * r };
    }
    d -= arc;

    if (d <= straightTop) return { x: w - r - d, y: h };
    d -= straightTop;

    if (d <= arc) {
      const a = (d / arc) * quarter;
      return { x: r - Math.sin(a) * r, y: h - r + Math.cos(a) * r };
    }
    d -= arc;

    if (d <= straightSide) return { x: 0, y: h - r - d };
    d -= straightSide;

    const a = (d / arc) * quarter;
    return { x: r - Math.cos(a) * r, y: r - Math.sin(a) * r };
  };

  return (
    <div
      className="pointer-events-none absolute"
      style={{ inset: -gap }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, index) => {
        // First and last steps (opening/closing Sign of the Cross) share one ♰ at the ring's start.
        if (index === count - 1 && count > 1) return null;
        const isCross = index === 0;
        const { x, y } = pointAt(index / Math.max(1, count - 1));
        const isCurrent = isCross ? current === 0 || current === count - 1 : index === current;
        const isDone = index < current;

        if (isCross) {
          return (
            <span
              key={index}
              style={{ left: `${x}px`, top: `${y}px` }}
              className={[
                'absolute -translate-x-1/2 -translate-y-1/2 select-none text-lg leading-none transition-all duration-300',
                isCurrent ? 'scale-150 text-amber-600' : current > 0 ? 'text-amber-300' : 'text-stone-300',
              ].join(' ')}
            >
              ♰
            </span>
          );
        }

        return (
          <span
            key={index}
            style={{ left: `${x}px`, top: `${y}px` }}
            className={[
              `absolute ${large[index] ? 'h-4 w-4' : 'h-2.5 w-2.5'} -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300`,
              isCurrent
                ? 'scale-150 border-amber-600 bg-amber-600 shadow-md shadow-amber-300'
                : isDone
                  ? 'border-amber-300 bg-amber-300'
                  : 'border-stone-300 bg-white',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}