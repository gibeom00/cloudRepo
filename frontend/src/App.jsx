import { useState } from 'react'
import './App.css'
import TodoApp from './TodoApp'

function App() {
  return (
    <div className="app-main">
      <TodoApp />
      
      <section id="next-steps">
        {/* ... existing next-steps content if you want to keep it, 
            but for a clean example, let's keep it simple */}
      </section>
    </div>  
  )
}

export default App
