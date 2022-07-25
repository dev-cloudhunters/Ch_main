import * as React from "react"
import { Box, Button, Collapsible, Text } from 'grommet';
import styled from "styled-components"
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';


const Collapse = (props) => {
    const [open, setOpen] = React.useState(false);
    const isSmall = useMediaQuery('(max-width: 768px)');


    const ButtonStyled = styled(Button)`
        font-weight: bold;
        background-color: var(--primary);
        border:0;
        color:#fff;
    `;
    const BoxDesc = styled(Box)`
       /*  font-weight: bold; */
        color: var(--primary);
        border:0;
        /* padding-left:0;
        padding-right:0; */
        text-align:justify;
        border-bottom:1px solid #fff;
        border-top:1px solid #fff;
        margin-top:10px;
        background-color: #fff;
    `;
    const CollapsibleDesc = styled(Collapsible)`
        /* border-bottom:1px solid #fff; */
    `;

    return (
        <div className={props.className}>
            {isSmall > 0 && (
                <>
                    <ButtonStyled onClick={() => setOpen(!open)} label={props.label} />
                    <CollapsibleDesc open={open} {...props}>
                        <BoxDesc
                            /* background="light-2" */
                            align="center"
                            justify="center"
                            pad="medium"
                        >
                            <Text className="testo-collapse">{props.contentCollapse}</Text>
                        </BoxDesc>
                    </CollapsibleDesc>
                </>
            )}

            {!isSmall > 0 && (
                <>
                   
                            <Text className="testo-collapse">{props.contentCollapse}</Text>
                      
                </>
            )}

        </div>

    )
}

export default Collapse
