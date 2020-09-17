import React from "react";
import { CCard, CCardBody, CCol, CDataTable, CRow } from "@coreui/react";

import userData from "../users/UserData";

const fields = ["applicant", "recipient", "title", "status"];

const UserTables = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
              <CDataTable
                items={userData}
                fields={fields}
                itemsPerPage={5}
                pagination
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserTables;
