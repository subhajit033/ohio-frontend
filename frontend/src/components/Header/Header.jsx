import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSideBarOpen } from '../../redux/Slices/tabNav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToast } from '../../redux/Slices/toastSlice';
const HomePage = () => {
  const dispatch = useDispatch();
  const toastType = useSelector((store) => store.toast.toastType);
  // const myDetails = useSelector((store) => store.registration.myDetails);
  const myDetails = useSelector((store) => store.user.myDetails);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const [popUpOpen, setPopUpOpen] = useState(false);
  useEffect(() => {
    if (toastType.type === 'success') {
      toast.success(toastType.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    } else if (toastType.type === 'error') {
      toast.error(toastType.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    }
  }, [toastType]);

  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/v1/users/logout');
      console.log(res);
      dispatch(setToast({ type: 'success', message: 'Logout SuccessFull' }));
      setTimeout(() => {
        window.open('/', '_self');
      }, 300);
      
    } catch (err) {
      console.log(err);
      dispatch(setToast({ type: 'error', message: 'Something went wrong' }));
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="flex dark:bg-[#121e31] items-center relative justify-between bg-white px-5 py-6 w-full">
        <div className="hidden md:block">
          <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="dark:fill-white"
              d="M8.63077 14.8549C8.82584 14.8549 9.01902 14.8165 9.19926 14.7418C9.37949 14.6672 9.54324 14.5578 9.68119 14.4198C9.81914 14.2819 9.92858 14.1182 10.0032 13.9379C10.0779 13.7577 10.1163 13.5645 10.1163 13.3695C10.1163 10.6116 11.2119 7.9667 13.162 6.0166C15.112 4.0665 17.757 2.97094 20.5148 2.97094C23.2727 2.97094 25.9176 4.0665 27.8677 6.0166C29.8178 7.9667 30.9134 10.6116 30.9134 13.3695C30.9172 13.7609 31.0754 14.1349 31.3537 14.4103C31.6317 14.6857 32.0074 14.8402 32.3989 14.8402C32.7903 14.8402 33.1659 14.6857 33.444 14.4103C33.7222 14.1349 33.8804 13.7609 33.8843 13.3695C33.8843 11.6138 33.5385 9.87525 32.8666 8.25319C32.1947 6.63113 31.21 5.15729 29.9685 3.91582C28.7269 2.67435 27.2531 1.68956 25.6311 1.01769C24.009 0.345811 22.2706 0 20.5148 0C18.7591 0 17.0207 0.345811 15.3985 1.01769C13.7765 1.68956 12.3027 2.67435 11.0612 3.91582C9.81972 5.15729 8.83494 6.63113 8.16305 8.25319C7.49118 9.87525 7.14537 11.6138 7.14537 13.3695C7.14537 13.7634 7.30187 14.1412 7.58043 14.4198C7.859 14.6984 8.23682 14.8549 8.63077 14.8549Z"
              fill="#1A1E2C"
            />
            <path
              className="dark:fill-white"
              d="M39.5293 17.8258H26.452C27.4202 16.5421 27.9432 14.9775 27.9415 13.3695C27.9415 11.3996 27.1589 9.51035 25.7661 8.11742C24.3731 6.72449 22.4838 5.94196 20.5139 5.94196C18.5442 5.94196 16.655 6.72449 15.262 8.11742C13.869 9.51035 13.0865 11.3996 13.0865 13.3695C13.0865 13.7635 13.243 14.1413 13.5216 14.4199C13.8002 14.6985 14.1781 14.855 14.5721 14.855C14.9661 14.855 15.344 14.6985 15.6225 14.4199C15.9011 14.1413 16.0576 13.7635 16.0576 13.3695C16.0576 12.488 16.3189 11.6264 16.8086 10.8935C17.2983 10.1606 17.9943 9.58942 18.8086 9.25209C19.6229 8.91477 20.519 8.8265 21.3834 8.99844C22.2479 9.17038 23.0421 9.59481 23.6652 10.218C24.2885 10.8413 24.713 11.6354 24.885 12.4998C25.0569 13.3643 24.9687 14.2604 24.6314 15.0746C24.294 15.889 23.7229 16.5851 22.99 17.0748C22.2571 17.5645 21.3955 17.8258 20.5141 17.8258H1.50039C1.30407 17.8239 1.1093 17.8608 0.927353 17.9347C0.745405 18.0084 0.579889 18.1175 0.440367 18.2556C0.300847 18.3938 0.190089 18.5581 0.114504 18.7393C0.0389171 18.9206 0 19.115 0 19.3113C0 19.5075 0.0389171 19.702 0.114504 19.8832C0.190089 20.0644 0.300847 20.2287 0.440367 20.367C0.579889 20.505 0.745405 20.6142 0.927353 20.6879C1.1093 20.7617 1.30407 20.7987 1.50039 20.7967H39.5293C39.9207 20.7929 40.2947 20.6346 40.5701 20.3564C40.8455 20.0784 41 19.7027 41 19.3113C41 18.9198 40.8455 18.5442 40.5701 18.2661C40.2947 17.9879 39.9207 17.8297 39.5293 17.8258Z"
              fill="#0346F2"
            />
            <path
              className="dark:fill-white"
              d="M32.3692 23.942C32.1742 23.942 31.981 23.9803 31.8007 24.055C31.6205 24.1296 31.4568 24.239 31.3188 24.377C31.1809 24.5149 31.0714 24.6786 30.9968 24.8589C30.9221 25.0391 30.8837 25.2323 30.8837 25.4274C30.8837 28.1852 29.7881 30.8301 27.838 32.7802C25.888 34.7303 23.243 35.8259 20.4852 35.8259C17.7273 35.8259 15.0824 34.7303 13.1323 32.7802C11.1822 30.8301 10.0866 28.1852 10.0866 25.4274C10.0828 25.036 9.92455 24.6619 9.64634 24.3865C9.36827 24.1111 8.99262 23.9566 8.6011 23.9566C8.20973 23.9566 7.83408 24.1111 7.55601 24.3865C7.2778 24.6619 7.11956 25.036 7.11571 25.4274C7.11571 27.1831 7.46155 28.9216 8.13336 30.5436C8.80532 32.1657 9.79004 33.6395 11.0315 34.881C12.2731 36.1225 13.7469 37.1072 15.3689 37.7791C16.991 38.451 18.7294 38.7968 20.4852 38.7968C22.2409 38.7968 23.9793 38.451 25.6015 37.7791C27.2235 37.1072 28.6973 36.1225 29.9388 34.881C31.1803 33.6395 32.1651 32.1657 32.8369 30.5436C33.5088 28.9216 33.8546 27.1831 33.8546 25.4274C33.8546 25.0334 33.6981 24.6556 33.4196 24.377C33.141 24.0985 32.7632 23.942 32.3692 23.942Z"
              fill="#1A1E2C"
            />
            <path
              className="dark:fill-white"
              d="M1.47071 20.971H14.548C13.5798 22.2547 13.0568 23.8193 13.0585 25.4274C13.0585 27.3973 13.8411 29.2865 15.2339 30.6794C16.6269 32.0723 18.5162 32.8549 20.4861 32.8549C22.4558 32.8549 24.345 32.0723 25.738 30.6794C27.131 29.2865 27.9135 27.3973 27.9135 25.4274C27.9135 25.0334 27.757 24.6555 27.4784 24.3769C27.1998 24.0983 26.8219 23.9418 26.4279 23.9418C26.0339 23.9418 25.656 24.0983 25.3775 24.3769C25.0989 24.6555 24.9424 25.0334 24.9424 25.4274C24.9424 26.3088 24.6811 27.1704 24.1914 27.9033C23.7017 28.6362 23.0057 29.2074 22.1914 29.5447C21.3771 29.882 20.481 29.9703 19.6166 29.7984C18.7521 29.6264 17.9579 29.202 17.3348 28.5788C16.7115 27.9555 16.287 27.1615 16.115 26.297C15.9431 25.4325 16.0313 24.5364 16.3686 23.7222C16.706 22.9078 17.2771 22.2117 18.01 21.722C18.7429 21.2323 19.6045 20.971 20.4859 20.971H39.4996C39.6959 20.9729 39.8907 20.936 40.0726 20.8622C40.2546 20.7885 40.4201 20.6793 40.5596 20.5412C40.6992 20.403 40.8099 20.2387 40.8855 20.0575C40.9611 19.8762 41 19.6818 41 19.4855C41 19.2893 40.9611 19.0948 40.8855 18.9136C40.8099 18.7324 40.6992 18.5681 40.5596 18.4299C40.4201 18.2918 40.2546 18.1826 40.0726 18.1089C39.8907 18.0351 39.6959 17.9981 39.4996 18.0001H1.47071C1.07935 18.0039 0.705326 18.1622 0.429928 18.4404C0.15453 18.7184 0 19.0941 0 19.4855C0 19.877 0.15453 20.2526 0.429928 20.5307C0.705326 20.8089 1.07935 20.9672 1.47071 20.971Z"
              fill="#0346F2"
            />
          </svg>
        </div>
        <div className="md:hidden">
          <button onClick={() => dispatch(setSideBarOpen())} id="toggle" className="lg:hidden ml-2">
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="drawer"
          role="menu"
          className="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  "
        >
          <div className="sm:hidden p-6 mb-5 flex items-center justify-center gap-6">
            <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.63077 14.8549C8.82584 14.8549 9.01902 14.8165 9.19926 14.7418C9.37949 14.6672 9.54324 14.5578 9.68119 14.4198C9.81914 14.2819 9.92858 14.1182 10.0032 13.9379C10.0779 13.7577 10.1163 13.5645 10.1163 13.3695C10.1163 10.6116 11.2119 7.9667 13.162 6.0166C15.112 4.0665 17.757 2.97094 20.5148 2.97094C23.2727 2.97094 25.9176 4.0665 27.8677 6.0166C29.8178 7.9667 30.9134 10.6116 30.9134 13.3695C30.9172 13.7609 31.0754 14.1349 31.3537 14.4103C31.6317 14.6857 32.0074 14.8402 32.3989 14.8402C32.7903 14.8402 33.1659 14.6857 33.444 14.4103C33.7222 14.1349 33.8804 13.7609 33.8843 13.3695C33.8843 11.6138 33.5385 9.87525 32.8666 8.25319C32.1947 6.63113 31.21 5.15729 29.9685 3.91582C28.7269 2.67435 27.2531 1.68956 25.6311 1.01769C24.009 0.345811 22.2706 0 20.5148 0C18.7591 0 17.0207 0.345811 15.3985 1.01769C13.7765 1.68956 12.3027 2.67435 11.0612 3.91582C9.81972 5.15729 8.83494 6.63113 8.16305 8.25319C7.49118 9.87525 7.14537 11.6138 7.14537 13.3695C7.14537 13.7634 7.30187 14.1412 7.58043 14.4198C7.859 14.6984 8.23682 14.8549 8.63077 14.8549Z"
                fill="#1A1E2C"
              />
              <path
                d="M39.5293 17.8258H26.452C27.4202 16.5421 27.9432 14.9775 27.9415 13.3695C27.9415 11.3996 27.1589 9.51035 25.7661 8.11742C24.3731 6.72449 22.4838 5.94196 20.5139 5.94196C18.5442 5.94196 16.655 6.72449 15.262 8.11742C13.869 9.51035 13.0865 11.3996 13.0865 13.3695C13.0865 13.7635 13.243 14.1413 13.5216 14.4199C13.8002 14.6985 14.1781 14.855 14.5721 14.855C14.9661 14.855 15.344 14.6985 15.6225 14.4199C15.9011 14.1413 16.0576 13.7635 16.0576 13.3695C16.0576 12.488 16.3189 11.6264 16.8086 10.8935C17.2983 10.1606 17.9943 9.58942 18.8086 9.25209C19.6229 8.91477 20.519 8.8265 21.3834 8.99844C22.2479 9.17038 23.0421 9.59481 23.6652 10.218C24.2885 10.8413 24.713 11.6354 24.885 12.4998C25.0569 13.3643 24.9687 14.2604 24.6314 15.0746C24.294 15.889 23.7229 16.5851 22.99 17.0748C22.2571 17.5645 21.3955 17.8258 20.5141 17.8258H1.50039C1.30407 17.8239 1.1093 17.8608 0.927353 17.9347C0.745405 18.0084 0.579889 18.1175 0.440367 18.2556C0.300847 18.3938 0.190089 18.5581 0.114504 18.7393C0.0389171 18.9206 0 19.115 0 19.3113C0 19.5075 0.0389171 19.702 0.114504 19.8832C0.190089 20.0644 0.300847 20.2287 0.440367 20.367C0.579889 20.505 0.745405 20.6142 0.927353 20.6879C1.1093 20.7617 1.30407 20.7987 1.50039 20.7967H39.5293C39.9207 20.7929 40.2947 20.6346 40.5701 20.3564C40.8455 20.0784 41 19.7027 41 19.3113C41 18.9198 40.8455 18.5442 40.5701 18.2661C40.2947 17.9879 39.9207 17.8297 39.5293 17.8258Z"
                fill="#0346F2"
              />
              <path
                d="M32.3692 23.942C32.1742 23.942 31.981 23.9803 31.8007 24.055C31.6205 24.1296 31.4568 24.239 31.3188 24.377C31.1809 24.5149 31.0714 24.6786 30.9968 24.8589C30.9221 25.0391 30.8837 25.2323 30.8837 25.4274C30.8837 28.1852 29.7881 30.8301 27.838 32.7802C25.888 34.7303 23.243 35.8259 20.4852 35.8259C17.7273 35.8259 15.0824 34.7303 13.1323 32.7802C11.1822 30.8301 10.0866 28.1852 10.0866 25.4274C10.0828 25.036 9.92455 24.6619 9.64634 24.3865C9.36827 24.1111 8.99262 23.9566 8.6011 23.9566C8.20973 23.9566 7.83408 24.1111 7.55601 24.3865C7.2778 24.6619 7.11956 25.036 7.11571 25.4274C7.11571 27.1831 7.46155 28.9216 8.13336 30.5436C8.80532 32.1657 9.79004 33.6395 11.0315 34.881C12.2731 36.1225 13.7469 37.1072 15.3689 37.7791C16.991 38.451 18.7294 38.7968 20.4852 38.7968C22.2409 38.7968 23.9793 38.451 25.6015 37.7791C27.2235 37.1072 28.6973 36.1225 29.9388 34.881C31.1803 33.6395 32.1651 32.1657 32.8369 30.5436C33.5088 28.9216 33.8546 27.1831 33.8546 25.4274C33.8546 25.0334 33.6981 24.6556 33.4196 24.377C33.141 24.0985 32.7632 23.942 32.3692 23.942Z"
                fill="#1A1E2C"
              />
              <path
                d="M1.47071 20.971H14.548C13.5798 22.2547 13.0568 23.8193 13.0585 25.4274C13.0585 27.3973 13.8411 29.2865 15.2339 30.6794C16.6269 32.0723 18.5162 32.8549 20.4861 32.8549C22.4558 32.8549 24.345 32.0723 25.738 30.6794C27.131 29.2865 27.9135 27.3973 27.9135 25.4274C27.9135 25.0334 27.757 24.6555 27.4784 24.3769C27.1998 24.0983 26.8219 23.9418 26.4279 23.9418C26.0339 23.9418 25.656 24.0983 25.3775 24.3769C25.0989 24.6555 24.9424 25.0334 24.9424 25.4274C24.9424 26.3088 24.6811 27.1704 24.1914 27.9033C23.7017 28.6362 23.0057 29.2074 22.1914 29.5447C21.3771 29.882 20.481 29.9703 19.6166 29.7984C18.7521 29.6264 17.9579 29.202 17.3348 28.5788C16.7115 27.9555 16.287 27.1615 16.115 26.297C15.9431 25.4325 16.0313 24.5364 16.3686 23.7222C16.706 22.9078 17.2771 22.2117 18.01 21.722C18.7429 21.2323 19.6045 20.971 20.4859 20.971H39.4996C39.6959 20.9729 39.8907 20.936 40.0726 20.8622C40.2546 20.7885 40.4201 20.6793 40.5596 20.5412C40.6992 20.403 40.8099 20.2387 40.8855 20.0575C40.9611 19.8762 41 19.6818 41 19.4855C41 19.2893 40.9611 19.0948 40.8855 18.9136C40.8099 18.7324 40.6992 18.5681 40.5596 18.4299C40.4201 18.2918 40.2546 18.1826 40.0726 18.1089C39.8907 18.0351 39.6959 17.9981 39.4996 18.0001H1.47071C1.07935 18.0039 0.705326 18.1622 0.429928 18.4404C0.15453 18.7184 0 19.0941 0 19.4855C0 19.877 0.15453 20.2526 0.429928 20.5307C0.705326 20.8089 1.07935 20.9672 1.47071 20.971Z"
                fill="#0346F2"
              />
            </svg>
          </div>
          <li className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary">
            <a href="#" className="dark:text-white">
              Home
            </a>
          </li>
          <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
            <a href="#" className="dark:text-white">
              About us
            </a>
          </li>
          <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
            <a href="#" className="dark:text-white">
              Contact us
            </a>
          </li>
        </ul>
        {!isAuthenticated ? (
          <div className="flex lg:order-1 max-sm:ml-auto">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-sm rounded-xl font-bold text-white border-2 border-[#007bff] bg-indigo-500 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/verification')}
              className="px-4 py-2 text-sm rounded-xl font-bold text-white border-2 border-[#007bff] bg-indigo-500 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3"
            >
              Join
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-3 relative items-center">
              <div
                onClick={() => setPopUpOpen(!popUpOpen)}
                style={{
                  height: '40px',
                  width: '40px',
                  backgroundImage: `url('${
                    myDetails.photo || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'
                  }')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '9999px'
                }}
                className="hover:ring-4 user cursor-pointer relative ring-blue-700/30"
              ></div>
              <ul className={`mt-3 bg-white rounded-lg absolute ${popUpOpen ? 'block' : 'hidden'} top-7 right-8 z-10`}>
                <li
                  onClick={() => {
                    navigate('/dashboard');
                    setTimeout(() => {
                      setPopUpOpen(!popUpOpen);
                    }, 300);
                  }}
                  className="cursor-pointer"
                >
                  <a className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-[18px] h-[18px] mr-4"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                    <span>Profile</span>
                  </a>
                </li>
                <li onClick={handleLogout} className="cursor-pointer">
                  <a className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-[18px] h-[18px] mr-4"
                      viewBox="0 0 6.35 6.35"
                    >
                      <path
                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                        data-original="#000000"
                      />
                    </svg>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default HomePage;
