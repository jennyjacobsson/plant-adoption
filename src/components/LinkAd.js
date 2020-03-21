import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { PlantImg } from './PlantImg'
import { LocationSvg } from './icons/LocationSvg'
import { PriceSvg } from './icons/PriceSvg'
import { HeartSvg } from './icons/HeartSvg'

const NewLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  color:#514e4c;
  background-color:#fff;
  border:#F3F3F3 solid 6px;
  border-radius:6px;
  overflow:hidden;
`
const BorderSection = styled.div`
  /* border:#F3F3F3 solid 6px;
  border-bottom:none; */
`
const Title = styled.h3`
  text-align:left;
  padding: 0 10px;
  flex: 1;

  @media (min-width: 600px) {
    font-size:22px;
  }
`

const Text = styled.p`
  display: flex;
  align-items: center;
  margin:0;
  padding: 10px 16px;
  font-size:14px;
`

const TextBlue = styled(Text)`
  background-color: #72BD78;
  color: white;
  font-weight:bold;
`

const Wrap = styled.div`
  display:flex;
  justify-content:space-between;
  width:auto;
  background-color:#F3F3F3;
  align-items:stretch;
  margin-top: auto;

  svg {
    margin-right:8px;
  }
`

const Location = styled(LocationSvg)`
  margin-right: 5px;
`

const Price = styled(PriceSvg)`
  margin-right: 5px;
`

const Heart = styled(HeartSvg)`
  margin-right: 5px;
`

export const LinkAd = ({ id, title, location, price, imageUrl }) => {
  return (
    <NewLink to={`/plants/${id}`}>
      <Container>
        <BorderSection>
          <PlantImg imageUrl={imageUrl} />
          <Title>{title}</Title>
        </BorderSection>
        <Wrap>
          <Text><Location /> {location}</Text>
          <Text><Price /> {price > 0 ? `${price} kr` : 'Free'}</Text>
          <TextBlue><Heart fill="white" /> Pick me!</TextBlue>
        </Wrap>
      </Container>
    </NewLink>
  )
}