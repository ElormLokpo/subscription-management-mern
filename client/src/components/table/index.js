import React, {useState} from 'react'

function Table(props) {
    const [emails, setEmails] = useState([]);

    if(props.emails.length !== 0){
        setEmails(props.emails);
    }
   

  return (
    <table className='border w-full h-full text-sm'>
        <thead className=''>
            <tr className='border-b bg-gray-100'>
                <td className='py-2 px-2 font-semibold'>Email</td>
                <td className='py-2 px-2 font-semibold'>Content</td>
                <td className='py-2 px-2 font-semibold'>Delete</td>
            </tr>
        </thead>

        {
            emails.map(i=>  <tr className='border-b'>
                                        <td className='py-2 px-2 text-sm'>
                                            Jackson@jock.com
                                        </td>
                                        <td className='py-2 px-2 text-sm'>
                                            Brown Content
                                        </td>
                                        <td className='py-2 px-2 text-sm'>
                                            Delete
                                        </td>
                                    </tr>)
        }
    
        
        
    </table>
  )
}

export default Table