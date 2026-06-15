import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotebookApp from './NotebookApp'
import { ITERATIONS, PROJECT } from './iterations'

const Agentation = lazy(() =>
  import('agentation').then(m => ({ default: m.Agentation })).catch(() => ({ default: () => null }))
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotebookApp iterations={ITERATIONS} project={PROJECT} />
    {/* Agentation is a dev-only annotation tool — keep it out of the shared static build. */}
    {import.meta.env.DEV && (
      <Suspense>
        <Agentation />
      </Suspense>
    )}
  </StrictMode>,
)
