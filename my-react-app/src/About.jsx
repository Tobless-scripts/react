import Header from "./Header";
export default function About() {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}

function Main() {
    return (
        <div className="mainDiv">
            <h1>Hello World!</h1>
        </div>
    );
}
