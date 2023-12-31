import { useNavigate } from 'react-router-dom';

const UnVerifedEmail = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-[#333] px-10 py-10 w-full font-[sans-serif] relative before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-red-500">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold text-red-500">Unauthorisied Accesss</h1>
        <div className="my-6">
          <p className="text-xl font-semibold">
            Please Verify your email first to move forward
            <br />
            Click below to verify your email
          </p>
        </div>
        <button
          type="button"
          className="px-5 py-3 text-white text-sm tracking-wider font-semibold border-none rounded-lg outline-none bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate('/verification')}
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default UnVerifedEmail;
