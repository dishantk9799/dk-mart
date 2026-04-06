import React from 'react'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div style={{ fontFamily: "Syne" }} className='h-screen w-full bg-zinc-800 text-white'>
      <AppRoutes />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        toastClassName={() =>
          "bg-zinc-800 flex text-sm items-center text-white rounded-xl px-4 py-3"
        }
        bodyClassName="text-xs"
      />
    </div>
  )
}

export default App
