// ❌ errado
// export { default } from './Home'

// ✅ certo
import Header from '../components/Header'
import { Button } from "../components/Button"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Página Home</h1>
        <Button>Ver Restaurantes</Button>
      </main>
    </>
  )
}

export default Home

