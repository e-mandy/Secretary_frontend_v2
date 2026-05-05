import { useEffect } from "react";
import { useEmailVerify } from "../api/useEmailVerify";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import Success from "../../../components/Success";

const EmailVerify = () => {
  const { isPending, mutate, isSuccess, isError } = useEmailVerify();
  const navigate = useNavigate();

  // We pick the id and the hash from the link sent in the user email
  const { id, hash } = useParams<{ id: string; hash: string }>();

  // We pick the expiration value and the verification link signature from the link
  const [searchParams] = useSearchParams();
  const expirationValue = searchParams.get("expires");
  const signature = searchParams.get("signature");

  useEffect(() => {
    if (!id || !hash || !expirationValue || !signature) return;
    mutate({
      id: id,
      hash: hash,
      expires: expirationValue,
      signature: signature,
    });
  }, [id, hash, expirationValue, signature, mutate]);

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess, navigate]);

  if (isPending) {
    return (
      <div className="flex w-screen h-screen m-auto items-center justify-center">
        <Spinner width="30" height="30" color="white" visible={true} />
        <p>Patientez un petit moment encore !!</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col m-auto items-center justify-center">
        <Success />
        <p className="text-xl mb-2">Bravo !! Votre email est vérifiée.</p>
        <p className="text-lg">
          Vous allez étre redirigé sur votre espace dans quelques instants.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-screen h-screen flex flex-col m-auto items-center justify-center text-center">
        <p className="text-xl mb-2 text-red-500 font-bold">Erreur de vérification</p>
        <p className="text-lg">Le lien de vérification est invalide ou a expiré.</p>
        <button 
          onClick={() => navigate("/secretary/login")} 
          className="mt-4 px-4 py-2 bg-[#c41c2d] text-white rounded-lg"
        >
          Retour à la connexion
        </button>
      </div>
    );
  }

  // Fallback for idle state before the mutation fires
  return (
    <div className="flex w-screen h-screen m-auto items-center justify-center">
      <Spinner width="30" height="30" color="white" visible={true} />
      <p>Préparation de la vérification...</p>
    </div>
  );
};

export default EmailVerify;
