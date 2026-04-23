const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const lerp = (from, to, progress) => from + (to - from) * progress;
const mix = (a, b, progress) => ({
  x: lerp(a.x, b.x, progress),
  y: lerp(a.y, b.y, progress),
  scale: lerp(a.scale ?? 1, b.scale ?? 1, progress),
  opacity: lerp(a.opacity ?? 1, b.opacity ?? 1, progress),
});
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useAnimationClock(rate = 1, paused = false) {
  const [time, setTime] = React.useState(() => performance.now());

  React.useEffect(() => {
    if (paused) return undefined;
    let frame = 0;
    const loop = (stamp) => {
      setTime(stamp * rate);
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frame);
  }, [rate, paused]);

  return time;
}

export function useProgress(durationMs, paused = false) {
  const clock = useAnimationClock(1, paused);
  return clamp((clock % durationMs) / durationMs, 0, 1);
}

export function AnimationStage({
  children,
  className = '',
  style = {},
  background = 'linear-gradient(180deg, #f7fbff 0%, #eff7ff 100%)',
  foreground = '#0f172a',
}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 28,
        background,
        color: foreground,
        minHeight: 360,
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function MotionSprite({
  progress = 0,
  from = { x: 0, y: 0, scale: 1, opacity: 1 },
  to = { x: 0, y: 0, scale: 1, opacity: 1 },
  children,
  style = {},
}) {
  const eased = easeInOutCubic(clamp(progress));
  const state = mix(from, to, eased);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate(${state.x}px, ${state.y}px) scale(${state.scale})`,
        opacity: state.opacity,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

if (typeof window !== 'undefined') {
  window.TensorsLabAnimations = { clamp, lerp, mix, easeInOutCubic, easeOutExpo };
}
