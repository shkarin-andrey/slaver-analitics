import { InboxOutlined } from '@ant-design/icons';
import { Button, Modal, notification, Upload, UploadProps } from 'antd';
import { DraggerProps } from 'antd/es/upload';
import { FC, useContext, useState } from 'react';
import readXlsxFile, { readSheetNames } from 'read-excel-file';

import { StateContext } from '../../../store';

const { Dragger } = Upload;

const UploadXlsx: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<any>(null);
  const { setData } = useContext(StateContext);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const customRequest: DraggerProps['customRequest'] = (options) => {
    const { onSuccess } = options;

    setTimeout(() => {
      onSuccess!(true);
    }, 0);
  };

  const handleOk = () => {
    const obj: any = {};

    readSheetNames(file.originFileObj).then(async (sheetNames) => {
      for await (const sheet of sheetNames) {
        await readXlsxFile(file.originFileObj, { sheet }).then((rows) => {
          obj[sheet] = rows;
        });
      }
      setData(obj);
      setIsModalOpen(false);
    });
  };

  const onChange: DraggerProps['onChange'] = (info) => {
    const { status, name } = info.file;

    if (status === 'done') {
      setFile(info.file);
      notification.success({
        message: `${name}: файл загружен успешно.`,
      });
    }

    if (status === 'error') {
      notification.error({ message: `${name}: файл не был загружен.` });
    }
  };

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    accept: '.xls, .xlsx',
    customRequest,
    onChange,
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Загрузить excel документ
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
        <Dragger {...props}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined />
          </p>
          <p className='ant-upload-text'>Перетащите файл сюда</p>
          <p className='ant-upload-hint'>
            Или кликните, чтобы выбрать файл.
            <br />
            Поддерживаются форматы: <strong>XLSX, XLS</strong>
          </p>
        </Dragger>
      </Modal>
    </>
  );
};

export default UploadXlsx;
