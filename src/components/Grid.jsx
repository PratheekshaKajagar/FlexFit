import { useState, useEffect } from 'react'
import { workoutProgram as training_plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

export default function Grid() {
    const [savedWorkouts, setSavedWorkouts] = useState(null)
    const [selectedWorkout, setSelectedWorkout] = useState(null)

    const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val) => {
        const entry = savedWorkouts[val]
        return entry.isComplete
    })

    function handleSave(index, data) {
        const newObj = {
            ...savedWorkouts,
            [index]: {
                ...data,
                isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete
            }
        }
        setSavedWorkouts(newObj)
        localStorage.setItem('flexfit', JSON.stringify(newObj))
        setSelectedWorkout(null)
    }

    function handleComplete(index, data) {
        const newObj = { ...data }
        newObj.isComplete = true
        handleSave(index, newObj)
    }

    useEffect(() => {
        if (!localStorage) return

        let savedData = {}
        if (localStorage.getItem('flexfit')) {
            savedData = JSON.parse(localStorage.getItem('brogram'))
        }
        setSavedWorkouts(savedData)
    }, [])

    return (
        <div className="training-plan-grid">
            {Object.keys(training_plan).map((workout, workoutIndex) => {

                const isLocked = workoutIndex === 0
                    ? false
                    : !completedWorkouts.includes(`${workoutIndex - 1}`)

                const type = workoutIndex % 3 === 0
                    ? 'Push'
                    : workoutIndex % 3 === 1
                        ? 'Pull'
                        : 'Legs'

                const trainingPlan = training_plan[workout]

                const dayNum =
                    workoutIndex + 1 < 10
                        ? '0' + (workoutIndex + 1)
                        : workoutIndex + 1

                const icon = workoutIndex % 3 === 0 ? (
                    <i className='fa-solid fa-dumbbell'></i>
                ) : workoutIndex % 3 === 1 ? (
                    <i className='fa-solid fa-weight-hanging'></i>
                ) : (
                    <i className='fa-solid fa-bolt'></i>
                )

                if (workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard
                            key={workoutIndex}
                            savedWeights={savedWorkouts?.[workoutIndex]?.weights}
                            handleSave={handleSave}
                            handleComplete={handleComplete}
                            trainingPlan={trainingPlan}
                            type={type}
                            workoutIndex={workoutIndex}
                            icon={icon}
                            dayNum={dayNum}
                        />
                    )
                }

                return (
                    <button
                        key={workoutIndex}
                        onClick={() => {
                            if (isLocked) return
                            setSelectedWorkout(workoutIndex)
                        }}
                        className={'card plan-card ' + (isLocked ? 'inactive' : '')}
                    >
                        <div className='plan-card-header'>
                            <p>Day {dayNum}</p>
                            {isLocked ? (
                                <i className='fa-solid fa-lock'></i>
                            ) : (
                                icon
                            )}
                        </div>

                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}