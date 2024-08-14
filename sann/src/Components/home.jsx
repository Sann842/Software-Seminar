import css from "./Home.module.css";

const Home =() => {
    return (
    <div>
        <header className="header">
        <h1>This is the header.</h1>
        </header>
        <div className="body">
        <h2 className={css.title}>This is the body.</h2>
        <p className={css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio eaque necessitatibus cum ipsam, quas accusamus deleniti asperiores natus deserunt!</p>
        <button className="btn">Click me</button>
        </div>
    </div>
    )
};

export default Home;