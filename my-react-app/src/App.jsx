import ThreeCanvas from './components/ThreeCanvas'
import SidePanel from './components/SidePanel'
import './App.css'

function App() {
  return (
    <div className="app">
      <ThreeCanvas />

      <div className="ui-overlay">
        <header className="app-header">
          <h1>PWB Class 02</h1>
          <p className="app-header__hint">Drag to orbit · Scroll to zoom</p>
        </header>

        <SidePanel />
      </div>
    </div>
  )
}

export default App
