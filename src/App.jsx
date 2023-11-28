import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Info from './components/Info/Info'
import ThanksModal from './components/Modals/ThanksModal'
import BackProjectModel from './components/Modals/BackProjectModel'

function App() {
  const [bookMark, setBookMark] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);

  //total info
  const [totalAmount, setTotalAmount] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);

  // total left
  const [bambooLeft, setBambooLeft] = useState(101);
  const [blackLeft, setBlackLeft] = useState(64);
  return (
    <div className="App">
      <div className={(openModal || openProjectModal) && "modalActive"}>
        <Banner value={[openModal, setOpenModal, bookMark, setBookMark, setOpenProjectModal]} />
        <Info value={[totalAmount, totalBackers]} />
        <About value={[openModal, setOpenModal, bambooLeft, setBambooLeft, blackLeft, setBlackLeft, totalAmount, setTotalAmount, totalBackers, setTotalBackers]} />
      </div>
      {
        openModal && <ThanksModal value={[openModal, setOpenModal, bookMark, setBookMark, openProjectModal, setOpenProjectModal]} />
      }
      {
        openProjectModal && < BackProjectModel value={[openProjectModal, setOpenProjectModal, openModal, setOpenModal, setBookMark]} total={[totalAmount, setTotalAmount, totalBackers, setTotalBackers, bambooLeft, setBambooLeft, blackLeft, setBlackLeft]} />
      }
    </div>
  )
}

export default App
