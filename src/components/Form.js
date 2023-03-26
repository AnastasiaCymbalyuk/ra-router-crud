import React, {useState} from "react";

export default function Form ({onSubmit, onClose}) {
    const [form, setForm] = useState({ content: '' });
    const onFieldChange = (e) => {
        const { target } = e;
        setForm((prev) => ({...prev, [target.name]: target.value}));
    };
    const onSubmitForm = () => { 
        onSubmit(form.content);
        onClose();
    };
 
    return (
        <form className="form_post">
            <textarea className="form_text" name="content" value={form.content} onChange={onFieldChange}/>
            <div>
                <button onClick={onSubmitForm}>опубликовать</button>
                <button onClick={onClose}>&times;</button>
            </div>
        </form>
    );
}