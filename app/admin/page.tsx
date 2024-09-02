import { inter, popins } from '@/assets/fonts'
import AdminPanel from '@/components/admins/AdminPanel';
import React from 'react'

function page() {
  return (
    <div className={`${inter.className} ${popins.variable}`}>
   <AdminPanel />
    </div>
  )
}

export default page