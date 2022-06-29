import styled from "styled-components"

export const CheckStyles = styled.div`
    #checkAvailable {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: red;
        z-index: 2;
        background: var(--primary);
        color: white;
        text-align: center;
        text-indent: 0.1em;
        clip-path: ellipse(211% 90% at -79.8% 80%);
        z-index:1051;

        .wrapperCheck {
            margin-top:5px;
        }
    }

    #overlayAvailable {
        background: white;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: block;
        z-index: 1050;
    }

    .boxCheck {
        position:relative;
    }

    h3 {
        border: 1px solid;
        padding: 2px 4px;
        background: #fff;
        color: var(--primary);
        border-radius: 8px;
        display: flex;
        padding-right: 30px;
        align-items:center;
    }

    .icoAnim {
        position:absolute;
        right:5px;
        display:flex;
    }

    .closeCheck {
        position:absolute;
    }

    .preTextCheck {
        font-size:28px;
    }
    
    button {
        box-shadow: none !important;
        & * {
            box-shadow: none !important;
        }
    }

    
`
