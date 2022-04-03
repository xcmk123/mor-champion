import clsx from 'clsx'
import { useState } from 'react'
import './style.scss'

const DEPENDENCY = {
  1: 'in',
  10: 'start',
  19: 'end',
  31: 'out',
}

const DAYSINWEEK = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const MONTH = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May'
}

const ListDayInMonth = (days) => {
  // days - type of nubmer [0-31]
  return Array.from(Array(days).keys())
}

const getFirstDayOfMonthInWeek = (year, month) => {
  // type of number [0-6]
  return new Date(year, month - 1, 1).getDay();
}

const getDaysInMonth = (year, month) => {
  // type of number [0-31]
  return new Date(year, month, 0).getDate();
}

const initalState = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return {
    month: month,
    year: year,
    day: getFirstDayOfMonthInWeek(year, month),
    days: getDaysInMonth(year, month) 
  }
}

const Table = () => {
  const [ state, setState ] = useState(initalState())

  const handlChangeMonth = (e) => {
    setState({
      ...state, 
      year: (e.target.name === 'next' ? state?.year + 1 : state?.year - 1 )
    })
  }
  
  return (
    <div className="table">
      <div className="header">
        <div className="v-month-year">
          <span className='text-day-string'>{MONTH[state?.month]}</span>
          <span className='text-day-string'>{state?.year}</span>
        </div>
        <div className="g-button">
          <button onClick={(e) => handlChangeMonth(e)} className='btn-action previous-month' name="prev">
            prev
          </button>
          <button onClick={(e) => handlChangeMonth(e)} className='btn-action next-month' name="next">
            next
          </button>
        </div>
      </div>
      <div className='body'>
        {
          ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            .map((item, index) => 
              <span key={index} className='text-day-string'>{item}</span>
            )
        }
        {
          [...ListDayInMonth(state.days)].map((item, index) => 
            <button key={index} className={clsx(DEPENDENCY[item + 1])}>
              <span>
                {item + 1}
              </span>
            </button>
          )
        }
      </div>  
    </div>
  )
}
export default Table