import { Alert } from 'antd';
import { FC, useContext } from 'react';

import { StateContext } from '../store';

const InfoPage: FC = () => {
  const { data } = useContext(StateContext);

  if (!data) {
    return (
      <Alert
        message='Ошибка'
        description='Требуется загрузить excel документ'
        type='error'
        showIcon
      />
    );
  }

  return (
    <div className='w-full h-full overflow-auto'>
      <table className='mt-5 mx-5 border border-gray-400'>
        <thead>
          <tr className='border-b border-gray-400'>
            {data.screen_0_stat[0].map((item: any, index: number) => (
              <th className='px-2 py-1 text-base' key={index}>
                {index === 0 ? '№' : item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.screen_0_stat.map((item: any, index: number) => {
            if (index !== 0) {
              return (
                <tr key={`${index}_tr`} className='border-b border-gray-400'>
                  {item.map((el: any, i: number) => (
                    <td key={`${el}_td_${i}`} className='px-2 py-1 text-base'>
                      {el}
                    </td>
                  ))}
                </tr>
              );
            }
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoPage;
