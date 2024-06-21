import {SendMoneyBtn} from './SendMoneyBtn'
export function UserSendMoneyCard({ user }) {
    return (
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center my-5">
            <div className="flex gap-2 justify-center items-center">
                {console.log("user.firstName")}
                <div className="rounded-full flex justify-center items-center w-8 h-8 bg-slate-400 text-lg">{user.firstName[0].toUpperCase()}</div>
                <div className="font-bold rext-xl sm:text-2xl">{user.firstName} {user.lastName}</div>
            </div>
            <SendMoneyBtn user={user} />
        </div>
    )
}