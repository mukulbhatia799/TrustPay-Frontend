import logo from '../images/main-logo.png'

export function Navbar() {
    return (
        <div>
            <div className="flex justify-between px-6 py-2 text-lg  font-extrabold items-center sm:text-3xl sm:px-10">
                <div>
                    <img src={logo} alt="trustpay logo" width={300} />
                </div>
                <div className="flex gap-2 items-center font-normal">
                    <div>Hello, User</div>
                    <div className="rounded-full bg-slate-400 w-10 h-10 flex justify-center items-center">U</div>
                </div>
            </div>
            <hr />
        </div>
    )
}