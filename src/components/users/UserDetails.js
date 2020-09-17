import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import userData from './UserData';

const UserDetails = ({ match }) => {
  const user = userData.find(user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
  console.log(111, user)
  console.log(222, userDetails)

  const keyTable = {
    name: "이름",
    username: "닉네임",
    email: "이메일",
    createdAt: "가입일",
    description: "자기소개",
  };

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            {user.name}
          </CCardHeader>
          <CCardBody>
              <table className="table table-hover">
                <tbody>
                  {
                    userDetails.map(([key, value], index) =>
                      index !== 0 && (
                        <tr key={index.toString()}>
                          <td>{keyTable[key]}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserDetails;
