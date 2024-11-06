import { useEffect, useState } from 'react';
import './style.css'

const ToDO = () => {
    const [inputData, setInputData] = useState('');
    const [inputDes, setInputDes] = useState('');
    const [data, setData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [getEditId, setGetEditId] = useState();
    const [editItem, setEditItem] = useState(-1);
    const [check, setCheck] = useState(false); // Use for checkbox
    const handleAddData = () => {
        if (inputData == "" || inputDes == "") {
            alert('Please fill the Name and description!')
        } else {
            setData([{ id: Date.now(), name: inputData, description: inputDes, completed: check, }, ...data]);
            setInputDes('');
            setInputData('');
        }
    };

    const hendleEdit = (id, index) => {
        setInputData(data[index].name);
        setInputDes(data[index].description);
        setIsEdit(true);
        setGetEditId(id);
        setEditItem(index);
    };

    const hendleDelete = (id) => {
        const dt = data.filter((item) => {
            return item.id !== id;
        });
        setData(dt);
    };

    const handleUpdate = (val) => {
        data[val] = { id: getEditId, name: inputData, description: inputDes, completed: check, };
        setData(data);
        setInputData('');
        setInputDes('');
        setIsEdit(false);
    };
    // console.log('data', data);

    // const handleToggleComplete = (val) => {
    //     setCheck(value => !value)
    //     data[val] = { id: val, name: inputData, description: inputDes, completed: !val.check, }
    //     console.log(data)
    // }
    // useEffect(() => {

    // }, [check, data])
    return (
        <div className="todo-app">
            <header>
                <h1>My Todos</h1>
            </header>
            <main>
                <section>
                    <div className="todo">
                        <div className="input__block">
                            <label htmlFor='name' className='sr-only'>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                        </div>
                        <div className="input__block">
                            <label htmlFor='description' className='sr-only'>Description</label>
                            <input
                                type="text"
                                name="description"
                                id="namdescriptione"
                                value={inputDes}
                                onChange={(e) => setInputDes(e.target.value)}
                            />
                        </div>
                        <div className="input__block">
                            {!isEdit ? (
                                <button aria-live="assertive" className='btn btn-add' onClick={() => handleAddData()}>Add Todo</button>) :
                                <button aria-live="assertive" className='btn btn-add' onClick={() => handleUpdate(editItem)}>Update</button>
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div className='todo-list'>
                        <ul>
                            {
                                data?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {/* <span>
                                                <input
                                                    type="checkbox"
                                                    checked={item.completed}
                                                    onChange={() => handleToggleComplete(item.id)}
                                                />
                                            </span> */}
                                            <span>
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                            </span>
                                            <span>
                                                <button className='btn btn-edit' onClick={() => hendleEdit(item.id, index)}>Edit</button>
                                                <button className='btn btn-delete' onClick={() => hendleDelete(item.id)}>Delete</button>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ToDO;