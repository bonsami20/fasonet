import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateDatas = () => {
  const [nom, setNom] = useState("");
  const [technologie, setTechnologie] = useState("");
  const [debit, setDebit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveData = () => {
    const data = {
      nom,
      technologie,
      debit,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/datas", data)
      .then(() => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Vos données ont été crées avec succès ", {
          variant: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Créer vos donneés</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Technologie</label>
          <input
            type="text"
            value={technologie}
            onChange={(e) => setTechnologie(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Débit</label>
          <input
            type="number"
            value={debit}
            onChange={(e) => setDebit(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveData}>
          Sauvegarder
        </button>
      </div>
    </div>
  );
};

export default CreateDatas;
