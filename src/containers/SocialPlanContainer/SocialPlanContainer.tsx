import "./SocialPlanContainer.scss"
import CalendarApp from '../../components/CalendarApp/CalendarApp'
import SocialApps from '../../components/SocialApps/SocialApps'

const SocialPlanContainer = () => {
  return (
    <div className='apps-container'>
        <h2 className='apps-container__title'>Plan your day</h2>
        <div className='apps-container__apps'>
        <SocialApps />
        <CalendarApp />
        </div>
    </div>
  )
}

export default SocialPlanContainer