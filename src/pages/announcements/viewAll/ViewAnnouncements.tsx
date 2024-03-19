import SearchInput from '../../../components/SearchInput';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiFlag } from 'react-icons/fi';

export default function ViewAnnouncements() {
  const categories: Array<string> = [
    'All',
    'Admission',
    'Research',
    'Events',
    'Holidays',
    'study Services',
    'Athletic',
    'Public Safety',
    'social',
    'Vaccination',
  ];
  const announcements = [
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
    {
      title: 'Holiday Closure',
      date: 'Nov 1/2024',
    },
  ];
  return (
    <div className=" w-5/6 m-auto py-10">
      <div className="flex flex-col gap-5">
        <p className="font-medium text-sm">
          Home / <span className="text-gray-400">Announcements</span>{' '}
        </p>
        <h1 className="text-2xl font-medium">Announcements</h1>
      </div>
      <div className="announce flex gap-4 my-5 justify-evenly">
        {categories.map((category, index) => (
          <p key={index} className="bg-blue-100 px-3 py-1 rounded-lg font-medium">
            {category}
          </p>
        ))}
      </div>
      <SearchInput />
      <div className="content flex flex-col gap-3 mt-10">
        {announcements.map((item, index) => (
          <div
            className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer p-2 rounded-xl"
            key={index}
          >
            <div className="bg-blue-100 p-3 rounded-xl">
              <FiFlag className="text-2xl" />
            </div>
            <div className="data flex-grow">
              <p className="font-medium text-lg">{item.title}</p>
              <span className="text-gray-500">{item.date}</span>
            </div>
            <MdKeyboardArrowRight className="text-2xl text-blue-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
