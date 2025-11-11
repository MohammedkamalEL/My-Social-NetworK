import Skeleton from "react-loading-skeleton";

export default function Loeader() {
  return (
    <div className="bg-transparent w-full m-auto p-6 rounded-lg ">
      {/* <Skeleton height={24} width='50%' />
        <Skeleton height={20} width='70%' className="my-2" />
        <Skeleton height={16} width='60%' /> */}
      <div className="w-full flex gap-4 items-center">
        <div>
          <Skeleton circle count height={50} width={50} />
        </div>
        <div className="flex-1">
          <Skeleton width="60%" height={15} />
          <Skeleton width="40%" height={10} />
          <Skeleton width="20%" height={15} />
        </div>
      </div>
      <div className="w-full h-[60dvh] mt-3">
        <Skeleton width='100%' height={'100%'} className="mb-3 p-2 rounded-lg "/>
      </div>
      <div className="w-full mt-2">
        <Skeleton width='100%' height={40}/>
        {/* <div className=" block w-full h-0.5 bg-black mt-1"/> */}
      </div>
    </div>
  );
}
