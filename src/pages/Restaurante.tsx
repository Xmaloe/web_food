// ❌ errado
// export { default } from './Restaurante'

// ✅ certo
import Header from '../components/Header'
import { Button } from "../components/Button"

const Restaurante = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Página Restaurante</h1>
        <Button>Fazer Pedido</Button>
      </main>
    </>
  )
}

export default Restaurante

