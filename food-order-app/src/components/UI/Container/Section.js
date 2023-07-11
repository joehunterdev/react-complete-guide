import "bootstrap/dist/css/bootstrap.css";
// className="h-100" style={{ backgroundColor:'#eee'}}
const Section = ({ children }) => {
    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>)
}

export default Section;