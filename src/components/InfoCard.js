import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loading } from './Loader'
import { LocationSvg } from './icons/LocationSvg'
import { PriceSvg } from './icons/PriceSvg'
import { TagSvg } from './icons/TagSvg'
import { Button } from './Button'
import { Container } from './StyledCollection'
import { getAuth, SERVER_URL } from '../App'
import { AnswerForm } from './AnswerForm'

const Background = styled.div`
  border:#F3F3F3 solid 6px;
  border-radius:6px;
  color:#514e4c;
`

const Wrap = styled.div`
  padding: 10px;
  text-align: left;
`

const Title = styled.h1`
  font-size:20px;

  @media (min-width: 600px) {
    font-size:26px;
  }
`

const Text = styled.p`
  margin-bottom:40px;
  font-size:16px;

  @media (min-width: 600px) {
    font-size:18px;
  } 
`

const Meta = styled.div`
  display: flex;
  margin: 15px 0;
  font-size: 16px;

  svg {
    flex-shrink: 0;
    margin-right:8px;
  }
`
const Tag = styled(TagSvg)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`

const Image = styled.img`
  box-sizing: border-box;
  width: 100% ;
  height: auto;
  border-bottom: 0;
`

export const InfoCard = ({ match: { params: { id } } }) => {
  const [ad, setAd] = useState(null)
  const [loading, setLoading] = useState(true)
  const { accessToken, userId } = getAuth()
  const history = useHistory()
  const [showAnswer, setShowAnswer] = useState(false)
  const [adVisibility, setAdVisibility] = useState(true)

  useEffect(() => {
    fetch(`${SERVER_URL}/ads/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAd(json)
        setLoading(false)
      })
  }, [id])

  const handleRemoval = () => {
    const confirmed = window.confirm('Do you really want to remove this one?')
    if (confirmed) {
      fetch(`${SERVER_URL}/ads/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: accessToken
        }
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Error')
        }
        history.push('/mypage')
      }).catch((err) => {
        console.error(err)
      })
    }
  }

  if (ad === null) {
    return null
  }

  const MY_AD = userId === ad.userId

  return (
    <Container>
      {adVisibility && (
        <Background>
          {loading && <Loading />}

          {!loading && (
            <>
              <Image src={ad.imageUrl} />
              <Wrap>
                <Title>{ad.title}</Title>
                <Text>{ad.description}</Text>
                <Meta><Tag fill="#666" /> {ad.type}</Meta>
                <Meta><LocationSvg /> {ad.location}</Meta>
                <Meta><PriceSvg /> {ad.price > 0 ? `${ad.price} kr` : 'Free'}</Meta>
                {!showAnswer && !MY_AD && (
                  <Button label="Adopt this one" onClick={() => setShowAnswer(true)} />
                )}
                {MY_AD && <Button label="Remove" onClick={handleRemoval} bg="#ed5858" />}
              </Wrap>
            </>
          )}
        </Background>
      )}
      {showAnswer && (
        <AnswerForm id={id} onSubmit={() => setAdVisibility(false)} />
      )}
    </Container>
  )
}
