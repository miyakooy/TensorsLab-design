const androidShell = {
  frame: {
    position: 'relative',
    width: '100%',
    maxWidth: 420,
    aspectRatio: '393 / 873',
    margin: '0 auto',
    borderRadius: 42,
    background: '#0b1220',
    padding: 12,
    boxSizing: 'border-box',
    boxShadow: '0 24px 72px rgba(2, 6, 23, 0.24)',
  },
  screen: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 32,
    overflow: 'hidden',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  status: {
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 13,
    fontWeight: 600,
    color: '#0f172a',
  },
  content: {
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
  },
  navBar: {
    height: 24,
    margin: '8px auto 10px',
    width: 110,
    borderRadius: 999,
    background: 'rgba(15, 23, 42, 0.08)',
  },
};

export function AndroidFrame({ children, time = '9:41', battery = '86%', className = '', style = {} }) {
  return (
    <div className={className} style={{ ...androidShell.frame, ...style }}>
      <div style={androidShell.screen}>
        <div style={androidShell.status}>
          <span>{time}</span>
          <span>{battery}</span>
        </div>
        <div style={androidShell.content}>{children}</div>
        <div style={androidShell.navBar} />
      </div>
    </div>
  );
}
