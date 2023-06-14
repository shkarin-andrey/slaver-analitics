import { FC } from 'react';

import UploadXlsx from '../Modal/UploadXlsx';

const Header: FC = () => {
  return (
    <div className='w-full px-10 py-4 flex items-center justify-end bg-slate-700'>
      <UploadXlsx />
    </div>
  );
};

export default Header;
