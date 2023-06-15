import { FC } from 'react';
import { Link } from 'react-router-dom';

import { routers } from '../../routers';
import UploadXlsx from '../Modal/UploadXlsx';

const Header: FC = () => {
  return (
    <div className='w-full px-10 py-4 flex items-center justify-between bg-slate-700'>
      <div className='flex items-center gap-4'>
        {routers.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className='!text-white text-lg hover:!text-gray-300'
          >
            {item.title}
          </Link>
        ))}
      </div>
      <UploadXlsx />
    </div>
  );
};

export default Header;
