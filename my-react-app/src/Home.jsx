import Header from "./Header";
export default function Home() {
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
            <h1>This is the home page</h1>
        </div>
    );
}
