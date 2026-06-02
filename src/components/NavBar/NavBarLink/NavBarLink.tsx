export default function NavBarLink(props: {isActive: () => boolean, to: string, label: string, type?: "mobile" | undefined}) {
    return (
        <>
            <a href={props.to} className={props.isActive() ? `nav-link ${props.type ?? ""} active` : `nav-link ${props.type ?? ""}`}>
                {props.label}
                {<div className={`active-line ${props.isActive() ? "active" : ""}`}></div>}
            </a>
        </>
    );
}