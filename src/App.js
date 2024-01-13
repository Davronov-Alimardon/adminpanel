import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import SalesInfo from "./components/SalesInfo";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-row bg-[#f8f8f8]">
      <Sidebar />
      <div className="mx-10 w-full mt-[59px]">
        <Navbar />
        <SalesInfo />
        <Table />
        <div className="mb-10"></div>
      </div>
    </div>
  );
}
