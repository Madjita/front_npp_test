import { InputNumber, Select } from 'antd';
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

const CustomInputNumber: React.FC<Props> = (props) => {

  const handleChange = (value: any) => {

    props.handleSave({ ...props.record, toolCount: value});

  };


    return(
        <InputNumber
        
        onChange={handleChange}
        />
      );
}

export default CustomInputNumber;