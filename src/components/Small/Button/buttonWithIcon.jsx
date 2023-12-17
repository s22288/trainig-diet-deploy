
import womanImage from '../../../photo/blackWoman.png'
import menImage from '../../../photo/blackMen.png'
import { Avatar, IconButton } from '@mui/material'

const ButtonWithIcon = () => {
    const handleMenAvatarClick = () => {
        console.log('men')
    }

    const handleWomanAvatarClick = () => {
        console.log('woman')

    };

    return (
        <div>
            <IconButton onClick={handleMenAvatarClick}>
                <Avatar alt="Men" src={menImage} />
            </IconButton>
            <IconButton onClick={handleWomanAvatarClick}>
                <Avatar alt="Woman" src={womanImage} />
            </IconButton>
        </div>
    );

}
export default ButtonWithIcon