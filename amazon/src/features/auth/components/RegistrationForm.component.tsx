import { Box, Grid, TextField, InputLabel, Typography, Button, Divider  } from '@mui/material'
import { FC, FormEvent } from 'react'
import { Link } from 'react-router-dom';

const RegistrationForm: FC = () => {

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Clicked')
  }

  return (
    <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
      <form onSubmit={onSubmitHandler}>
        <Grid container direction='column' justifyContent='flex-start'>
          <Typography variant='h4' component='h1'>
            Create Account
          </Typography>
          <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='name'>Name</InputLabel>
          <TextField type='text' name='name' id='name' variant='outlined' size='small'/>
          
          <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='email'>Email</InputLabel>
          <TextField type='text' name='email' id='email' variant='outlined' size='small'/>

          <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='password'>Password</InputLabel>
          <TextField type='password' name='password' id='password' variant='outlined' size='small' placeholder='Minimun 6 chars'/>

          <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='confirmPassword'>Confirm Password</InputLabel>
          <TextField type='password' name='confirmPassword' id='confirmPassword' variant='outlined' size='small' />

          <Button variant= 'contained' style={{marginTop: '16px', height: '31px', backgroundColor:'#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}}type='submit'>Register</Button>

        </Grid>
      </form>
      <div style={{marginTop: '30px'}}>
        <small>
          <span>By creating an account, you agree to the eCommerce Conditions</span>
        </small>
      </div>
      <Divider sx={{marginTop: '36px', marginBottom: '36px'}}/>
      <div style={{marginTop: '30px'}}>
        <small>
          <span>Already have an account?</span>
          <Link to='/signin' style={{textDecoration: 'none', color: '#007185', marginLeft: '5px'}}>Sign-In</Link>
        </small>

      </div>
    </Box>
  )
}

export default RegistrationForm