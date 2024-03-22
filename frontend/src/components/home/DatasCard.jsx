import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import DataSingleCard from "./DataSingleCard";

const DatasCard = ({ datas }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {datas.map((item) => (
        <DataSingleCard key={item._id} data={item} />
      ))}
      ;
    </div>
  );
};

export default DatasCard;
