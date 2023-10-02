import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function EditEvent() {

  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  const { mutate } = useMutation({
    mutationFn: updateEvent,
  });

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
    );
  }
  console.log(content);
  return <Modal onClose={handleClose}>{content}</Modal>;
}
