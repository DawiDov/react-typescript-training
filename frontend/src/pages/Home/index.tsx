import React, { useEffect } from 'react'

import useActions from 'hooks/useActions'
import { useTypedSelector } from 'redux/store'

import { TypeArticles } from 'redux/reducers/articles/types'

import Tile from 'components/tile'
import Pagi from 'components/pagi'

import { Container, Grid } from '@mui/material'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Home: React.FC = () => {
  const { getArticles } = useActions()
  useEffect(() => {
    getArticles()
  }, [])
  const { articles } = useTypedSelector((state) => ({
    articles: state.articlesReducer.articles,
  }))
  return (
    <Container
      sx={{
        backgroundColor: '#FFDEE9',
        backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      }}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: 'calc(100vh - 60px)' }}>
        {articles &&
          articles.map(
            (elem: TypeArticles): ReactJSXElement => <Tile {...elem} />, // eslint-disable-line
          )}
        <Pagi />
      </Grid>
    </Container>
  )
}

export default Home
