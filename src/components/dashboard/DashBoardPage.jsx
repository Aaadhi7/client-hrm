import { Link } from 'react-router-dom';
import './Dashboard.css'

export default function DashBoardPage() {
    return (
        <div className='app-container'>
          <div className='img-nav'>
    
            
            <div className='tile'>
              <Link to={'/add_user'}>
              <div className='content'>
                <h1>ADD USER</h1>
                
              </div></Link>
             
            </div>
            
            
    
            {/* Tile 2 */}
            <div className='tile'>
            <Link to={'/'}>
              <div className='content'>
                <h1>HOME</h1>
                
              </div></Link>
              
             
            </div>
    
            {/* Tile 3 */}
            
            <div className='tile'>
              <Link to={'/viewUser'}>
              <div className='content'>
                <h1>USER LIST</h1>
              
              </div>
              </Link>
            </div>
    
            {/* Tile 4 */}
            <div className='tile'>
              
              <div className='content'>
                <h1>LOGOUT</h1>
                
              </div>
              <div className='img'></div>
            </div>
    
          </div>
        </div>
      );
}