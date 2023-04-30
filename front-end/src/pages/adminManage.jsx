import React from 'react';
import NavBar from '../components/NavBar';
import Admin from '../components/Admin';
import SAdminManage from '../styles/pages/SAdminManage';

function AdminManage() {
  return (
    <SAdminManage>
      <NavBar page="admin" />
      <div>
        <Admin />
      </div>
    </SAdminManage>
  );
}

export default AdminManage;
