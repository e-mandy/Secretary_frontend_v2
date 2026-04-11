import { type SubmitHandler,  useForm } from "react-hook-form"
import { loginSchema, type LoginUser } from "../schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Info, Lock, Mail } from "lucide-react";
import useLogin from "../api/useLogin";
import Spinner from "../../../components/Spinner";
import login_bg from "../../../assets/auth/login_bg.jpeg";

const Login = () => {
    const { mutate, isPending } = useLogin();

    const { reset, handleSubmit, register, formState: { errors } } = useForm<LoginUser>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginUser> = async(loginFormData) => {
        reset();
        mutate(loginFormData);
    }


  return (
    <div className="h-screen w-screen flex">
        <div className="w-1/2 h-full flex">
            <div className="m-auto w-1/2">
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-primary mb-4">Bon retour</h1>
                    <p>Connectez vous pour accéder aux informations du secrétariat de Esgis.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-3">
                        <label htmlFor="email" className="font-semibold">Adresse Email</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('email')} className="outline-none flex-1 py-3 pl-2" type="email" name="email" id="email" />
                        </div>
                            {errors.email?.message && (<span className="error-message">{errors.email?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="font-semibold">Mot de passe</label>
                        <div className="input-style">
                            <Lock />
                            <input {...register('password')} className="outline-none flex-1 py-3 pl-2" type="password" name="password" id="password" />
                        </div>
                            {errors.password?.message && (<span className="error-message">{errors.password?.message}</span>)}
                    </div>
                    <button type="submit" className="bg-[#c41c2d] w-full text-white py-3 rounded-lg my-6 cursor-pointer active:bg-[#d15c68] flex gap-3 justify-center shadow-lg shadow-[#d15c68]">
                        {isPending && (<Spinner color="white" height="24" width="24" visible={true} />)}
                        <p>{ isPending ? "Chargement" : "Se connecter en tant que sécrétaire" }</p>
                    </button>

                    <div className="flex gap-4 mt-10">
                        <Info size={30} color="red" />
                        <p>Si vous souhaitez avoir un compte sécrétaire, veuillez s'il plait contacter l'administration pour exposer votre requête. Merci !!</p>
                    </div>
                </form>
            </div>
        </div>
        <div className="w-1/2 relative flex flex-col items-center">
            <img src={login_bg} className="w-full h-full"/>
            <div className="flex absolute bottom-50 bg-white/10 backdrop-filter flex-col p-8 rounded-lg backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white mb-4">Construisons ensemble l'avenir</h3>
                <p className="text-white text-base">Une façon plus simple et organisée de faire les choses.</p>
            </div>
        </div>
    </div>
  )
}

export default Login
