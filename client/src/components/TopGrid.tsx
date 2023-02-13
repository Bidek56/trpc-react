import { useAppContext, AppContextValue } from "../context/AppContext";

const TopGrid = () => {
    const { setSelectedTime, setSelectedConv, setSelectedProp, setSelectedChannel }: AppContextValue = useAppContext();

    const handleTimeChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(Number(event.target.value));
    };

    const handleConvChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedConv(Number(event.target.value));
    };

    const handlePropsChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProp(event.target.value as string);
    };

    const handleChannelChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChannel(event.target.value as string);
    };

    return (
        <div className="columns tags are-medium">
            <div className="column">
                <div className="column is-two-thirds">
                    <span className="tag is-info">Time</span>
                </div>
                <div className="column">
                    <div className="select is-info is-rounded">
                        <select onChange={handleTimeChange}>
                            <option value="7">Last 7 days</option>
                            <option value="14">Last 14 days</option>
                            <option value="30">Last 30 days</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="column is-two-thirds">
                    <span className="tag is-info">Conversion Window</span>
                </div>
                <div className="column">
                    <div className="select is-info is-rounded">
                        <select onChange={handleConvChange}>
                            <option value="5">5 days</option>
                            <option value="10">10 days</option>
                            <option value="20">30 days</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="column is-two-thirds">
                    <span className="tag is-info">Propositions</span>
                </div>
                <div className="column">
                    <div className="select is-info is-rounded">
                        <select onChange={handlePropsChange}>
                            <option value="All">All</option>
                            <option value="Click">Click</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="column is-two-thirds">
                    <span className="tag is-info">Channels</span>
                </div>
                <div className="column">
                    <div className="select is-info is-rounded">
                        <select onChange={handleChannelChange}>
                            <option value="All">All</option>
                            <option value="Web">Web</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Store">Store</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopGrid;