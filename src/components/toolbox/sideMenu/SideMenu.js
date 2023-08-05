import "./SideMenu.css";
import { useDispatch } from 'react-redux';
export function SideMenu({header, rowsArr}){
    // rowARr is an array of [row-content, icon image for the row content, reducer matched to that row]
    const dispatch = useDispatch();
    return (
        <div className="side-menu-cotainer">
            <div className="header">{header}</div>
            {
                rowsArr.map((row) => (
                <div className="side-menu-row">
                    {row[1] && <img src={row[1]} alt={row[0] + " icon"} className="icon"/>}
                    <button onClick={() => (dispatch(row[2]()))}>{row[0]}</button>
                </div>)
                )
            }
        </div>);
}