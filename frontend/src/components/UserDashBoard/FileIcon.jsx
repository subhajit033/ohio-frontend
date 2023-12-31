import { FaRegFilePdf } from 'react-icons/fa';
import { TbDotsVertical } from 'react-icons/tb';
import { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoCloudUpload } from 'react-icons/io5';

const FileIcon = ({ name, url }) => {
  const [viewTab, setViewTab] = useState(false);
  return (
    <div className="w-28 rounded-md border border-gray-100 bg-white p-4 shadow-md relative">
      <div className="flex flex-col items-center gap-2 ">
        <div
          onClick={() => {
            setViewTab(!viewTab);
          }}
          className="absolute top-4 right-2 cursor-pointer"
        >
          <TbDotsVertical />
        </div>
        {viewTab && (
          <div className="absolute -right-14 rounded-md top-8 z-10 border-2 border-gray-500 p-2 bg-white space-y-1">
            <p
              onClick={() => {
                window.open(url, '_blank');
                setTimeout(() => {
                  setViewTab(false);
                }, 300);
              }}
              className="text-xs cursor-pointer hover:bg-gray-300 flex items-center gap-3"
            >
              View <FaRegEye />
            </p>
            <p className="text-xs cursor-pointer hover:bg-gray-300 flex items-center gap-1">
              Download <IoMdDownload />
            </p>
          </div>
        )}
        <FaRegFilePdf />
        <span className="text-gray-600 text-xs">{name}</span>
      </div>
    </div>
  );
};

export default FileIcon;
