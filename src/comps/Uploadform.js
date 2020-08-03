import React from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image file of png or jped');
        }
        }

    }

    return (
        <form>
        <input type="file" onChange={changeHandler} />
        <div className="oputput">
        { error && <div className="error">{ error }</div> }
        </div>
        </form>
    )
}

export default UploadForm;