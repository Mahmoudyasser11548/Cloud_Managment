import PrimaryCard from '@components/Cards/PrimaryCard'
import { Button } from '@fluentui/react-components'
import React, { useEffect, useState } from 'react'
import { AddRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import { DataTable, UISkeleton } from '@components/index';
import { Columns, sampleData } from './utility/Columns';

const Firewall = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ page: 1, pageSize: 5 });
  const [loading, setLoading] = useState(true);
  const metadata = { totalItemCount: sampleData.length };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  const deleteHandler = () => {}
  const editHandler = () => {}

  return (
    <UISkeleton blocking={loading}>
      <PrimaryCard
        title="Firewall"
        filter={<div>Filter Content</div>}
        body={
          <>
            <DataTable
              keyField="id"
              data={sampleData}
              loading={loading}
              columns={Columns(editHandler, deleteHandler)}
              filter={filter}
              setFilter={setFilter}
              metadata={metadata}
              subHeader
              search
              sortServer={false}
              selectableRows={false}
            />
          </>
        }
        addButton={
          <>
            <Button appearance='primary' icon={<AddRegular />} onClick={() => navigate("/firewall-details")}>Create Rule</Button>
          </>
        }
        listCount="3"
        breadCrumbs={[
          { label: 'Home', route: '/', isActive: false },
          { label: 'FireWall', route: '/firewall', isActive: true }
        ]}
      />
    </UISkeleton>
  )
}

export default Firewall