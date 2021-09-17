import React from 'react';
import './menu-item.component.scss'
import {withRouter} from 'react-router-dom'


const MenuItem = ({title, price, image, history, match, category, description, location}) => {

    return(
        // <div className = "Menu item"></div>
        <tr>
            <td onClick={() => history.push(`${match.url}${title}`)}>
                {title.toUpperCase()}
            </td>
            <td>
                {price}
            </td>
            <td>
                {category}
            </td>
            <td>
                <img src={image} alt="Product Image" width="150" height="150"></img>
            </td>
            <td>
                {description}
            </td>
            <td>
                <button onClick={() => history.push(`${match.url}${title}`)}>SHOP NOW</button>
            </td>
        </tr>

    )
}

// const MenuItem = ({title, imageUrl, history, match, size, linkUrl, location}) => {

//     return(
//         <div classname = {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

//             <div
//             classname = 'background-image'
//                 style = {{
//                     backgroundImage: `url(${imageUrl})`
//                 }}
//             />
//             <div className ="content">
//                 <h1 className = "title">{title.toUpperCase()}</h1>
//                 <span className = "subtitle">SHOP NOW</span>
//             </div>
//         </div>
//     )
// }

export default withRouter(MenuItem);