import React from 'react'
import { useTranslation } from 'react-i18next';

const MyContaier = () => {
  const { t, i18n } = useTranslation('translation');
  return (
    <div><p>{t('text.front_page')}</p></div>
  )
}

export default MyContaier