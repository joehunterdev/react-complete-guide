import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../util/http.js";

export default function EventDetails() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["events", { search: id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  // queryKey: ["events",'e2'], // store in cache with key 'events'
  // queryFn:  fetchEvent,
  // staleTime: 1000 * 60 * 5, // 5 minutes
  // gcTime: 1000,

  // const deleteHandler = (event) => {
  //   console.log(event.target.id); //id={id} onClick={deleteHandler}
  // }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title} </h1>
            <nav>
              <button>Delete</button>
              <Link to="/edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}` } alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location} </p>
                <time dateTime={data.time}>
                  {data.date} - {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
