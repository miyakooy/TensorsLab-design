const browserShell = {
  frame: {
    position: 'relative',
    width: '100%',
    borderRadius: 18,
    background: '#e2e8f0',
    padding: 10,
    boxSizing: 'border-box',
  },
  chrome: {
    height: 44,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '0 14px',
    borderRadius: '12px 12px 0 0',
    background: '#f8fafc',
    borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
  },
  tabs: {
    display: 'flex',
    gap: 6,
    alignItems: 'center',
  },
  tab: (active = false) => ({
    height: 20,
    minWidth: 92,
    borderRadius: 8,
    background: active ? '#dbeafe' : '#e2e8f0',
  }),
  bar: {
    flex: 1,
    height: 28,
    borderRadius: 999,
    background: '#ffffff',
    border: '1px solid rgba(148, 163, 184, 0.18)',
  },
  content: {
    borderRadius: '0 0 14px 14px',
    overflow: 'hidden',
    background: '#ffffff',
  },
};

export function BrowserWindow({ children, url = 'tensorslab.com', className = '', style = {} }) {
  return (
    <div className={className} style={{ ...browserShell.frame, ...style }}>
      <div style={browserShell.chrome}>
        <div style={browserShell.tabs}>
          <span style={browserShell.tab(true)} />
          <span style={browserShell.tab(false)} />
        </div>
        <div style={browserShell.bar} />
        <div style={{ width: 92, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', fontSize: 12, color: '#475569', textAlign: 'right' }}>{url}</div>
      </div>
      <div style={browserShell.content}>{children}</div>
    </div>
  );
}
