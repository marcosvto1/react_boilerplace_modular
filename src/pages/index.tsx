import React from 'react'
import { Header } from '../shared/components/header';
import { SideMenu } from '../shared/components/sidemenu';
import Layout from '../shared/layout/layout';
const IndexPage: React.FC = () => {
  
  function handleToggle() {}
  
  return (
    <>
      <Layout>
        <Header title={'Sistema administrativo'} />
        <SideMenu
          open={true}
          toogle={() => handleToggle() }
        ></SideMenu>
      </Layout>
    </>
  )
}

export default IndexPage;

