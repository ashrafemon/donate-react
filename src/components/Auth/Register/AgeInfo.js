import React, {useEffect, useRef, useState} from "react";
import {PortionTitle, SliderBox, SliderBoxTitle, SliderList, SliderListItem} from "../styled";

const AgeInfo = ({formData, handler}) => {
    const [age, setAge] = useState([])
    const [date, setDate] = useState([])
    const [month] = useState([
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])

    const [selected, setSelected] = useState({
        date: '',
        month: ''
    })

    const ageSliderRef = useRef(null)
    const dateSliderRef = useRef(null)
    const monthSliderRef = useRef(null)

    useEffect(() => {
        let ages = []
        for (let i = 1; i <= 100; i++) {
            ages.push(i)
        }
        setAge(ages)
        setDate(ages.filter(item => item <= 31))
    }, [])

    const wheelHandler = (event, refItem) => {
        refItem.current.scrollTo({
            left: refItem.current.scrollLeft + event.deltaY,
            behaviour: 'smooth'
        })
    }

    const dateMonthHandler = (value, item) => {
        setSelected({
            ...selected,
            [item]: value
        })
    }

    useEffect(() => {
        handler(`${selected.date}-${selected.month}`, 'dob')
    }, [selected])

    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>How old are <br/> You?</PortionTitle>

            <SliderBox title="Please scroll to get your wanted data...">
                <SliderBoxTitle>I am</SliderBoxTitle>
                <SliderList ref={ageSliderRef} onWheel={(e) => wheelHandler(e, ageSliderRef)}>
                    {age.map((item, i) => (
                        <SliderListItem
                            key={i}
                            isActive={formData.age === item}
                            onClick={() => handler(item, 'age')}
                        >
                            {item}
                        </SliderListItem>
                    ))}
                </SliderList>
                <SliderBoxTitle>Years Old</SliderBoxTitle>
            </SliderBox>

            <SliderBox title="Please scroll to get your wanted data...">
                <SliderList ref={dateSliderRef} onWheel={(e) => wheelHandler(e, dateSliderRef)}>
                    {date.map((item, i) => (
                        <SliderListItem
                            key={i}
                            isActive={selected.date === item}
                            onClick={() => dateMonthHandler(item, 'date')}
                        >
                            {item}
                        </SliderListItem>
                    ))}
                </SliderList>
                <SliderBoxTitle>Date</SliderBoxTitle>
            </SliderBox>

            <SliderBox title="Please scroll to get your wanted data...">
                <SliderList ref={monthSliderRef} onWheel={(e) => wheelHandler(e, monthSliderRef)}>
                    {month.map((item, i) => (
                        <SliderListItem
                            key={i}
                            isActive={selected.month === item}
                            onClick={() => dateMonthHandler(item, 'month')}
                        >
                            {item}
                        </SliderListItem>
                    ))}
                </SliderList>
                <SliderBoxTitle>Month</SliderBoxTitle>
            </SliderBox>
        </>
    )
}

export default AgeInfo