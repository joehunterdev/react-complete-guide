import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import Header from "../Header.jsx";
import Modal from "../UI/Modal.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
// import { Navigate } from "react-router-dom";
export default function EventDetails() {

  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  //fetch
  const { data } = useQuery({
    queryKey: ["events", { search: id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  //delete
  const { mutate,isPending:isPendingDeletion,isError:isErrorDeleting,error:deleteError } = useMutation({
    mutationFn: ({ signal }) => deleteEvent({ signal, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"], exact: true });
      navigate("/events");
    },
  });

  // queryKey: ["events",'e2'], // store in cache with key 'events'
  // queryFn:  fetchEvent,
  // staleTime: 1000 * 60 * 5, // 5 minutes
  // gcTime: 1000,
  const deleteHandler = (event) => {
    mutate({ event: event.target.id });
    console.log(event.target.id); //id={id} onClick={deleteHandler}
  };

  //
  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    mutate({ event: data.id });
  }

  return (
    <>
    {isDeleting && (
    <Modal onClose={handleStopDelete}><h1>Are you sure ?</h1>
      <div className="form-actions">
        {isPendingDeletion && <p>Deleting, please wait...</p>}
        {!isPendingDeletion && (
          <>
          <button onClick={handleStartDelete} className="button-text">Cancel</button>
          <button onClick={deleteHandler} className="button-text">Delete</button>
           </>
       )}
      </div>
    </Modal>)
    }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <section className="content-section" id="event-details-section">
      {data && (
        <article id="event-details">
          <header>
            <nav>
             <h1>{data.title} </h1>
               <button onClick={handleStartDelete}>Delete</button>
              <button to="/edit">Edit</button>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" width="50px" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location} </p>
                <time dateTime={123435} id="event-details-date">
                  {data.date} - {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
          </article>)}
          {isErrorDeleting && (<ErrorBlock title="An error occurred" message={deleteError.info?.message || 'Failed to fetch events'} />
          )}
      </section>
    </>
  );
}
