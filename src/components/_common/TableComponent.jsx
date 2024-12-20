import React, { useState } from "react";
import { Table, Dropdown, Menu, Button, Badge } from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { useSidebarContext } from "../../context/SidebarContext";
import { useJobIdContext } from "../../context/JobIdContext";


const TableComponent = ({ data, columns, onEdit, onDelete , userType}) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const {updateSelectedValue} = useSidebarContext()
  const {updateJobSelecton} = useJobIdContext()

  const enhancedColumns = [
    ...columns.map((column) => ({
      title: column.header,
      dataIndex: column.accessor,
      key: column.accessor,
      render: column.render
        ? column.render // If render function exists, use it
        : (value) =>
            column.type === "badge" ? (
              <Badge
                status={
                  value === "Supervisor"
                    ? "processing"
                    : value === "Technician"
                    ? "warning"
                    : value === "Completed"
                    ? "success"
                    : "default"
                }
                text={value}
              />
            ) : (
              value
            ), // Default render logic
    })),
    {
      title: "Options",
      key: "options",
      render: (_, row, index) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => onEdit(row)}>
                View
              </Menu.Item>
              {userType==='supervisor'&&(<>
                <Menu.Item key="edit" onClick={() => {
                  updateJobSelecton(row)
                   updateSelectedValue('compilechecklist')
                  }}>
                Compile Checklist
              </Menu.Item>
              </>)}
          {userType!='labtechnician'&&(<>

            <Menu.Item key="edit" onClick={() => onEdit(row)}>
                Edit
              </Menu.Item>
              <Menu.Item key="delete" onClick={() => onDelete(row)}>
                Delete
              </Menu.Item>

          </>)}
          {userType==='labtechnician'&&(<>
            <Menu.Item key="edit" onClick={() => {
               updateJobSelecton(row)
               updateSelectedValue('testcompilation')
            }
            }>
              Compile Test
              </Menu.Item>
          </>)}
            
            </Menu>
          }
          trigger={["click"]}
          visible={dropdownVisible === index}
          onVisibleChange={(visible) =>
            setDropdownVisible(visible ? index : null)
          }
        >
          <Button type="default">
            <CiMenuKebab color="green" />
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <Table
        dataSource={data}
        columns={enhancedColumns}
        pagination={{ pageSize: 5 }}
        rowKey={(record) => record.id}
        className="antd-table-custom"
      />
    </div>
  );
};

export default TableComponent;
