import React from 'react'
import { FaRegMessage,FaBell   } from "react-icons/fa6";
import { FaGlobeAmericas   } from "react-icons/fa";

const Icons = () => {
  return (
    <>
        <button>
            <FaRegMessage size={20} />
        </button>
        <button>
            <FaGlobeAmericas size={20}  />
        </button>
        <button>
            <FaBell size={20} />
        </button>
    </>
  )
}

export default Icons