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
  border:#F3F3F3 solid 3px;
  border-radius:6px;
`

const Title = styled.h3`
  padding: 0 10px;
  flex: 1;
  text-align:left;

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
  width:auto;
  margin-top:auto;
  align-items:stretch;
  justify-content:space-between;
  background-color:#F3F3F3;

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
        <PlantImg imageUrl={imageUrl} />
        <Title>{title}</Title>
        <Wrap>
          <Text><Location /> {location}</Text>
          <Text><Price /> {price > 0 ? `${price} kr` : 'Free'}</Text>
          <TextBlue><Heart fill="white" /> Pick me!</TextBlue>
        </Wrap>
      </Container>
    </NewLink>
  )
}