import React, { Suspense } from 'react'
import {AppRouter} from "./Router/AppRouter"

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App
