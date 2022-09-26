import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Hyperlink  = styled(Link)`
    padding: 0.6rem 2rem;
    background: #3b0362;
    border: 1px solid #3b0362;
    border-radius: 5px;
    color: white;
    margin: 0.8rem;
    text-decoration: none;

    :hover {
        background: 	#7a49a5;
        border: 1px solid #7a49a5;
        transition-duration: 0.3s;

    }

`
//