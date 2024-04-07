import React from 'react';
import { Link } from 'react-router-dom';
import urLogo from '/images/urLogo.png';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { isLoggedIn } from '../utils/auth';
import { FaRegCircleUser } from 'react-icons/fa6';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { clearToken } from '../redux/slices/tokenSlice';

export default function NavBar() {
  const { value } = useAppSelector((state) => state.token);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(clearToken());
    handleClose();
  };
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
    ...(value ? [] : [{ link: 'Sign in', to: '/access' }]),
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
        {isLoggedIn() && (
          <button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="hover:text-blue-500 transition-all duration-100 ease-in-out self-center"
          >
            <span className="text-xl text-gra-600">
              <FaRegCircleUser />
            </span>
          </button>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
