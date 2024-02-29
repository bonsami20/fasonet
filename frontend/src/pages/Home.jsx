import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/datas")
      .then((response) => {
        setDatas(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Data list</h1>
        <Link to="/datas/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Nom</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Technologie
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Debit
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={data._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {data.nom}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {data.technologie}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {data.debit}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/datas/details/${data._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>

                    <Link to={`/datas/edit/${data._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>

                    <Link to={`/datas/delete/${data._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
