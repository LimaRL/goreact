import styled from 'styled-components'
import { darken, lighten } from 'polished'

// const primaryColor = '#9b65e6'
const successColor = '#63f5b0'
// const alertColor = '#f80'
const dangerColor = '#f04'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  display: flex;

  position: relative;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: ${props => (props.withError ? `2px solid ${dangerColor}` : 0)};
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    width: 75px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: ${successColor};
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: ${darken(0.2, successColor)};
    }
  }

  ${props =>
    props.withError &&
    `&:after {
      content: '${props.withError} not found!';

      position: absolute;
      bottom: -55px;
      width: 100%;
      height: 40px;

      text-align: center;
      font-size: 20px;
      color: #fff;
      line-height: 40px;

      background: ${lighten(0.2, dangerColor)}
      border-radius: 3px;
    }`}
`
