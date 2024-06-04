import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>
                    Male
                </span>
                <input type="checkbox" className='checkbox checkbox-primary' />
            </label>
        </div>
        <div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>
                   Female
                </span>
                <input type="checkbox" className='checkbox checkbox-secondary' />
            </label>
        </div>
        </div>
    </div>
  )
}

export default GenderCheckbox

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>
//                     Male
//                 </span>
//                 <input type="checkbox" className='checkbox checkbox-primary' />
//             </label>
//         </div>
//         <div>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>
//                    Female
//                 </span>
//                 <input type="checkbox" className='checkbox checkbox-secondary' />
//             </label>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox