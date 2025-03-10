export default function MobileView() {
  return (
    // <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className="relative bg-white border-[10px] border-gray-200 p-4 h-[80vh] w-[25%] rounded-[45px] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_10px_rgba(0,0,0,0.1)]"></div>
    // </div>
    <div className="relative h-[90vh] w-[22%]">
    {/* Grey Layer (Slightly Bigger) */}
    <div className="absolute -inset-1.5 rounded-[30px] -z-10 shadow-[0_0_0_1px_rgba(234,234,234,0.30)]"></div>
    
    {/* Main Container */}
    <div className="relative bg-white p-4 h-full w-full rounded-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(234,234,234,0.30)]"></div>
  </div>
  );
}
