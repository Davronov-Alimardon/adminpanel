import elementSvg from '../icons/element-3.svg'
import clipboardTrick from '../icons/clipboard-tick.svg'
import calendarTick from '../icons/calendar-tick.svg'
import bagTick from '../icons/bag-tick-2.svg'
import emptyWallet from '../icons/empty-wallet.svg'
import setting from '../icons/setting-2.svg'
import sms from '../icons/sms.svg'
import Question from '../icons/Question.svg'

export default function App() {
  return (
      <div className="bg-white min-h-screen min-w-[230px]">
        <h3 className="text-[#013CC6] ml-[29px] mt-[59px] text-[24px] font-poppins">Sales.</h3>
        <ul className="flex flex-col mt-[58px]">
          <li className='flex flex-row border-l-4 py-2 border-[#0B63F8]'>
            <div className='ml-[41px]'>
              <img src={elementSvg} alt="element-3" width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] text-[#0B63F8] font-poppins'>Dashboard</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={clipboardTrick} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Lab Test</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={calendarTick} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Appointment</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={bagTick} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Medicine Order</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={sms} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Message</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={emptyWallet} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Payment</p>
          </li>
          <li className='flex flex-row p-2 mt-[19px]'>
            <div className='ml-[37px]'>
              <img src={setting} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Settings</p>
          </li>          
        </ul>
        <li className='flex flex-row p-2 mt-[400px] mb-5'>
            <div className='ml-[37px]'>
              <img src={Question} alt="element-3" className='' width={24} height={24} />
            </div>
            <p className='pl-3 text-[16px] font-poppins text-[#777]'>Help</p>
          </li>  
      </div>
  )
}