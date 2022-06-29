import * as React from "react"
import { ModalStyles } from "./ModalStyles"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import FormComp from "../../components/Form/Form";
//import * as it from "date-fns/locale/it";
import { it } from 'date-fns/esm/locale'
import { addDays, isAfter, isSameDay, min, isSameMinute, intlFormat } from 'date-fns';
import { format } from 'date-fns-tz'
import { registerLocale } from "react-datepicker"
import axios from 'axios';
import Lottie from "lottie-react"
import data from "../../../static/calendar_lottie.json"
import { Grommet, Box, List, Menu, Text, ListItem, Button, Heading, RadioButtonGroup } from 'grommet';
import { Clock, LinkPrevious, Edit, Checkmark } from 'grommet-icons';
import { theme } from '../../Styles/Theme.js'
function useMergeState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState)
        );
    return [state, setMergedState];
}

const InnerModal = ({ handleClose, show, children }) => {
    const [startDate, setStartDate] = React.useState(null);
    /* const [preload, setPreload] = React.useState(false);
    const [events, setEvents] = React.useState(null); */
    const [eventsModal, setEventsModal] = useMergeState({
        events: null,
        phase: "load",
        dateSelected: null,
        whoFly: null,
        payMethod: null
    })
    const { dateSelected, whoFly, payMethod, events, phase } = eventsModal;
    const calendarAnimation = JSON.parse(JSON.stringify(data))
    const whoFlyOpts = [
        { label: 'Voglio regalare un voucher', value: 'voucher' },
        { label: 'Voglio prenotare un volo per me', value: 'self' },
    ]
    let payMethodOpts = [
        { label: 'Pagamento sul posto', value: 'payLater', disabled: whoFly == "voucher" ? true : false },
        { label: 'Pagamento anticipato', value: 'payNow' },
    ]

    /* GAPI*/
    React.useEffect(() => {
        axios.get(`https://eoqub82nojdku4t.m.pipedream.net/`)
            .then(res => {
                console.log("res", res.data);
                setEventsModal({ preload: true, events: res.data, phase: "date" });
                //datepicker.current.includeDates = getDateDisponibili(res.data);
            })
    }, [])



    registerLocale("it", it);
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const datepicker = React.useRef(null);
    const CHCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {/* {value} */}
            scegli una data
        </button>
    ));

    const changeDate = (date) => {
        if (datepicker.current) {
            //console.log("allEventInner", events, datepicker.current)
        }
        datepicker.current.setOpen(false)
        setEventsModal({ dateSelected: new Date(date), phase: "time" });
        //setStartDate(date);
    }

    const changeTime = (date) => {
        console.log("changeTime", date)
        setEventsModal({ phase: "confirmDate", dateSelected: new Date(date) });
    }

    const backPhase = () => {
        setEventsModal({ phase: "date" });
    }

    const changePhase = (phase) => {
        setEventsModal({ phase: phase });
    }

    const setWhoFly = (value) => {
        console.log("setWhoFly", value)
        setEventsModal({ whoFly: value, payMethod: value == "voucher" ? "payNow" : null });
    }

    const setPayMethod = (value) => {
        setEventsModal({ payMethod: value });
    }

    const recap = () => {
        console.log("eventsModal", eventsModal)
        let evento = events.$return_value.items.filter((event, index) => {
            return isSameMinute(new Date(event.start.dateTime), dateSelected)
        })[0]
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body = {
            "id": evento.id
        }
        console.log("body",body,"evento",evento)
        const options = {
            method: "POST",
            headers,
            mode: "cors",
            body: JSON.stringify(body),
        }
        fetch("https://eojy131adppql6r.m.pipedream.net", options)
        /* function sendTrigger() {
            const headers = new Headers()
            headers.append("Content-Type", "application/json")
        
            const body = {
              "test": "event",
              "id": "1ifjubqjdt619q1bk56tkpnjot"
            }
        
            const options = {
              method: "POST",
              headers,
              mode: "cors",
              body: JSON.stringify(body),
            }
        
            fetch("https://eojy131adppql6r.m.pipedream.net", options)
        
        
          } */
    }

    const getEventsByDate = () => {
        if (events) {
            console.log("getEventsByDate", events)
            return events.$return_value.items.filter((event, index) => {
                return isSameDay(new Date(event.start.dateTime), dateSelected)
            })
        } else {
            return []
        }
    }

    const getDateDisponibili = () => {
        console.log("events", events)
        let dates = []
        if (events) {
            events.$return_value.items.forEach(event => {
                //console.log(new Date(event.start.dateTime),"|||",new Date())
                if (!isAfter(new Date(event.start.dateTime), new Date())) {
                    console.log("data passata");
                } else {
                    console.log("data valida ", event.start.dateTime)
                    dates.push(new Date(event.start.dateTime))
                }
            });
        }
        //return [setHours(setMinutes(new Date(), 30), 17)]
        return dates
    }

    const isEnabled = () => {
        return null
    }

    React.useEffect(() => {
        console.log("phase InnerModal", phase)

    }, [phase]);



    return (
        <ModalStyles >
            <>
                <span>data selezionata</span>
                {
                    phase == "date" && (
                        <DatePicker
                            shouldCloseOnSelect={false}
                            ref={datepicker}
                            wrapperClassName="date-picker"
                            //showTimeSelect
                            selected={dateSelected}
                            startOpen={true}
                            onChange={changeDate}
                            includeDates={getDateDisponibili()}
                            //timeFormat="p"
                            dateFormat="Pp"
                            timeCaption="Fascia oraria"
                            locale="it"
                            onClickOutside={() => { datepicker.current.setOpen(true) }}
                            shouldCloseOnSelect={false}
                            //includeTimes={getAllTimesByDate(startDate)}
                            customInput={<CHCustomInput />}
                        />
                    )
                }
                {
                    phase == "load" && (
                        <Lottie animationData={calendarAnimation} style={{ width: "600px" }} />
                    )
                }
                {
                    phase == "time" && (
                        <Grommet theme={theme}>
                            <Box
                                direction="column"
                                pad="medium"
                                gap="small">
                                <Heading level={4}>Seleziona una fascia oraria tra quelle disponibili</Heading>
                                {
                                    getEventsByDate().map((event, index) =>
                                        <Button className="btn-time" onClick={() => { changeTime(event.start.dateTime) }} data-event={event.start.dateTime} key={index} icon={<Clock />} label={format(new Date(event.start.dateTime), "HH:mm") + "-" + format(new Date(event.end.dateTime), "HH:mm")} />

                                    )
                                }
                                <Button margin={{ vertical: "medium" }} onClick={backPhase} icon={<LinkPrevious />} label="Torna indietro" />
                            </Box>
                        </Grommet>
                    )
                }

                {
                    phase == "confirmDate" && (
                        <Grommet theme={theme}>
                            <Heading level={4}>Volerai il:</Heading>
                            <Heading level={3}>{format(new Date(dateSelected), "EEEE dd LLLL Y", { locale: it })} </Heading>
                            <Heading level={4}>Alle ore:</Heading>
                            <Heading level={3}>{format(new Date(dateSelected), "HH:mm", { locale: it })} - ora italiana</Heading>
                            <Box direction="column" gap="small" margin={{ vertical: "medium" }}>
                                <Button onClick={() => setEventsModal({ phase: "whoFly" })} icon={<Checkmark />} label="Avanti" />
                                <Button onClick={() => setEventsModal({ phase: "time" })} icon={<LinkPrevious />} label="Indietro" />
                            </Box>
                        </Grommet>
                    )

                }
                {
                    phase == "whoFly" && (
                        <Grommet theme={theme}>
                            <RadioButtonGroup
                                name="whoFly"
                                options={whoFlyOpts}
                                value={whoFly}
                                onChange={(event) => setWhoFly(event.target.value)}
                            />
                            <Button onClick={() => setEventsModal({ phase: "confirmDate" })} icon={<LinkPrevious />} label="Indietro" />
                            <Button disabled={whoFly == null ? true : false} onClick={() => setEventsModal({ phase: "payMethod" })} icon={<Checkmark />} label="Avanti" />
                        </Grommet>
                    )
                }
                {
                    phase == "payMethod" && (
                        <>
                        <Grommet>
                            <RadioButtonGroup
                                name="payMethod"
                                options={payMethodOpts}
                                value={payMethod}
                                onChange={(event) => setPayMethod(event.target.value)}

                            />
                            <Button onClick={() => setEventsModal({ phase: "whoFly" })} icon={<LinkPrevious />} label="Indietro" />
                            <Button disabled={payMethod == null ? true : false} onClick={() => recap()} icon={<Checkmark />} label="Avanti" />
                        </Grommet>
                        <FormComp/>
                        </>
                    )
                }

            </>
        </ModalStyles>
    );
};

export default InnerModal
