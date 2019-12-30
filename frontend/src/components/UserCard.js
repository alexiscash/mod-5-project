import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleCard = () => {
    const name = localStorage.firstName.charAt(0).toUpperCase() + localStorage.firstName.substring(1);

    return(
        <Card>
            <Image src='https://cdn.vox-cdn.com/thumbor/RlAwOw19UUtp3654kFrkg1CrvH8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011248/Screen_Shot_2019_04_05_at_3.13.33_PM.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2019</span>
            </Card.Meta>
            <Card.Description>
                {localStorage.bio}
            </Card.Description>
            </Card.Content>
        </Card>
    )
  
}

export default CardExampleCard