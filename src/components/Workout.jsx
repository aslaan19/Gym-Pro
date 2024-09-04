import React from 'react'
import SectioWrapper from './SectioWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectioWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectioWrapper>
    )
}