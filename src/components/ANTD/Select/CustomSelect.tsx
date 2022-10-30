import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { ITool, IUser } from '../../IDataInterface/IDataInterface';
import { Item } from '../Table/TableANTD';

const { Option } = Select;


interface Props extends React.HTMLAttributes<HTMLElement> {
  record: Item,
  dataIndex: string,
  
  handleSave: (record: Item) => void;
}

function getFIO(item: IUser)
{
  let FIO =  item.firstName +" "+ item.lastName +" "+ item.middleName

  return FIO;
}

function getTool(item: ITool)
{
  let tool =  item.name ;//+" ( "+item.count+" )"
  return tool;
}

const CustomSelect: React.FC<Props> = (props) => {

  const {users} = useTypedSelector(state=> state.users);
  const {tools} = useTypedSelector(state=> state.tools);

  const handleChange = (value: any) => {

    
    switch(props.dataIndex)
    {
      case 'user_FirstSecondMiddle':
      {

        let item =  users[value];
         props.handleSave({ ...props.record, user_FirstSecondMiddle: getFIO(item),userId: item.id});
         break;
      }
      case 'toolName':
      {
        let itemTool =  tools[value];
        props.handleSave({ ...props.record, toolName: getTool(itemTool), toolId: itemTool.id});
        break;
      }
    }
  };


    return(
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare((optionB!.children as unknown as string).toLowerCase())
          }
          onChange={handleChange}
        >
          {
            props.dataIndex === "user_FirstSecondMiddle"  ? users.map((item,index) => {
              return (
                <Option key={item.id} value={index}>
                  {getFIO(item)}
                </Option>
              )
            }) :
            tools.map((item,index) => {
              return (
                <Option key={item.id} value={index.toString()}>
                  {getTool(item)}
                </Option>
              )
            })

          }
        </Select>
      );
}

export default CustomSelect;