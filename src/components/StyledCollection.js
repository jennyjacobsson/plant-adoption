
import styled from 'styled-components/macro'

export const Ad = styled.div`
  margin-bottom:16px;

  @media (min-width: 768px) {
    margin-bottom:40px;
    width: calc(50% - 40px);
    flex-shrink: 1;
    padding: 0 20px;
  }
`

export const Ads = styled.div`
  max-width: 500px;
  margin: auto;

  @media (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    max-width: none;
  }
`

export const Btn = styled.button`
  border-radius: 6px;
  font-size: 18px;
  border: 0;
  font-weight: 400;
  padding: 8px 20px;
  background-color:#222;
  color:white;
`

export const Container = styled.div`
  text-align: center;
  padding: 10px;

@media (min-width: 600px) {
  max-width: 600px;   
  width:100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
`

export const ErrorText = styled.p`
color:red;
`

export const Form = styled.form`
  text-align:center;
  justify-content:center;
  align-items:center;
  max-width: 400px;
  margin: 0 auto 40px;
  padding:20px;
  border-radius:8px;
`
export const Image = styled.img`
  height:150px;
  flex-shrink:0;
  flex-grow:0;
  width:auto;
  object-fit:contain;
`

export const ImageWrap = styled.div`
  display:flex;
  flex-direction:column;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-radius: 6px;
  border:#F3F3F3 solid 4px;
  box-shadow:none;
  appearance: none;
`

export const Title = styled.h1`
  font-size:18px;
  margin:20px;


 @media (min-width: 768px) {
  font-size:24px;   
 }
`