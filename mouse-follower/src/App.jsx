import { useState } from 'react';
import { useEffect } from 'react'


function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect');
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({
        x: clientX,
        y: clientY,
      });
    }
    if(enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
    },[enable])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          background: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : ' Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App