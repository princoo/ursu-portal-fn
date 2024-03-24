import { Link } from 'react-router-dom';
import urLogo from '/images/urLogo.png';

export default function NavBar() {
  const items = [
    {
      link: 'Home',
      to: '/',
    },
    {
      link: 'Announcements',
      to: '/announcements',
    },
    {
      link: 'About us',
      to: '/about',
    },
    {
      link: 'Sign in',
      to: '/access',
    },
  ];
  return (
    <div className="flex justify-between p-4 border-b-2">
      <h1 className="self-center text-lg font-medium flex gap-2">
        <img src={urLogo} alt="logo" className="w-6 object-contain" />
        University of Rwanda
      </h1>
      <div className="flex justify-end gap-7">
        {items.map((item, index) => {
          return (
            <Link
              to={item.to}
              key={index}
              className="hover:border-b-[3px] border-black transition-all duration-100 ease-in-out"
            >
              <span>{item.link}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
