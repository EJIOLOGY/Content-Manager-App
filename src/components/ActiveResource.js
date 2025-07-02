import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const intervalRef = useRef(null);

  const deactivateResource = async () => {
    try {
      await axios.patch(`/api/resources/${resource.id}`, {
        ...resource,
        status: "inactive",
      });
      location.reload();
    } catch (err) {
      console.error(err);
      alert("Issue deactivating the resource.");
    }
  };

  useEffect(() => {
    const fetchActiveResource = async () => {
      try {
        const { data } = await axios.get("/api/activeresource");
        if (!data || !data.id) {
          setResource(null);
          setSeconds(null);
          return;
        }
        const timeToFinish = parseInt(data.timeToFinish, 10);
        const elapsedTime = moment().diff(moment(data.activatedAt), "seconds");
        const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;
        setResource(data);
        setSeconds(updatedTimeToFinish >= 0 ? updatedTimeToFinish : 0);
      } catch (error) {
        setResource(null);
        setSeconds(null);
        console.error("Error fetching active resource:", error);
      }
    };

    fetchActiveResource();
  }, []);

  useEffect(() => {
    if (seconds === null || seconds < 0) return;
    if (seconds === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  const completeResource = async () => {
    try {
      await axios.patch(`/api/resources/${resource.id}`, {
        ...resource,
        status: "complete",
      });
      location.reload();
    } catch {
      alert("Issue Completing the resource.");
    }
  };

  if (!resource) {
    return (
      <div className="active-resource">
        <h1 className="resource-name">No Active Resource</h1>
        <Link href="/" className="button">
          Go to resources
        </Link>
      </div>
    );
  }

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        {seconds > 0 ? (
          <h2 className="elapsed-time">{seconds}</h2>
        ) : (
          <h2 className="elapsed-time">
            <button onClick={completeResource} className="button is-success">
              Click and Done
            </button>
          </h2>
        )}
      </div>

      <button onClick={deactivateResource} className="button is-link mr-2">
        Deactivate
      </button>
      <Link
        href={`${resource.link}`}
        className="button mr-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Study Link
      </Link>
      <Link href={`/resources/${resource.id}`} className="button">
        Go to resource
      </Link>
    </div>
  );
};

export default ActiveResource;
