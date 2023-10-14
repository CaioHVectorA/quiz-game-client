"use client"
import Button from '@/components/Button'
import Form from '../components/FormComponents'
import { API_URL, LOCAL_STORAGE } from '@/util/consts'
import { useContext, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { AppContext } from '@/components/Context/AppContext'
import { useRouter } from 'next/navigation'
import { saveLocalStorage } from '@/util/handleLocalStorage'
function LoginForm() {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState(false)
  const [isLoged, setIsLoged] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { setUserData } = useContext(AppContext)
  const router = useRouter()
  function validateAndSubmit() {
    let errorMessage = '';
  
    // Validação do nome de usuário (sem símbolos e até 20 caracteres)
    const usernameRegex = /^[a-zA-Z0-9]{1,20}$/;
    if (!usernameRegex.test(name)) {
      errorMessage = 'Nome de usuário inválido. Use apenas letras e números, com até 20 caracteres.';
    }
  
    // Validação da senha (pelo menos 8 caracteres)
    if (password.length < 8) {
      errorMessage = 'A senha deve ter pelo menos 8 caracteres.';
    }
  
    // Se houver uma mensagem de erro, defina-a no estado de erro
    if (errorMessage !== '') {
      setError(errorMessage);
    } else {
      setError(null); // Limpa qualquer erro anterior
      handleAuth(name, password, checked, isLoged);
    }
  }
  useEffect(() => setError(null), [name, password, isLoged, checked])
  function handleAuth(username: string, password: string, checked: boolean, isLoged: boolean) {
    console.log(API_URL + 'user/' + (isLoged ? 'login' : ''))
    axios.post(API_URL + 'user/' + (isLoged ? 'login' : ''), {
        username,
        password
    }).then(response => {
      console.log(response)
      if (checked) saveLocalStorage(LOCAL_STORAGE.USER_CACHE,response.data)
      setUserData(response.data)
      router.push('/home')
    }).catch((err: AxiosError) => {
      console.log(err)
      //@ts-ignore - todos as exceções do app possuem essas propriedades.  
      setError(err.response.data.message)
    })
    }

  return (
  <>
  <Form.Root>
    <p className="text-center text-white text-3xl mb-4">{!isLoged ? "Registrar" : 'Entrar'}</p>
    <Form.Input value={name} setValue={setName} placeholder='Nome de usuário'></Form.Input>
    <Form.Input value={password} setValue={setPassword} placeholder='Senha'></Form.Input>
    <Form.Checkbox value={checked} setState={setChecked} label='Lembrar neste computador?'/>
    {error ? <p className=' my-3 text-red-400 text-center font-bold'>{error}</p> : <p className=' my-3 text-red-400'></p>}
    <Button onClick={validateAndSubmit}>{!isLoged ? "Registrar" : 'Entrar'}</Button>
    <p className=' text-center mt-4 underline uppercase cursor-pointer text-blue-300' onClick={() => setIsLoged(!isLoged)}>{!isLoged ? "Já tenho conta" : 'Não possuo conta'}</p>
  </Form.Root>
  </>
)
}


export default function Home() {

  return (
    <main className=' w-full bg-social bg-math bg-nature bg-others h-screen flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-gray-700 via-black to-black'>
        <h1 className=' text-4xl font-semibold'>Faça login para jogar o jogo!</h1>
        <div className=' animate-[slideLeft_0.6s_ease-in-out]'>
          <LoginForm />
        </div>
      </main>
  )
}
