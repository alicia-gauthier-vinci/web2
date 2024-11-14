import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <Header image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className='page-content'>
        <Outlet />
      </main>
      
      <Footer image="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2021 UGC Cinémas</p>
      </Footer>
    </>
  )
}
/*comment choisir le props parent et le child ? 
on aurait pu l'image en child et le titre en parent ? */
export default App
