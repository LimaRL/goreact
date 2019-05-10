import styled from 'styled-components'
import { colors } from '../../styles/global'

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
    background: ${colors.white};
    border: ${props =>
    props.withError ? `2px solid ${colors.dangerColor}` : 0};
    font-size: 18px;
    color: ${colors.textColor};
    border-radius: 3px;
  }

  button {
    width: 75px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: ${colors.successColor};
    color: ${colors.white};
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: ${colors.successColorDark};
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
      color: ${colors.white};
      line-height: 40px;

      background: ${colors.dangerColorDark}
      border-radius: 3px;
    }`}
`
