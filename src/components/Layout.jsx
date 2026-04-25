export default function Layout(props){

    const { children } = props
    
    const header = (
        <header>
            <h1 className = "text-gradient">The FlexFit</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by  Pratheeksha Kajagar
            <br/>Styled with FantaCSS
            </p>
        </footer>
    )


    return(
        <>
        {header}
        {children}
        {footer}
        </>
    )
}