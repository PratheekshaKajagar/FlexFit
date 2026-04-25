import React, { useState } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props

    const { warmup = [], workout = [] } = trainingPlan || {}

    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})

    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }

    return (
        <div className="workout-container">
            {showExerciseDescription && (
                <Modal
                    showExerciseDescription={showExerciseDescription}
                    handleCloseModal={() => setShowExerciseDescription(null)}
                />
            )}

            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>

            {/* Warmup */}
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>

                {warmup.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="exercise-name">
                            <p>{i + 1}. {item.name}</p>
                        </div>
                        <p>{item.sets}</p>
                        <p>{item.reps}</p>
                        <input disabled placeholder="N/A" />
                    </React.Fragment>
                ))}
            </div>

            {/* Workout */}
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>

                {workout.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="exercise-name">
                            <p>{i + 1}. {item.name}</p>
                        </div>
                        <p>{item.sets}</p>
                        <p>{item.reps}</p>
                        <input
                            value={weights[item.name] || ''}
                            onChange={(e) => handleAddWeight(item.name, e.target.value)}
                        />
                    </React.Fragment>
                ))}
            </div>

            <div className="workout-buttons">
                <button onClick={() => handleSave(workoutIndex, { weights })}>
                    Save & Exit
                </button>
                <button
                    onClick={() => handleComplete(workoutIndex, { weights })}
                    disabled={Object.keys(weights).length !== workout.length}
                >
                    Complete
                </button>
            </div>
        </div>
    )
}