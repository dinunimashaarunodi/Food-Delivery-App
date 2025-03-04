import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a better experience, download:</p>
      <hr /> {/* ✅ Moved outside the <p> */}
      <p>Tomato</p>
      <div className='app-download-platform'>
        <img src={assets.play_store} alt='Play Store' />
        <img src={assets.app_store} alt='App Store' />
      </div>
    </div>
  )
}

export default AppDownload
