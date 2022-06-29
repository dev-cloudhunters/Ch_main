import styled from "styled-components"

export const ModalStyles = styled.div`
.react-datepicker__time-list-item.react-datepicker__time-list-item--disabled {
    display:none;
}

.react-datepicker {
    display:flex;
    flex-direction:column-reverse;

    .react-datepicker__header {
        border-bottom:0;

        .react-datepicker__day-name {
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 500;
            color: var(--primary);
        }

        .react-datepicker__current-month {
            color: var(--primary);
            text-transform:capitalize;
        }
    }

    .react-datepicker__day {
        box-sizing: border-box !important;
        font-size: 14px !important;
        text-align: center !important;
        cursor: default !important;
        background: rgb(255, 255, 255) ;
        border: 1px solid rgb(228, 231, 231) !important;
        color: rgb(202, 204, 205);
    }

    .react-datepicker__day--selected {
        background: var(--primary) ;
        color:#fff;
    }

    

    .react-datepicker__triangle {
        display:none;
    }

    .react-datepicker__time-container  {
        width:100%;

        .react-datepicker__time-list {
            height: auto !important;
        }
    }

    
}
`
