import ApplicationRoutes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <ApplicationRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
