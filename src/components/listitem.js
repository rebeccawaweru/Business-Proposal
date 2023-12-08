import { FiArrowUpRight } from "react-icons/fi";
export default function ListItem(props){
    return  <div className="flex-col">
    <li onClick={props.onClick} className="inline-flex">{props.title}<FiArrowUpRight className="mt-1 mx-1"/></li>
    <hr className={`${props.show === props.display ? 'block' : 'hidden'} border-2 border-yellow-900 h-0  w-12 `}/>
    </div>
}