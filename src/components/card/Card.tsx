import { FaStar } from 'react-icons/fa'
import Tag from '../tags/Tag'
import { CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardPrice, CardStars, CardTitle } from './CarsStyles'

type CardProps = {
  foodId?: string
  restaurantId?: string
  image: string
  title: string
  description: string
  price?: string
  stars?: number
  country?: string
  highlight?: boolean
  children?: React.ReactNode
}

export default function Card({ foodId, restaurantId, image, title, description, price, stars, country, highlight, children, ...props }: CardProps) {
  const id = restaurantId || foodId
  if (!id) {
    return <p>Id inválido</p>
  }

  return (
    <CardContainer {...props}>
      <CardHeader>
        {highlight && <Tag>Destaque da Semana</Tag>}
        {country && <Tag>{country}</Tag>}
      </CardHeader>
      <CardImage src={image} alt={title || 'Default Alt Text'} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {price !== undefined && <CardPrice>{price}</CardPrice>}
        {stars !== undefined && (
          <CardStars>
            {stars} <FaStar />
          </CardStars>
        )}
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </CardContainer>
  )
}
