import { Form, Input, InputNumber, InputRef } from "antd";
import { useEffect, useRef } from "react";
import CustomInputNumber from "../InputNumber/CustomInputNumber";
import CustomSelect from "../Select/CustomSelect";
import { Item } from "./TableANTD";


export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
    
    handleSave: (record: Item) => void;
    
  }
  
  const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    handleSave,
    ...restProps
  }) => {


    const inputNode = inputType === 'number' ? <CustomInputNumber record={record} dataIndex={dataIndex} handleSave={handleSave} /> : <CustomSelect record={record} dataIndex={dataIndex} handleSave={handleSave}/> ; //dataIndex  === 'toolName' ? <CustomSelect /> : <Input/>
  
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
};

export default EditableCell;