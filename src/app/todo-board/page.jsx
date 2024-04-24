import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

const todoBoard = () => {
  return (
    <div className="flex justify-end w-full gap-x-4">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%]">
        <NavbarComponent />
        <div>
          <ListBoardComponentHeader />
          <div>
            <TodoCardComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default todoBoard