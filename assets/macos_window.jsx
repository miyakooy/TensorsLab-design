const macWindowShell = {
  frame: {
    position: 'relative',
    width: '100%',
    borderRadius: 18,
    background: '#e2e8f0',
    padding: 12,
    boxSizing: 'border-box',
    boxShadow: '0 22px 64px rgba(15, 23, 42, 0.18)',
  },
  chrome: {
    height: 34,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 12px',
    borderRadius: '12px 12px 0 0',
    background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  },
  lights: {
    display: 'flex',
    gap: 6,
    marginRight: 10,
  },
  light: (color) => ({ width: 10, height: 10, borderRadius: 999, background: color }),
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    color: '#334155',
  },
  content: {
    borderRadius: '0 0 14px 14px',
    overflow: 'hidden',
    background: '#ffffff',
  },
};

export function MacosWindow({ children, title = 'TensorsLab', className = '', style = {} }) {
  return (
    <div className={className} style={{ ...macWindowShell.frame, ...style }}>
      <div style={macWindowShell.chrome}>
        <div style={macWindowShell.lights}>
          <span style={macWindowShell.light('#ff5f57')} />
          <span style={macWindowShell.light('#febc2e')} />
          <span style={macWindowShell.light('#28c840')} />
        </div>
        <div style={macWindowShell.title}>{title}</div>
        <div style={{ width: 38 }} />
      </div>
      <div style={macWindowShell.content}>{children}</div>
    </div>
  );
}
