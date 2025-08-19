import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container, Hero, Title, Subtitle, Cards, Card } from './styles'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <Title>Descubra restaurantes incríveis</Title>
          <Subtitle>Peça seus pratos favoritos com poucos cliques</Subtitle>
          <Link to="/restaurante/1">
            <Button>Explorar restaurantes</Button>
          </Link>
        </Hero>

        <Cards>
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <img
                src={`https://picsum.photos/seed/efood${i}/640/360`}
                alt=""
              />
              <div className="content">
                <h3>Restaurante {i}</h3>
                <p>Culinária italiana • $$</p>
                <Link to={`/restaurante/${i}`}>
                  <Button full>Ver menu</Button>
                </Link>
              </div>
            </Card>
          ))}
        </Cards>
      </Container>
    </>
  )
}

export default Home
