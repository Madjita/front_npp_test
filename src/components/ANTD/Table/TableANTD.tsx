import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Card, Form, InputNumber, Popconfirm, Table, Typography } from 'antd';
import EditableCell from './EditableCell';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../redux/hooks/useActions';
import { CustomizeComponent } from 'rc-table/lib/interface';
import { ITool, ITool_User, IUser } from '../../IDataInterface/IDataInterface';
import { PacmanLoader } from 'react-spinners';


export interface Item {
  key: string;
  toolId?: number;
  toolName: string;
  toolCount: number;
  userId?: number;
  user_FirstSecondMiddle: string;
}

const App: React.FC = () => {

  

  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>([]);
  const [editingKey, setEditingKey] = useState('');
  const [deletingKey, setDeletingKey] = useState('');

  const isDeleting =  (record: Item) => record.key === deletingKey;
  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ toolName: '', toolCount: '', user_FirstSecondMiddle: '', ...record });
    setEditingKey(record.key);
  };

  const [inputDelete, setInputDelete] = React.useState<number>(0);


  const handleEditDelete = (key: React.Key) => {
    let newData = data.filter(item => item.key !== key);
    setData(newData);
    setDeletingKey('')
  }

  const handleDelete = (key: React.Key) => {

    const index = data.findIndex(item => Number(item.key) === key);
    const item = data[index];

    let newData = [...data];

    let tool_user = toolUser.find(x=> x.id === Number(item.key)) as ITool_User

    if(item)
    {
      const delta = item.toolCount - inputDelete;


      if(delta <= 0)
      {
        newData = data.filter(item => Number(item.key) !== key);
      }
      else
      {
        item.toolCount = delta;

        newData.splice(index, 1, {
          ...data,
          ...item,
        });

      }

      tool_user!.getCount = delta as number
    }

   
    fetchToolUser_Delete(tool_user)



    setData(newData);
    setDeletingKey('')
    
  };

  const cancelEdit = async (key: React.Key)  => {
    handleEditDelete(key);
    setEditingKey('');
  };

  const cancelDelete = async (key: React.Key)  => {
    setDeletingKey(key.toString());
  };

  

  const handleAdd = () => {
    let newKey = 1;
    if(data.length > 0)
    {
      newKey = Number(data[data.length-1].key)+1;
    }
    

    const newData: Item = {
      key: newKey.toString(),
      toolName: ``,
      toolCount: 0,
      user_FirstSecondMiddle: '',
    };

    setData([...data, newData]);
    setEditingKey(newKey.toString());

  };

  const save = async (key: React.Key) => {
    const index = data.findIndex(item => key === item.key);
    const item = data[index];

    fetchToolUser_Put({
      getCount: item.toolCount,
      toolId: item.toolId as number,
      userId: item.userId as number,
    } as ITool_User);

    setEditingKey('');
  };


  
  const columns = [
    {
      title: 'Наименование инструмента',
      dataIndex: 'toolName',
      width: '25%',
      editable: true,
    },
    {
      title: 'ФИО получателя',
      dataIndex: 'user_FirstSecondMiddle',
      width: '40%',
      editable: true,
    },
    {
      title: 'Количество выданного',
      dataIndex: 'toolCount',
      width: '15%',
      editable: true,
    },
    {
      title: 'Операции',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        const deleted = isDeleting(record);

        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Сохранить
            </Typography.Link>
            <Popconfirm title="Хотите отменить?" onConfirm={()=>cancelEdit(record.key)}>
              <a>Отменить</a>
            </Popconfirm>
          </span>
        ) : (

          deleted ? (
            <span>
            <p>Сколько удалить?</p>
            <InputNumber  style={{ marginRight: 8 }}  min="1" max={record.toolCount.toString()} onChange={(value)=>setInputDelete(Number(value))}/>
            <Popconfirm title="Хотите удалить?"  onConfirm={()=>handleDelete(Number(deletingKey))} onCancel={()=> setDeletingKey('')}>
              <a>Удалить</a>
            </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() =>cancelDelete(record.key)}>
            Удалить
            </Typography.Link>
          )


        );
      },
    },
  ];


  const handleSave = (row: Item) => {

    const newData = [...data];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setData(newData);
  };

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'toolCount' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        handleSave: handleSave,
      }),
    };
  });




  //
  //Запросить пользователей
  const {fetchUsers,fetchTools,fetchToolUser_Put,fetchToolUser,fetchToolUser_Delete} = useActions()
  
  useEffect(()=>{

    fetchUsers();
    fetchTools();
    fetchToolUser();
  },[])

  const {toolUser,loading} = useTypedSelector(state => state.toolUser)

  useEffect(()=>{

    let originData: Item[] = [];
    toolUser.map((item, index) => {
      originData.push({
        key: item.id.toString(),
        toolId: item.toolId,
        toolName:  item.tool.name, //+ "( "+ item.tool.count+" )",
        toolCount:  item.getCount,
        user_FirstSecondMiddle: item.user.firstName +" "+item.user.lastName+" "+ item.user.middleName,
      });
    }); 

    setData(originData)
  },[toolUser])
  
  //


  const tableLoading = {
    spinning: loading,
    indicator: 
    <div >
        <div className='MainDiv'>
            <PacmanLoader color={"black"} loading={loading}  size={50} />
        </div>
    </div>
      ,
  }

  return (
   <div>
    <Card
      style={{ margin: 16 }}
      type="inner"
      title="Тестовое задание АО НПП Радиосвязь 5005"
      extra={
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Добавить инструмент
      </Button>
      }
    >
     
     
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancelEdit,
        }}
        loading={tableLoading}
      />
    </Form>
    </Card>

   </div>
  );
};

export default App;