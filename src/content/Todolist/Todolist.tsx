import React, {useState} from 'react';

type ListElement={
    name: string,
    desc: string,
}
const Todolist = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const [list, setList] = useState<ListElement[]>([])

    const AddElement = () =>{
        setList([{
            name:name,
            desc:desc
        }])
    }
    return (
        <div>
        <div>
            <input type="text" placeholder={"name"} value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder={"description"} value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div>
            <button onClick={()=>AddElement()}>С Новым Годым!</button>
        </div>
        </div>
    );
};

export default Todolist;