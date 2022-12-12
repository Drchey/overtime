import React from 'react'
import Sidebar from '../component/Sidebar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <div className="header-content">
          <span>Dashboard</span>{' '}
          <span>
            <ExitToAppIcon
              style={{
                fontWeight: 'bold',
                fontSize: '45px',
                cursor: 'pointer',
              }}
            />{' '}
          </span>{' '}
        </div>
        <div className="header-section">
          <div className="section-card card">dkd</div>
          <div className="section-card card">dkd</div>
          <div className="section-card card">dkd</div>
          <div className="section-card card">dkd</div>
        </div>
        <div>
          <table
            className="table table-striped"
            style={{
              marginTop: '30px',
              border: '1px solid teal',
              borderRadius: '20px',
            }}
          >
            <thead className="table-primary ">
              <th>Hwlpo</th>
              <th>Hwlpo</th>
              <th>Hwlpo</th>
              <th>Hwlpo</th>
            </thead>
            <tbody>
              <tr>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
              </tr>
              <tr>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
              </tr>
              <tr>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
                <td>hshs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
