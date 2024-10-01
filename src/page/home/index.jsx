import { useState } from 'react'
import Button from '../../component/button';
import Modal from '../../component/modal';

function Home() {
  const [open, setOpen] = useState(false)

  //update giá trị trên store => useDispatch

  //get giá trị trên store => useSelector

  const handelOpenModal = () => {
    setOpen(true);
  }
  const handelCloseModal = () => {  
    setOpen(false);
  }
  return (
    <div>
      <Button variant="primary" onClick={handelOpenModal}>Open Modal</Button>

      <Modal isOpen={open} onCancel={handelCloseModal}/>
    </div>
  )
}

export default Home