import "bootstrap/dist/css/bootstrap.css";

const CardRounded = ({children}) => {
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardRounded

