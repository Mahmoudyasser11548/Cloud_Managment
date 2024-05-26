import { Card } from '@fluentui/react-components'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface PrimaryCardProps {
  title: string
  actions: ReactNode
  body: ReactNode
}

const PrimaryCard = ({title, actions, body}: PrimaryCardProps) => {
  const {t} = useTranslation()

  return (
    <>
      <Card>
        <div className="header px-6 py-6 flex items-center justify-between">
          <h1 className='font-bold m-0'>{t(title)}</h1>
          <div className="actions flex items-center justify-between space-x-2">
            {actions}
          </div>
        </div>
      </Card>
      <Card className='my-4'>
        <div className='px-6 py-4'>
          {body}
        </div>
      </Card>
    </>
  )
}

export default PrimaryCard