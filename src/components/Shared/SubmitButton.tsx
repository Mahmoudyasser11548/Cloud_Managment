import { Button } from '@fluentui/react-components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CheckmarkRegular } from '@fluentui/react-icons';

const SubmitButton = ({}) => {
	const {t} = useTranslation();

  return (
    <div className='text-end'>
        <Button 
          type='submit'
					appearance='primary'
					icon={<CheckmarkRegular />}
        >
          <span className='text-base ms-1'>{t("Save")}</span>
        </Button>
    </div>
  )
}

export default SubmitButton