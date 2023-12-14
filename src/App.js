import { useState } from "react";
import "./App.css";

function App() {
    const [title, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };
    const handleOnChangeDesc = (e) => {
        setDescription(e.target.value);
    };
    const addElement = () => {
        if (title.trim() !== "" && description.trim() !== "") {
            setTaskArr([...taskArr, { title, description }]);
            setValue("");
            setDescription("");
        }
    };

    const deleteTask = (key) => {
        const updatedTask = [...taskArr];
        updatedTask.splice(key, 1);
        setTaskArr(updatedTask);
    };
    return ( <
        >
        <
        div className = "container" >
        <
        section className = "todoContainer" >
        <
        header className = "AppHead" >
        <
        h3 className = "header" > To - Do - List Web App < /h3>{" "} <
        /header>{" "} <
        main className = "mainTODObox" >
        <
        form className = "todoForm" >
        <
        input type = "text"
        name = "myTitle"
        placeholder = "Title"
        value = { title }
        onChange = { handleOnChange }
        required /
        >
        <
        textarea name = "mydesc"
        className = "mydescription"
        placeholder = "Description"
        value = { description }
        onChange = { handleOnChangeDesc }
        required /
        >
        <
        input type = "submit"
        className = "addBtn"
        value = "Save"
        onClick = { addElement }
        />{" "} <
        /form>{" "} <
        div className = "myTODObox" >
        <
        h3 className = "TodoboxHeader" > TODO tasks < /h3>{" "} {
            taskArr.map((task, index) => {
                return ( <
                    li className = "myList" >
                    <
                    div className = "myListContent" >
                    <
                    h3 > { task.title } < /h3> <p> {task.description} </p > { " " } <
                    /div>{" "} <
                    div className = "icon" >
                    <
                    i className = "fas fa-trash-alt"
                    onClick = {
                        () => deleteTask(index) } >
                    { " " } <
                    /i>{" "} <
                    /div>{" "} <
                    /li>
                );
            })
        } { " " } <
        /div>{" "} <
        /main>{" "} <
        /section>{" "} <
        /div>{" "} <
        />
    );
}

export default App;