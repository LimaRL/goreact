import React, { Component } from 'react'
import moment from 'moment'
import api from '../../services/api'

import logo from '../../assets/logo.png'
import { Container, Form } from './style'

/**
 * components
 */
import CompareList from '../../components/CompareList'

export default class MainComponent extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositores: []
  }

  handleChangeInput = e => {
    this.setState({ repositoryInput: e.target.value })
  }

  handleAddRepository = async e => {
    e.preventDefault()

    this.setState({ loading: true })

    const { repositoryInput, repositores } = this.state
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`)

      repository.lastCommit = moment(repository.pushed_at).fromNow()

      this.setState({
        repositoryInput: '',
        repositores: [...repositores, repository],
        repositoryError: false
      })
    } catch (error) {
      this.setState({
        repositoryError: repositoryInput
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  render () {
    const {
      repositoryInput,
      repositores,
      repositoryError,
      loading
    } = this.state
    return (
      <Container>
        <img src={logo} alt="Github Compare" style={{ marginTop: 60 }} />
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
        <CompareList repositores={repositores} />
      </Container>
    )
  }
}
