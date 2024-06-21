import { useNavigate } from 'react-router-dom'

export function SendMoneyBtn({ user }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            navigate("/sendmoney?id=" + user._id + "&name=" + user.firstName + "-" + user.lastName);
        }} className="rounded-lg bg-black font-semibold text-white px-4 py-2 text-sm">Send Money</button>
    )
}