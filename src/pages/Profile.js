import { useParams } from "react-router-dom";

export default function Profile() {
    const { user, edad } = useParams();
    return (
        <div className="profie">
            <h1>Profile de: {user} de {edad} años</h1>
        </div>
    )
}