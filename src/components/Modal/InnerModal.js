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
import { theme } from '../../styles/Theme.js'
import {navigate} from 'gatsby'
function useMergeState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState)
        );
    return [state, setMergedState];
}

const InnerModal = ({ handleClose, show, children }) => {
    console.log("handleClose",handleClose)
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
         /* axios.get(`https://eoqub82nojdku4t.m.pipedream.net/`)
            .then(res => {
                console.log("res", res.data);
                setEventsModal({ preload: true, events: res.data, phase: "date" });
                //datepicker.current.includeDates = getDateDisponibili(res.data);
            }) */

             let eventsOld = {
                $return_value:{
                "kind": "calendar#events",
                "etag": "\"p33c9nr6mvb9fg0g\"",
                "summary": "CloudHuntersTest",
                "updated": "2022-06-29T15:18:37.975Z",
                "timeZone": "Europe/Rome",
                "accessRole": "owner",
                "defaultReminders": [],
                "nextSyncToken": "CNib7Nb60vgCENib7Nb60vgCGAUg-tLc2QE=",
                "items": [
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308136327106000\"",
                        "id": "4kg7mf3q2lo0a0uadqnhm40i32",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=NGtnN21mM3EybG8wYTB1YWRxbmhtNDBpMzIgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-01T07:22:43.000Z",
                        "updated": "2022-06-01T07:22:43.553Z",
                        "summary": "Evento Passato",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-05-29T11:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-05-29T13:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "4kg7mf3q2lo0a0uadqnhm40i32@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308136464880000\"",
                        "id": "457bga68jgj5aejqsc9uioemd5",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=NDU3YmdhNjhqZ2o1YWVqcXNjOXVpb2VtZDUgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-01T07:23:19.000Z",
                        "updated": "2022-06-01T07:23:52.440Z",
                        "summary": "Altro passato",
                        "description": "Giordano",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "date": "2022-05-29"
                        },
                        "end": {
                            "date": "2022-05-30"
                        },
                        "transparency": "transparent",
                        "iCalUID": "457bga68jgj5aejqsc9uioemd5@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": false
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308236892150000\"",
                        "id": "3ihufabt5kebs3r1fse1iipd36",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=M2lodWZhYnQ1a2ViczNyMWZzZTFpaXBkMzYgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-05-31T21:48:54.000Z",
                        "updated": "2022-06-01T21:20:46.075Z",
                        "summary": "Altro",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-01T10:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-01T11:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "transparency": "transparent",
                        "iCalUID": "3ihufabt5kebs3r1fse1iipd36@google.com",
                        "sequence": 1,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308240572464000\"",
                        "id": "1kivkf7i1s24kv417s623vjsct",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MWtpdmtmN2kxczI0a3Y0MTdzNjIzdmpzY3QgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-01T21:26:18.000Z",
                        "updated": "2022-06-01T21:51:26.232Z",
                        "summary": "Daje",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-03T10:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-03T10:45:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "transparency": "transparent",
                        "visibility": "public",
                        "iCalUID": "1kivkf7i1s24kv417s623vjsct@google.com",
                        "sequence": 1,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308241567642000\"",
                        "id": "5o3vo84525i66146d0oadftimh",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=NW8zdm84NDUyNWk2NjE0NmQwb2FkZnRpbWggazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-01T21:59:43.000Z",
                        "updated": "2022-06-01T21:59:43.821Z",
                        "summary": "passato",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-05-31T09:45:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-05-31T10:45:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "5o3vo84525i66146d0oadftimh@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308496910696000\"",
                        "id": "231ndf0e2hllnt65ktfopm91ja",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MjMxbmRmMGUyaGxsbnQ2NWt0Zm9wbTkxamEgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-02T13:35:56.000Z",
                        "updated": "2022-06-03T09:27:35.348Z",
                        "summary": "Tito",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-04T15:45:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-04T16:45:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "231ndf0e2hllnt65ktfopm91ja@google.com",
                        "sequence": 1,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3308579543234000\"",
                        "id": "2g3e66hke48em63vb812nkrjs7",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MmczZTY2aGtlNDhlbTYzdmI4MTJua3JqczcgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-03T20:56:11.000Z",
                        "updated": "2022-06-03T20:56:11.617Z",
                        "summary": "AriTito",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-05T22:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-05T23:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "2g3e66hke48em63vb812nkrjs7@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3309069624812000\"",
                        "id": "2t8gbllv19sov19o8e1glhqele",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MnQ4Z2JsbHYxOXNvdjE5bzhlMWdsaHFlbGUgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-06T17:00:12.000Z",
                        "updated": "2022-06-06T17:00:12.406Z",
                        "summary": "futuro",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-09T10:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-09T10:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "2t8gbllv19sov19o8e1glhqele@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3309069657828000\"",
                        "id": "4ht2jc1k390ga1hrqvehtmfkbp",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=NGh0MmpjMWszOTBnYTFocnF2ZWh0bWZrYnAgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-06T17:00:28.000Z",
                        "updated": "2022-06-06T17:00:28.914Z",
                        "summary": "altro futuro",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-10T19:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-10T20:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "4ht2jc1k390ga1hrqvehtmfkbp@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3309434857188000\"",
                        "id": "0141b6kfvp66ts2d7dp8epqh1t",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MDE0MWI2a2Z2cDY2dHMyZDdkcDhlcHFoMXQgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-08T19:43:48.000Z",
                        "updated": "2022-06-08T19:43:48.594Z",
                        "summary": "provvva",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-10T15:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-10T16:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "0141b6kfvp66ts2d7dp8epqh1t@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3311978529284000\"",
                        "id": "6kao01r9b4vu7jbmpsaok32ehg",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=NmthbzAxcjliNHZ1N2pibXBzYW9rMzJlaGcgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-23T13:01:04.000Z",
                        "updated": "2022-06-23T13:01:04.642Z",
                        "summary": "Altra disponibilità",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-06-27T09:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-06-27T10:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "6kao01r9b4vu7jbmpsaok32ehg@google.com",
                        "sequence": 0,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3313027494060000\"",
                        "id": "3k5dvil380t7kn06v28grd1bbg",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=M2s1ZHZpbDM4MHQ3a24wNnYyOGdyZDFiYmcgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-13T21:12:19.000Z",
                        "updated": "2022-06-29T14:42:27.030Z",
                        "summary": "Avanti",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-07-02T09:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-07-02T10:00:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "3k5dvil380t7kn06v28grd1bbg@google.com",
                        "sequence": 1,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    },
                    {
                        "kind": "calendar#event",
                        "etag": "\"3313027500816000\"",
                        "id": "06o6idp9hns06n85uhj4nvqir7",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MDZvNmlkcDlobnMwNm44NXVoajRudnFpcjcgazJoajMxbDZnMGVmcXVhZzU3cjZuaGVqdThAZw",
                        "created": "2022-06-13T21:12:40.000Z",
                        "updated": "2022-06-29T14:42:30.408Z",
                        "summary": "Carlo",
                        "creator": {
                            "email": "tod.bertuzzi@gmail.com"
                        },
                        "organizer": {
                            "email": "k2hj31l6g0efquag57r6nheju8@group.calendar.google.com",
                            "displayName": "CloudHuntersTest",
                            "self": true
                        },
                        "start": {
                            "dateTime": "2022-07-02T10:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "end": {
                            "dateTime": "2022-07-02T11:30:00+02:00",
                            "timeZone": "Europe/Rome"
                        },
                        "iCalUID": "06o6idp9hns06n85uhj4nvqir7@google.com",
                        "sequence": 1,
                        "reminders": {
                            "useDefault": true
                        },
                        "eventType": "default"
                    }
                ]
            }}
            setEventsModal({ preload: true, events: eventsOld, phase: "date" }); 
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

    const finalizeReservetion = () => {
        handleClose();
        navigate("cloudform", {state:{eventsModal}})
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
                            <Heading level={4}>Chi volerà ? </Heading>
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
                            <Heading level={4}>Seleziona un metodo di pagamento </Heading>
                            <RadioButtonGroup
                                name="payMethod"
                                options={payMethodOpts}
                                value={payMethod}
                                onChange={(event) => setPayMethod(event.target.value)}

                            />
                            <Button onClick={() => setEventsModal({ phase: "whoFly" })} icon={<LinkPrevious />} label="Indietro" />
                            <Button disabled={payMethod == null ? true : false} onClick={() => finalizeReservetion ()} icon={<Checkmark />} label="Avanti" />
                        </Grommet>
                        
                        </>
                    )
                }

            </>
        </ModalStyles>
    );
};

export default InnerModal
