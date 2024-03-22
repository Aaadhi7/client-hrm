import { Link } from 'react-router-dom';
import './Dashboard.css'

export default function DashBoardPage() {
    return (
        <div className='app-container'>
          <div className='img-nav'>
    
            <Link to={'/add_user'}>
            <div className='tile'>
              
              <div className='content'>
                <h1>ADD USER</h1>
                
              </div>
             
            </div></Link>
            
            
    
            {/* Tile 2 */}
            <Link to={'/'}>
          <div className='tile'>
            <div className='content'>
              <h1>HOME</h1>
            </div>
          </div>
        </Link>
    
            {/* Tile 3 */}
            <Link to={'/viewUser'}>
            <div className='tile'>
              
              <div className='content'>
                <h1>USER LIST</h1>
              
              </div>
              
            </div></Link>
    
            {/* Tile 4 */}
            <Link to={'/viewUser'}>
            <div className='tile'>
              
              <div className='content'>
                <h1>LOGOUT</h1>
                
              </div>
              {/* <div className='img'></div> */}
            </div></Link>
    
          </div>
        </div>
      );
}