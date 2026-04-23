const deckStyles = {
  shell: {
    position: 'relative',
    width: '100%',
    minHeight: 720,
    overflow: 'hidden',
    background: '#ffffff',
    color: '#0f172a',
    borderRadius: 24,
  },
  viewport: {
    position: 'absolute',
    inset: 0,
    padding: 56,
    boxSizing: 'border-box',
  },
  counter: {
    position: 'absolute',
    right: 28,
    bottom: 20,
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 12,
    color: '#64748b',
  },
};

export function DeckSlide({ active, children, notes }) {
  return (
    <section
      style={{
        display: active ? 'flex' : 'none',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
      }}
    >
      {children}
      {notes ? <aside data-speaker-notes style={{ display: 'none' }}>{notes}</aside> : null}
    </section>
  );
}

export function DeckStage({ slides = [], initialIndex = 0, title = 'TensorsLab Deck' }) {
  const [index, setIndex] = React.useState(initialIndex);
  const total = slides.length;

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        setIndex((current) => Math.min(total - 1, current + 1));
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        setIndex((current) => Math.max(0, current - 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total]);

  return (
    <div style={deckStyles.shell} aria-label={title}>
      <div style={deckStyles.viewport}>
        {slides.map((slide, slideIndex) => (
          <DeckSlide key={slide.key ?? slideIndex} active={slideIndex === index} notes={slide.notes}>
            {typeof slide.render === 'function' ? slide.render({ index: slideIndex, active: slideIndex === index }) : slide.content}
          </DeckSlide>
        ))}
      </div>
      <div style={deckStyles.counter}>
        {index + 1} / {Math.max(total, 1)}
      </div>
    </div>
  );
}
