export function DesignCanvas({ children, columns = 2, gap = 24, className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
        alignItems: 'start',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function VariantCard({ label, children, style = {} }) {
  return (
    <section
      style={{
        display: 'grid',
        gap: 12,
        ...style,
      }}
    >
      {label ? (
        <div
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#64748b',
          }}
        >
          {label}
        </div>
      ) : null}
      <div>{children}</div>
    </section>
  );
}
