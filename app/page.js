import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh]">
    <div className="font-bold text-5xl">Buy Me a Biryani</div>
    <p>It’s an easy way to raise some funds and share a little love just like how biryani brings people together, we bring support to your passion.</p>
    <div className="">
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
   </div>
      <div className="bg-white h-1 opacity-10">fsd</div>
    </>
  );
}
