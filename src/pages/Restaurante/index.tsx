import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container, Grid, Title, Item } from './styles'
import { useParams, Link } from 'react-router-dom'

const Restaurante = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Container>
        <Title>Menu do Restaurante {id}</Title>
        <Grid>
          {[1,2,3,4,5,6].map((i) => (
            <Item key={i}>
              <img src={`https://picsum.photos/seed/plate${i}/640/360`} alt="" />
              <h3>Prato {i}</h3>
              <p>Descrição breve do prato delicioso.</p>
              <div className="actions">
                <Button>Adicionar</Button>
                <Link to="/"><Button variant="ghost">Voltar</Button></Link>
              </div>
            </Item>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Restaurante
