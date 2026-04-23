const iosShell = {
  frame: {
    position: 'relative',
    width: '100%',
    maxWidth: 430,
    aspectRatio: '390 / 844',
    margin: '0 auto',
    borderRadius: 56,
    background: '#050816',
    boxShadow: '0 28px 80px rgba(15, 23, 42, 0.22)',
    padding: 10,
    boxSizing: 'border-box',
  },
  screen: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 46,
    overflow: 'hidden',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  island: {
    position: 'absolute',
    top: 12,
    left: '50%',
    width: 124,
    height: 36,
    transform: 'translateX(-50%)',
    borderRadius: 999,
    background: '#000000',
    zIndex: 3,
  },
  status: {
    position: 'absolute',
    top: 12,
    left: 20,
    right: 20,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 6px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 13,
    fontWeight: 600,
    color: '#0f172a',
    zIndex: 4,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    flex: 1,
    marginTop: 54,
    marginBottom: 34,
    overflow: 'hidden',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    width: 130,
    height: 5,
    transform: 'translateX(-50%)',
    borderRadius: 999,
    background: 'rgba(255,255,255,0.65)',
  },
};

export function IosFrame({
  children,
  time = '9:41',
  signal = '•••',
  battery = '85%',
  className = '',
  style = {},
}) {
  return (
    <div className={className} style={{ ...iosShell.frame, ...style }}>
      <div style={iosShell.screen}>
        <div style={iosShell.island} />
        <div style={iosShell.status}>
          <span>{time}</span>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span>{signal}</span>
            <span>{battery}</span>
          </span>
        </div>
        <div style={iosShell.content}>{children}</div>
        <div style={iosShell.homeIndicator} />
      </div>
    </div>
  );
}
