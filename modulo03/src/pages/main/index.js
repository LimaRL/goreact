import React, { Component } from 'react'
import { Container, Form } from './style'

import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FavoritesActions from '../../store/actions/favorites'

/**
 * components
 */
import FavoritesList from '../../components/FavoritesList'

class MainComponent extends Component {
  static propTypes = {
    addFavoriteRequest: propTypes.func.isRequired,
    favorites: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        description: propTypes.string,
        url: propTypes.string
      })
    ).isRequired
  }

  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: ''
  }

  handleChangeInput = e => {
    this.setState({ repositoryInput: e.target.value })
  }

  handleAddRepository = e => {
    e.preventDefault()
    const { addFavoriteRequest } = this.props
    addFavoriteRequest()
  }

  render () {
    const { repositoryInput, repositoryError, loading } = this.state
    const { favorites } = this.props

    return (
      <Container>
        <Form onSubmit={this.handleAddRepository} withError={repositoryError}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={this.handleChangeInput}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}
          </button>
        </Form>
        <FavoritesList favorites={favorites} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
