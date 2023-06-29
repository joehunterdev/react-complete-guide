import "bootstrap/dist/css/bootstrap.css";

const Section = ({ children }) => {

    return (
        <section className="h-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        {children}
                    </div>
                </div>
            </div>
        </section>)
}

export default Section;