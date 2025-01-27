import Header from "./Header";
export default function Blog() {
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
            <h1>Blog page</h1>
        </div>
    );
}
