import React from "react";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";

import userData from "./UserData";

const fields = [
  {
    key: "name",
    label: "이름",
    sorter: false,
    filter: false,
  },
  {
    key: "username",
    label: "닉네임",
    sorter: false,
    filter: false,
  },
  {
    key: "email",
    label: "이메일",
    sorter: false,
    filter: false,
  },
  {
    key: "createdAt",
    label: "가입일",
    sorter: false,
    filter: false,
  },
  {
    key: "edit",
    label: "",
    sorter: false,
    filter: false,
  },
  {
    key: "delete",
    label: "",
    sorter: false,
    filter: false,
  },
];

const UserTable = () => {
  const history = useHistory();

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
              <CDataTable
                items={userData}
                fields={fields}
                itemsPerPage={15}
                pagination
                clickableRows
                onRowClick={(item) => history.push(`/show/${item.id}`)}
                scopedSlots={{
                  edit: (item) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            history.push(`/edit/${item.id}`);
                          }}
                        >
                          수정
                        </CButton>
                      </td>
                    );
                  },
                  delete: (item) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="danger"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          삭제
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserTable;
