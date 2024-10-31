
import {
    SyntheticEvent,
    useCallback,
    useRef,
    useState
} from 'react'
import styles from './styles.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { Toast } from '../../components/Toast';
import { LoginCard } from '../../components/LoginCard';


export default function Login() {

    const navigate = useNavigate()

    const refForm = useRef<any>()

    const [isLoading, setIsLoading] = useState(false)
    const [isToast, setIsToast] = useState(false)

    const submitForm = useCallback((event: SyntheticEvent) => {
        event.preventDefault();

        if (refForm.current.checkValidity()) {

            setIsLoading(true)
            const target = event.target as typeof event.target & {
                email: { value: string },
                senha: { value: string }
            }

            console.log(target.email.value)
            console.log(target.senha.value)

            axios.post('http://localhost:3001/login',
                {
                    email: target.email.value,
                    password: target.senha.value
                }
            ).then((resposta) => {
                console.log(resposta.data)
                // não usar
                // window.location('/')

                localStorage.setItem(
                    'americanos.token',
                    JSON.stringify(resposta.data)
                )

                navigate('/dashboard')
            })
                .catch((erro) => {
                    console.log(erro)
                    setIsLoading(false)
                    setIsToast(true)
                })

        } else {
            refForm.current.classList.add('was-validated')
        }
    }, [])

    return (
        <>
            <Loading
                visible={isLoading}

            />
            <Toast
                message='Credenciais Invalidas'
                onClose={() => { setIsToast(false) }}
                show={isToast}
                color='danger'
            />

            <LoginCard/>
        </>
    )
}