import "./Chip.css"

export default function Chip({ highlighted = false, row = false, tag = [], children }) {

    let classString = "card";
    if (highlighted) { classString += " highlighted" }
    if (row) { classString += " row" }
 
    let tagsComponent = tag.map((tag) => {
        return <Chip text={tag} />
    })
 
    return (
        <div className={classString}>
            {
                tagsComponent
                    ? <div className="tags-row">
                        Uses: {tagsComponent}
                    </div>
                    : null
            }
        </div>
    )
}