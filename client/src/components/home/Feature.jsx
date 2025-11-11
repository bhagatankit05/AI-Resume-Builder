import React from 'react';

const Feature = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-6 text-white"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        {/* Left Image */}
        <img
          className="max-w-2xl w-full xl:-ml-32 rounded-2xl shadow-lg"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Feature illustration"
        />

        {/* Right Content */}
        <div
          className="px-4 md:px-8 space-y-6 mt-8 md:mt-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Feature 1 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div
              className={`p-6 bg-[#1a1a2e] border border-transparent rounded-xl flex gap-4 transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-indigo-900/30 ${
                !isHover ? 'border-indigo-400 bg-indigo-900/30' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-indigo-400"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  Real-Time Insights
                </h3>
                <p className="text-sm text-gray-300 max-w-xs">
                  Get instant, AI-driven feedback to refine your resume instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 bg-[#1a1a2e] border border-transparent rounded-xl flex gap-4 transition-all duration-300 group-hover:border-green-400 group-hover:bg-green-900/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-400"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  Secure Data
                </h3>
                <p className="text-sm text-gray-300 max-w-xs">
                  All your resume data is stored securely with enterprise-grade encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 bg-[#1a1a2e] border border-transparent rounded-xl flex gap-4 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-900/30">
              <svg
                className="size-6 stroke-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  Custom Templates
                </h3>
                <p className="text-sm text-gray-300 max-w-xs">
                  Choose from AI-optimized templates designed for different job roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Feature;
