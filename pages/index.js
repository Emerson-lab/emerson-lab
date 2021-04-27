import useAuth from './../hooks/useAuth';

export default function Home() {

  const { user, signin } = useAuth();
  console.log('user', user);

  return (
    <div>
      <h2>Welcome to Next.js!</h2>
      <button type="button" onClick={() => signin()}>Entrar com github</button>
    </div>
  )
}
