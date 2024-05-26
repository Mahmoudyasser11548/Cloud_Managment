import { Button, Card } from '@fluentui/react-components'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeftRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

interface DetailsCardProps {
  title: string
  body: ReactNode
}

const DetailsCard = ({title, body}: DetailsCardProps) => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <div className="header px-6 py-4 flex items-center">
          <div className="">
            <Button appearance='subtle' icon={<ChevronLeftRegular />} onClick={() => navigate(-1)}/>
          </div>
          <h1 className='font-bold ms-2'>{t(title)}</h1>
        </div>
        <hr />
        <div className='px-6 py-4'>
          {body}
        </div>
      </Card>
    </>
  )
}

export default DetailsCard