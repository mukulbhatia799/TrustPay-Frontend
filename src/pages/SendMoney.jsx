import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SendMoney = () => {
    const [queryparm] = useSearchParams();
    const receiverName = queryparm.get("name").split('-');
    const navigate = useNavigate();
    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <button onClick={() => {
                    navigate("/dashboard");
                }}>{<IoIosArrowRoundBack size={30} />}</button>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-center">Send Money To</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{receiverName[0][0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{receiverName[0]} {receiverName[1]}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-cyan-500 hover:opacity-70 text-white">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}