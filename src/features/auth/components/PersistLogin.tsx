import { useEffect } from 'react';
import { useCheckAuth } from '../../../hooks/useCheckAuth';
import { useAuthStore } from '../store/auth.store';
import Spinner from '../../../components/Spinner';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
    const { checkQuery: { data, isSuccess, isLoading } } = useCheckAuth();
    const { setAuthStore } = useAuthStore()

    useEffect(() => {
        if(isSuccess){
            setAuthStore(data);
        }
    }, [isSuccess]);

  return isLoading ? (
    <div className='h-screen w-screen flex m-auto'>
        <Spinner width='30' height='30' color='red' visible={true} />
        <p>Veuillez patienter un instant</p>
    </div>
  ) : <Outlet />
}

export default PersistLogin
