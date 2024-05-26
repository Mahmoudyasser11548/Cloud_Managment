import PrimaryCard from '@components/Cards/PrimaryCard'
import { Button } from '@fluentui/react-components'
import React from 'react'
import { AddRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const Firewall = () => {
  const navigate = useNavigate();

  return (
    <PrimaryCard 
      title='Firewall' 
      actions={
        <>
          <Button appearance='primary' icon={<AddRegular />} onClick={() => navigate("/firewall-details")}>Create Rule</Button>
        </>
      }
      body={
        <>
          Hello World!
        </>
      }
     />
  )
}

export default Firewall