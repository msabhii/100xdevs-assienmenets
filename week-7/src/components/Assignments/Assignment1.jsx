const Assignment1 = () => {
  return (
    <div className=" bg-slate-800 h-screen flex items-center justify-center">
      <div className="shadow-lg shadow-white w-max">
        <div className="w-96 h-96 bg-white ">
          <div className="h-[50%] object-cover bg-cyan-200 flex items-end justify-center">
            <div className="">
              <img
                src="/vite.svg"
                className="absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-28 h-28"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-[50%] object-cover bg-cyan-200"
              ></img> */}
            </div>
          </div>

          <div className="bg-white mt-20">
            <div className="flex items-center justify-center mt-4">
              <div className="flex">
                <h2 className="font-bold">mscode </h2>
                <p className="font-light ml-1"> 22</p>
              </div>
            </div>
            <div className="justify-center items-center flex mt-1">
              Karnal,Haryana
            </div>
            <hr className="border-t border-gray-300 w-full mt-16"></hr>
            <div className="flex gap-20">
              <div className="ml-3 mr-7">
                <h2 className="font-bold ">80K</h2>
                <p className="font-light ml-1"> 22</p>{" "}
              </div>
              <div className="ml-3 mr-7">
                <h2 className="font-bold">80K</h2>
                <p className="font-light ml-1"> 22</p>{" "}
              </div>
              <div className="ml-3 mr-7">
                <h2 className="font-bold">80K</h2>
                <p className="font-light ml-1"> 22</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assignment1;
