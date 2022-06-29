import * as React from "react"
import { CheckStyles } from "./CheckStyles"
import { motion } from "framer-motion"
import { useMainStore } from '../../components/MainStore';
import { BsCalendarDate } from "react-icons/bs"
import { Grommet, Box, Heading, Button as ButtonGroom } from 'grommet';
import { Schedule, LinkUp } from 'grommet-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
//import * as it from "date-fns/locale/it";
import { it } from 'date-fns/esm/locale'
import { addDays, isSameDay, min, isSameMinute } from 'date-fns';
import { registerLocale } from "react-datepicker"
import { useFloating, autoUpdate } from '@floating-ui/react-dom';

const CheckAvalaible = ({ isOpen, children }) => {
    const [state, actions] = useMainStore();
    const [showCal, setShowCal] = React.useState(false)
    const [startDate, setStartDate] = React.useState(new Date());
    const { x, y, reference, floating, strategy } = useFloating(
        {
            strategy: 'fixed',
            placement: 'top-start',
            whileElementsMounted: autoUpdate,
        });
    /* const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [arrowElement, setArrowElement] = React.useState(null); */
    /*   const { styles, attributes } = usePopper(referenceElement, popperElement, {
          modifiers: [{ name: 'arrow', options: {placement:'right-start', element: arrowElement } }],
      }); */

    registerLocale("it", it);
    const startRef = React.useRef(null);
    const handleClose = () => {
        actions.update_is_open(false)
    }

    const handleShowCal = () => {
        console.log("handleShowCal")
        setShowCal(!showCal)
    }

    const CHCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {/* {value} */}
            scegli una data
        </button>
    ));



    React.useEffect(() => {
        console.log("isOpen check", state.isOpen)

        if (state.isOpen) {
            document.body.classList.add('openCheck');
        } else {
            document.body.classList.remove('openCheck');
        }

    }, [state.isOpen]);




    React.useEffect(() => {
        console.log("showCal", showCal)
        if (showCal) {
            console.log("call open dp")
            startRef.current.setOpen(true);
        }
    }, [showCal]);

    const checkVar = {
        open: {
            y: "0",
            clipPath: 'ellipse(211% 90% at -79.8% 80%)'
        },
        closed: {
            //y: window.innerHeight + 10,
            clipPath: 'ellipse(0% 90% at 0% 0%)'
        },
    }

    const iconsVar = {
        show: {
            opacity: "1",
            transition: { ease: "easeOut", duration: 2.3 }

        },
        hide: {
            opacity: "0",
            transition: { ease: "easeOut", duration: 2.3 }
        },
    }

    const overlayVar = {
        open: {
            display: "block",
            opacity: 0.8
        },
        closed: {
            opacity: 0,
            transitionEnd: {
                display: "none",
            },
        },
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    return (
        <>
            <div className="refEl" ref={floating} /* ref={setPopperElement}  */ /* style={styles.popper} {...attributes.popper} */
                style={{
                    position: strategy,
                    top: y ?? '',
                    left: x ?? '',
                }}
            >
                <DatePicker
                    ref={startRef}

                    //popperPlacement='top-start'
                    //ref={datepicker}
                    wrapperClassName="date-picker"
                    //showTimeSelect
                    selected={startDate}
                    startOpen={false}
                    //onChange={changeDate}
                    //includeDates={getDateDisponibili()}
                    //timeFormat="p"
                    dateFormat="Pp"
                    timeCaption="Fascia oraria"
                    locale="it"
                    onClickOutside={() => { console.log("clickOutSide") }}
                    shouldCloseOnSelect={false}
                    //includeTimes={getAllTimesByDate(startDate)}
                    customInput={<CHCustomInput />}
                />
                {/* <div ref={setArrowElement} style={styles.arrow} /> */}
            </div>

            <CheckStyles >

                <motion.div
                    id="overlayAvailable"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={overlayVar}
                    transition={{ type: "ease", stiffness: 50, velocity: 50 }}>
                    <div className="overlay"></div>
                </motion.div>
                <motion.div

                    id="checkAvailable"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={checkVar}
                    transition={{ type: "ease" }}>

                    <div className="wrapperCheck">
                        <section className="main-check">
                            {children}
                            <ButtonGroom >
                                <Box
                                    
                                    //ref={setReferenceElement}
                                    className="boxCheck"
                                    onClick={handleShowCal}
                                    direction="row" pad={{ vertical: 'small' }} justify="center" align="center" gap="20px" >
                                    <span className="preTextCheck">Prima di procedere</span>
                                    <Heading level="3" size="medium" margin="none" ref={reference}>
                                        verifica la disponibilità
                                        <motion.div
                                        className="icoAnim"
                                        variants={container}
                                        initial="hidden"
                                        animate={showCal ? "show" : "hidden"}>
                                        <LinkUp color='#c30f1a' size='medium' />
                                    </motion.div>

                                    <motion.div
                                        className="icoAnim"
                                        variants={container}
                                        initial="hidden"
                                        animate={showCal ? "hidden" : "show"}>
                                        <Schedule color='#c30f1a' size='medium' />
                                    </motion.div>
                                    </Heading>

                                   

                                </Box>
                            </ButtonGroom>
                            {showCal && <button type="button" className="closeCheck" onClick={handleClose}>
                                Close
                        </button>
                            }
                        </section>
                    </div>
                </motion.div>
            </CheckStyles>
        </>
    );
};

export default CheckAvalaible
