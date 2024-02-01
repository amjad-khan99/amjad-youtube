import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <div className="shadow-2xl p-8 w-48 ">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>subscriptions</li>
            </ul>
            <ul>
                <li>Your channel</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Watch later</li>
            </ul>
        </div>
    )
}

export default Sidebar;