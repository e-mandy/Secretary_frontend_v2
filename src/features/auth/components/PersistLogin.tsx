import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRefreshToken } from '../../../hooks/useRefreshToken';
import { useAuth } from '../hooks/useAuth';

const PersistLogin = () => {
    const refresh = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);
    const isAuth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            }catch(e: any){
                if(e?.response?.status === 401 || e?.response?.status === 403) {
                navigate('/secretary/login', { replace: true });
            }
            }finally{
                setIsLoading(false);
            }
        }

        isAuth ? setIsLoading(false) : verifyRefreshToken();
    }, []);

  return isLoading ? (
    <div className='h-screen w-screen flex m-auto'>
        <Spinner width='30' height='30' color='red' visible={true} />
        <p>Veuillez patienter un instant</p>
    </div>
  ) : <Outlet />
}

export default PersistLogin
