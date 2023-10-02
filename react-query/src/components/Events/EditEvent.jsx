import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
export default function EditEvent() {

  const navigate = useNavigate();
  const params = useParams();

  // console.log("id" + params.id);

  // const [data, isPending, isError, error] = useQuery({
  //   queryKey: ["events", params.id],
  //   queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  // });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  // console.log(data);

  function handleSubmit(formData) {}

  function handleClose() {
    navigate("../");
  }
  let content;

  if (isPending) {
    content = (
      <div className="center">
        Loading...
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || "Failed to fetch events"}
        />

        <div className="form-actions">
          <Link to="../" className="button-text">
            Ok
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
    )
  }
  console.log(content);
  return <Modal onClose={handleClose}>{content}</Modal>;
}
