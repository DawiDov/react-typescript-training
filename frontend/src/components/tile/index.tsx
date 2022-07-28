import React from 'react'
import { Avatar, Grid, Box, Paper, Typography } from '@mui/material'
import { TypeArticles } from 'redux/reducers/articles/types'
import lock from '../../icons/lock.png'
import 'components/tile/index.sass'

const Tile: React.FC<TypeArticles> = ({ pk, title, label, is_blocked }) => ( // eslint-disable-line
  <Box key={pk}>
    <Paper
      className="tile"
      elevation={5}
      variant="elevation"
      sx={{
        height: '90px',
        width: 'calc(100vw - 60px)',
        borderRadius: '10px',
        backgroundColor: '#18a6d1',
      }}>
      <Grid
        container
        height="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: '0 35px 0 20px',
        }}>
        <Avatar
          variant="square"
          alt="Remy Sharp"
          src={is_blocked ? lock : label} // eslint-disable-line
          sx={{ margin: '0 5px 0 0', width: '60px', height: '60px' }}
        />
        <Box sx={{ textAlign: 'center', maxWidth: '220px' }}>
          <Typography
            sx={{
              wordWrap: 'break-word',
              fontSize: '25px',
              fontFamily: 'Jost, sans-serif',
            }}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  </Box>
)

export default Tile
