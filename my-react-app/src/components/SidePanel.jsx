export default function SidePanel() {
  return (
    <aside className="side-panel">
      <h2 className="panel-section__title">Transform</h2>
      <p className="panel-hint">Sliders will go here.</p>

      <div className="param-row">
        <div className="param-row__header">
          <label className="param-row__label" htmlFor="rotation-y">
            Rotation Y
          </label>
          <span className="param-row__value">0.000</span>
        </div>
        <input
          id="rotation-y"
          type="range"
          disabled
          min="0"
          max="100"
          defaultValue="50"
        />
      </div>

      <div className="param-row">
        <div className="param-row__header">
          <label className="param-row__label" htmlFor="scale">
            Scale
          </label>
          <span className="param-row__value">1.000</span>
        </div>
        <input id="scale" type="range" disabled min="0" max="100" defaultValue="50" />
      </div>
    </aside>
  )
}
