const App = () => {
    return (
        <div>
            <Tweet username="Mia123"
                name="Miada"
                date={new Date().toDateString()}
                message="Beauty is in the eye of the beholder" 
            />
            <Tweet username="Tank456"
                name="Tank"
                date={new Date().toDateString()}
                message="Focus on the step in front of you, not the whole staircase"
            />
            <Tweet username="StevieChicks789"
                name="Steve"
                date={new Date().toDateString()}
                message="Never a failure always a lesson"
            />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))