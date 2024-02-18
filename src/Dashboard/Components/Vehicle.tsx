const Vehicle = () => {
  return (
    <div className="h-[300px] w-[600px] shadow-lg bg-slate-300 rounded-lg m-20">
      <h1 className=" text-yellow-500 montserrat-bold text-[30px]  text-center  ">
        Drivers
      </h1>
      <div className="flex">
        <div>info</div>
        <div>IMg</div>
      </div>
      <div>
        <div className="flex">
          <div>Call Mobile</div>
          <div>Emergency Call</div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
