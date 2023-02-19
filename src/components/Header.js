import React from 'react';
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { Box, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>

            <Button href="/" color='inherit'>
              {t('btns.home')}
            </Button>
            <Button href="/about" color='inherit'>
              {t('btns.about')}
            </Button>

            <Button id="fi" onClick={() => i18n.changeLanguage('fi')} color='inherit'>
              fi
            </Button>
            <Button id="en" onClick={() => i18n.changeLanguage('en')} color='inherit'>
              en
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Header