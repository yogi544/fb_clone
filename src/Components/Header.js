
import { FlagCircleOutlined, HomeRepairServiceOutlined } from '@mui/icons-material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import './Header.css'


export default function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
     <FacebookIcon fontSize='large' />
      </div>

      <div className='header-center'>
     
     

      <div className='header-option'>
      <HomeTwoToneIcon fontSize='large'/>
      </div>

      <div className='header-option'>
      <FlagCircleOutlined fontSize='large'/>
      </div>

      <div className='header-option'>
      <SubscriptionsTwoToneIcon fontSize='large'/>
      </div>
      <div className='header-option'>
      <PeopleOutlineRoundedIcon fontSize='large'/>
      </div>

      <div className='header-option'>
      <BackupTableIcon fontSize='large'/>
      </div>

    



      </div>



    </div>
  )
}
