import "./Card.css"

export default function Card({highlighted = false, isRow = false, children}) {

    let classString = "card";
    if(highlighted){classString += " highlighted"}
    if(isRow){classString += " row"}


    return(
        <div className={classString}>
            {children}
        </div>
    )
}