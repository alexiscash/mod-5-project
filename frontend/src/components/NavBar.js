import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
        return (
            <div>
                <img src={'https://mymoodpath.com/wp-content/themes/moodpath/img/logo/cyan.svg'} width={'200px'} alt={'dope'}/>
                <p>
                    <Link to='/'>Home </Link> 
                    <Link to='/journal'>Journal </Link> 
                    <Link to='/results'>Results </Link> 
                    {/* <Link to='/discover'>Discover </Link>  */}
                    <Link to='/login'>Login</Link>
                </p>
            </div>
        );
    
}
// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'

// export default class MenuExampleSecondaryPointing extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state
//     console.log(this.props);

//     return (
//       <div>
//         <img src={'https://mymoodpath.com/wp-content/themes/moodpath/img/logo/cyan.svg'} width={'250px'} alt={'dope'}/>
//         <Menu pointing secondary>
//           <Menu.Item
//             name='home'
//             active={activeItem === 'home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='journal'
//             active={activeItem === 'journal'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='results'
//             active={activeItem === 'results'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Menu position='right'>
//             <Menu.Item
//               name='logout'
//               active={activeItem === 'logout'}
//               onClick={this.handleItemClick}
//             />
//           </Menu.Menu>
//         </Menu>
//       </div>
//     )
//   }
// }