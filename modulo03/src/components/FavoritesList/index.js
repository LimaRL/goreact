import React from 'react'
import propTypes from 'prop-types'

import { Container } from './styles'

const FavoritesList = ({ favorites }) => (
  <Container>
    <ul>
      {favorites.map(favorite => (
        <li key={favorite.id}>
          <p>
            <strong>{favorite.name}</strong>({favorite.description})
          </p>
          <a href={favorite.url}>Acessar</a>
        </li>
      ))}
    </ul>
  </Container>
)

FavoritesList.propTypes = {
  favorites: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      description: propTypes.string,
      url: propTypes.string
    })
  ).isRequired
}

export default FavoritesList
