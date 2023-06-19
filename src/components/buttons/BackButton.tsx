
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="btn-back">
            <KeyboardBackspaceIcon className='back-icon' />
            Back
        </button>
    )
};

export default BackButton