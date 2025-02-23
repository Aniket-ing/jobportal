import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppiledJobTable from './AppiledJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills =["HTML","css","Javascript","Reactjs"]
const isResume=true;
function Profile() {
  const [open,setOpen] =useState(false);
  
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5 p-8'>
              <div className='flex justify-between'>
                    <div className=' flex items-center gap-4'>
                          <Avatar className="h-24 w-24">
                                <AvatarImage src='https://github.com/shadcn.png' alt='profile'/>
                          </Avatar> 
                          <div>
                                <h1 className='font-medium text-xl'>Full Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae facere tempora eius qui! Reiciendis inventore necessitatibus aut expedita incidunt!</p>
                          
                          </div> 
                     </div> 
                  <Button onClick={()=> setOpen(true)} className='text-right' variant="outline"><Pen/></Button>
              </div> 
             <div className='my-5'>
                  <div className='flex items-center gap-3 my-2'>
                        <Mail/>
                        <span>abc@gmail.com</span>
                  </div>
                  <div className='flex items-center gap-3 my-2'>
                          <Contact/>
                          <span>1234567891</span> 
                  </div> 
             </div>
             <div className='my-5'>
                  <h1>Skills</h1>
                  <div className='flex items-center gap-1'>
                        {
                          skills.length !=0 ?skills.map((item,index)=><Badge key={index} className='bg-amber-950 text-white'>{item}</Badge>): <span>Not applicable</span>
                        }
                  </div> 
             </div>

              <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                      isResume? <a target='blank' href='https:/youtube.com' className='text-blue-500 hover:underline cursor-pointer'> abc mern stack</a>:<span>NA</span>
                    }
              </div>
              
        </div>
             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                 <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                 <AppiledJobTable/>
              </div>
        <UpdateProfileDialog open ={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile
