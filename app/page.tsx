export default function MobileView() {
  const arr = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
    { name: "C", value: 3 },
    { name: "D", value: 4 },
    { name: "E", value: 5 },
    { name: "F", value: 6 },
    { name: "G", value: 7 },
    { name: "H", value: 8 },
    { name: "I", value: 9 },
    { name: "J", value: 10 },
    { name: "K", value: 11 },
    { name: "L", value: 12 },
    { name: "M", value: 13 },
    { name: "N", value: 14 },
    { name: "O", value: 15 },
    { name: "P", value: 16 },
    { name: "Q", value: 17 },
    { name: "R", value: 18 },
    { name: "S", value: 19 },
    { name: "T", value: 20 },
    { name: "U", value: 21 },
    { name: "V", value: 22 },
    { name: "W", value: 23 },
    { name: "X", value: 24 },
    { name: "Y", value: 25 },
    { name: "Z", value: 26 },
  ];
  return (
    // <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className="relative bg-white border-[10px] border-gray-200 p-4 h-[80vh] w-[25%] rounded-[45px] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_10px_rgba(0,0,0,0.1)]"></div>
    // </div>
    <div className="relative h-[90vh] w-[22%]">
      {/* Grey Layer (Slightly Bigger) */}
      <div className="absolute -inset-1.5 rounded-[30px] -z-10 shadow-[0_0_0_1px_rgba(234,234,234,0.30)]"></div>

      {/* Main Container */}
      <div className="relative bg-white h-full w-full rounded-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(234,234,234,0.30)] overflow-hidden">
        <div className=" h-full w-full overflow-auto thin-scrollbar p-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-gray-600">{item.name}</div>
              <div className="text-sm text-gray-400">{item.value}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
