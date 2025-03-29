import { useState } from 'react';

import { AppBar, Toolbar, Typography, styled, Box, InputBase} from '@mui/material' ;
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { logoURL } from '../../constants/constant';
import { routhPath } from '../../constants/route';
//components
import HeaderMenu from './HeaderMenu';

const StyledToolBar = styled(Toolbar)`
background: #121212;
min-height: 56px !important;
padding : 0 115px!important;
justify-content: space-between;
& > * {
    padding: 0 16;
}
& > div
{
    display: flex;
    align-items: center;
    cursor: pointer;
    & >p
    {
        font-size: 14px;
        font-weight: 600;
    }
}
& >p{
    font-size: 14px;
    font-weight: 600;
}
`;
const InputSearchField = styled(InputBase)`
background: #FFFFFF;
height: 30px;
width: 55%;
border-radius: 5px;

`
const Logo = styled('img')({
    width: 64,
})

const Header = () =>
{
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }
    return(
<AppBar position='static'>
    <StyledToolBar>
    <Logo src={logoURL} alt="logo" onClick={()=>navigate(routhPath.home)}/>
    <Box onClick={handleClick}>
        <Menu/>
        <Typography>Menu</Typography>
    </Box>
    <HeaderMenu open={open} handleClose={handleClose}/>
    <InputSearchField />
    <Typography>IMDB<Box component="span">Pro</Box></Typography>
    <Box>
        <BookmarkAdd/>
        <Typography>Watchlist</Typography>
    </Box>
    <Typography>Sign In</Typography>
<Box>
    <Typography>EN</Typography>
    <ExpandMore/>
</Box>
    </StyledToolBar>
</AppBar>
    )
}
export default Header;