import { Navbar } from "../components/Navbar"
import { Balance } from "../components/Balance"
import { UserSearchAndDisplay } from "../components/UserSearchAndDisplay"
export function Dashboard() {

    return (
        <div className="flex flex-col gap-7">
            <Navbar />
            <Balance />
            <UserSearchAndDisplay />
        </div>
    )
}