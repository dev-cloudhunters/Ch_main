import * as React from "react"
import { ModalStyles } from "./ModalStyles"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
//import * as it from "date-fns/locale/it";
import {it} from 'date-fns/esm/locale'
import { addDays } from 'date-fns';
import { registerLocale } from "react-datepicker"

const InnerModal = ({ handleClose, show, children,events }) => {
   
    registerLocale("it", it);
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [startDate, setStartDate] = React.useState(
        console.log("allEventInner",events),
        setHours(setMinutes(new Date(), 30), 17)
    );
    return (
        <ModalStyles >
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
            <DatePicker
                wrapperClassName="date-picker"
                showTimeSelect
                selected={startDate}
                startOpen = {true}
                onChange={(date) => setStartDate(date)}
                includeDates={[new Date(), addDays(new Date(), 1)]}
                showTimeSelect
                timeCaption="Fascia oraria"
                locale="it"
                includeTimes={[
                    setHours(setMinutes(new Date(), 0), 17),
                    setHours(setMinutes(new Date(), 30), 18),
                    setHours(setMinutes(new Date(), 30), 19),
                    setHours(setMinutes(new Date(), 30), 17),
                ]}
               
            />
        </ModalStyles>
    );
};

export default InnerModal
