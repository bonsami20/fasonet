import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const DatasTable = ({ datas }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Nom</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Technologie
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Débit
          </th>
          <th className="border border-slate-600 rounded-md">Opérations</th>
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
  );
};

export default DatasTable;
