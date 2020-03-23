import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDebounce } from 'use-debounce'
import { Loading } from './Loader'
import { LinkAd } from './LinkAd'
import { GlassSvg } from './icons/GlassSvg'
import { Ad, Ads, Container } from './StyledCollection'
import { SERVER_URL } from '../App'

const Header = styled.div` 
  display:flex;
  height:400px;
  width:auto;
  text-align:center;
  justify-content:center;

  @media (min-width: 768px) {
    height:500px;

  }
`

const HeaderText = styled.div`
  display:block;
  font-family: 'Cherry Swash', cursive;

  h1 {
    font-weight: normal;
    font-size:36px;

    @media (min-width: 768px) {
    font-size: 45px;
    }
  }

  h2 {

    font-weight: normal;
    font-size: 26px;
    margin: 0;
  }

  a {
    color:white;
    cursor:pointer;
  } 
`

const Outer = styled(Container)`
  @media (min-width: 768px) {
    max-width: 1000px;
  }

  h2 {
    margin: 40px 0 20px;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 18px;
    padding:0 40px;
    line-height:1.5;
  }


 @media (min-width: 768px) {
    h2 {
      padding:0;
    }
  }
`

const Form = styled.form` 
  text-align: center;
  position:relative;
  margin: 0 auto 20px;
  max-width:400px;

  svg {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:8px;
  }
`

const SearchField = styled.input`
  width:100%;
  height:40px;
  text-align: center;
  border: none;
  border-radius:6px;
  font-size:18px;
  background-color: #F3F3F3;
`

const HeaderImage = styled.img`
width:auto;
  height:150px;
  opacity:80%;
  margin-bottom:20px;

  @media (min-width: 768px) {
  height:250px;
  }
`
export const StartPage = () => {
  const [search, setSearch] = useState('')
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery] = useDebounce(search, 500)

  useEffect(() => {
    fetch(`${SERVER_URL}/ads?search=${searchQuery}`)
      .then((res) => res.json())
      .then((json) => {
        // json.reverse()
        setAds(json)
        setLoading(false)
      })
  }, [searchQuery])

  return (
    <>
      <Header>
        <HeaderText>
          <h1>Plant adoption</h1>
          <HeaderImage src="/assets/1419168.png" />
          <h2>Adopt a plant</h2>
          <h2>in need of a new home</h2>
        </HeaderText>
      </Header>

      <Outer>
        <Form>
          <GlassSvg />
          <SearchField
            type="search"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            placeholder="Search" />
        </Form>

        {loading
          && <Loading />}

        {!loading && (
          <>
            <h2>Plants waiting for a second chance</h2>
            <Ads>
              {ads.map((ad) => {
                return (
                  <Ad key={ad._id}>
                    <LinkAd
                      id={ad._id}
                      title={ad.title}
                      location={ad.location}
                      price={ad.price}
                      imageUrl={ad.imageUrl} />
                  </Ad>
                );
              })}
            </Ads>
          </>
        )}
      </Outer>
    </>
  )
}