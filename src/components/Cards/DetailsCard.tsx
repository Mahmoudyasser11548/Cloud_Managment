import { Button, Card } from '@fluentui/react-components'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeftRegular, ChevronRightRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageItem } from '@utils';

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
            <Button appearance='subtle' icon={getLocalStorageItem("language") === "en" ? <ChevronLeftRegular /> : <ChevronRightRegular />} onClick={() => navigate(-1)}/>
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