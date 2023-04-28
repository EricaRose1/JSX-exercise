function Person({ age, hobbies, name }) {
    const ageReply = age >= 18 ? "Please go vote" : "You must be 18";

    const hobbyList = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some info about this person: </p>
            <ul>
                <li>Name: {name.slice(0, Name_length_max)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbyList}
                </ul>
            </ul>
            <h3>{ageReply}</h3>
        </div>
    );
};   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);