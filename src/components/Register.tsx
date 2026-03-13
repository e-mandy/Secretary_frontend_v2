import { Mail } from "lucide-react";
import { useRegister } from "../features/auth/api/useRegister";
import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type RegisterUser } from "../features/auth/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { mutate, isPending } = useRegister();

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors }, reset } = useForm<RegisterUser>({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit: SubmitHandler<RegisterUser> = async (registerFormData) => {
        mutate(registerFormData);
        reset();
        navigate('/');
    }

  return (
    <div className="h-screen relative flex">
        <div className="absolute flex top-4 left-4">
            <h2 className="font-bold text-2xl">Esgis Secretary</h2>
        </div>
        <div className="w-1/2 h-full bg-[url(assets/auth/auth.jpeg)] bg-cover flex">
            <div className="my-auto w-3/4 ml-6">
                <h3 className="font-extrabold text-3xl">École Supérieure de Gestion d'Informatique et des Sciences.</h3>
                <p>Au service  de l'excellence académique et de l'inclusion professionnelle au Bénin.</p>
            </div>
        </div>
        <div className="w-1/2 h-screen flex">
            <div className="m-auto w-[55%]">
                <div className="mb-4">
                    <h2 className="text-4xl font-extrabold">Inscription</h2>
                    <p>Bienvenue sur la plateforme de gestion du sécrétariat de Esgis</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-3">
                        <label htmlFor="lastname" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('lastname')} className="outline-none flex-1 py-3 pl-2" type="text" name="lastname" id="lastname" />
                        </div>
                            {errors.lastname?.message && (<span className="error-message">{errors.lastname?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="firstname" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('firstname')} className="outline-none flex-1 py-3 pl-2" type="text" name="firstname" id="firstname" />
                        </div>
                            {errors.firstname?.message && (<span className="error-message">{errors.firstname?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="email" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('email')} className="outline-none flex-1 py-3 pl-2" type="text" name="email" id="email" />
                        </div>
                            {errors.email?.message && (<span className="error-message">{errors.email?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('password')} className="outline-none flex-1 py-3 pl-2" type="text" name="password" id="password" />
                        </div>
                            {errors.password?.message && (<span className="error-message">{errors.password?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="password_confirmation" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <Mail />
                            <input {...register('password_confirmation')} className="outline-none flex-1 py-3 pl-2" type="text" name="password_confirmation" id="password_confirmation" />
                        </div>
                            {errors.password_confirmation?.message && (<span className="error-message">{errors.password_confirmation?.message}</span>)}
                    </div>
                    <button className="bg-[#111624] w-full text-white py-3 rounded-lg my-3">S'inscrire en tant que sécrétaire</button>
                    <p>Vous avez déjà un compte sécrétaire ? <span>Connectez-vous !!</span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
