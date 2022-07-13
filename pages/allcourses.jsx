import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const allcourses = () => {
  return (
    <div>
      <Navbar />
      <div className="w-4/5 my-6 mx-auto">
        <h1 className="text-2xl font-bold ">All Courses</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Pagination />
      </div>
    </div>
  );
};

export default allcourses;
