import React from 'react'
import './ActivitySummary.styles.css'
import {Title} from '../Title/Title.component'
import { Summary } from '../Summary/Summary.component'
import { Filter } from '../Filter/Filter.component'
export const ActivitySummary=()=>(
    <div className="activitysummary-container">
      <Title text='Activities Summary'/>
      <Filter />
      <Summary/>
    </div>
)